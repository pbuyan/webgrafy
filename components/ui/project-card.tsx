type Project = {
  name: string;
  category: string;
  summary: string;
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
  const bg = ["bg-[#efe8df]", "bg-[#f5f0e9]", "bg-[#ebe3d8]"][index % 3];

  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#d9d0c5] bg-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
      <div className={`h-80 p-6 ${bg}`}>
        <div className="flex h-full items-end rounded-[1.6rem] border border-[#d9d0c5] bg-white/45 p-5">
          <div className="w-full">
            <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#7d7468]">
              <span>{project.category}</span>
              <span>{yearLabel}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-24 rounded-[1.2rem] border border-[#d9d0c5] bg-white/70" />
              <div className="h-24 rounded-[1.2rem] bg-[#e4d9cb]" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-7">
        <h3 className="text-2xl font-semibold">{project.name}</h3>
        <p className="mt-4 text-sm leading-7 text-[#544c43]">{project.summary}</p>
      </div>
    </article>
  );
}
