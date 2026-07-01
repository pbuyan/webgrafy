"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { parseCalLink } from "@/lib/cal";

/**
 * Cal.com inline booking embed.
 *
 * Uses Cal.com's official embed (embed.js handshake) rather than a bare
 * <iframe> — Cal.com's booking pages send `X-Frame-Options` /
 * `frame-ancestors` headers that block plain iframe embedding on third-party
 * domains, so the supported embed flow is required.
 *
 * `link` accepts either a full URL (https://cal.com/webgrafy/discovery) or a
 * bare handle/slug (webgrafy/discovery); the value comes from
 * `NEXT_PUBLIC_CALCOM_LINK`. A full URL also lets self-hosted Cal instances set
 * the correct origin.
 */
const NAMESPACE = "book";

export function CalEmbed({ link }: { link: string }) {
  const { calLink, calOrigin } = parseCalLink(link);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={calLink}
      {...(calOrigin ? { calOrigin } : {})}
      config={{ layout: "month_view" }}
      className="w-full overflow-hidden rounded-[1.6rem] border border-stroke bg-white"
      style={{ width: "100%", minHeight: "700px" }}
    />
  );
}
