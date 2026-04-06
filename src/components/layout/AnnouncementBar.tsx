import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Globe,
  Megaphone,
  ReceiptText,
  Search,
  ShoppingBag,
  Smartphone,
  BadgeDollarSign,
} from "lucide-react";

const serviceKeywords = [
  { label: "Mauritius Website Design", icon: Globe },
  { label: "Mauritius Web Development", icon: Smartphone },
  { label: "SEO Services Mauritius", icon: Search },
  { label: "Digital Marketing Mauritius", icon: Megaphone },
  { label: "Accounting Services Mauritius", icon: ReceiptText },
  { label: "Tax Filing Mauritius", icon: BadgeDollarSign },
  { label: "Business Registration Mauritius", icon: Building2 },
  { label: "Company Setup Mauritius", icon: BriefcaseBusiness },
  { label: "Executive Business Websites", icon: Globe },
  { label: "Professional Website Mauritius", icon: Smartphone },
  { label: "E-Commerce Website Mauritius", icon: ShoppingBag },
  { label: "MoBiz.mu Mauritius", icon: BriefcaseBusiness },
  { label: "MoBiz Mauritius Services", icon: Building2 },
];

const socialLinks = [
  {
    name: "Facebook",
    src: "/icons/facebook.png",
    alt: "MoBiz.mu Facebook page",
    href: "https://www.facebook.com/mobiz.mu/",
  },
  {
    name: "TikTok",
    src: "/icons/tiktok.png",
    alt: "MoBiz.mu TikTok page",
    href: "https://www.tiktok.com/@mobiz.mu",
  },
  {
    name: "Instagram",
    src: "/icons/instagram.png",
    alt: "MoBiz.mu Instagram page",
    href: "https://www.instagram.com/mobiz.mu/",
  },
  {
    name: "LinkedIn",
    src: "/icons/linkedin.png",
    alt: "MoBiz.mu LinkedIn page",
    href: "https://www.linkedin.com/company/mobiz-mu/",
  },
];

const whatsappMessage =
  "Hello MoBiz.mu, I would like to book a consultation for your services in Mauritius.";
const whatsappHref = `https://wa.me/23055068119?text=${encodeURIComponent(whatsappMessage)}`;

export default function AnnouncementBar() {
  const marqueeItems = [...serviceKeywords, ...serviceKeywords];

  return (
    <div
      aria-label="MoBiz.mu announcement bar"
      className="relative overflow-hidden border-b border-[#d4b55a]/25 bg-[linear-gradient(90deg,#040816_0%,#071224_24%,#0b1730_50%,#091326_76%,#040816_100%)] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,181,90,0.12),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(24,119,242,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#040816] to-transparent sm:w-14" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#040816] to-transparent sm:w-14" />

      <Container className="relative z-[1]">
        <div className="flex min-h-[58px] items-center gap-2 py-2 sm:min-h-[64px] sm:gap-3">
          <div className="shrink-0">
            <div
              className="flex items-center gap-1.5 sm:gap-2"
              aria-label="MoBiz.mu social media links"
            >
              {socialLinks.map((icon, index) => (
  <Link
    key={icon.name}
    href={icon.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit MoBiz.mu on ${icon.name}`}
    title={icon.name}
    className="group mobiz-social-icon relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#d9bc69] bg-white/[0.04] backdrop-blur-[6px] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#f3d77a] hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0d78a]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071224] sm:h-8 sm:w-8"
    style={
      {
        ["--mobiz-delay" as string]: `${index * 0.42}s`,
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.04), 0 10px 24px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.15)",
      } as React.CSSProperties
    }
  >
    <Image
      src={icon.src}
      alt={icon.alt}
      fill
      sizes="32px"
      className="object-contain p-[4.5px] transition-transform duration-300 group-hover:scale-110"
    />
  </Link>
))}
            </div>
          </div>

          <div
            className="relative min-w-0 flex-1 overflow-hidden"
            aria-label="MoBiz.mu services and Mauritius business keywords"
          >
            <div className="flex w-max items-center animate-[mobiz-marquee_46s_linear_infinite] will-change-transform">
              {marqueeItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={`${item.label}-${index}`} className="flex shrink-0 items-center">
                    <span className="flex items-center gap-2 whitespace-nowrap px-2.5 text-[10px] font-medium tracking-[0.05em] text-white/90 sm:px-4 sm:text-[12px] lg:text-[13px]">
                      <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#d6b866]/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_4px_10px_rgba(0,0,0,0.28),0_0_10px_rgba(212,181,90,0.10)] sm:h-5 sm:w-5">
                        <span className="absolute inset-[1px] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.30),transparent_45%)]" />
                        <Icon className="relative h-2.5 w-2.5 text-[#f1d47b] drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] sm:h-3 sm:w-3" />
                      </span>
                      <span>{item.label}</span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-[10px] text-[#e7c96b] sm:text-xs"
                    >
                      ✦
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a consultation with MoBiz.mu on WhatsApp"
            className="group shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0d78a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071224]"
          >
            <span className="relative inline-flex items-center gap-1.5 rounded-full border border-[#4cff9d]/35 bg-[linear-gradient(180deg,#22d36f_0%,#10b75a_52%,#0b8f45_100%)] px-3 py-2 text-[10px] font-semibold text-white shadow-[0_2px_0_rgba(255,255,255,0.18)_inset,0_-3px_0_rgba(0,0,0,0.18)_inset,0_14px_28px_rgba(11,143,69,0.32),0_0_24px_rgba(34,211,111,0.18)] transition-all duration-300 group-hover:-translate-y-[1px] group-hover:shadow-[0_2px_0_rgba(255,255,255,0.18)_inset,0_-3px_0_rgba(0,0,0,0.18)_inset,0_18px_32px_rgba(11,143,69,0.38),0_0_28px_rgba(34,211,111,0.22)] sm:px-4 sm:py-2.5 sm:text-[11px]">
              <span className="absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0.02)_42%,transparent_60%)]" />
              <span className="relative hidden sm:inline">Book a Consultation</span>
              <span className="relative sm:hidden">Consultation</span>
              <ArrowRight className="relative h-3.5 w-3.5 text-[#f4cf67] transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </Container>

      <style>{`
        @keyframes mobiz-marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes mobiz-social-fade {
          0%, 100% {
            opacity: 0.72;
            transform: translateY(0) scale(0.98);
            filter: saturate(0.95);
          }
          50% {
            opacity: 1;
            transform: translateY(-2px) scale(1);
            filter: saturate(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[mobiz-marquee_46s_linear_infinite\\] {
            animation: none !important;
            transform: translate3d(0, 0, 0) !important;
          }
        }
      `}</style>
    </div>
  );
}