"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselSlide {
  title: string;
  backgroundImage: string;
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: CarouselSlide[] = [
    {
      title: "Skill Assessment",
      backgroundImage: "/images/homepage/Carousel/Drivers License.jpg",
    },
    {
      title: "Quiz Excellence",
      backgroundImage: "/images/homepage/Carousel/Pick - Laptop.jpg",
    },
    {
      title: "Learning Journey",
      backgroundImage: "/images/homepage/Carousel/Secure Center.jpg",
    },
    {
      title: "Hiring Simplified",
      backgroundImage: "/images/homepage/Carousel/Skill Library.jpg",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="relative w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : index < currentSlide
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={slide.backgroundImage}
              alt={`${slide.title} background`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full shadow-lg z-20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full shadow-lg z-20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-12" : "bg-white/50 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
