import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  WhatsAppBrandIcon,
} from "@/components/ui/SocialBrandIcons";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "REPLACE_WITH_OFFICIAL_FACEBOOK_URL",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "REPLACE_WITH_OFFICIAL_INSTAGRAM_URL",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "REPLACE_WITH_OFFICIAL_TIKTOK_URL",
    icon: TikTokIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mobiz-mu/",
    icon: LinkedInIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/23055068119",
    icon: WhatsAppBrandIcon,
  },
] as const;

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=La+Croisette+Grand+Baie+Mauritius";

export function AssistanceSection() {
  return (
    <section
      aria-labelledby="connect-heading"
      className="connect-section relative overflow-hidden bg-[#F8F8F6]"
    >
      {/* subtle white technical grid */}
      <span
        aria-hidden
        className="connect-grid pointer-events-none absolute inset-0"
      />

      {/* restrained red atmosphere */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(192,24,34,0.09),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-center gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_auto] lg:gap-14 lg:px-12 lg:py-14 xl:px-16">
        {/* LEFT */}
        <div className="max-w-[860px]">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-brand" />

            <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-brand">
              Stay connected
            </p>
          </div>

          <h2
            id="connect-heading"
            className="font-black leading-[0.95] tracking-[-0.045em] text-[#0A0A0C]"
            style={{
              fontSize: "clamp(2rem,4.3vw,4.2rem)",
            }}
          >
            Connect with{" "}
            <span className="text-brand">
              Mobiz.
            </span>
          </h2>

          <p className="mt-4 max-w-[680px] text-sm font-medium leading-7 text-[#62636A] sm:text-base">
            Follow our latest projects, business insights, digital updates and
            practical ideas for growing and managing your business in Mauritius.
          </p>

          {/* SOCIAL ICONS */}
          <ul
            className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4"
            aria-label="Mobiz social media"
          >
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;

              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Mobiz on ${social.label}`}
                    className="social-orb group relative flex size-12 items-center justify-center rounded-full border border-black/[0.09] bg-white text-[#111216] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-[transform,border-color,color,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand/30 hover:text-brand hover:shadow-[0_14px_30px_rgba(192,24,34,0.13)] sm:size-13"
                  >
                    {/* tooltip */}
                    <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-[#0A0A0C] px-2.5 py-1 text-[10px] font-bold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      {social.label}
                    </span>

                    <Icon className="size-5 sm:size-[22px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-stretch">
          <Link
            href="/contact"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(192,24,34,0.22)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#A3131C] hover:shadow-[0_14px_32px_rgba(192,24,34,0.30)]"
          >
            Follow us
            <ArrowUpRight
              aria-hidden
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-black/[0.10] bg-white px-5 py-2.5 text-sm font-bold text-[#17181B] transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand"
          >
            <MapPin
              aria-hidden
              className="size-4"
            />
            Directions
          </a>
        </div>
      </div>
    </section>
  );
}

export default AssistanceSection;