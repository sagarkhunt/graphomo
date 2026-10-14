"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServiceSlide {
  id: string;
  num: string;
  title: string;
  description: string;
  link: string;
  shapeSvg: React.ReactNode;
}

const SERVICE_SLIDES: ServiceSlide[] = [
  {
    id: "ui-ux",
    num: "01",
    title: "UI/UX & Logo Design",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Quia voluptas sit aut odit aut fugit. Dicta sunt explicabo sit. We construct memorable logomarks with golden-ratio harmony and razor-sharp geometric precision.",
    link: "/services/custom-logo-design",
    shapeSvg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="26" stroke="#0c0d10" strokeWidth="2.5" />
        <rect x="20" y="20" width="20" height="20" fill="#0c0d10" />
      </svg>
    ),
  },
  {
    id: "branding",
    num: "02",
    title: "Branding Systems",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Quia voluptas sit aut odit aut fugit. Dicta sunt explicabo. Complete visual identity systems, typography guidelines, and cohesive color architectures that build enterprise value.",
    link: "/services/brand-identity-system",
    shapeSvg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="8" y="8" width="44" height="44" stroke="#0c0d10" strokeWidth="2.5" />
        <circle cx="30" cy="30" r="14" fill="#0c0d10" />
      </svg>
    ),
  },
  {
    id: "development",
    num: "03",
    title: "Development & Guidelines",
    description:
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Quia voluptas sit aspernatur aut odit. Mathematical logo grids, vector assets, master design tokens, and scalable digital design kits.",
    link: "/process",
    shapeSvg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <polygon points="30,8 52,50 8,50" stroke="#0c0d10" strokeWidth="2.5" />
        <circle cx="30" cy="36" r="6" fill="#0c0d10" />
      </svg>
    ),
  },
  {
    id: "marketing",
    num: "04",
    title: "Marketing & Collateral",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Quia voluptas sit aut odit aut fugit. Dicta sunt explicabo. High-impact stationery, foil-stamped business cards, packaging mockups, and social media brand kits.",
    link: "/services",
    shapeSvg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="10" y="10" width="40" height="40" stroke="#0c0d10" strokeWidth="2.5" transform="rotate(45 30 30)" />
        <circle cx="30" cy="30" r="5" fill="#0c0d10" />
      </svg>
    ),
  },
  {
    id: "support",
    num: "05",
    title: "Support & Evolution",
    description:
      "Quia voluptas sit aspernatur aut odit aut fugit. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit aut fugit quia. Continuous creative direction and asset support as your business scales into global markets.",
    link: "/contact",
    shapeSvg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="15" y="10" width="30" height="40" rx="4" stroke="#0c0d10" strokeWidth="2.5" />
        <line x1="22" y1="22" x2="38" y2="22" stroke="#0c0d10" strokeWidth="2.5" />
        <line x1="22" y1="30" x2="38" y2="30" stroke="#0c0d10" strokeWidth="2.5" />
      </svg>
    ),
  },
];

export const LunnaServicesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = SERVICE_SLIDES[activeTab];

  return (
    <section className="py-20 sm:py-28 md:py-36 border-b border-[#e4eac8] bg-[#ffffff]">
      {/* Expansive Full-Width Container */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Active Service Card (Lunna elementor-col-50) */}
          <div className="lg:col-span-6 bg-[#fafcf4] rounded-3xl p-8 sm:p-12 md:p-16 lg:p-14 xl:p-20 border border-[#e4eac8] relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md">
            {/* Ambient Background Number */}
            <div className="absolute top-2 right-8 text-[140px] sm:text-[200px] font-bold text-[#e4eac8]/40 select-none pointer-events-none leading-none">
              {current.num}
            </div>

            <div className="relative z-10 space-y-6 sm:space-y-8">
              {/* Geometric Figure & Number Badge */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#fdfe65] border border-[#0c0d10] flex items-center justify-center shadow-md">
                  {current.shapeSvg}
                </div>
                <div className="h-10 w-[2px] bg-[#e4eac8]" />
                <div className="space-y-0.5">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#595959] block">
                    Core Capability
                  </span>
                  <span className="text-sm font-mono font-bold text-[#0c0d10]">
                    SPECIFICATION // {current.num}
                  </span>
                </div>
              </div>

              {/* Service Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#1d1d1d] tracking-tight">
                {current.title}
              </h2>

              {/* Service Detailed Copy */}
              <p className="text-base sm:text-lg text-[#595959] leading-relaxed max-w-xl font-normal">
                {current.description}
              </p>

              {/* Read More Link with Icon */}
              <div className="pt-2">
                <Link
                  href={current.link}
                  className="inline-flex items-center gap-3 text-sm sm:text-base font-bold text-[#1d1d1d] hover:text-[#0c0d10] uppercase tracking-wider pb-1.5 border-b-2 border-[#1d1d1d] hover:border-[#fdfe65] transition-all group"
                >
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4 text-[#1d1d1d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Lunna Intro Copy + Interactive Tab Controls (controller-tools-3) */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-12">
            {/* Lunna Intro Text */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-[#a5a6aa] block">
                how we execute
              </span>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1d1d1d] leading-snug">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </p>
              <p className="text-sm sm:text-base text-[#595959] leading-relaxed max-w-xl">
                Every discipline is seamlessly unified under one independent master director to ensure absolute visual rigor.
              </p>
            </div>

            {/* Interactive Tab List with Title Buttons (slider_pagination_style_title) */}
            <div className="space-y-3 sm:space-y-3.5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#a5a6aa] block mb-2">
                Select Capabilities
              </span>
              {SERVICE_SLIDES.map((slide, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? "bg-[#fafcf4] border-2 border-[#1d1d1d] shadow-md"
                        : "bg-transparent border border-[#e4eac8] hover:bg-[#fafcf4] hover:border-[#1d1d1d]/40"
                    }`}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span
                        className={`text-xs sm:text-sm font-mono font-bold transition-colors ${
                          isActive ? "text-[#0c0d10]" : "text-[#a5a6aa]"
                        }`}
                      >
                        {slide.num}
                      </span>
                      <span
                        className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                          isActive
                            ? "text-[#1d1d1d]"
                            : "text-[#595959] group-hover:text-[#1d1d1d]"
                        }`}
                      >
                        {slide.title}
                      </span>
                    </div>

                    <div
                      className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#fdfe65] border-2 border-[#0c0d10] scale-125"
                          : "bg-transparent border border-[#a5a6aa] group-hover:border-[#0c0d10]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
