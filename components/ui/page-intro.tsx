import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="border-b border-[#d9d0c5]">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionLabel>{eyebrow}</SectionLabel>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-[78px]">
              {title}
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#544c43]">{text}</p>
        </div>
      </Container>
    </section>
  );
}
