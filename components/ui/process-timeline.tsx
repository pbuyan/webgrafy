type Step = {
  number: string;
  title: string;
  text: string;
};

export function ProcessTimeline({
  title,
  eyebrow,
  steps,
}: {
  title: string;
  eyebrow: string;
  steps: Step[];
}) {
  return (
    <section className="border-b border-stroke bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="text-xs uppercase tracking-[0.22em] text-ink-subtle">{eyebrow}</p>
        <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink-strong sm:text-5xl">
          {title}
        </h2>

        <div className="relative mt-12 hidden border-t border-stroke-mid md:block">
          <div className="grid grid-cols-4 gap-8 pt-10">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="absolute -top-[2.65rem] left-0 h-3 w-3 rounded-full bg-black" />
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-subtle">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink-strong">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:hidden">
          {steps.map((step) => (
            <div key={step.number} className="rounded-[1.4rem] border border-stroke bg-surface-muted p-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-subtle">{step.number}</p>
              <h3 className="mt-3 text-xl font-semibold text-ink-strong">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-soft">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
