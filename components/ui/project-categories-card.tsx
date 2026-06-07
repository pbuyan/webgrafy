import Image from "next/image";

import type { ProjectCategoryItem } from "@/lib/i18n/types";

export function ProjectCategoriesCard({
  category,
  index,
}: {
  category: ProjectCategoryItem;
  index: number;
}) {
  const bg = ["bg-tint-1", "bg-tint-2", "bg-tint-3"][index % 3];

  return (
    <article className="overflow-hidden rounded-[1.6rem] border border-stroke bg-white shadow-[0_16px_40px_rgba(0,0,0,0.05)]">
      <div className={`p-4 ${bg}`}>
        <div className="overflow-hidden rounded-[1.2rem] border border-stroke bg-white/60">
          <Image
            src={category.image}
            alt={category.name}
            width={700}
            height={420}
            className="h-[420px] w-full object-cover"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-ink-strong">{category.name}</h3>
      </div>
    </article>
  );
}
