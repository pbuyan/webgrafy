type Service = {
  title: string;
  description: string;
  items: string[];
  index: string;
};

export function ServiceCard({
  service,
  index,
  label,
}: {
  service: Service;
  index: number;
  label: string;
}) {
  return (
    <article className="rounded-[2rem] border border-[#d9d0c5] bg-white/60 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
      <div className="mb-8 flex items-center justify-between border-b border-[#d9d0c5] pb-4 text-[11px] uppercase tracking-[0.18em] text-[#7d7468]">
        <span>{service.index}</span>
        <span>{label}</span>
      </div>
      <div
        className={`mb-5 h-12 w-12 rounded-2xl ${
          index === 0
            ? "bg-[#111111]"
            : index === 1
              ? "bg-[#b8ada0]"
              : index === 2
                ? "border border-[#d9d0c5] bg-white"
                : "bg-[#ded5ca]"
        }`}
      />
      <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#544c43]">{service.description}</p>
      <ul className="mt-6 space-y-2 text-sm text-[#6e665d]">
        {service.items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </article>
  );
}
