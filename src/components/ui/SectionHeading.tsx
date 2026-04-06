import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <div className="mb-4 inline-flex rounded-full border border-[rgba(212,175,55,0.28)] bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
          {eyebrow}
        </div>
      ) : null}

      <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}