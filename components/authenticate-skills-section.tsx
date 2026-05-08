"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AuthenticateSkillsSection() {
  const [isShuffled, setIsShuffled] = useState(false);

  // Automatic 3-second shuffling cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setIsShuffled((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Side-by-Side Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12 md:gap-8">
          
          {/* ================= LEFT SIDE SHUFFLING STACK ================= */}
          <div className="flex justify-center items-center h-[400px] md:h-[480px] relative">
            {/* The container defines the exact aspect ratio of a portrait card (approx 3:4) */}
            <div className="relative w-full max-w-[280px] aspect-[3/4]">
              
              {/* Card 1 (Skills 1) */}
              <div
                className={`absolute inset-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-700 ease-in-out ${
                  !isShuffled
                    ? "z-20 scale-100 -rotate-6 translate-y-0"
                    : "z-10 scale-95 rotate-3 translate-y-4 opacity-80"
                }`}
              >
                <div className="relative w-full h-full bg-[#f8fafc]">
                  <Image
                    src="/images/homepage/skills_1.png"
                    alt="Professional working at night"
                    fill
                    priority
                    className="object-contain p-1 rounded-2xl" 
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Card 2 (Skills 2) */}
              <div
                className={`absolute inset-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-700 ease-in-out ${
                  isShuffled
                    ? "z-20 scale-100 -rotate-6 translate-y-0"
                    : "z-10 scale-95 rotate-3 translate-y-4 opacity-80"
                }`}
              >
                <div className="relative w-full h-full bg-[#f8fafc]">
                  <Image
                    src="/images/homepage/skills_2.png"
                    alt="Professional in tech environment"
                    fill
                    className="object-contain p-1 rounded-2xl"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ================= CENTER CONTENT ================= */}
          <div className="text-center px-4 z-30">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#00418d] leading-tight mb-6">
              Authenticate Skills,
              <br />
              <span className="text-gray-900">Simplify Hiring</span>
            </h2>
            <div className="w-12 h-1 bg-[#00418d] mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              SkillKwiz ensures professionals are evaluated accurately in their
              chosen fields. Our secure testing centers provide authenticated
              skill assessments, giving you instant access to verified
              reports—eliminating the need for lengthy technical interviews.
            </p>
          </div>

          {/* ================= RIGHT SIDE SHUFFLING STACK ================= */}
          <div className="flex justify-center items-center h-[400px] md:h-[480px] relative">
            {/* The container defines the exact aspect ratio of a portrait card (approx 3:4) */}
            <div className="relative w-full max-w-[280px] aspect-[3/4]">
              
              {/* Card 3 (Skills 3) */}
              <div
                className={`absolute inset-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-700 ease-in-out ${
                  !isShuffled
                    ? "z-20 scale-100 rotate-6 translate-y-0"
                    : "z-10 scale-95 -rotate-3 translate-y-4 opacity-80"
                }`}
              >
                <div className="relative w-full h-full bg-[#f8fafc]">
                  <Image
                    src="/images/homepage/skills_3.png"
                    alt="Professional at workstation"
                    fill
                    className="object-contain p-1 rounded-2xl"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Card 4 (Skills 4) */}
              <div
                className={`absolute inset-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-700 ease-in-out ${
                  isShuffled
                    ? "z-20 scale-100 rotate-6 translate-y-0"
                    : "z-10 scale-95 -rotate-3 translate-y-4 opacity-80"
                }`}
              >
                <div className="relative w-full h-full bg-[#f8fafc]">
                  <Image
                    src="/images/homepage/skills_4.png"
                    alt="Business professional looking at digital interface"
                    fill
                    className="object-contain p-1 rounded-2xl"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}