"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Award } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28 border-b border-[#e4eac8]">
      {/* Background ambient logo-yellow gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#fdfe65]/15 via-[#fafcf4] to-[#fafcf4] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdfe65]/40 border border-[#e4eac8] text-[#0c0d10] text-xs font-bold tracking-wide uppercase shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0c0d10]" />
              <span>Bespoke Logo Design & Brand Identity Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[68px] font-bold text-[#0c0d10] tracking-tight leading-[1.06]">
              We Craft Logos That Build{" "}
              <span className="relative inline-block text-[#0c0d10]">
                Memorable,
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3.5 text-[#fdfe65] -z-10"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 180 3 247 9"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Iconic Brands.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#595959] leading-relaxed max-w-2xl font-normal">
              Bringing your vision to life through rigorous geometric precision, bespoke typography, and strategic visual positioning. We engineer timeless identities for ambitious startups, boutique studios, and luxury ventures worldwide.
            </p>

            {/* CTAs with Logo Yellow Base */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2.5 bg-[#fdfe65] hover:bg-[#edf04c] text-[#0c0d10] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full border border-[#0c0d10]/15 transition-all duration-200 group shadow-md"
              >
                <span>Explore Selected Works</span>
                <ArrowUpRight className="w-4 h-4 text-[#0c0d10] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#ffffff] hover:bg-[#f2f6dc] text-[#0c0d10] font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-full border border-[#e4eac8] transition-all duration-200"
              >
                <span>Book a Discovery Call</span>
              </Link>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#595959] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0c0d10]" />
                <span>100% Original Vector Geometry</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0c0d10]" />
                <span>Full Commercial Copyright Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0c0d10]" />
                <span>48hr Initial Concept Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual - The Official Graphomo Logo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card with the Official Yellow Logo as Centerpiece */}
              <div className="relative bg-[#ffffff] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#e4eac8] hover-lift">
                {/* Top Header of Showcase Card */}
                <div className="flex items-center justify-between pb-5 border-b border-[#e4eac8]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#fdfe65] border border-[#0c0d10]" />
                    <span className="text-xs font-bold tracking-wider text-[#0c0d10] uppercase">
                      Official Brand Identity
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#595959] bg-[#f2f6dc] px-2.5 py-1 rounded">
                    #FDFE65 / 100% VECTOR
                  </span>
                </div>

                {/* The Official Graphomo Logo Showcase Image */}
                <div className="my-6 relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-inner border border-[#e4eac8] bg-[#fdfe65] flex items-center justify-center p-6 group">
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src="/brand/graphomo-official-logo.png"
                      alt="Graphomo — Bringing Your Vision To Life (Official Logo)"
                      fill
                      priority
                      sizes="(max-width: 640px) 100vw, 420px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-center pt-2">
                  <h3 className="text-lg font-bold text-[#0c0d10] tracking-tight">
                    GRAPHOMO STUDIO
                  </h3>
                  <p className="text-xs text-[#595959] uppercase tracking-widest mt-1 font-semibold">
                    Bringing Your Vision To Life
                  </p>
                </div>

                {/* Bottom Specifications Bar */}
                <div className="mt-6 pt-5 border-t border-[#e4eac8] grid grid-cols-3 gap-2 text-center">
                  <div className="bg-[#f2f6dc] p-2.5 rounded-lg border border-[#e4eac8]">
                    <div className="text-[10px] uppercase text-[#595959] tracking-wider font-semibold">Format</div>
                    <div className="text-xs font-bold text-[#0c0d10] mt-0.5">Vector SVG/AI</div>
                  </div>
                  <div className="bg-[#f2f6dc] p-2.5 rounded-lg border border-[#e4eac8]">
                    <div className="text-[10px] uppercase text-[#595959] tracking-wider font-semibold">Precision</div>
                    <div className="text-xs font-bold text-[#0c0d10] mt-0.5">0.01 pt Grid</div>
                  </div>
                  <div className="bg-[#f2f6dc] p-2.5 rounded-lg border border-[#e4eac8]">
                    <div className="text-[10px] uppercase text-[#595959] tracking-wider font-semibold">Rights</div>
                    <div className="text-xs font-bold text-[#0c0d10] mt-0.5">100% Owned</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Client Satisfaction */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#0c0d10] text-[#f4f5f1] p-4 rounded-xl shadow-lg border border-[#272930] max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#fdfe65]">99.4%</span>
                  <div className="text-[11px] leading-tight text-[#a5a7ad]">
                    Client Satisfaction Rating
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 - Recent Recognition */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#fdfe65] text-[#0c0d10] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hidden sm:flex items-center gap-1.5 border border-[#0c0d10]/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Award Winning Studio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Metrics Counter Row */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-[#e4eac8] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#0c0d10] tracking-tight">120+</div>
            <div className="text-xs sm:text-sm text-[#595959] uppercase tracking-wider mt-1 font-semibold">
              Bespoke Logos Designed
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#0c0d10] tracking-tight">48 Hours</div>
            <div className="text-xs sm:text-sm text-[#595959] uppercase tracking-wider mt-1 font-semibold">
              Initial Concept Delivery
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#0c0d10] tracking-tight">18+</div>
            <div className="text-xs sm:text-sm text-[#595959] uppercase tracking-wider mt-1 font-semibold">
              Countries Served Globally
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#0c0d10] tracking-tight">100%</div>
            <div className="text-xs sm:text-sm text-[#595959] uppercase tracking-wider mt-1 font-semibold">
              Full Copyright Handover
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
