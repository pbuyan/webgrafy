/**
 * Client-side error reporter. Sends a compact payload to `/api/log-error`,
 * which logs it server-side and optionally forwards it to `ERROR_WEBHOOK_URL`.
 *
 * Uses `keepalive` so the request still completes if the error triggers a
 * navigation or unmount. Failures are swallowed — reporting must never surface
 * a second error to the user.
 */
export function reportClientError(
  error: Error & { digest?: string },
  source: "client-boundary" | "global-error",
): void {
  try {
    const body = JSON.stringify({
      source,
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      url: typeof window !== "undefined" ? window.location.href : undefined,
    });

    void fetch("/api/log-error", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Never let reporting throw.
  }
}
