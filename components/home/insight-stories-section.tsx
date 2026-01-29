"use client";

import { useState } from "react";
import SectionHeader from "@/components/section-header";
import Image from "next/image";

interface Story {
  id: number;
  title: string;
  subtitle: string;
  requirement: string;
  image: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: "PREDICTIVE MAINTENANCE FOR 3G/4G ANTENNA",
    subtitle:
      "For A Subsidiary Of A South Korean Telecommunications Company That Offers Mobile, Internet, And IPTV Services.",
    requirement:
      "Collect Log Data From Thousands Of 3G/4G Transmission Stations Supplied By Multiple Telecom Equipment Vendors, Make Failure Prediction, And Aid Scheduled Maintenance",
    image: "/images/default.jpg",
  },
  {
    id: 2,
    title: "BIG DATA ANALYTICS FOR RETAIL",
    subtitle:
      "For China's Leading Sports Retailer With Thousands Of Stores Across The Country.",
    requirement:
      "Analyze Customer Behavior, Sales Patterns, And Inventory Management To Optimize Store Performance And Increase Revenue Through Data-Driven Insights",
    image: "/images/default.jpg",
  },
  {
    id: 3,
    title: "AI-POWERED SECURITY MONITORING",
    subtitle:
      "For A Major Financial Institution Requiring Advanced Threat Detection And Response Capabilities.",
    requirement:
      "Implement Real-Time Security Monitoring Using Machine Learning To Detect Anomalies, Prevent Cyber Attacks, And Ensure Compliance With Industry Standards",
    image: "/images/default.jpg",
  },
];

interface InsightStoriesSectionProps {
  maxWidth?: string;
}

export default function InsightStoriesSection({
  maxWidth = "max-w-7xl",
}: InsightStoriesSectionProps) {
  const [currentStory, setCurrentStory] = useState(0);

  const handlePrevious = () => {
    setCurrentStory((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentStory((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const story = stories[currentStory];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader title="OUR INSIGHT STORIES" />

        <div className={`${maxWidth} mx-auto mt-16`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-start">
            <div className="space-y-4 md:space-y-3">
              <h3 className="text-5xl font-bold text-gray-900 leading-tight uppercase line-clamp-4 h-[5em]">
                {story.title}
              </h3>
              <p className="text-lg md:text-sm text-gray-600 leading-relaxed">
                {story.subtitle}
              </p>
              <div className="flex justify-end">
                <button className="text-cyan-500 hover:text-cyan-600 text-lg md:text-sm font-medium transition-colors duration-200">
                  Read more...
                </button>
              </div>
            </div>

            <div className="relative order-first md:order-1 flex flex-col items-center">
              <div className="relative w-48 h-66">
                <div
                  className="absolute inset-0 overflow-hidden shadow-xl"
                  style={{ borderRadius: "50% 50% 10% 10% / 40% 40% 10% 10%" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-pink-300 via-purple-400 to-indigo-900" />
                  <div className="relative w-full h-full">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block md:order-2 space-y-3">
              <h4 className="text-lg font-bold text-gray-900">Requirement</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {story.requirement}
              </p>
            </div>

            <div className="block md:hidden space-y-4">
              <h4 className="text-2xl font-bold text-gray-900">Requirement</h4>
              <p className="text-base text-gray-700 leading-relaxed">
                {story.requirement}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-1 mt-8">
            <div
              onClick={handlePrevious}
              className="size-10 flex items-center justify-center text-pink-500 hover:text-pink-600 transition-colors duration-200 cursor-pointer"
              role="button"
              aria-label="Previous story"
            >
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-12 border-r-current md:border-t-10 md:border-b-10 md:border-r-16" />
            </div>

            <div
              onClick={handleNext}
              className="size-10 flex items-center justify-center text-pink-500 hover:text-pink-600 transition-colors duration-200 cursor-pointer"
              role="button"
              aria-label="Next story"
            >
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-12 border-l-current md:border-t-10 md:border-b-10 md:border-l-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
