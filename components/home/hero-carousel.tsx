"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroCarouselProps {
  slides: {
    id: number;
    title: string;
    subtitle: string;
    highlight: string;
    image: string;
  }[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white max-w-7xl mx-auto">
      <div className="relative w-full h-[450px] overflow-hidden bg-linear-to-br from-purple-900 via-purple-700 to-blue-600 rounded-t-2xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-700/80 to-blue-600/70" />
            </div>

            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-lg animate-pulse" />
              <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white/20 rounded-lg animate-pulse delay-300" />
              <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-white/20 rounded-lg animate-pulse delay-700" />
            </div>

            <div className="relative h-full flex items-center justify-center">
              <div className="absolute top-20 px-6 text-center">
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-1 animate-fade-in">
                  {slide.title}
                  <br />
                  {slide.subtitle}
                </h1>
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300 text-3xl md:text-4xl lg:text-5xl font-black tracking-wider mb-8 animate-fade-in-up">
                  {slide.highlight}
                </h2>
              </div>
            </div>

            <div className="absolute bottom-20 left-0 right-0 flex justify-center items-end pointer-events-none">
              <div className="relative w-full max-w-4xl h-64 md:h-80">
                <div className="absolute top-10 left-10 w-16 h-16 opacity-40 animate-float">
                  <div className="w-full h-full border-2 border-white/30 rounded-lg backdrop-blur-sm" />
                </div>
                <div className="absolute top-20 right-20 w-12 h-12 opacity-40 animate-float-delayed">
                  <div className="w-full h-full border-2 border-white/30 rounded-full backdrop-blur-sm" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="flex justify-center gap-3 py-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide
                  ? "bg-cyan-500 "
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
