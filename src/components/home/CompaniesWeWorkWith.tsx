import Image from "next/image";
import Container from "@/components/ui/Container";

const companies = [
  {
    name: "Heaven Seed Academy",
    logo: "/images/companies/heavenseedacademy.png",
  },
  {
    name: "Himalay Rental Tours",
    logo: "/images/companies/himalay-rental-tours.png",
  },
  {
    name: "Dan & Shi Pest Control",
    logo: "/images/companies/danandshi.png",
  },
  {
    name: "Travel Holiday Mauritius",
    logo: "/images/companies/travel-holiday-mauritius.png",
  },
  {
    name: "Ram Pottery",
    logo: "/images/companies/rampottery.png",
  },
  {
    name: "Multiimaint",
    logo: "/images/companies/multiimaint.png",
  },
  {
    name: "KS Contracting",
    logo: "/images/companies/kscontracting.png",
  },
  {
    name: "Mea Kreation",
    logo: "/images/companies/meakreation.png",
  },
];

export default function CompaniesWeWorkWith() {
  return (
    <section
      aria-labelledby="companies-we-work-with-heading"
      className="w-full bg-white py-10 sm:py-12 lg:py-14"
    >
      <Container className="max-w-[1520px]">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="companies-we-work-with-heading"
            className="text-balance text-3xl font-bold tracking-tight text-[#071f5f] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            Companies We Work With
          </h2>

          <p
            className="mx-auto mt-4 text-pretty text-[14px] leading-7 text-[#111827] sm:text-[15px] lg:text-[16px]"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Revolutionizing the world through technology&apos;s lens
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[1320px] overflow-hidden rounded-[18px] bg-[#f5f5f5] px-4 py-4 shadow-[0_18px_45px_rgba(7,18,38,0.06)] sm:mt-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="flex h-[90px] items-center justify-center rounded-[14px] px-3 py-3 transition duration-300 hover:bg-white hover:shadow-[0_12px_26px_rgba(7,18,38,0.08)] sm:h-[96px]"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={320}
                  height={160}
                  priority={index < 4}
                  loading={index < 4 ? "eager" : "lazy"}
                  fetchPriority={index < 4 ? "high" : "auto"}
                  quality={75}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 140px"
                  className="max-h-[64px] w-auto max-w-[135px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
