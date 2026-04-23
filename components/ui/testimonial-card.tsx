import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-[1.6rem] border border-[#e1d8cd] bg-[#f7f2ec] p-6">
      <p className="text-lg leading-8 text-[#2d2925]">“{testimonial.quote}”</p>
      <div className="mt-6 flex items-center gap-3">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-[#1f1b18]">{testimonial.name}</p>
          <p className="text-sm text-[#6b6359]">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
