import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Layers, Zap } from "lucide-react";

export const Manifesto: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f9fbf5] border-b border-[#e1e5d4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Editorial Statement */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#595959] font-bold">
              Studio Manifesto
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141416] leading-tight">
              A Logo Is Never Merely Decorative.
            </h2>
            <p className="text-base sm:text-lg text-[#595959] leading-relaxed">
              It is the geometric keystroke of your company's legacy. In an oversaturated world where thousands of brands fight for fleeting micro-moments of human attention, generic templated logos disappear into noise.
            </p>
            <p className="text-base text-[#595959] leading-relaxed">
              At Graphomo, we construct marks designed to endure. Built on mathematical proportions, hand-sculpted typography, and psychological color harmony, our logos command instantaneous authority across every medium.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#141416] hover:text-[#595959] transition-colors editorial-link"
              >
                <span>Read Designer Story</span>
                <ArrowUpRight className="w-4 h-4 text-[#141416]" />
              </Link>
            </div>
          </div>

          {/* Right: Three Core Pillars Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#ffffff] p-6 sm:p-7 rounded-2xl border border-[#e1e5d4] hover-lift">
              <div className="w-12 h-12 rounded-xl bg-[#f1f4ea] flex items-center justify-center text-[#141416] mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#141416] mb-2">
                Geometric Rigor
              </h3>
              <p className="text-sm text-[#595959] leading-relaxed">
                Constructed using the Golden Ratio, precise tangents, and balanced negative space for optical perfection at every scale.
              </p>
            </div>

            <div className="bg-[#ffffff] p-6 sm:p-7 rounded-2xl border border-[#e1e5d4] hover-lift">
              <div className="w-12 h-12 rounded-xl bg-[#f1f4ea] flex items-center justify-center text-[#141416] mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#141416] mb-2">
                Visual Distinction
              </h3>
              <p className="text-sm text-[#595959] leading-relaxed">
                Zero generic templates. Every glyph and emblem is sketched and sculpted from scratch to ensure true trademark defensibility.
              </p>
            </div>

            <div className="bg-[#ffffff] p-6 sm:p-7 rounded-2xl border border-[#e1e5d4] hover-lift">
              <div className="w-12 h-12 rounded-xl bg-[#f1f4ea] flex items-center justify-center text-[#141416] mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#141416] mb-2">
                Omnichannel Power
              </h3>
              <p className="text-sm text-[#595959] leading-relaxed">
                Engineered to perform effortlessly from a 16px browser favicon to a debossed leather patch or illuminated building signage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
