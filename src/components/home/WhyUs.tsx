import Image from "next/image";
import Container from "@/components/ui/Container";

const reasons = [
  {
    title: "On Time Delivery",
    description:
      "We respect your time and business goals. Every project is planned with clear steps, proper communication, and a strong focus on delivery.",
    image: "/images/whychooseus/on_time_delivery.webp",
    alt: "On time delivery illustration for MoBiz.mu business services",
  },
  {
    title: "Quality Services",
    description:
      "We focus on clean design, strong structure, reliable systems, and professional execution so your business looks premium and trustworthy.",
    image: "/images/whychooseus/quality_service.webp",
    alt: "Quality services illustration for MoBiz.mu",
  },
  {
    title: "Best Customer Support",
    description:
      "We support you before, during, and after the project with clear guidance, quick responses, and practical business-focused help.",
    image: "/images/whychooseus/customer_support.webp",
    alt: "Customer support illustration for MoBiz.mu",
  },
  {
    title: "Evolve Latest Tech",
    description:
      "We build using modern tools, mobile-first layouts, fast-loading pages, SEO-ready structures, and scalable solutions for business growth.",
    image: "/images/whychooseus/latest_tech.webp",
    alt: "Latest technology illustration for MoBiz.mu",
  },
  {
    title: "Expertise That Leads",
    description:
      "From websites and digital marketing to accounting, software, branding, and logistics, we bring multiple business solutions under one roof.",
    image: "/images/whychooseus/expertise_lead.webp",
    alt: "Expertise that leads illustration for MoBiz.mu",
  },
  {
    title: "Proven Results and Happy Clients",
    description:
      "We help businesses look more established, attract more customers, and operate with stronger digital presentation and trust.",
    image: "/images/whychooseus/happy_client.webp",
    alt: "Happy clients and proven results illustration for MoBiz.mu",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-mobiz-mu"
      aria-labelledby="why-mobiz-mu-heading"
      className="relative w-full overflow-hidden bg-[#071226] py-12 sm:py-14 lg:py-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45 blur-[2px] scale-105"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(7,18,38,0.68), rgba(7,18,38,0.84)), url("/images/whyus/3.jpeg")',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%),linear-gradient(180deg,rgba(7,18,38,0.38),rgba(7,18,38,0.88))]" />

      <Container className="relative z-10 max-w-[1540px]">
        <div className="mx-auto max-w-5xl text-center">
          <h2
            id="why-mobiz-mu-heading"
            className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[3.15rem] lg:leading-[1.05]"
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            What Makes Us the Top Choice
          </h2>

          <p
            className="mx-auto mt-4 text-pretty text-[15px] font-medium leading-7 text-white/92 sm:text-[17px] lg:text-[18px]"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Ready to elevate your journey? Choose Mobiz.mu
          </p>
        </div>

        <div className="mt-10 grid gap-7 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="group flex min-h-[350px] flex-col rounded-[12px] bg-white px-5 py-7 shadow-[0_24px_60px_rgba(0,0,0,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_75px_rgba(0,0,0,0.28)] sm:min-h-[370px] sm:px-6 lg:min-h-[390px]"
            >
              <div className="flex h-[105px] items-center">
                <Image
                  src={reason.image}
                  alt={reason.alt}
                  width={220}
                  height={150}
                  priority={index < 3}
                  loading={index < 3 ? "eager" : "lazy"}
                  fetchPriority={index < 3 ? "high" : "auto"}
                  quality={75}
                  sizes="(max-width: 768px) 160px, 180px"
                  className="h-[86px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>

              <h3
                className="mt-3 text-[1.38rem] font-bold leading-tight tracking-tight text-[#071f5f] sm:text-[1.48rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                {reason.title}
              </h3>

              <p
                className="mt-4 text-[15px] leading-[1.85] text-black sm:text-[16px]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
