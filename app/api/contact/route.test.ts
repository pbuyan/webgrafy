// @vitest-environment node
//
// The global environment is jsdom, but this file builds `Request` objects with a
// `FormData` body. jsdom's FormData fails undici's internal brand check, which
// silently stringifies the body to "[object FormData]" instead of erroring — so
// this route's tests run under node, where both come from the same realm.
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MAX_ATTACHMENT_BYTES } from "@/lib/contact-attachment";

const { mockSend, mockIsRateLimited } = vi.hoisted(() => ({
  mockSend: vi.fn(),
  mockIsRateLimited: vi.fn(),
}));

vi.mock("resend", () => ({
  Resend: class MockResend {
    emails = { send: mockSend };
  },
}));

vi.mock("@/lib/rate-limit", () => ({
  isRateLimited: mockIsRateLimited,
}));

import { POST } from "./route";

const validBody = {
  name: "Jane Doe",
  email: "jane@example.com",
  service: "Brand identity",
  message: "We need a new logo and website.",
  locale: "en",
};

function postContact(
  fields: Record<string, string> = {},
  options: { file?: File; ip?: string } = {}
) {
  const form = new FormData();
  for (const [key, value] of Object.entries(fields)) form.append(key, value);
  if (options.file) form.append("file", options.file);

  return POST(
    new Request("http://localhost/api/contact", {
      method: "POST",
      // No Content-Type — Request derives `multipart/form-data; boundary=…`
      // from the FormData body, exactly as a browser does.
      headers: { "x-forwarded-for": options.ip ?? "127.0.0.1" },
      body: form,
    })
  );
}

// File signatures. Padded to `size` so the sniffer sees a full 12-byte window.
const PNG_BYTES = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const PDF_BYTES = [0x25, 0x50, 0x44, 0x46, 0x2d]; // "%PDF-"
const WEBP_BYTES = [0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, 0x57, 0x45, 0x42, 0x50];
const ZIP_BYTES = [0x50, 0x4b, 0x03, 0x04]; // "PK\x03\x04"

function fileWith(prefix: number[], name: string, type: string, size = 64) {
  const bytes = new Uint8Array(Math.max(size, prefix.length));
  bytes.set(prefix);
  return { file: new File([bytes], name, { type }), bytes };
}

/** The `attachments` array passed to Resend on the most recent send. */
function sentAttachments() {
  return mockSend.mock.calls[0][0].attachments;
}

