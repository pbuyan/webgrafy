import { Container } from "@/components/ui/container";

export function LogoStrip({ title, logos }: { title: string; logos: string[] }) {
  return (
    <section className="border-b border-[#d9d0c5] bg-[#f6f1ea]">
      <Container className="py-7">
        <p className="text-center text-[11px] uppercase tracking-[0.26em] text-[#7d7468]">{title}</p>
        <div className="mt-6 grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo} className="text-lg font-medium tracking-[0.18em] text-[#3f3933]">
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
