"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { ShieldCheck, Smartphone, TrendingUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const trustItems = [
  {
    title: "Premium UX",
    description: "Luxury interfaces designed to build trust and convert faster.",
    icon: ShieldCheck,
    iconBg:
      "bg-[linear-gradient(180deg,#ef4444_0%,#dc2626_55%,#b91c1c_100%)] border-red-200/80 shadow-[0_14px_30px_rgba(220,38,38,0.20)]",
    iconColor: "text-white",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.16),transparent_34%)]",
    accent: "from-red-400 to-red-200",
  },
  {
    title: "Mobile First",
    description: "Built for Mauritius users across modern phones, tablets, and desktops.",
    icon: Smartphone,
    iconBg:
      "bg-[linear-gradient(180deg,#3b82f6_0%,#2563eb_55%,#1d4ed8_100%)] border-blue-200/80 shadow-[0_14px_30px_rgba(37,99,235,0.20)]",
    iconColor: "text-white",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_34%)]",
    accent: "from-blue-400 to-blue-200",
  },
  {
    title: "Growth Focused",
    description: "Every section is structured to support leads, calls, WhatsApp, and SEO.",
    icon: TrendingUp,
    iconBg:
      "bg-[linear-gradient(180deg,#facc15_0%,#eab308_55%,#ca8a04_100%)] border-yellow-200/80 shadow-[0_14px_30px_rgba(234,179,8,0.22)]",
    iconColor: "text-[#071226]",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_34%)]",
    accent: "from-yellow-400 to-yellow-200",
  },
  {
    title: "Fast Performance",
    description: "Clean architecture with performance, accessibility, and scale in mind.",
    icon: Zap,
    iconBg:
      "bg-[linear-gradient(180deg,#22c55e_0%,#16a34a_55%,#15803d_100%)] border-green-200/80 shadow-[0_14px_30px_rgba(22,163,74,0.20)]",
    iconColor: "text-white",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_34%)]",
    accent: "from-green-400 to-green-200",
  },
];

export default function TrustBar() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-6 sm:py-7 lg:py-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <Container>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={cn(
                  "group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/60 p-5 backdrop-blur-xl shadow-[0_16px_40px_rgba(7,18,38,0.06)] transition-all duration-700 hover:-translate-y-1.5 hover:bg-white/72 hover:shadow-[0_24px_56px_rgba(7,18,38,0.10)] sm:p-6",
                  visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-white/70" />
                <div className={cn("pointer-events-none absolute inset-0 opacity-90", item.glow)} />
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className={cn(
                      "relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] border transition-transform duration-500 group-hover:scale-105",
                      item.iconBg
                    )}
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.03)_100%)]" />
                    <Icon className={cn("relative z-10 h-6 w-6", item.iconColor)} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight text-[#071226]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100/90">
                  <div
                    className={cn(
                      "h-full w-16 rounded-full bg-gradient-to-r transition-all duration-500 group-hover:w-24",
                      item.accent
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}