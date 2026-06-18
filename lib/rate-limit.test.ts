import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { inMemoryRateLimit } from "./rate-limit";

describe("inMemoryRateLimit", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("allows requests up to the limit, then blocks", () => {
    const ip = "1.2.3.4";
    // Happy path: first `limit` requests are allowed.
    expect(inMemoryRateLimit(ip, 3, 60_000)).toBe(false);
    expect(inMemoryRateLimit(ip, 3, 60_000)).toBe(false);
    expect(inMemoryRateLimit(ip, 3, 60_000)).toBe(false);
    // Edge case: the next request within the window is blocked.
    expect(inMemoryRateLimit(ip, 3, 60_000)).toBe(true);
  });

  it("resets after the window elapses", () => {
    const ip = "5.6.7.8";
    expect(inMemoryRateLimit(ip, 1, 1_000)).toBe(false);
    expect(inMemoryRateLimit(ip, 1, 1_000)).toBe(true);

    vi.advanceTimersByTime(1_001);

    expect(inMemoryRateLimit(ip, 1, 1_000)).toBe(false);
  });

  it("tracks limits per IP independently", () => {
    expect(inMemoryRateLimit("10.0.0.1", 1, 60_000)).toBe(false);
    expect(inMemoryRateLimit("10.0.0.1", 1, 60_000)).toBe(true);
    // A different IP is unaffected.
    expect(inMemoryRateLimit("10.0.0.2", 1, 60_000)).toBe(false);
  });
});
