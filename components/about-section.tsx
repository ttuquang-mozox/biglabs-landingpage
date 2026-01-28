import Image from "next/image";
import SectionHeader from "@/components/section-header";

export interface FeatureCard {
  id: number;
  title: string;
  background: string;
  image: string;
  items: string[];
}

interface FeatureCardsProps {
  title: string;
  cards: FeatureCard[];
  backgroundColor?: string;
}
const aboutCards: FeatureCard[] = [
  {
    id: 1,
    title: "KEY TECHNOLOGY",
    background: "from-purple-600 via-pink-600 to-purple-700",
    image: "/images/default.jpg",
    items: [
      "Domain Knowledge",
      "Top Big Data and Machine Learning experts",
      "Black Diamond ng-SIEM product for cybersecurity",
      "Super LavaLamp for data transformation",
      "AI capable and ready",
    ],
  },
  {
    id: 2,
    title: "REFERENCE CUSTOMERS IN ASIA",
    background: "from-gray-900 via-blue-950 to-black",
    image: "/images/default.jpg",
    items: [
      "Korean mobile operator",
      "China's largest shopping mall operator",
      "China's leading sports retailer",
      "Singapore associate company, Blockchain loyalty app",
      "Hongkong's leading Cybersecurity consulting associate company",
    ],
  },
  {
    id: 3,
    title: "MARKET COMPETITIVENESS",
    background: "from-gray-400 via-gray-500 to-gray-600",
    image: "/images/default.jpg",
    items: [
      "Technology advantage in competition with global companies",
      "Rich Big Data and Machine Learning market reference",
      "Entering new markets by top-class solutions",
    ],
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader title="ABOUT US" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {aboutCards.map((card) => (
            <div
              key={card.id}
              className="group relative transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className="relative h-[500px] overflow-hidden transition-all duration-500 rounded-t-2xl"
                style={{
                  clipPath: "ellipse(140% 100% at 50% 0%)",
                  filter:
                    "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
                }}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${card.background}`}
                />

                <div className="absolute inset-0 opacity-40">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-black/20" />

                <div className="relative h-full flex flex-col p-6 pb-20">
                  <h3 className="text-xl font-bold text-white text-center leading-tight mt-2 max-w-[240px] mx-auto">
                    {card.title}
                  </h3>

                  <div className="absolute bottom-8 left-0 right-0 bg-white rounded-2xl p-4 mx-2">
                    <ul className="space-y-1">
                      {card.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-800"
                        >
                          <span className="text-gray-400 flex-shrink-0">•</span>
                          <span className="leading-relaxed font-medium">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
