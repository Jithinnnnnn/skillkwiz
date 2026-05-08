import Link from "next/link";

export default function WhyChooseSection() {
  return (
    <section className="py-16 text-white relative overflow-hidden">
      {/* Main container with blue background in the middle and white sides */}
      <div className="absolute inset-0 flex">
        {/* Middle section with blue backgrounds */}
        <div className="w-[100%] relative">
          {/* Top blue background */}
          <div className="absolute top-0 left-0 right-0 h-[40%]">
            <img
              src="/images/homepage/why_choose_banner_2.png"
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </div>

          {/* Bottom blue background with globe */}
          <div className="absolute bottom-0 left-0 right-0 h-[40%]">
            <img
              src="/images/homepage/why_choose_banner_2.png"
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />

            {/* Globe animation on bottom background */}
            <div className="absolute inset-0 flex justify-center items-center opacity-60">
              <img
                src="/images/homepage/home_globe.gif"
                alt=""
                className="w-full max-w-2xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2">
          Why Choose{" "}
          <span className="text-white">
            Skill<span className="text-[#f73e5d]">Kwiz</span>
          </span>{" "}
          ?
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-sm">
          Discover our unique value propositions designed to enhance your
          recruitment strategy.
          <br />
          Experience the difference SkillKwiz can make in your organization.
        </p>

        {/* Card container with 30px gap between cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-16">
          {/* Skill Library Card */}
          <div className="bg-white rounded-xl p-8 text-black w-full md:w-80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#c3dfff] to-[#a0c9ff] rounded-full flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src="/images/homepage/books.gif"
                  alt=""
                  className="w-24 h-24 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-2xl font-bold text-center mb-4">
              Skill Library
            </h3>
            <p className="text-gray-600 text-center text-base leading-relaxed">
              Access our extensive library of skill assessments covering
              technical, professional, and soft skills for comprehensive
              candidate evaluation.
            </p>
          </div>

          {/* Secure Testing Card */}
          <div className="bg-white rounded-xl p-8 text-black w-full md:w-80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#c3dfff] to-[#a0c9ff] rounded-full flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src="/images/homepage/guard.gif"
                  alt=""
                  className="w-24 h-24 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-2xl font-bold text-center mb-4">
              Secure Testing
            </h3>
            <p className="text-gray-600 text-center text-base leading-relaxed">
              Our testing is done in secure content-aware environments.
              Candidates are authenticated through multiple identification
              layers including biometric verification such as facial
              recognition, security numbers, which are then periodically
              validated throughout the test.
            </p>
          </div>

          {/* Flexible Pricing Card */}
          <div className="bg-white rounded-xl p-8 text-black w-full md:w-80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#c3dfff] to-[#a0c9ff] rounded-full flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src="/images/homepage/dollar.gif"
                  alt=""
                  className="w-24 h-24 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-2xl font-bold text-center mb-4">
              Flexible Pricing
            </h3>
            <p className="text-gray-600 text-center text-base leading-relaxed">
              Our pricing model is designed to scale with your needs. Pay only
              for what you use with our credit-based system. Larger
              organizations can benefit from our Enterprise plan with unlimited
              testing and custom features.
            </p>
          </div>
        </div>

        <div className="text-center mt-32 md:mt-24 relative z-20">
          <h3 className="text-2xl font-bold mb-4">
            Join the Talent Revolution
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-sm">
            Take the first step towards transforming your hiring process. Make
            selections in line with our tried and tested platform.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-[#f7d03e] text-black px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
