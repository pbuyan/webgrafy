import { Container } from "@/components/ui/container";

export function LogoStrip({ title, logos }: { title: string; logos: string[] }) {
  return (
    <section className="border-b border-stroke bg-surface-strip">
      <Container className="py-7">
        <p className="text-center text-[11px] uppercase tracking-[0.26em] text-ink-subtle">{title}</p>
        <div className="mt-6 grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo} className="text-lg font-medium tracking-[0.18em] text-ink-mid">
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
