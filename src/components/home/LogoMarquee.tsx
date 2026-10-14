"use client";

import React from "react";
import Image from "next/image";

export const LogoMarquee: React.FC = () => {
  const industries = [
    "ARCHITECTURAL ATELIERS",
    "HAUTE PARFUMERIE",
    "FINTECH & WEB3",
    "SPECIALTY COFFEE",
    "ORGANIC APOTHECARY",
    "LUXURY STREETWEAR",
    "CREATIVE STUDIOS",
    "VENTURE PLATFORMS"
  ];

  return (
    <div className="py-6 bg-[#0c0d10] text-[#f4f5f1] overflow-hidden border-y border-[#22252d] select-none">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {/* Loop twice for seamless marquee */}
        {[...industries, ...industries].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6 gap-6">
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#f4f5f1]/90 hover:text-[#fdfe65] transition-colors">
              {item}
            </span>
            <div className="relative w-4 h-4 opacity-75">
              <Image
                src="/brand/graphomo-submark.png"
                alt="Graphomo Submark"
                fill
                sizes="16px"
                className="object-contain invert brightness-200"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
