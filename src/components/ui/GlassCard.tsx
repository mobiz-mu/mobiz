import { cn } from "@/lib/utils";

export default function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "glass-panel luxury-border rounded-[24px] bg-white/75 shadow-[0_20px_60px_rgba(15,23,42,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}