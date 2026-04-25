import Link from "next/link";
import { ArrowRight, Monitor, Palette, PenSquare, Shapes } from "lucide-react";
import { cn } from "@/lib/utils";

type Service = {
  title: string;
  description: string;
  items: string[];
  index: string;
};

const icons = [Shapes, Palette, Monitor, PenSquare];

export function ServiceCard({
  service,
  index,
  label,
  href,
}: {
  service: Service;
  index: number;
  label: string;
  href?: string;
}) {
  const Icon = icons[index % icons.length];

  const content = (
    <article className={cn(
      "rounded-[1.5rem] border border-stroke bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.04)]",
      href && "transition-shadow hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]",
    )}>
      <div className="mb-5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
        <span>{service.index}</span>
        <span>{label}</span>
      </div>
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-stroke-icon text-ink-icon">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-2xl font-semibold text-ink-strong">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink-base">{service.description}</p>
      <ul className="mt-5 space-y-2 text-sm text-ink-muted">
        {service.items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      {href && (
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-rich">
          Explore service
          <ArrowRight className="h-4 w-4" />
        </div>
      )}
    </article>
  );

  if (href) {
    return <Link href={href} className="block">{content}</Link>;
  }

  return content;
}
