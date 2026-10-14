"use client";

import React from "react";

interface CounterItem {
  number: string;
  label: string;
  code: string;
}

const COUNTERS: CounterItem[] = [
  { number: "98", label: "Projects", code: "01 // LOGO MARKS" },
  { number: "65", label: "People", code: "02 // CLIENTS" },
  { number: "10", label: "Years", code: "03 // EXPERIENCE" },
  { number: "15", label: "Offices", code: "04 // GLOBAL CITIES" },
];

export const LunnaCounterModern: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 md:py-28 border-b border-[#e4eac8] bg-[#fafcf4] relative">
      {/* Expansive Full-Width Container */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-left">
          {COUNTERS.map((item, idx) => (
            <div
              key={item.label}
              className={`space-y-3 relative group ${
                idx !== 0 ? "lg:border-l lg:border-[#e4eac8] lg:pl-10 xl:pl-14" : ""
              }`}
            >
              {/* Unique Registration Code Tag */}
              <div className="text-[11px] font-mono font-bold text-[#84878f] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fdfe65] border border-[#0c0d10]" />
                <span>{item.code}</span>
              </div>

              {/* Massive Display Numerals */}
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-bold text-[#1d1d1d] tracking-tight leading-none group-hover:text-[#0c0d10] transition-colors">
                {item.number}
              </div>

              {/* Label */}
              <div className="text-sm sm:text-base font-bold uppercase tracking-widest text-[#595959]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
