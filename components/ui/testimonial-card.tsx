import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-[1.6rem] border border-stroke-warm bg-surface-warm p-6">
      <p className="text-lg leading-8 text-ink-rich">"{testimonial.quote}"</p>
      <div className="mt-6 flex items-center gap-3">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-ink-strong">{testimonial.name}</p>
          <p className="text-sm text-ink-faint">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
