import Link from "next/link";
import { ArrowRight, Search, Sparkles } from "lucide-react";

type SeoInternalLink = {
  title: string;
  description: string;
  href: string;
};

type SeoInternalLinksProps = {
  eyebrow?: string;
  title: string;
  description: string;
  links: SeoInternalLink[];
};

export default function SeoInternalLinks({
  eyebrow = "Explore More",
  title,
  description,
  links,
}: SeoInternalLinksProps) {
  return (
    <section className="relative overflow-hidden bg-[#071226] py-14 text-white sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,215,122,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.14),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f3d77a]/25 bg-[#f3d77a]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f3d77a]">
              <Search className="h-4 w-4" />
              {eyebrow}
            </div>

            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              {description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-[24px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#f3d77a]/35 hover:bg-white/[0.1]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3d77a] text-[#071226] shadow-lg shadow-[#f3d77a]/20">
                  <Sparkles className="h-5 w-5" />
                </div>

                <h3 className="text-base font-bold text-white">
                  {link.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/68">
                  {link.description}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#f3d77a]">
                  View SEO page
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}