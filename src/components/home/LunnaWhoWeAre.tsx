"use client";

import React from "react";

interface GeometricFeature {
  title: string;
  description: string;
  svgIcon: React.ReactNode;
}

const FEATURES: GeometricFeature[] = [
  {
    title: "Photography",
    description: "Natus error sit voluptatem accus auntim doloremque lautan.",
    svgIcon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="18" stroke="#fdfe65" strokeWidth="2.5" />
        <circle cx="21" cy="21" r="8" fill="#fdfe65" />
        <path d="M12 9L16 4H26L30 9" stroke="#1d1d1d" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Web Design",
    description: "Natus error sit voluptatem accus auntim doloremque lautan.",
    svgIcon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <rect x="5" y="7" width="32" height="26" rx="3" stroke="#fdfe65" strokeWidth="2.5" />
        <line x1="5" y1="15" x2="37" y2="15" stroke="#1d1d1d" strokeWidth="2" />
        <circle cx="10" cy="11" r="1.5" fill="#1d1d1d" />
        <circle cx="15" cy="11" r="1.5" fill="#1d1d1d" />
      </svg>
    ),
  },
  {
    title: "Art Direction",
    description: "Natus error sit voluptatem accus auntim doloremque lautan.",
    svgIcon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <polygon points="21,5 37,35 5,35" stroke="#fdfe65" strokeWidth="2.5" />
        <circle cx="21" cy="25" r="4" fill="#1d1d1d" />
      </svg>
    ),
  },
  {
    title: "Creative Promo",
    description: "Natus error sit voluptatem accus auntim doloremque lautan.",
    svgIcon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <rect x="7" y="7" width="28" height="28" stroke="#fdfe65" strokeWidth="2.5" transform="rotate(45 21 21)" />
        <circle cx="21" cy="21" r="3" fill="#1d1d1d" />
      </svg>
    ),
  },
];

export const LunnaWhoWeAre: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 md:py-36 border-b border-[#e4eac8] bg-[#ffffff]">
      {/* Expansive Full-Width Container */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column: Subtitle, Big Title & Geometric Graphic (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#a5a6aa]">
              <span className="w-2 h-2 rounded-full bg-[#fdfe65] border border-[#0c0d10]" />
              <span>who we are</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1d1d1d] tracking-tight leading-[1.05]">
              We Create Beauty, Style & Usability
            </h2>

            <p className="text-base sm:text-lg text-[#595959] leading-relaxed max-w-lg font-normal">
              Every curve, line, and typeface we craft is rooted in mathematical balance and intentional brand emotion. We design marks that thrive effortlessly across both physical luxury substrates and digital viewports.
            </p>

            {/* Lunna Geometric Graphic Accent (circle.png style SVG) */}
            <div className="pt-4">
              <svg
                width="320"
                height="130"
                viewBox="0 0 350 155"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full drop-shadow-xs"
              >
                <circle cx="100" cy="77" r="60" stroke="#1d1d1d" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="175" cy="77" r="60" fill="#fdfe65" />
                <circle cx="250" cy="77" r="60" stroke="#1d1d1d" strokeWidth="2" />
                <path d="M30 77 H320" stroke="#1d1d1d" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* Right Column: 4 Geometric Icons & Features Grid (2x2) (lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 pt-4 lg:pt-6">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="p-6 sm:p-8 rounded-2xl bg-[#fafcf4] border border-[#e4eac8] space-y-3 sm:space-y-4 group hover:bg-[#ffffff] hover:border-[#1d1d1d]/30 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                {/* Yellow Geometric Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#ffffff] border border-[#e4eac8] flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                  {feat.svgIcon}
                </div>

                {/* Feature Title */}
                <h4 className="text-xl sm:text-2xl font-bold text-[#1d1d1d] tracking-tight">
                  {feat.title}
                </h4>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#595959] leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
