import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PROCESS_STEPS } from "@/data/testimonials";

export const ProcessPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f9fbf5] border-b border-[#e1e5d4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#e1e5d4]/60">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#595959] font-bold">
              Visual Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141416] mt-3">
              How We Bring Your Vision To Life.
            </h2>
          </div>
          <div>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-[#141416] hover:text-[#595959] transition-colors editorial-link"
            >
              <span>Explore Detailed Process</span>
              <ArrowUpRight className="w-4 h-4 text-[#141416]" />
            </Link>
          </div>
        </div>

        {/* 6 Process Steps Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#ffffff] p-8 rounded-2xl border border-[#e1e5d4] relative hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#e1e5d4]/60">
                  <span className="text-3xl font-bold text-[#141416] tracking-tight">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono text-[#8b8f87] uppercase tracking-wider bg-[#f9fbf5] px-2.5 py-1 rounded-md border border-[#e1e5d4]/60">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#141416] mt-6 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-[#595959] mt-3 leading-relaxed">
                  {step.summary}
                </p>

                <div className="mt-6 pt-4 border-t border-[#e1e5d4]/40">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#141416] mb-2">
                    Key Deliverable:
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#595959]">
                    <CheckCircle2 className="w-4 h-4 text-[#f3cc0c] shrink-0 mt-0.5" />
                    <span className="font-medium text-[#141416]">{step.deliverable}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
