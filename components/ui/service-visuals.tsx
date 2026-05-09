"use client";

import { XIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";

type VisualLabel = { name: string; caption: string };

const VISUAL_ASSETS = [
  {
    src: "/images/portfolio/gemini/logos-marks.png",
    alt: "Logos, wordmarks, and brand marks",
  },
  {
    src: "/images/portfolio/gemini/stationary-branding.png",
    alt: "Stationery and branded print materials",
  },
  {
    src: "/images/portfolio/gemini/websites.png",
    alt: "Website layouts and digital experience design",
  },
  {
    src: "/images/portfolio/gemini/packaging-labels.png",
    alt: "Packaging design and product labels",
  },
  {
    src: "/images/portfolio/gemini/editorial-print.png",
    alt: "Editorial layout and print design",
  },
  {
    src: "/images/portfolio/gemini/social-digital.png",
    alt: "Social media and digital campaign assets",
  },
] as const;

const thumbnailSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
const lightboxSizes = "(max-width: 1280px) 92vw, 1120px";

export function ServiceVisuals({
  eyebrow,
  title,
  text,
  labels,
}: {
  eyebrow: string;
  title: string;
  text: string;
  labels: VisualLabel[];
}) {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const visualsLength = VISUAL_ASSETS.length;

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const handleDialogClose = useCallback(() => {
    setActiveCardIndex(null);
  }, []);

  useEffect(() => {
    if (activeCardIndex === null) return;

    let cancelled = false;
    requestAnimationFrame(() => {
      if (cancelled) return;
      const el = dialogRef.current;
      if (el && !el.open) {
        el.showModal();
      }
    });

    return () => {
      cancelled = true;
    };
  }, [activeCardIndex]);

  const activeAsset =
    activeCardIndex !== null ? VISUAL_ASSETS[activeCardIndex % visualsLength] : null;

  const tints = ["bg-tint-1", "bg-tint-2", "bg-tint-3", "bg-tint-2", "bg-tint-1", "bg-tint-3"];

  return (
    <section className="border-b border-stroke bg-white py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-ink-strong sm:text-5xl [font-family:var(--font-display)]">
              {title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink-base">{text}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {labels.map((label, index) => {
            const asset = VISUAL_ASSETS[index % visualsLength];
            const bg = tints[index % tints.length];
            return (
              <article
                key={label.name}
                className="overflow-hidden rounded-[1.6rem] border border-stroke bg-white shadow-[0_16px_40px_rgba(0,0,0,0.05)]"
              >
                <div className={`p-4 ${bg}`}>
                  <button
                    type="button"
                    className={cn(
                      "group/thumb relative flex h-[210px] w-full cursor-zoom-in overflow-hidden rounded-[1.2rem] border border-stroke bg-white/70 transition-shadow",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                      "hover:shadow-md motion-safe:transition-shadow"
                    )}
                    onClick={() => setActiveCardIndex(index)}
                    aria-haspopup="dialog"
                    aria-expanded={activeCardIndex === index}
                    aria-label={`Open full size preview: ${label.name}`}
                  >
                    <Image
                      src={asset.src}
                      alt=""
                      fill
                      role="presentation"
                      className="object-cover motion-safe:transition-transform motion-safe:duration-300 group-hover/thumb:scale-[1.02]"
                      sizes={thumbnailSizes}
                      loading="lazy"
                    />
                  </button>
                </div>
                <div className="p-6">
                  <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                    {label.name}
                  </div>
                  <p className="text-sm leading-7 text-ink-base">{label.caption}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>

      <dialog
        ref={dialogRef}
        className={cn(
          "fixed inset-0 isolate z-100 m-0 max-h-none max-w-none border-0 bg-transparent p-0",
          "backdrop:bg-[color-mix(in_oklab,var(--color-ink-strong)_82%,transparent)]",
          "backdrop:backdrop-blur-[2px]",
          "open:flex open:max-h-dvh open:w-full open:max-w-screen open:overscroll-contain open:flex-col"
        )}
        onClose={handleDialogClose}
        aria-labelledby={activeAsset ? titleId : undefined}
      >
        {activeAsset ? (
          <div
            className="flex min-h-dvh flex-1 items-center justify-center p-4 sm:p-8"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                closeDialog();
              }
            }}
          >
            <div className="relative max-h-[min(85dvh,calc(100dvh-5rem))] w-full max-w-[min(1120px,calc(100vw-2rem))]" onMouseDown={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={closeDialog}
                className={cn(
                  "absolute top-3 right-3 z-1 rounded-full bg-surface-muted/95 p-2.5 shadow-md",
                  "text-ink-strong ring-stroke hover:bg-white hover:opacity-95",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                )}
                aria-label="Close enlarged image"
              >
                <XIcon className="h-5 w-5 shrink-0" aria-hidden />
              </button>
              <p id={titleId} className="sr-only">
                {activeAsset.alt}
              </p>
              <figure className="overflow-hidden rounded-2xl border border-stroke bg-surface-muted shadow-xl">
                <Image
                  src={activeAsset.src}
                  alt={activeAsset.alt}
                  width={1920}
                  height={1440}
                  className="max-h-[min(82dvh,calc(100dvh-5rem))] w-full object-contain"
                  sizes={lightboxSizes}
                  priority
                />
              </figure>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