describe("POST /api/contact", () => {
  const originalApiKey = process.env.RESEND_API_KEY;

  beforeEach(() => {
    mockSend.mockReset();
    mockIsRateLimited.mockReset();
    mockIsRateLimited.mockResolvedValue(false);
    process.env.RESEND_API_KEY = "re_test_key";
  });

  afterEach(() => {
    if (originalApiKey === undefined) {
      delete process.env.RESEND_API_KEY;
    } else {
      process.env.RESEND_API_KEY = originalApiKey;
    }
  });

  it("returns 429 when rate limited", async () => {
    mockIsRateLimited.mockResolvedValue(true);

    const response = await postContact(validBody);
    const result = await response.json();

    expect(response.status).toBe(429);
    expect(result.error).toMatch(/too many requests/i);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("returns success without sending when honeypot is filled", async () => {
    const response = await postContact({ ...validBody, website: "https://spam.test" });
    const result = await response.json();

    expect(response.status).toBe(200);
    expect(result.success).toBe(true);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("validates required fields", async () => {
    const response = await postContact({ ...validBody, name: "J" });
    const result = await response.json();

    expect(response.status).toBe(400);
    expect(result.error).toMatch(/name/i);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("validates email format", async () => {
    const response = await postContact({ ...validBody, email: "not-an-email" });
    const result = await response.json();

    expect(response.status).toBe(400);
    expect(result.error).toMatch(/valid email/i);
  });

  it("validates message length", async () => {
    const response = await postContact({ ...validBody, message: "short" });
    const result = await response.json();

    expect(response.status).toBe(400);
    expect(result.error).toMatch(/description/i);
  });

  it("returns 503 when RESEND_API_KEY is missing", async () => {
    delete process.env.RESEND_API_KEY;

    const response = await postContact(validBody);
    const result = await response.json();

    expect(response.status).toBe(503);
    expect(result.error).toMatch(/something went wrong/i);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("sends email and returns success on valid submission", async () => {
    mockSend.mockResolvedValue({ data: { id: "email_123" }, error: null });

    const response = await postContact(validBody);
    const result = await response.json();

    expect(response.status).toBe(200);
    expect(result.success).toBe(true);
    expect(mockSend).toHaveBeenCalledOnce();
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        from: "Webgrafy Contact <noreply@contact.webgrafy.com>",
        to: ["info@webgrafy.com"],
        replyTo: "jane@example.com",
        html: expect.stringContaining("Locale:</strong> en"),
      })
    );
  });

  it("returns 500 when Resend reports an error", async () => {
    mockSend.mockResolvedValue({
      data: null,
      error: { message: "Domain not verified", name: "validation_error" },
    });

    const response = await postContact(validBody);
    const result = await response.json();

    expect(response.status).toBe(500);
    expect(result.error).toMatch(/something went wrong/i);
  });

  describe("attachment", () => {
    beforeEach(() => {
      mockSend.mockResolvedValue({ data: { id: "email_123" }, error: null });
    });

    it("omits the attachments key entirely when no file is sent", async () => {
      const response = await postContact(validBody);

      expect(response.status).toBe(200);
      expect(sentAttachments()).toBeUndefined();
    });

    it("forwards a valid PNG to Resend with intact base64 content", async () => {
      const { file, bytes } = fileWith(PNG_BYTES, "screenshot.png", "image/png");

      const response = await postContact(validBody, { file });

      expect(response.status).toBe(200);
      expect(sentAttachments()).toHaveLength(1);
      expect(sentAttachments()[0]).toMatchObject({
        filename: "screenshot.png",
        contentType: "image/png",
      });
      // Round-trip the payload: a hardcoded base64 literal would still pass if
      // the bytes were mangled before encoding.
      expect(Buffer.from(sentAttachments()[0].content, "base64")).toEqual(Buffer.from(bytes));
    });

    it("forwards a valid PDF", async () => {
      const { file } = fileWith(PDF_BYTES, "brief.pdf", "application/pdf");

      const response = await postContact(validBody, { file });

      expect(response.status).toBe(200);
      expect(sentAttachments()[0]).toMatchObject({
        filename: "brief.pdf",
        contentType: "application/pdf",
      });
    });

    it("forwards a valid WebP", async () => {
      const { file } = fileWith(WEBP_BYTES, "mockup.webp", "image/webp");

      const response = await postContact(validBody, { file });

      expect(response.status).toBe(200);
      expect(sentAttachments()[0]).toMatchObject({ contentType: "image/webp" });
    });

    it("rejects a file over the size limit", async () => {
      const { file } = fileWith(
        PNG_BYTES,
        "huge.png",
        "image/png",
        MAX_ATTACHMENT_BYTES + 1
      );

      const response = await postContact(validBody, { file });
      const result = await response.json();

      expect(response.status).toBe(400);
      expect(result.error).toMatch(/4 MB limit/i);
      expect(mockSend).not.toHaveBeenCalled();
    });

    it("rejects a disallowed file type", async () => {
      const file = new File(["hello there"], "notes.txt", { type: "text/plain" });

      const response = await postContact(validBody, { file });
      const result = await response.json();

      expect(response.status).toBe(400);
      expect(result.error).toMatch(/accepted formats/i);
      expect(mockSend).not.toHaveBeenCalled();
    });

    it("rejects a spoofed MIME type whose bytes do not match", async () => {
      // A ZIP renamed to .png and declared as image/png — the allowlist alone
      // would wave this through; only the signature check catches it.
      const { file } = fileWith(ZIP_BYTES, "evil.png", "image/png");

      const response = await postContact(validBody, { file });
      const result = await response.json();

      expect(response.status).toBe(400);
      expect(result.error).toMatch(/accepted formats/i);
      expect(mockSend).not.toHaveBeenCalled();
    });

    it("rejects real image bytes carrying a mismatched extension", async () => {
      const { file } = fileWith(PNG_BYTES, "invoice.pdf", "application/pdf");

      const response = await postContact(validBody, { file });

      expect(response.status).toBe(400);
      expect(mockSend).not.toHaveBeenCalled();
    });

    it("treats a zero-byte file entry as no attachment", async () => {
      const file = new File([], "", { type: "" });

      const response = await postContact(validBody, { file });

      expect(response.status).toBe(200);
      expect(sentAttachments()).toBeUndefined();
    });

    it("strips path separators and unsafe characters from the filename", async () => {
      const { file } = fileWith(PNG_BYTES, "../../etc/pa sswd.png", "image/png");

      const response = await postContact(validBody, { file });

      expect(response.status).toBe(200);
      const { filename } = sentAttachments()[0];
      expect(filename).not.toContain("/");
      expect(filename).toMatch(/\.png$/);
    });

    it("does not read the attachment when the honeypot is filled", async () => {
      const { file } = fileWith(PNG_BYTES, "spam.png", "image/png");

      const response = await postContact(
        { ...validBody, website: "https://spam.test" },
        { file }
      );

      expect(response.status).toBe(200);
      expect(mockSend).not.toHaveBeenCalled();
    });
  });
});
