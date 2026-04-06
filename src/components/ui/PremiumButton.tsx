import Link from "next/link";
import { cn } from "@/lib/utils";

type PremiumButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export default function PremiumButton({
  href,
  children,
  className,
  variant = "primary",
}: PremiumButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variant === "primary" &&
      "bg-[#071226] text-white shadow-[0_16px_40px_rgba(7,18,38,0.16)] hover:-translate-y-0.5 hover:bg-[#0d1b3d]",
    variant === "secondary" &&
      "border border-[rgba(15,23,42,0.1)] bg-white text-[#071226] hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.4)] hover:shadow-[0_14px_30px_rgba(7,18,38,0.08)]",
    variant === "ghost" &&
      "text-[#071226] hover:bg-black/5",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}