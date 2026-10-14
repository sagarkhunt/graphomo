"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, ShieldCheck, Compass } from "lucide-react";

export const LunnaHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-14 md:pt-16 pb-16 sm:pb-24 md:pb-28 border-b border-[#e4eac8]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#fdfe65]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Expansive Container with Balanced Left/Right Gutters */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Headline, Kicker & Action Buttons (col-span-7 or 8) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6 sm:space-y-8">
            {/* Lunna Kicker: "We appreciate your trust greatly!" with Unique Geometric Accent */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-[#fdfe65] border border-[#0c0d10] rotate-45 inline-block shrink-0 shadow-xs" />
              <span className="text-base sm:text-lg md:text-xl font-medium text-[#1d1d1d] tracking-normal">
                We appreciate your trust greatly!
              </span>
            </div>

            {/* Lunna Massive Display Headline (8.8vw scale / tight line-height) */}
            <h1 className="text-[12vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[7vw] xl:text-[88px] 2xl:text-[104px] font-bold text-[#1d1d1d] tracking-[-0.03em] leading-[0.92] select-none">
              A creative digital <br />
              design studio
            </h1>

            {/* Studio Specialty Tagline */}
            <p className="text-base sm:text-lg md:text-xl text-[#595959] leading-relaxed font-normal max-w-2xl">
              Bringing your vision to life through rigorous geometric precision, bespoke typography, and strategic visual positioning. We engineer timeless logos and brand identities for ambitious founders worldwide.
            </p>

            {/* Lunna Dual Buttons Group (sc_button_multiple) */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Button 1: Solid Dark / Lunna Style "Can We Help You?" */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#1d1d1d] hover:bg-[#0c0d10] text-[#ffffff] font-bold text-sm uppercase tracking-wider px-8 sm:px-10 py-4 rounded-full border border-[#1d1d1d] transition-all duration-200 group shadow-lg hover:shadow-xl"
              >
                <span>Can We Help You?</span>
                <ArrowUpRight className="w-4 h-4 text-[#fdfe65] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Button 2: Bordered Outline / Lunna Style "Our Work" */}
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-[#fdfe65] text-[#1d1d1d] hover:border-[#1d1d1d] font-bold text-sm uppercase tracking-wider px-8 sm:px-10 py-4 rounded-full border-2 border-[#1d1d1d] transition-all duration-200 group"
              >
                <span>Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#1d1d1d] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Signature Studio Metrics & Feature Strip */}
            <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-[#e4eac8]/80">
              <div className="flex items-center gap-2 bg-[#ffffff] py-2 px-3.5 rounded-full border border-[#e4eac8] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#fdfe65] border border-[#0c0d10]" />
                <span className="text-xs uppercase tracking-wider font-bold text-[#0c0d10]">
                  Official Signature #FDFE65
                </span>
              </div>
              <div className="text-xs text-[#595959] font-medium flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0c0d10]" />
                <span>100% Vector Geometry & Bespoke Typecraft</span>
              </div>
              <div className="text-xs text-[#595959] font-medium hidden sm:flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#0c0d10]" />
                <span>Golden Ratio Proportion Calibration</span>
              </div>
            </div>
          </div>

          {/* Right Column: Unique Bespoke Studio Emblem Showcase Card (col-span-5 or 4) */}
          <div className="lg:col-span-5 xl:col-span-4 relative">
            <div className="relative bg-[#ffffff] rounded-2xl p-6 sm:p-8 border border-[#e4eac8] shadow-xl hover-lift group">
              {/* Header of Emblem Card */}
              <div className="flex items-center justify-between pb-4 border-b border-[#e4eac8]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fdfe65] border border-[#0c0d10]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#0c0d10]">
                    Graphomo Brand System
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold bg-[#f2f6dc] text-[#595959] px-2 py-0.5 rounded">
                  EST. 2024
                </span>
              </div>

              {/* Official Yellow Logo Centerpiece */}
              <div className="my-5 relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#fdfe65] border border-[#e4eac8] flex items-center justify-center p-6 shadow-inner">
                {/* Mathematical Geometry Rings (Unique Editorial Touch) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-48 h-48 rounded-full border border-[#0c0d10]" />
                  <div className="w-32 h-32 rounded-full border border-[#0c0d10] absolute" />
                  <div className="w-16 h-16 rounded-full border border-[#0c0d10] absolute" />
                </div>

                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/brand/graphomo-official-logo.png"
                    alt="Graphomo — Official Logo"
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    priority
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Studio Metadata Bar */}
              <div className="text-center pt-1">
                <h3 className="text-base sm:text-lg font-bold text-[#0c0d10] tracking-tight">
                  GRAPHOMO STUDIO
                </h3>
                <p className="text-[11px] text-[#595959] uppercase tracking-widest mt-0.5 font-semibold">
                  Bringing Your Vision To Life
                </p>
              </div>

              {/* Grid Specifications */}
              <div className="mt-5 pt-4 border-t border-[#e4eac8] grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-[#f2f6dc] p-2 rounded-lg">
                  <div className="text-[10px] uppercase text-[#595959] font-medium">Format</div>
                  <div className="font-bold text-[#0c0d10] mt-0.5">Vector SVG</div>
                </div>
                <div className="bg-[#f2f6dc] p-2 rounded-lg">
                  <div className="text-[10px] uppercase text-[#595959] font-medium">Grid</div>
                  <div className="font-bold text-[#0c0d10] mt-0.5">0.01 pt</div>
                </div>
                <div className="bg-[#f2f6dc] p-2 rounded-lg">
                  <div className="text-[10px] uppercase text-[#595959] font-medium">Rights</div>
                  <div className="font-bold text-[#0c0d10] mt-0.5">100% Owned</div>
                </div>
              </div>

              {/* Unique Floating Badge */}
              <div className="absolute -bottom-4 -right-3 bg-[#0c0d10] text-[#f4f5f1] py-2 px-3.5 rounded-xl shadow-lg border border-[#22252d] flex items-center gap-2 text-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#fdfe65]" />
                <span className="font-bold text-[#fdfe65]">Master Craft</span>
              </div>
            </div>
          </div>
        </div>

        {/* Far-Right Floating Rotated Socials Bar (Lunna elementor-element-116b87c) */}
        <div className="hidden 2xl:flex absolute top-1/2 -translate-y-1/2 right-2 origin-center rotate-90 items-center space-x-6 text-[12px] font-bold uppercase tracking-widest text-[#1d1d1d] select-none z-20">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="hover:text-[#fdfe65] hover:bg-[#0c0d10] px-2 py-0.5 rounded transition-colors"
          >
            Facebook
          </a>
          <span className="text-[#a5a6aa]">•</span>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="hover:text-[#fdfe65] hover:bg-[#0c0d10] px-2 py-0.5 rounded transition-colors"
          >
            Twitter
          </a>
          <span className="text-[#a5a6aa]">•</span>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="hover:text-[#fdfe65] hover:bg-[#0c0d10] px-2 py-0.5 rounded transition-colors"
          >
            Dribble
          </a>
          <span className="text-[#a5a6aa]">•</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="hover:text-[#fdfe65] hover:bg-[#0c0d10] px-2 py-0.5 rounded transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
