import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

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

function postContact(body: unknown, ip = "127.0.0.1") {
  return POST(
    new Request("http://localhost/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": ip,
      },
      body: JSON.stringify(body),
    })
  );
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
        from: "Webgrafy Contact <noreply@webgrafy.com>",
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
});
