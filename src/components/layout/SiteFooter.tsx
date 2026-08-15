import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Logo } from "./Logo";
import { serviceDivisions } from "@/lib/navigation";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
} from "@/lib/site";

/* -------------------------------------------------------------------------- */
/* Google Maps                                                                */
/* -------------------------------------------------------------------------- */

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Mobiz.mu+Mauritius";

/* -------------------------------------------------------------------------- */
/* Social media                                                               */
/* IMPORTANT: replace only a URL below if your existing /lib/site.ts contains */
/* a different official Mobiz profile URL.                                    */
/* -------------------------------------------------------------------------- */

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/mobiz.mu",
    icon: "/icons/facebook.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mobiz.mu/",
    icon: "/icons/instagram.png",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@mobiz.mu",
    icon: "/icons/tiktok.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/mobiz-mu/",
    icon: "/icons/linkedin.png",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Footer navigation                                                          */
/* -------------------------------------------------------------------------- */

const LINK_GROUPS: {
  heading: string;
  links: {
    label: string;
    href: string;
  }[];
}[] = [
  {
    heading: "Services",
    links: serviceDivisions.map((division) => ({
      label: division.label,
      href: division.href,
    })),
  },
  {
    heading: "Popular",
    links: [
      {
        label: "Website Design Mauritius",
        href: "/website-design-mauritius",
      },
      {
        label: "SEO Services Mauritius",
        href: "/seo-services-mauritius",
      },
      {
        label: "Accounting Services Mauritius",
        href: "/accounting-services-mauritius",
      },
      {
        label: "Digital Marketing Mauritius",
        href: "/digital-marketing-mauritius",
      },
      {
        label: "Company Registration",
        href: "/company-registration-mauritius",
      },
      {
        label: "VAT Filing Mauritius",
        href: "/vat-filing-mauritius",
      },
    ],
  },
  {
    heading: "Company",
    links: [
      {
        label: "About Mobiz",
        href: "/about",
      },
      {
        label: "Why Choose Us",
        href: "/why-us",
      },
      {
        label: "Portfolio",
        href: "/portfolio",
      },
      {
        label: "Monthly Packages",
        href: "/monthly-packages",
      },
      {
        label: "Blog & Insights",
        href: "/blog",
      },
      {
        label: "Careers",
        href: "/careers",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    heading: "Legal",
    links: [
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        label: "Terms of Service",
        href: "/terms-of-service",
      },
      {
        label: "Terms of Use",
        href: "/terms-of-use",
      },
      {
        label: "Security Policy",
        href: "/security-policy",
      },
      {
        label: "Policies",
        href: "/policies",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Small Mauritius map visual                                                 */
/* -------------------------------------------------------------------------- */

function MauritiusMap() {
  return (
    <a
      href={GOOGLE_MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Mobiz.mu on Google Maps"
      className="
        group/map
        relative
        hidden
        h-[118px]
        w-[180px]
        shrink-0
        overflow-hidden
        sm:block
      "
    >
      {/* faint geographic lines */}
      <svg
        aria-hidden
        viewBox="0 0 180 118"
        className="absolute inset-0 size-full"
        fill="none"
      >
        <path
          d="M8 89C31 75 47 77 65 62C82 48 89 24 113 19C135 14 151 27 174 18"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
        />

        <path
          d="M1 102C29 95 50 101 73 85C95 70 107 46 137 45C152 44 165 49 180 42"
          stroke="rgba(192,24,34,0.13)"
          strokeWidth="1"
        />

        <path
          d="M26 9C38 27 47 36 62 43C78 50 91 50 105 64C118 77 125 96 150 111"
          stroke="rgba(255,255,255,0.045)"
          strokeWidth="1"
        />

        <circle
          cx="111"
          cy="57"
          r="25"
          stroke="rgba(192,24,34,0.09)"
        />

        <circle
          cx="111"
          cy="57"
          r="39"
          stroke="rgba(192,24,34,0.045)"
        />
      </svg>

      {/* pulse */}
      <span
        aria-hidden
        className="
          absolute
          left-[111px]
          top-[57px]
          size-9
          -translate-x-1/2
          -translate-y-1/2
          animate-ping
          rounded-full
          border
          border-[#C01822]/30
        "
      />

      {/* rotating location pin */}
      <span
        className="
          absolute
          left-[111px]
          top-[57px]
          flex
          size-10
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-[#C01822]/10
          transition-transform
          duration-300
          group-hover/map:scale-110
        "
      >
        <MapPin
          aria-hidden
          className="
            size-5
            text-[#E11D2E]
            drop-shadow-[0_0_10px_rgba(192,24,34,0.7)]
            transition-transform
            duration-700
            group-hover/map:rotate-[360deg]
          "
        />
      </span>

      <span
        className="
          absolute
          bottom-1
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-1.5
          whitespace-nowrap
          font-mono
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.16em]
          text-white/40
          transition-colors
          group-hover/map:text-white
        "
      >
        Mauritius
        <ExternalLink className="size-2.5" />
      </span>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.07]
        bg-[#050506]
        text-white
      "
    >
      {/* subtle red ambient glow */}
      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
          size-[380px]
          rounded-full
          bg-[#C01822]/[0.045]
          blur-[100px]
        "
      />

      {/* ================================================================== */}
      {/* WORDMARK                                                           */}
      {/* ================================================================== */}

      <div
        className="
          relative
          border-b
          border-white/[0.07]
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1320px]
            items-center
            justify-between
            gap-8

            px-5
            py-8

            sm:px-8
            sm:py-9

            lg:px-16
          "
        >
          <p
            aria-label="Mobiz.mu"
            className="
              select-none
              text-[clamp(3.5rem,8vw,7.5rem)]
              font-black
              leading-none
              tracking-[-0.055em]
            "
            style={{
              WebkitTextStroke:
                "1px rgba(255,255,255,0.13)",
              color: "transparent",
            }}
          >
            MOBIZ
            <span
              style={{
                WebkitTextStroke:
                  "1px rgba(192,24,34,0.65)",
              }}
            >
              .MU
            </span>
          </p>

          <MauritiusMap />
        </div>
      </div>

      {/* ================================================================== */}
      {/* MAIN FOOTER                                                        */}
      {/* ================================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1320px]

          px-5
          py-9

          sm:px-8
          sm:py-10

          lg:px-16
        "
      >
        <div
          className="
            grid
            gap-x-8
            gap-y-10

            sm:grid-cols-2

            lg:grid-cols-[1.2fr_1fr_1fr_1fr_0.9fr]
          "
        >
          {/* -------------------------------------------------------------- */}
          {/* BRAND                                                          */}
          {/* -------------------------------------------------------------- */}

          <div>
            <Logo
              height={46}
              className="mb-4"
            />

            <p
              className="
                max-w-[220px]
                text-[13px]
                leading-6
                text-white/55
              "
            >
              Digital solutions built for
              businesses in Mauritius.
            </p>

            <div className="mt-5 space-y-1">
              <a
                href={`tel:${CONTACT_PHONE_DISPLAY.replace(/\s/g, "")}`}
                className="
                  group/contact
                  flex
                  min-h-9
                  items-center
                  gap-2
                  text-[13px]
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                <Phone
                  aria-hidden
                  className="
                    size-3.5
                    text-[#C01822]
                  "
                />

                {CONTACT_PHONE_DISPLAY}
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="
                  group/contact
                  flex
                  min-h-9
                  items-center
                  gap-2
                  text-[13px]
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                <Mail
                  aria-hidden
                  className="
                    size-3.5
                    text-[#C01822]
                  "
                />

                {CONTACT_EMAIL}
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  min-h-9
                  items-center
                  gap-2
                  text-[13px]
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                <MapPin
                  aria-hidden
                  className="
                    size-3.5
                    text-[#C01822]
                  "
                />

                {CONTACT_LOCATION}
              </a>
            </div>

            {/* Social icons */}
            <ul
              aria-label="Mobiz social media"
              className="
                mt-5
                flex
                items-center
                gap-2.5
              "
            >
              {SOCIAL_LINKS.map((social) => (
                <li
                  key={social.name}
                  className="relative"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Mobiz on ${social.name}`}
                    title={social.name}
                    className="
                      group/social
                      flex
                      size-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.09]
                      bg-white/[0.035]

                      transition-all
                      duration-200

                      hover:-translate-y-1
                      hover:border-[#C01822]/60
                      hover:bg-[#C01822]/10
                    "
                  >
                    <Image
                      src={social.icon}
                      alt=""
                      aria-hidden
                      width={20}
                      height={20}
                      sizes="20px"
                      className="
                        size-5
                        object-contain
                        transition-transform
                        duration-200
                        group-hover/social:scale-110
                      "
                    />

                    <span
                      className="
                        pointer-events-none
                        absolute
                        -top-8
                        left-1/2
                        z-20
                        -translate-x-1/2
                        translate-y-1
                        whitespace-nowrap
                        rounded
                        bg-white
                        px-2
                        py-1
                        text-[9px]
                        font-bold
                        text-black
                        opacity-0
                        shadow-lg
                        transition-all
                        duration-150

                        group-hover/social:translate-y-0
                        group-hover/social:opacity-100
                      "
                    >
                      {social.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* -------------------------------------------------------------- */}
          {/* LINK GROUPS                                                    */}
          {/* -------------------------------------------------------------- */}

          {LINK_GROUPS.map((group) => (
            <nav
              key={group.heading}
              aria-label={`${group.heading} footer links`}
            >
              <h2
                className="
                  mb-3
                  font-mono
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#D12A33]
                "
              >
                {group.heading}
              </h2>

              <ul className="space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="
                        group/link
                        inline-flex
                        min-h-9
                        items-center
                        text-[13px]
                        leading-snug
                        text-white/70

                        transition-all
                        duration-200

                        hover:translate-x-1
                        hover:text-white
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* ================================================================= */}
        {/* COPYRIGHT                                                         */}
        {/* ================================================================= */}

        <div
          className="
            mt-8
            border-t
            border-white/[0.07]
            pt-5
            text-center
          "
        >
          <p
            className="
              font-mono
              text-[10px]
              tracking-[0.03em]
              text-white/45
            "
          >
            © {year} Mobiz.mu · All rights reserved · Mauritius
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;