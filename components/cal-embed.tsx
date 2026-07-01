"use client";

/**
 * Lightweight Cal.com booking embed.
 *
 * Renders the booking page in a responsive iframe so no third-party script is
 * required. `link` accepts either a full URL (https://cal.com/…) or a bare
 * Cal.com handle/event slug (e.g. "webgrafy/discovery"), which is resolved
 * against cal.com. The value comes from `NEXT_PUBLIC_CALCOM_LINK`.
 */
export function CalEmbed({ link, title }: { link: string; title: string }) {
  const src = /^https?:\/\//i.test(link)
    ? link
    : `https://cal.com/${link.replace(/^\/+/, "")}`;
  const url = new URL(src);
  url.searchParams.set("embed", "true");

  return (
    <iframe
      src={url.toString()}
      title={title}
      loading="lazy"
      className="h-[70vh] min-h-[640px] w-full rounded-[1.6rem] border border-stroke bg-white"
    />
  );
}
