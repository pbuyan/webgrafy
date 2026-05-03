import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

type VisualLabel = { name: string; caption: string };

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
  const visuals = [
    LogoVisual,
    StationeryVisual,
    WebsiteVisual,
    PackagingVisual,
    EditorialVisual,
    SocialVisual,
  ];
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
            const Visual = visuals[index % visuals.length];
            const bg = tints[index % tints.length];
            return (
              <article
                key={label.name}
                className="overflow-hidden rounded-[1.6rem] border border-stroke bg-white shadow-[0_16px_40px_rgba(0,0,0,0.05)]"
              >
                <div className={`p-4 ${bg}`}>
                  <div className="flex h-[210px] items-center justify-center overflow-hidden rounded-[1.2rem] border border-stroke bg-white/70">
                    <Visual />
                  </div>
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
    </section>
  );
}

function LogoVisual() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-[88px] font-semibold leading-none tracking-[-0.05em] text-ink-strong [font-family:var(--font-display)]">
        W
      </div>
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink-subtle">
        <span>Mark</span>
        <span aria-hidden className="h-1 w-1 rounded-full bg-stroke-mid" />
        <span>Wordmark</span>
        <span aria-hidden className="h-1 w-1 rounded-full bg-stroke-mid" />
        <span>Monogram</span>
      </div>
    </div>
  );
}

function StationeryVisual() {
  return (
    <div className="relative h-[150px] w-[200px]">
      <div className="absolute inset-x-4 top-2 h-[78px] -rotate-6 rounded-md border border-stroke bg-tint-3 shadow-sm" />
      <div className="absolute inset-x-2 top-9 h-[78px] rotate-3 rounded-md border border-stroke bg-warm-light shadow-sm" />
      <div className="absolute inset-x-6 top-16 flex h-[78px] -rotate-2 flex-col justify-between rounded-md border border-stroke bg-white p-3 shadow-sm">
        <div className="h-1.5 w-10 rounded-full bg-ink-strong" />
        <div className="space-y-1">
          <div className="h-1 w-20 rounded-full bg-stroke-mid" />
          <div className="h-1 w-14 rounded-full bg-stroke" />
        </div>
      </div>
    </div>
  );
}

function WebsiteVisual() {
  return (
    <div className="w-[78%] overflow-hidden rounded-md border border-stroke bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-stroke bg-surface-pale px-3 py-2">
        <span aria-hidden className="h-2 w-2 rounded-full bg-stroke-mid" />
        <span aria-hidden className="h-2 w-2 rounded-full bg-stroke-mid" />
        <span aria-hidden className="h-2 w-2 rounded-full bg-stroke-mid" />
      </div>
      <div className="space-y-2.5 p-3">
        <div className="h-14 w-full rounded bg-tint-2" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-1.5 rounded-full bg-ink-strong" />
          <div className="h-1.5 rounded-full bg-stroke-mid" />
          <div className="h-1.5 rounded-full bg-stroke" />
        </div>
        <div className="h-1 w-2/3 rounded-full bg-stroke" />
      </div>
    </div>
  );
}

function PackagingVisual() {
  return (
    <div className="flex items-end gap-3">
      <div className="relative h-[130px] w-[44px] overflow-hidden rounded-b-sm rounded-t-[20px] border border-stroke bg-warm-light">
        <div className="absolute left-1/2 top-1.5 h-3 w-6 -translate-x-1/2 rounded-sm bg-ink-strong" />
        <div className="absolute inset-x-2 top-10 flex h-14 flex-col items-center justify-center gap-1 rounded-sm bg-white/75">
          <div className="h-1 w-7 rounded-full bg-ink-strong" />
          <div className="h-0.5 w-5 rounded-full bg-stroke-mid" />
        </div>
      </div>
      <div className="relative h-[110px] w-[64px] overflow-hidden rounded-md border border-stroke bg-tint-3">
        <div className="absolute inset-x-2 top-3 flex flex-col gap-1">
          <div className="h-1.5 w-9 rounded-full bg-ink-strong" />
          <div className="h-1 w-11 rounded-full bg-stroke-mid" />
        </div>
        <div className="absolute inset-x-2 bottom-2 h-7 rounded-sm bg-white/65" />
      </div>
    </div>
  );
}

function EditorialVisual() {
  return (
    <div className="flex w-[82%] gap-3">
      <div className="flex-1 space-y-1.5 border-r border-stroke pr-3">
        <div className="h-2 w-12 rounded-full bg-ink-strong" />
        <div className="space-y-1 pt-2">
          <div className="h-1 w-full rounded-full bg-stroke-mid" />
          <div className="h-1 w-11/12 rounded-full bg-stroke-mid" />
          <div className="h-1 w-5/6 rounded-full bg-stroke-mid" />
          <div className="h-1 w-10/12 rounded-full bg-stroke-mid" />
          <div className="h-1 w-9/12 rounded-full bg-stroke-mid" />
        </div>
      </div>
      <div className="flex-1 space-y-1.5">
        <div className="h-16 w-full rounded bg-tint-3" />
        <div className="space-y-1 pt-1">
          <div className="h-1 w-full rounded-full bg-stroke-mid" />
          <div className="h-1 w-10/12 rounded-full bg-stroke-mid" />
          <div className="h-1 w-9/12 rounded-full bg-stroke-mid" />
        </div>
      </div>
    </div>
  );
}

function SocialVisual() {
  return (
    <div className="grid w-[170px] grid-cols-3 gap-1.5">
      <div className="aspect-square rounded-sm bg-tint-3" />
      <div className="flex aspect-square items-center justify-center rounded-sm bg-ink-strong">
        <div className="h-3 w-3 rounded-full bg-warm-light" />
      </div>
      <div className="aspect-square rounded-sm bg-warm-light" />
      <div className="aspect-square rounded-sm bg-warm-mid" />
      <div className="aspect-square rounded-sm bg-tint-2" />
      <div className="flex aspect-square items-center justify-center rounded-sm bg-tint-3">
        <div className="h-1.5 w-7 rounded-full bg-ink-strong" />
      </div>
      <div className="aspect-square rounded-sm bg-warm-light" />
      <div className="aspect-square rounded-sm bg-tint-2" />
      <div className="aspect-square rounded-sm bg-warm-mid" />
    </div>
  );
}
