"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

export const LunnaVideoBanner: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  return (
    <>
      <section className="relative overflow-hidden py-36 sm:py-48 md:py-60 bg-[#0c0d10] border-b border-[#22252d]">
        {/* Background Showcase Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/showreel-bg.jpg"
            alt="Graphomo Studio Design Reel"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </div>

        {/* Dark Cinematic Vignette */}
        <div className="absolute inset-0 bg-[#0c0d10]/40 backdrop-blur-[1px]" />

        {/* Expansive Container with Unique Architectural Corner Badges */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 text-center">
          {/* Top Left/Right Registration Coordinates (Unique Agency Design) */}
          <div className="hidden sm:flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#ffffff]/60 pb-16">
            <span>[ 01 // STUDIO SHOWREEL ]</span>
            <span>[ 4K CINEMATIC // SOUND ON ]</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-5">
            <button
              onClick={() => setModalOpen(true)}
              className="group relative inline-flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-[#ffffff]/80 bg-[#ffffff]/10 backdrop-blur-sm text-[#ffffff] font-bold text-sm tracking-[2px] uppercase transition-all duration-300 hover:scale-105 hover:bg-[#fdfe65] hover:text-[#0c0d10] hover:border-[#fdfe65] shadow-2xl focus:outline-none"
              aria-label="Play Studio Showreel"
            >
              {/* Outer Pulse Ring */}
              <span className="absolute inset-0 rounded-full border border-[#ffffff]/30 animate-ping opacity-30 pointer-events-none" />

              <div className="flex flex-col items-center gap-1.5">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                <span className="text-xs sm:text-sm font-bold tracking-[2px]">PLAY</span>
              </div>
            </button>

            <span className="text-xs uppercase tracking-widest text-[#ffffff]/85 font-bold pt-2">
              Studio Showreel — Geometric Craft & Brand Architecture
            </span>
          </div>

          {/* Bottom Coordinates */}
          <div className="hidden sm:flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#ffffff]/60 pt-16">
            <span>[ MASTER CRAFT // 100% VECTOR ]</span>
            <span>[ SURAT, IN — GLOBAL COMMISSIONS ]</span>
          </div>
        </div>
      </section>

      {/* Lunna Video Popup Lightbox Modal (#go-video2) */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0c0d10]/90 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-[#000000] rounded-2xl overflow-hidden shadow-2xl border border-[#22252d]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0c0d10]/80 text-[#ffffff] hover:text-[#fdfe65] flex items-center justify-center transition-colors border border-[#ffffff]/20"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Embedded Video Showreel */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Fjsx1EbbDwo?autoplay=1&rel=0&modestbranding=1"
              title="Graphomo Brand Design & Identity Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};
