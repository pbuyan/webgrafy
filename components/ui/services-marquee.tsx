import type { ReactNode } from "react";
type MarqueeEntry = { id: string; node: ReactNode };

const defaultItems: MarqueeEntry[] = [
  {
    id: "logos",
    node: (
      <>
        Logos{" "}
        <em className="italic font-medium text-ink-strong [font-family:var(--font-display)]">
          &amp; marks
        </em>
      </>
    ),
  },
  { id: "brand-systems", node: <>Brand systems</> },
  {
    id: "packaging",
    node: (
      <em className="italic font-medium text-ink-strong [font-family:var(--font-display)]">
        Packaging
      </em>
    ),
  },
  { id: "websites", node: <>Websites</> },
  {
    id: "editorial",
    node: (
      <>
        <em className="italic font-medium text-ink-strong [font-family:var(--font-display)]">
          Editorial
        </em>{" "}
        print
      </>
    ),
  },
  { id: "signage", node: <>Signage</> },
  { id: "book-covers", node: <>Book covers</> },
];

function Dot() {
  return (
    <span
      aria-hidden
      className="inline-block h-1.5 w-1.5 rounded-full bg-brand"
    />
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
export function ServicesMarquee() {
  // Keep the items static and duplicate once for seamless infinite looping.
  const sequence: Array<MarqueeEntry & { copy: number }> = [
    ...defaultItems.map((item) => ({ ...item, copy: 0 })),
    ...defaultItems.map((item) => ({ ...item, copy: 1 })),
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
            <span className="marquee-item">{entry.node}</span>
            <span className="marquee-divider">
              <Dot />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
