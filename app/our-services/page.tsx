import { Metadata } from "next";
import HeroCarousel from "@/components/home/hero-carousel";
import SectionHeader from "@/components/section-header";
import SendEmailSection from "@/components/send-email-section";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Services",
};

const slides = [
  {
    id: 1,
    title: "A TRUSTED",
    subtitle: "ITO PARTNER OF YOUR",
    highlight: "AI TRANSFORMATION",
    image: "/images/default.jpg",
  },
];

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const servicesData: ServiceCard[] = [
  {
    id: 1,
    title: "CYBERSERCURITY",
    description:
      "Biglabs augments your development team and fast-tracks your Cybersecurity product and service go-to-market deadlines, by leveraging our domain expertise and software development skills to expedite your time to market...",
    image: "/images/default.jpg",
  },
  {
    id: 2,
    title: "ARTIFICIAL INTELLIGENT",
    description:
      "Our AI services go beyond simply recommending a few tools. We help customers gain a...",
    image: "/images/default.jpg",
  },
  {
    id: 3,
    title: "BIG DATA & ANALYTICS",
    description:
      "Big data has positive impact to businesses in many ways. Of important are the followings...",
    image: "/images/default.jpg",
  },
  {
    id: 4,
    title: "MACHINE LEARNING",
    description:
      "Biglabs augments your development team and fast-tracks your Cybersecurity product and service go-to-market deadlines, by leveraging our domain expertise and software development skills to expedite your time to market...",
    image: "/images/default.jpg",
  },
  {
    id: 5,
    title: "APP DEVELOPMENT",
    description:
      "Biglabs augments your development team and fast-tracks your Cybersecurity product and service go-to-market deadlines, by leveraging our domain expertise and software development skills to expedite your time to market...",
    image: "/images/default.jpg",
  },
  {
    id: 6,
    title: "SYSTEM INTERGRATION",
    description:
      "Biglabs augments your development team and fast-tracks your Cybersecurity product and service go-to-market deadlines, by leveraging our domain expertise and software development skills to expedite your time to market...",
    image: "/images/default.jpg",
  },
  {
    id: 7,
    title: "CUSTOM PRODUCT DEVELOPMENT",
    description:
      "Biglabs augments your development team and fast-tracks your Cybersecurity product and service go-to-market deadlines, by leveraging our domain expertise and software development skills to expedite your time to market...",
    image: "/images/default.jpg",
  },
  {
    id: 8,
    title: "QA & TESTING",
    description:
      "Biglabs augments your development team and fast-tracks your Cybersecurity product and service go-to-market deadlines, by leveraging our domain expertise and software development skills to expedite your time to market...",
    image: "/images/default.jpg",
  },
];

export default function OurServicesPage() {
  return (
    <>
      <section>
        <div className="container mx-auto px-6">
          <HeroCarousel slides={slides} />

          <div className="max-w-6xl mt-16 mx-auto">
            <SectionHeader title="OUR SERVICES" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                >
                  <div className="p-4 pb-0">
                    <div
                      className="relative h-44 overflow-hidden rounded-xl"
                      style={{ clipPath: "ellipse(120% 100% at 50% 0%)" }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    <h3
                      className={`text-md font-bold text-pink-500 tracking-wide line-clamp-2 min-h-10`}
                    >
                      {service.title}
                    </h3>

                    <p className="text-[10px] text-gray-600 leading-relaxed line-clamp-6 mt-3">
                      {service.description}
                    </p>

                    <button className="text-cyan-500 hover:text-cyan-600 text-sm transition-colors duration-200 uppercase tracking-wide mt-auto pt-3 text-right font-bold cursor-pointer">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <SendEmailSection />
        </div>
      </section>
    </>
  );
}
