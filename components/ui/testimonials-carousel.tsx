"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Button } from "@/components/ui/button";
import { chunkTestimonials } from "@/lib/testimonials";
import type { TestimonialItem } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

const LG_MEDIA = "(min-width: 1024px)";

type TestimonialsCarouselLabels = {
  prev: string;
  next: string;
  dotLabel: string;
};

type TestimonialsCarouselProps = {
  testimonials: TestimonialItem[];
  regionLabel: string;
  labels: TestimonialsCarouselLabels;
};

export function TestimonialsCarousel({
  testimonials,
  regionLabel,
  labels,
}: TestimonialsCarouselProps) {
  const regionRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia(LG_MEDIA);
    const update = () => setVisibleCount(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const pages = useMemo(
    () => chunkTestimonials(testimonials, visibleCount),
    [testimonials, visibleCount],
  );

  const pageCount = pages.length;
  const maxPage = Math.max(0, pageCount - 1);
  const activePage = Math.min(page, maxPage);

  const goTo = useCallback(
    (index: number) => {
      setPage(Math.max(0, Math.min(index, maxPage)));
    },
    [maxPage],
  );

  const goPrev = useCallback(() => goTo(activePage - 1), [goTo, activePage]);
  const goNext = useCallback(() => goTo(activePage + 1), [goTo, activePage]);

  useEffect(() => {
    const node = regionRef.current;
    if (!node) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };

    node.addEventListener("keydown", onKeyDown);
    return () => node.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext]);

  if (testimonials.length === 0) return null;

  return (
    <div className="mt-10 lg:px-10">
      <div
        ref={regionRef}
        tabIndex={0}
        className="relative outline-none focus-visible:ring-2 focus-visible:ring-ink/15 focus-visible:ring-offset-4"
        role="region"
        aria-roledescription="carousel"
        aria-label={regionLabel}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${activePage * 100}%)` }}
          >
            {pages.map((pageItems, pageIndex) => (
              <div
                key={pageIndex}
                className="grid w-full shrink-0 grid-cols-1 gap-6 lg:grid-cols-3"
                role="group"
                aria-roledescription="slide"
                aria-label={`${pageIndex + 1} / ${pageCount}`}
              >
                {pageItems.map((testimonial) => (
                  <TestimonialCard
                    key={`${testimonial.name}-${testimonial.role}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {pageCount > 1 ? (
          <>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="absolute top-1/2 left-0 z-10 -translate-x-1/2 -translate-y-1/2 max-lg:hidden"
              onClick={goPrev}
              disabled={activePage === 0}
              aria-label={labels.prev}
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="absolute top-1/2 right-0 z-10 translate-x-1/2 -translate-y-1/2 max-lg:hidden"
              onClick={goNext}
              disabled={activePage === maxPage}
              aria-label={labels.next}
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Button>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="flex gap-2 lg:hidden">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={goPrev}
                  disabled={activePage === 0}
                  aria-label={labels.prev}
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={goNext}
                  disabled={activePage === maxPage}
                  aria-label={labels.next}
                >
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>

              <div className="flex items-center gap-2" role="tablist" aria-label={regionLabel}>
                {pages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-selected={activePage === index}
                    aria-label={labels.dotLabel.replace("{n}", String(index + 1))}
                    className={cn(
                      "h-2.5 w-2.5 rounded-full transition-colors",
                      activePage === index ? "bg-ink" : "bg-ink/20 hover:bg-ink/35",
                    )}
                    onClick={() => goTo(index)}
                  />
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
