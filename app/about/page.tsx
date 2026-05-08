"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push("/#login-section");
  };

  return (
    <>
      {/* Hero Section - Restructured with explicit relative constraints to prevent overlaying */}
      <section className="w-full relative min-h-[90vh] md:min-h-[80vh] flex items-center bg-[#00418d] text-white overflow-hidden pt-24 pb-12">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Translucent Dark Overlay for enhanced readability */}
        <div className="absolute inset-0 bg-black/40 z-1" />

        {/* Content Wrapper */}
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Main Text Block */}
          <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
              ELEVATE YOUR BUSINESS
            </h1>
            <p className="max-w-2xl text-sm md:text-base mb-8 leading-relaxed text-gray-100 drop-shadow-sm">
              Skill Assessments Done With The Utmost Knowledge, Integrity, Trust,
              Respect And Security. Our Objective Is To Provide You With Accurate
              Insights Into The Skill Levels Of Your Current And Prospective
              Workforce.
            </p>
            <div>
              <button
                onClick={handleSignUpClick}
                className="bg-[#f73e5d] text-white px-8 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all hover:scale-[1.02] active:scale-[0.99] cursor-pointer shadow-lg"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Hero Decorative Globe Image (Aligned on the side on desktop) */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end opacity-40 lg:opacity-75 transition-opacity">
            <div className="relative w-[300px] sm:w-[400px] md:w-[450px] aspect-square">
              <Image
                src="/images/homepage/home_globe.gif"
                alt="SkillKwiz assessment platform"
                fill
                priority
                unoptimized // Prevents console warning for animated image
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Our Vision Card */}
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-[280px] hover:h-[360px]">
            <Image
              src="/images/aboutpage/eye.gif"
              alt="Our Vision Visual representation"
              width={200}
              height={200}
              unoptimized
              className="w-auto h-auto max-h-28 object-contain mb-6 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-[#272727] font-extrabold tracking-wider group-hover:text-white transition-colors duration-300">
              OUR VISION
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 text-sm text-[#272727] group-hover:text-white leading-relaxed">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>

          {/* Our Mission Card */}
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-[280px] hover:h-[360px]">
            <Image
              src="/images/aboutpage/mission.gif"
              alt="Our Mission Visual representation"
              width={200}
              height={200}
              unoptimized
              className="w-auto h-auto max-h-28 object-contain mb-6 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-[#272727] font-extrabold tracking-wider group-hover:text-white transition-colors duration-300">
              OUR MISSION
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 text-sm text-[#272727] group-hover:text-white leading-relaxed">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>

          {/* Our Purpose Card */}
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-[280px] hover:h-[360px]">
            <Image
              src="/images/aboutpage/purpose.gif"
              alt="Our Purpose Visual representation"
              width={200}
              height={200}
              unoptimized
              className="w-auto h-auto max-h-28 object-contain mb-6 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-[#272727] font-extrabold tracking-wider group-hover:text-white transition-colors duration-300">
              OUR PURPOSE
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 text-sm text-[#272727] group-hover:text-white leading-relaxed">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content Block */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <p className="text-[#4a4a4a] text-[17px] leading-relaxed font-normal">
                  We are your partner in skill assessment. Our expertise lies in assessing skill
                  levels in people and quantifying them. Be it prospective candidates for
                  recruitment or your current employees, our standardized assessment will
                  help you benchmark skill levels.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-gray-300 pl-6 py-1">
                  <p className="text-[16px] italic text-[#666666] leading-relaxed font-normal">
                    "SkillKwiz has a single purpose and that is to create stakeholder value by
                    providing best-in-class services in the sphere of skill assessment."
                  </p>
                </div>

                <div className="text-right pr-2">
                  <p className="text-[15px] italic text-[#555555] font-normal">
                    -Venugopal B A
                  </p>
                  <p className="text-[15px] italic text-[#555555] font-normal mt-0.5">
                    CEO, SkillKwiz
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Floating Cards */}
            <div className="w-full lg:w-1/2 flex justify-center gap-4">
              <div className="relative w-full max-w-[450px] aspect-[4/3] flex gap-4">
                <div className="relative flex-1 rounded-xl overflow-hidden shadow-md animate-float-delay-2">
                  <Image
                    src="/images/aboutpage/about_who_we_are-0.png"
                    alt="Team collaboration segment one"
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <div className="relative flex-1 rounded-xl overflow-hidden shadow-md -translate-y-4 animate-float-delay-1">
                  <Image
                    src="/images/aboutpage/about_who_we_are-1.png"
                    alt="Team collaboration segment two"
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <div className="relative flex-1 rounded-xl overflow-hidden shadow-md animate-float-delay-2">
                  <Image
                    src="/images/aboutpage/about_who_we_are-2.png"
                    alt="Team collaboration segment three"
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="w-full bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            
            {/* CEO Profile Image Frame */}
            <div className="w-full md:w-1/3 max-w-[320px] mx-auto md:mx-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <div className="bg-[#f73e5d] p-4 pb-0">
                  <Image
                    src="/images/aboutpage/Venugopal.png"
                    alt="Venugopal B A - CEO Portrait"
                    width={300}
                    height={300}
                    className="w-full h-auto rounded-t-xl object-cover"
                  />
                </div>
                <div className="bg-[#f73e5d] text-white text-center py-4 font-bold tracking-wider text-xl uppercase">
                  CEO
                </div>
              </div>
            </div>

            {/* CEO Bio */}
            <div className="w-full md:w-2/3 space-y-6 pt-4">
              <h2 className="text-3xl font-extrabold text-[#00418d] tracking-tight">
                Our Leadership Journey
              </h2>
              <div className="h-1 w-12 bg-[#f73e5d] rounded-full" />
              <p className="text-[#272727] text-base leading-relaxed">
                Venugopal B A, a veteran leader in the IT industry with
                experience spanning 24 years in senior leadership roles, has
                chosen to take on the mantle of leading SkillKwiz. His
                understanding of one of the key challenges faced by the services
                sector gave birth to the vision that is SkillKwiz today.
              </p>
              <p className="text-[#272727] text-base leading-relaxed">
                With a rich background in the technology industry, he aims to
                establish SkillKwiz as an AI first and foremost company. He is
                poised to take SkillKwiz to its next level of growth by turning
                it into a company that is shaped entirely by the market it
                serves.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-black aspect-video">
            <video
              className="w-full h-full object-cover"
              controls
              preload="none"
              poster="/images/aboutpage/about_video.png"
            >
              <source
                src="/images/aboutpage/about_video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}