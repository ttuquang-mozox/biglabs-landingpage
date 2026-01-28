import Image from "next/image";
import SectionHeader from "./section-header";

interface CardData {
  title: string;
  image: string;
  subtitle?: string;
  extra?: string;
}

const VIETNAM_CARDS: CardData[] = [
  {
    title: "Cybersecurity Online Services",
    image: "/images/default.jpg",
  },
  {
    title: "Product Development",
    image: "/images/default.jpg",
  },
  {
    title: "ITO Services",
    image: "/images/default.jpg",
  },
];

const HK_CHINA_CARDS: CardData[] = [
  {
    title: "Protection of Critical Infrastructure",
    image: "/images/default.jpg",
    subtitle: "Cybersecurity Services",
  },
];

const USA_CARDS: CardData[] = [
  {
    title: "Access to the World's largest ITO market",
    image: "/images/default.jpg",
    subtitle: "Fintech, Healthcare",
    extra: "AI/ML - Cybersecurity",
  },
];

const JAPAN_CARDS: CardData[] = [
  {
    title: "ITO",
    image: "/images/default.jpg",
    subtitle: "Digital Transformation",
    extra: "Cybersecurity",
  },
];

export default function BusinessModelSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="BUSINESS MODEL"
          description="Our business is modelled around software outsourcing, and product development in the Cybersecurity area"
        />

        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h3 className="text-4xl font-bold text-center mb-2">
              <span className="text-cyan-600">VIETNAM</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VIETNAM_CARDS.map((card, index) => (
                <div key={index} className="group flex flex-col">
                  <div className="relative h-32 overflow-hidden rounded-xl mb-2 cursor-pointer">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-md font-normal text-gray-900 leading-tight">
                      {card.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-4xl font-medium text-center">
                <span className="text-cyan-500">HK/CHINA</span>
              </h3>
              {HK_CHINA_CARDS.map((card, index) => (
                <div key={index} className="group flex flex-col h-full">
                  <div className="relative h-32 overflow-hidden rounded-xl mb-2 cursor-pointer">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center space-y-1 flex-1">
                    <h4 className="text-md font-normal text-gray-900 leading-tight">
                      {card.title}
                    </h4>
                    {card.subtitle && (
                      <p className="text-md font-normal text-gray-900 leading-tight">
                        {card.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-4xl font-medium text-center">
                <span className="text-cyan-500">USA</span>
              </h3>
              {USA_CARDS.map((card, index) => (
                <div key={index} className="group flex flex-col h-full">
                  <div className="relative h-32 overflow-hidden rounded-xl mb-2 cursor-pointer">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center space-y-1 flex-1">
                    <h4 className="text-md font-normal text-gray-900 leading-tight">
                      {card.title}
                    </h4>
                    {card.subtitle && (
                      <p className="text-md font-normal text-gray-900 leading-tight">
                        {card.subtitle}
                      </p>
                    )}
                    {card.extra && (
                      <p className="text-md font-normal text-gray-900 leading-tight">
                        {card.extra}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-4xl font-medium text-center">
                <span className="text-cyan-500">Japan</span>
                <span className="text-cyan-400 font-light ml-2 text-2xl">
                  [Later]
                </span>
              </h3>
              {JAPAN_CARDS.map((card, index) => (
                <div key={index} className="group flex flex-col h-full">
                  <div className="relative h-32 overflow-hidden rounded-xl mb-2 cursor-pointer">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center space-y-1 flex-1">
                    <h4 className="text-md font-normal text-gray-900 leading-tight">
                      {card.title}
                    </h4>
                    {card.subtitle && (
                      <p className="text-md font-normal text-gray-900 leading-tight">
                        {card.subtitle}
                      </p>
                    )}
                    {card.extra && (
                      <p className="text-md font-normal text-gray-900 leading-tight">
                        {card.extra}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
