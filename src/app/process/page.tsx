import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle2, Clock, FileCheck, Layers } from "lucide-react";
import { PROCESS_STEPS } from "@/data/testimonials";

export const metadata = {
  title: "Logo Design Process & Methodology",
  description:
    "Explore Graphomo's step-by-step logo design process: from discovery and research to vector craft, client collaboration, and master asset delivery.",
};

export default function ProcessPage() {
  return (
    <div className="py-12 md:py-20 bg-[#f9fbf5]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#595959] font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#f3cc0c]" />
            <span>Step-by-Step Methodology</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141416]">
            The Journey From Vision to Iconic Reality.
          </h1>
          <p className="text-base sm:text-lg text-[#595959] mt-4 leading-relaxed">
            Great brand marks don't emerge by accident. We employ a systematic, collaborative 6-stage framework that eliminates guesswork and delivers world-class results on schedule.
          </p>
        </div>

        {/* 6 In-Depth Process Stages */}
        <div className="space-y-12">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-[#ffffff] rounded-2xl border border-[#e1e5d4] p-8 sm:p-12 shadow-sm hover-lift relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Step Number & Timing */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between border-b lg:border-b-0 lg:border-r border-[#e1e5d4] pb-6 lg:pb-0 lg:pr-8">
                  <span className="text-5xl sm:text-6xl font-bold text-[#141416] tracking-tight">
                    {step.step}
                  </span>
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono font-semibold text-[#8b8f87] bg-[#f9fbf5] px-3 py-1.5 rounded-full border border-[#e1e5d4]/60">
                    <Clock className="w-3.5 h-3.5 text-[#f3cc0c]" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                {/* Main Content & Details */}
                <div className="lg:col-span-9 space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#141416] tracking-tight">
                      {step.title}
                    </h2>
                    <p className="text-base text-[#595959] mt-3 leading-relaxed">
                      {step.summary}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#595959]">
                        <CheckCircle2 className="w-4 h-4 text-[#f3cc0c] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverable Callout */}
                  <div className="p-4 rounded-xl bg-[#f9fbf5] border border-[#e1e5d4]/70 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-[#141416]">
                      <FileCheck className="w-4 h-4 text-[#141416]" />
                      <span>Stage Output: {step.deliverable}</span>
                    </div>
                    <span className="text-[11px] text-[#8b8f87] font-mono uppercase">
                      Milestone Sign-off
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Guarantee & Revision Policy Banner */}
        <section className="mt-20 p-8 sm:p-12 bg-[#141416] text-[#eaebe8] rounded-2xl border border-[#272930] shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#f3cc0c] font-bold">
              Our Studio Commitment
            </span>
            <h3 className="text-3xl font-bold text-[#f9fbf5] tracking-tight">
              Transparent Collaboration & Guaranteed Satisfaction.
            </h3>
            <p className="text-sm sm:text-base text-[#a5a7ad] leading-relaxed">
              We do not stop until you are completely thrilled with your new logo mark. Revisions are an integral part of the process, ensuring every nuance of proportion, typographic weight, and tone is tailored to your exacting standards.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f3cc0c] hover:bg-[#e0b800] text-[#141416] font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all group"
              >
                <span>Initiate Your Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
