import Image from "next/image";
import { cn } from "@/lib/utils";

type BlogImageFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  frameClassName?: string;
};

export function BlogImageFrame({
  src,
  alt,
  priority = false,
  className,
  frameClassName,
}: BlogImageFrameProps) {
  return (
    <div className={cn("relative aspect-video w-full overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px"
        className="object-cover"
        priority={priority}
      />
      {frameClassName ? <div className={cn("absolute inset-0", frameClassName)} aria-hidden /> : null}
    </div>
  );
}
