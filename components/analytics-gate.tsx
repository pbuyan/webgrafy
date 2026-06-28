"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useConsent } from "@/lib/consent";

/**
 * Loads Vercel Analytics and Speed Insights only after the visitor has
 * explicitly accepted cookies. Renders nothing during SSR and for visitors
 * who have declined or not yet chosen, so no tracking runs without consent.
 */
export function AnalyticsGate() {
  const consent = useConsent();

  if (consent !== "accepted") return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
