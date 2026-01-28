"use client";

import { useState } from "react";
import SectionHeader from "@/components/section-header";
import Image from "next/image";
import HeroCarousel from "@/components/home/hero-carousel";
import SendEmailSection from "@/components/send-email-section";

const slides = [
  {
    id: 1,
    title: "A TRUSTED",
    subtitle: "ITO PARTNER OF YOUR",
    highlight: "AI TRANSFORMATION",
    image: "/images/default.jpg",
  },
];

interface Story {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  requirement: string;
  challenge: string;
  result: string;
  diagram?: string;
}

const storiesData: Story[] = [
  {
    id: 1,
    title: "Predictive maintenance for 3G/4G antenna",
    subtitle:
      "For a subsidiary of a South Korean telecommunications company that offers mobile, internet, and IPTV services.",
    image: "/images/default.jpg",
    requirement:
      "Collect log data from thousands of 3G/4G transmission stations supplied by multiple telecom equipment vendors, make failure prediction, and aid scheduled maintenance.",
    challenge:
      "Develop and supply a turn-key system, customised to the client's multi-vendor environment.",
    result:
      "A Big Data platform based on our LavaLamp product, which uses Elastic Search, wrap around with time-series data transformation and bucket-storage design, and integrated with Kibana's visualisation.",
    diagram: "/images/default.jpg",
  },
  {
    id: 2,
    title: "Indoor Positioning System",
    subtitle:
      "For a major retail chain looking to enhance customer experience through location-based services.",
    image: "/images/default.jpg",
    requirement:
      "Develop an accurate indoor positioning system to track customer movement and provide personalized recommendations in real-time.",
    challenge:
      "Create a scalable solution that works across multiple stores with varying layouts and infrastructure.",
    result:
      "Successfully deployed an IoT-based positioning system with 95% accuracy, integrated with mobile app for personalized shopping experience.",
  },
  {
    id: 3,
    title: "O2O system for China's sportwear company",
    subtitle:
      "For one of China's leading sports retailers with thousands of stores across the country.",
    image: "/images/default.jpg",
    requirement:
      "Bridge online and offline shopping experiences, enable inventory visibility across all channels, and provide seamless customer journey.",
    challenge:
      "Integrate legacy systems with modern e-commerce platform while maintaining real-time inventory synchronization.",
    result:
      "Implemented a comprehensive O2O platform that increased online-to-offline conversion by 40% and improved inventory turnover by 25%.",
  },
  {
    id: 4,
    title: "Blockchain's reward system",
    subtitle:
      "For a Singapore associate company developing a blockchain-based loyalty application.",
    image: "/images/default.jpg",
    requirement:
      "Create a decentralized loyalty rewards system that allows customers to earn and redeem points across multiple merchants.",
    challenge:
      "Ensure security, scalability, and seamless integration with existing merchant POS systems.",
    result:
      "Launched a blockchain-based loyalty platform with smart contracts, supporting 50+ merchants and 100,000+ active users.",
  },
  {
    id: 5,
    title: "1st and 2nd Generation SIEM",
    subtitle: "For a Hong Kong cybersecurity consulting associate company.",
    image: "/images/default.jpg",
    requirement:
      "Develop next-generation Security Information and Event Management (SIEM) solution with AI-powered threat detection.",
    challenge:
      "Process and analyze massive amounts of security logs in real-time while minimizing false positives.",
    result:
      "Delivered Black Diamond ng-SIEM product with machine learning capabilities, reducing threat detection time by 60% and false positives by 70%.",
  },
];

export default function OurStoriesPage() {
  const [selectedStory, setSelectedStory] = useState<Story>(storiesData[0]);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-6 py-20">
        <HeroCarousel slides={slides} />

        <div className="w-4xl mt-16 mx-auto">
          <SectionHeader title="OUR INSIGHT STORIES" />
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              {storiesData.map((story, index) => (
                <button
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  className={`w-full text-left transition-all duration-300 cursor-pointer ${
                    selectedStory.id === story.id
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-80"
                  }`}
                >
                  <div className="relative">
                    <div className="rounded-xl overflow-hidden">
                      <div className="relative h-48 rounded-2xl overflow-hidden">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="py-2">
                        <h3 className="text-base font-bold text-gray-900 leading-snug">
                          Project #{index + 1} : {story.title}
                        </h3>
                      </div>
                    </div>
                    {selectedStory.id === story.id && (
                      <div className="absolute top-2 -right-6 ">
                        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[16px] border-l-gray-900" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {selectedStory.title}
                </h1>
                <p className="text-md text-gray-700 leading-relaxed italic">
                  {selectedStory.subtitle}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold text-pink-500">
                    Requirement
                  </h2>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedStory.requirement}
                </p>
              </div>

              {selectedStory.challenge && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold text-pink-500">
                      Challenge
                    </h2>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedStory.challenge}
                  </p>
                </div>
              )}

              {selectedStory.diagram && (
                <div className="py-4">
                  <Image
                    src={selectedStory.diagram}
                    alt="Solution Diagram"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              )}

              {selectedStory.result && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold text-pink-500">Result</h2>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedStory.result}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <SendEmailSection />
      </div>
    </div>
  );
}
