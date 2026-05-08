"use client";

import { useState } from "react";
import Image from "next/image";

export default function BlogSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Core blog posts dataset
  const blogPosts = [
    {
      img: "/images/blogpage/1.png",
      title: "The Importance of Upskilling in Today's Job Market",
      subtitle: "Why Upskilling Matters in 2025",
    },
    {
      img: "/images/blogpage/2.png",
      title: "How Gamified Learning Enhances Skill Retention",
      subtitle: "The Psychology Behind Gamification",
    },
    {
      img: "/images/blogpage/3.png",
      title: "Soft Skills vs. Hard Skills: What Matters More?",
      subtitle: "The Difference Between Soft and Hard Skills",
    },
  ];

  // Helper logic to format active hover carousel indicator dots
  const indicatorClasses = (index: number) => {
    return `h-2 rounded-full transition-all duration-300 ${
      hoveredIndex === index ? "w-8 bg-[#00418d]" : "w-2 bg-gray-300"
    }`;
  };

  // Safe client-side execution to download the Report.pdf locally
  const handlePdfDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Stop event propagation to keep card components from firing accidental clicks
    e.stopPropagation();

    const link = document.createElement("a");
    link.href = "/Report.pdf"; // Maps directly to public/Report.pdf in Next.js
    link.download = "Report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#00418d]">
              Mastering Knowledge & Growth
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-8 text-[#272727]">
              In a world of constant change, continuous learning is the key to
              success. Explore insights on skill assessment, learning dynamics, and upskilling.
            </p>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mb-10">
              {blogPosts.map((_, index) => (
                <div key={index} className={indicatorClasses(index)} />
              ))}
            </div>

            {/* Featured Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative mb-4 overflow-hidden rounded-md bg-gray-100 aspect-[380/240]">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      priority={index === 0}
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-w-768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-gray-900">{post.title}</h3>
                  
                  {/* Clickable Subtitle Action Block (Exclusively binds PDF download triggers) */}
                  <div className="mt-1">
                    <button
                      type="button"
                      onClick={handlePdfDownload}
                      className="text-sm text-[#00418d] font-semibold hover:text-[#f73e5d] underline text-left transition-colors focus:outline-none"
                    >
                      {post.subtitle}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Blog Post 4 */}
            <div className="flex flex-col h-full">
              <div className="relative h-60 mb-4 rounded-md overflow-hidden bg-gray-100">
                <Image
                  src="/images/blogpage/4.png"
                  alt="Tech skills"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Top 10 Tech Skills That Can Land You a High-Paying Job
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Why Tech Skills Are Essential in 2025
              </p>
            </div>

            {/* Blog Post 5 */}
            <div className="flex flex-col h-full">
              <div className="relative h-60 mb-4 rounded-md overflow-hidden bg-gray-100">
                <Image
                  src="/images/blogpage/5.png"
                  alt="Learning motivation"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How to Stay Motivated While Learning New Skills
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Why Motivation Is Key to Skill Development
              </p>
            </div>
          </div>

          {/* Knowledge Articles Layout Block */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#00418d]">
              Mastering Knowledge & Growth
            </h2>
            <p className="max-w-4xl mb-12 text-[#272727]">
              Knowledge is the foundation of growth. Embrace new ideas, sharpen
              your skills, and stay inspired with insights that empower you to
              achieve more in both your personal and professional journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 6 */}
              <div className="flex gap-4 mb-6 items-center">
                <div className="w-24 h-24 flex-shrink-0 relative rounded-md overflow-hidden bg-gray-100">
                  <Image
                    src="/images/blogpage/6.png"
                    alt="Online learning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Trends to Watch in 2025</p>
                  <h3 className="text-lg font-bold text-gray-900">The Future of Online Learning</h3>
                </div>
              </div>

              {/* Card 7 */}
              <div className="flex gap-4 mb-6 items-center">
                <div className="w-24 h-24 flex-shrink-0 relative rounded-md overflow-hidden bg-gray-100">
                  <Image
                    src="/images/blogpage/7.png"
                    alt="Career skills"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Trends to Watch in 2025</p>
                  <h3 className="text-lg font-bold text-gray-900">5 Essential Skills to Boost Your Career in 2025</h3>
                </div>
              </div>

              {/* Card 8 */}
              <div className="flex gap-4 mb-6 items-center">
                <div className="w-24 h-24 flex-shrink-0 relative rounded-md overflow-hidden bg-gray-100">
                  <Image
                    src="/images/blogpage/8.png"
                    alt="Gamification"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Trends to Watch in 2025</p>
                  <h3 className="text-lg font-bold text-gray-900">How Gamification Enhances Learning & Engagement</h3>
                </div>
              </div>

              {/* Card 1 */}
              <div className="flex gap-4 mb-6 items-center">
                <div className="w-24 h-24 flex-shrink-0 relative rounded-md overflow-hidden bg-gray-100">
                  <Image
                    src="/images/blogpage/1.png"
                    alt="Career boost"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Trends to Watch in 2025</p>
                  <h3 className="text-lg font-bold text-gray-900">5 Essential Skills to Boost Your Career in 2025</h3>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex gap-4 mb-6 items-center">
                <div className="w-24 h-24 flex-shrink-0 relative rounded-md overflow-hidden bg-gray-100">
                  <Image
                    src="/images/blogpage/4.png"
                    alt="Microlearning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Trends to Watch in 2025</p>
                  <h3 className="text-lg font-bold text-gray-900">The Power of Microlearning</h3>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex gap-4 mb-6 items-center">
                <div className="w-24 h-24 flex-shrink-0 relative rounded-md overflow-hidden bg-gray-100">
                  <Image
                    src="/images/blogpage/2.png"
                    alt="Learning revolution"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Trends to Watch in 2025</p>
                  <h3 className="text-lg font-bold text-gray-900">Revolutionizing the Way We Learn</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}