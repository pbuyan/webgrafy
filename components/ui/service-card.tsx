import { ArrowRight, Monitor, Palette, PenSquare, Shapes } from "lucide-react";

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
  exploreLabel,
}: {
  service: Service;
  index: number;
  label: string;
  exploreLabel: string;
}) {
  const Icon = icons[index % icons.length];

  return (
    <article className="rounded-[1.5rem] border border-stroke bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
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
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-rich">
        {exploreLabel}
        <ArrowRight className="h-4 w-4" />
      </div>
    </article>
  );
}
