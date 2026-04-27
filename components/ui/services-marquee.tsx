import type { MarqueeLabel } from "@/lib/i18n/types";

function Dot() {
  return (
    <span
      aria-hidden
      className="inline-block h-1.5 w-1.5 rounded-full bg-brand"
    />
  );
}

function MarqueeItemLabel({ item }: { item: MarqueeLabel }) {
  if (!item.em) {
    return <>{item.before ?? ""}{item.after ?? ""}</>;
  }
  return (
    <>
      {item.before}
      <em className="italic font-medium text-ink-strong [font-family:var(--font-display)]">
        {item.em}
      </em>
      {item.after}
    </>
  );
}

/**
 * Edge-to-edge, infinitely-looping right-to-left slider.
 *
 * The decorative track lists service categories in the studio's editorial
 * voice (sans body type mixed with italic display type). The component is
 * presentational and uses `aria-hidden` since duplicating items in the DOM
 * would otherwise confuse assistive tech.
 */
export function ServicesMarquee({ items }: { items: MarqueeLabel[] }) {
  const sequence = [
    ...items.map((item) => ({ ...item, copy: 0 })),
    ...items.map((item) => ({ ...item, copy: 1 })),
  ];

  return (
    <div
      className="marquee border-y border-stroke/70 bg-surface-pale py-7"
      aria-hidden="true"
      role="presentation"
    >
      <div className="marquee-track text-3xl tracking-[-0.02em] text-ink-mid sm:text-4xl">
        {sequence.map((entry, index) => (
          <span key={`${entry.copy}-${entry.id}-${index}`} className="marquee-item-wrap">
            <span className="marquee-item">
              <MarqueeItemLabel item={entry} />
            </span>
            <span className="marquee-divider">
              <Dot />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
