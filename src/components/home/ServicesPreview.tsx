import React from "react";
import Link from "next/link";
import { ArrowUpRight, PenTool, Sparkles, Briefcase, Share2, RefreshCw, BookOpen } from "lucide-react";
import { SERVICES } from "@/data/services";

export const ServicesPreview: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "PenTool": return <PenTool className="w-6 h-6" />;
      case "Sparkles": return <Sparkles className="w-6 h-6" />;
      case "Briefcase": return <Briefcase className="w-6 h-6" />;
      case "Share2": return <Share2 className="w-6 h-6" />;
      case "RefreshCw": return <RefreshCw className="w-6 h-6" />;
      case "BookOpen": return <BookOpen className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#f9fbf5] border-b border-[#e1e5d4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-[#595959] font-bold">
            Studio Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141416] mt-3">
            Tailored Logo & Branding Solutions.
          </h2>
          <p className="text-base sm:text-lg text-[#595959] mt-4 leading-relaxed">
            From early-stage conceptual ideation to exhaustive enterprise brand governance manuals, we provide end-to-end visual identity services designed for commercial growth.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#ffffff] p-8 rounded-2xl border border-[#e1e5d4] flex flex-col justify-between hover-lift group"
            >
              <div>
                {/* Top Row: Icon & Timeline */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#f1f4ea] text-[#141416] flex items-center justify-center group-hover:bg-[#141416] group-hover:text-[#f3cc0c] transition-colors duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-[#8b8f87] uppercase tracking-wider bg-[#f9fbf5] px-2.5 py-1 rounded-md border border-[#e1e5d4]/60">
                    {service.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#141416] tracking-tight group-hover:text-[#595959] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#8b8f87] font-semibold mt-1 mb-3">
                  {service.subtitle}
                </p>
                <p className="text-sm text-[#595959] leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-2 pt-4 border-t border-[#e1e5d4]/60">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#141416]">
                    Key Deliverables:
                  </div>
                  <ul className="text-xs text-[#595959] space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f3cc0c]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-4 border-t border-[#e1e5d4]/40 flex items-center justify-between">
                <Link
                  href={`/services#${service.id}`}
                  className="text-xs font-bold uppercase tracking-wider text-[#141416] hover:text-[#595959] transition-colors flex items-center gap-1.5"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#141416]" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs text-[#8b8f87] hover:text-[#141416] transition-colors"
                >
                  Inquire Service →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages Link */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#141416] hover:bg-[#2c2e35] text-[#f9fbf5] font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 group shadow-md"
          >
            <span>Compare Service Packages & Pricing</span>
            <ArrowUpRight className="w-4 h-4 text-[#f3cc0c] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
