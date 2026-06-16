import Image from "next/image";
import Link from "next/link";

type Project = {
  name: string;
  category: string;
  summary: string;
  result: string;
  image: string;
  url?: string;
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

  const inner = (
    <>
      <div className={`p-4 ${bg}`}>
        <div className="overflow-hidden rounded-[1.2rem] border border-stroke bg-white/60">
          <Image src={project.image} alt={project.name} width={1600} height={900} className="aspect-video w-full object-fill" />
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
    </>
  );

  const cardClass = "overflow-hidden rounded-[1.6rem] border border-stroke bg-white shadow-[0_16px_40px_rgba(0,0,0,0.05)]";

  if (project.url) {
    return (
      <Link href={project.url} target="_blank" rel="noopener noreferrer" className={`${cardClass} block transition-shadow hover:shadow-[0_24px_56px_rgba(0,0,0,0.10)]`}>
        <article>{inner}</article>
      </Link>
    );
  }

  return <article className={cardClass}>{inner}</article>;
}
