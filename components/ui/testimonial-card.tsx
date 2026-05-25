import Image from "next/image";

import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
};

function testimonialInitials(name: string) {
  return name
    .replace(/^Dr\.\s+/i, "")
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonialInitials(testimonial.name);

  return (
    <article className="rounded-[1.6rem] border border-stroke-warm bg-surface-warm p-6">
      <p className="text-lg leading-8 text-ink-rich">
        {"\u201C"}
        {testimonial.quote}
        {"\u201D"}
      </p>
      <div className="mt-6 flex items-center gap-3">
        {testimonial.avatar ? (
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
              "bg-surface-muted text-sm font-medium tracking-wide text-ink-faint",
            )}
          >
            {initials}
          </span>
        )}
        <div>
          <p className="font-medium text-ink-strong">{testimonial.name}</p>
          <p className="text-sm text-ink-faint">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
