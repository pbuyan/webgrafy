import Image from "next/image";

type Project = {
  name: string;
  category: string;
  summary: string;
  result: string;
  image: string;
};

export function ProjectCard({
  project,
  index,
  yearLabel,
}: {
  project: Project;
  index: number;
  yearLabel: string;
}) {
  const bg = ["bg-tint-1", "bg-tint-2", "bg-tint-3"][index % 3];

  return (
    <article className="overflow-hidden rounded-[1.6rem] border border-stroke bg-white shadow-[0_16px_40px_rgba(0,0,0,0.05)]">
      <div className={`p-4 ${bg}`}>
        <div className="overflow-hidden rounded-[1.2rem] border border-stroke bg-white/60">
          <Image src={project.image} alt={project.name} width={700} height={420} className="h-[210px] w-full object-cover" />
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
          <span>{project.category}</span>
          <span>{yearLabel}</span>
        </div>
        <h3 className="text-2xl font-semibold text-ink-strong">{project.name}</h3>
        <p className="mt-3 text-sm leading-7 text-ink-base">{project.summary}</p>
        <p className="mt-5 text-sm font-medium text-ink-rich">↑ {project.result}</p>
      </div>
    </article>
  );
}
