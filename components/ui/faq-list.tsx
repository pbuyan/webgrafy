import type { FaqItem } from "@/lib/i18n/types";

export function FaqList({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="divide-y divide-stroke border-y border-stroke">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium text-ink-strong">
            <span>{faq.question}</span>
            <span
              aria-hidden
              className="mt-1 text-2xl leading-none text-ink-soft transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-4 max-w-2xl space-y-4">
            {faq.answer.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-ink-base">
                {paragraph}
              </p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
