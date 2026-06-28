import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { reportError } from "./report-error";

describe("reportError", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    delete process.env.ERROR_WEBHOOK_URL;
  });

  it("logs a structured JSON line for an Error (happy path)", async () => {
    await reportError(new Error("boom"), { source: "contact-api" });

    expect(console.error).toHaveBeenCalledTimes(1);
    const logged = (console.error as unknown as { mock: { calls: string[][] } }).mock
      .calls[0][0];
    const parsed = JSON.parse(logged);
    expect(parsed).toMatchObject({
      level: "error",
      source: "contact-api",
      message: "boom",
    });
    expect(parsed.stack).toContain("boom");
    expect(typeof parsed.timestamp).toBe("string");
  });

  it("normalizes non-Error values", async () => {
    await reportError("string failure", { source: "global-error" });
    const parsed = JSON.parse(
      (console.error as unknown as { mock: { calls: string[][] } }).mock.calls[0][0],
    );
    expect(parsed.message).toBe("string failure");
  });

  it("does not call the webhook when ERROR_WEBHOOK_URL is unset", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    await reportError(new Error("no webhook"), { source: "client-boundary" });

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("posts to the webhook when ERROR_WEBHOOK_URL is set", async () => {
    process.env.ERROR_WEBHOOK_URL = "https://hooks.example.com/abc";
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);

    await reportError(new Error("alert me"), {
      source: "contact-api",
      digest: "d1",
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://hooks.example.com/abc");
    const sent = JSON.parse((init as RequestInit).body as string);
    expect(sent.message).toBe("alert me");
    expect(sent.digest).toBe("d1");
    expect(sent.text).toContain("alert me");
  });

  it("swallows webhook failures (never throws)", async () => {
    process.env.ERROR_WEBHOOK_URL = "https://hooks.example.com/abc";
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("network down")),
    );

    await expect(
      reportError(new Error("still ok"), { source: "log-error-api" }),
    ).resolves.toBeUndefined();

    // One line for the original error, one for the webhook-delivery failure.
    expect(console.error).toHaveBeenCalledTimes(2);
  });
});
