import AboutSection from "@/components/about-section";
import HeroCarousel from "@/components/home/hero-carousel";
import InsightStoriesSection from "@/components/home/insight-stories-section";
import ServicesSection from "@/components/home/services-section";
import SendEmailSection from "@/components/send-email-section";

const slides = [
  {
    id: 1,
    title: "A TRUSTED 1",
    subtitle: "ITO PARTNER OF YOUR",
    highlight: "AI TRANSFORMATION",
    image: "/images/default.jpg",
  },
  {
    id: 2,
    title: "A TRUSTED 2",
    subtitle: "ITO PARTNER OF YOUR",
    highlight: "AI TRANSFORMATION",
    image: "/images/default.jpg",
  },
  {
    id: 3,
    title: "A TRUSTED 3",
    subtitle: "ITO PARTNER OF YOUR",
    highlight: "AI TRANSFORMATION",
    image: "/images/default.jpg",
  },
];

export default function Home() {
  return (
    <>
      <HeroCarousel slides={slides} />
      <AboutSection />
      <ServicesSection />
      <InsightStoriesSection />
      <SendEmailSection />
    </>
  );
}
