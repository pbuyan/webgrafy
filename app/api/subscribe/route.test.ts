import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { mockSend, mockCreate, mockIsRateLimited } = vi.hoisted(() => ({
  mockSend: vi.fn(),
  mockCreate: vi.fn(),
  mockIsRateLimited: vi.fn(),
}));

vi.mock("resend", () => ({
  Resend: class MockResend {
    emails = { send: mockSend };
    contacts = { create: mockCreate };
  },
}));

vi.mock("@/lib/rate-limit", () => ({
  isRateLimited: mockIsRateLimited,
}));

import { POST } from "./route";

const validBody = { email: "jane@example.com", locale: "en" };

function postSubscribe(body: unknown, ip = "127.0.0.1") {
  return POST(
    new Request("http://localhost/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": ip,
      },
      body: JSON.stringify(body),
    })
  );
}

describe("POST /api/subscribe", () => {
  const originalApiKey = process.env.RESEND_API_KEY;
  const originalAudience = process.env.RESEND_AUDIENCE_ID;
  const originalSegment = process.env.RESEND_SEGMENT_ID;

  beforeEach(() => {
    mockSend.mockReset();
    mockCreate.mockReset();
    mockIsRateLimited.mockReset();
    mockIsRateLimited.mockResolvedValue(false);
    mockSend.mockResolvedValue({ data: { id: "email_123" }, error: null });
    mockCreate.mockResolvedValue({ data: { id: "contact_1" }, error: null });
    process.env.RESEND_API_KEY = "re_test_key";
    delete process.env.RESEND_AUDIENCE_ID;
    delete process.env.RESEND_SEGMENT_ID;
  });

  afterEach(() => {
    if (originalApiKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = originalApiKey;
    if (originalAudience === undefined) delete process.env.RESEND_AUDIENCE_ID;
    else process.env.RESEND_AUDIENCE_ID = originalAudience;
    if (originalSegment === undefined) delete process.env.RESEND_SEGMENT_ID;
    else process.env.RESEND_SEGMENT_ID = originalSegment;
  });

  it("returns 429 when rate limited", async () => {
    mockIsRateLimited.mockResolvedValue(true);

    const response = await postSubscribe(validBody);
    const result = await response.json();

    expect(response.status).toBe(429);
    expect(result.error).toMatch(/too many requests/i);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("returns success without sending when honeypot is filled", async () => {
    const response = await postSubscribe({ ...validBody, website: "https://spam.test" });
    const result = await response.json();

    expect(response.status).toBe(200);
    expect(result.success).toBe(true);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("validates email format", async () => {
    const response = await postSubscribe({ ...validBody, email: "not-an-email" });
    const result = await response.json();

    expect(response.status).toBe(400);
    expect(result.error).toMatch(/valid email/i);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("returns 503 when RESEND_API_KEY is missing", async () => {
    delete process.env.RESEND_API_KEY;

    const response = await postSubscribe(validBody);

    expect(response.status).toBe(503);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("sends the welcome checklist email and returns success", async () => {
    const response = await postSubscribe(validBody);
    const result = await response.json();

    expect(response.status).toBe(200);
    expect(result.success).toBe(true);
    // Welcome email to subscriber + notification to the studio.
    expect(mockSend).toHaveBeenCalledTimes(2);
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        to: ["jane@example.com"],
        subject: expect.stringMatching(/checklist/i),
      })
    );
  });

  it("adds the subscriber to a segment when RESEND_SEGMENT_ID is set", async () => {
    process.env.RESEND_SEGMENT_ID = "seg_123";

    await postSubscribe(validBody);

    expect(mockCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        email: "jane@example.com",
        segments: [{ id: "seg_123" }],
      })
    );
  });

  it("falls back to the legacy audienceId when only RESEND_AUDIENCE_ID is set", async () => {
    process.env.RESEND_AUDIENCE_ID = "aud_123";

    await postSubscribe(validBody);

    expect(mockCreate).toHaveBeenCalledWith(
      expect.objectContaining({ email: "jane@example.com", audienceId: "aud_123" })
    );
    expect(mockCreate).not.toHaveBeenCalledWith(
      expect.objectContaining({ segments: expect.anything() })
    );
  });

  it("prefers the segment over the legacy audience when both are set", async () => {
    process.env.RESEND_SEGMENT_ID = "seg_123";
    process.env.RESEND_AUDIENCE_ID = "aud_123";

    await postSubscribe(validBody);

    expect(mockCreate).toHaveBeenCalledWith(
      expect.objectContaining({ segments: [{ id: "seg_123" }] })
    );
    expect(mockCreate).not.toHaveBeenCalledWith(
      expect.objectContaining({ audienceId: expect.anything() })
    );
  });

  it("returns 500 when the welcome email fails", async () => {
    mockSend.mockResolvedValueOnce({
      data: null,
      error: { message: "Domain not verified", name: "validation_error" },
    });

    const response = await postSubscribe(validBody);
    const result = await response.json();

    expect(response.status).toBe(500);
    expect(result.error).toMatch(/something went wrong/i);
  });
});
