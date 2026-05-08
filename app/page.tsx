"use client";
import { useEffect, useRef, useState } from "react";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";
import LetterCarousel from "@/components/letter-carousel";
import HeroCarousel from "@/components/banner-carousel";

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Cleanup function for any side effects if needed
    return () => {};
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Main container with relative positioning */}
      <div className="relative">
        {/* Hero Carousel Section at the top */}
        <section
          ref={heroRef}
          className="relative w-full h-[80vh] text-white overflow-hidden"
          style={{ zIndex: 1 }}
        >
          <HeroCarousel />
        </section>

       

        {/* SkillKwiz Tag - Positioned below the call center image */}
        <div className="relative mt-8" style={{ zIndex: 3 }}>
          <div className="bg-[#f6c648] text-[#00418d] py-4 px-6 inline-block transform skew-x-12 -ml-4">
            <div className="transform -skew-x-12">
              <h2 className="text-xl font-bold">
                SkillKwiz – Verified Skills, Simplified Hiring
              </h2>
            </div>
          </div>

          {/* Letter Carousel - Added right after the SkillKwiz tag */}
          <div className="mt-8 mb-4">
            <LetterCarousel />
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="bg-white relative" style={{ zIndex: 3 }}>
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}
