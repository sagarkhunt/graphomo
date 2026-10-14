import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, PenTool, Briefcase, Share2, RefreshCw, BookOpen, HelpCircle } from "lucide-react";
import { SERVICES, SERVICE_PACKAGES } from "@/data/services";

export const metadata = {
  title: "Logo Design & Branding Services",
  description:
    "Comprehensive custom logo design, complete visual brand identities, business branding solutions, and brand guidelines by Graphomo Studio.",
};

export default function ServicesPage() {
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

  const faqs = [
    {
      q: "Do I get full commercial copyright and trademark ownership?",
      a: "Yes, 100%. Upon completion and final payment, complete intellectual property and commercial copyright transfer to you. You own every vector anchor and master asset outright."
    },
    {
      q: "What file formats will I receive in the final master package?",
      a: "You receive industry-standard vector masters (Adobe Illustrator .AI, Scalable Vector Graphics .SVG, Encapsulated PostScript .EPS, high-resolution vector PDF) alongside transparent PNGs, high-res JPEGs in both digital sRGB and print-ready CMYK, plus favicon formats."
    },
    {
      q: "How many logo concepts do you create?",
      a: "Depending on your chosen package, we develop 3 to 5 completely distinct conceptual directions based on our strategic discovery research. We then iterate and polish your selected winning direction until perfection."
    },
    {
      q: "What is the turnaround time for a custom logo project?",
      a: "Initial creative concepts are delivered within 48 to 72 hours. Complete logo packages typically conclude in 5–7 business days, while full brand identity systems take 2–3 weeks."
    },
    {
      q: "Can you modernize or redesign an existing logo?",
      a: "Absolutely. Our Logo Redesign service audits your existing brand equity, fixes awkward vector curves, optimizes the silhouette for modern mobile screens, and elevates typography without alienating your current customer base."
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-[#fafcf4]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#595959] font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0c0d10]" />
            <span>Studio Capabilities & Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0c0d10]">
            Branding Services Built for Enduring Value.
          </h1>
          <p className="text-base sm:text-lg text-[#595959] mt-4 leading-relaxed font-normal">
            Whether you require an original custom logo mark or an enterprise-grade visual identity manual, our services are calibrated to build instant credibility and market dominance.
          </p>
        </div>

        {/* 6 Core Services In-Depth List */}
        <div className="space-y-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-[#ffffff] rounded-2xl border border-[#e4eac8] p-8 sm:p-12 shadow-sm hover-lift"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Column: Title & Description */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#fdfe65] text-[#0c0d10] flex items-center justify-center border border-[#0c0d10]/10 shadow-sm">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#84878f] uppercase tracking-wider font-semibold">
                        Service 0{index + 1} • {service.timeline}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0c0d10] tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm font-bold uppercase tracking-wider text-[#595959]">
                    {service.subtitle}
                  </p>
                  <p className="text-base text-[#595959] leading-relaxed font-normal">
                    {service.longDescription}
                  </p>

                  <div className="pt-2 text-xs text-[#84878f]">
                    <span className="font-bold text-[#0c0d10]">Ideal For: </span>
                    {service.idealFor}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#fdfe65] hover:bg-[#edf04c] text-[#0c0d10] text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-full border border-[#0c0d10]/15 transition-all duration-200"
                    >
                      <span>Inquire This Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0c0d10]" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Deliverables Checklist */}
                <div className="lg:col-span-7 bg-[#f2f6dc]/50 p-6 sm:p-8 rounded-xl border border-[#e4eac8] flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-[#0c0d10] mb-4">
                      Complete Deliverables Included:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((deliv, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#595959] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#0c0d10] shrink-0 mt-0.5" />
                          <span className="leading-tight">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#e4eac8] flex flex-wrap gap-2">
                    {service.features.map((feat, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#ffffff] border border-[#e4eac8] rounded-full text-[11px] font-bold text-[#0c0d10]"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Packages Comparison */}
        <section className="mt-24 pt-16 border-t border-[#e4eac8]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#595959] font-bold">
              Transparent Investment Tiers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0c0d10] mt-3">
              Standard Packages & Deliverables.
            </h2>
            <p className="text-base text-[#595959] mt-3 font-normal">
              No hidden fees. Every engagement includes dedicated creative direction, master vector packages, and 100% intellectual property transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className={`bg-[#ffffff] rounded-2xl p-8 border flex flex-col justify-between hover-lift relative ${
                  pkg.popular
                    ? "border-[#0c0d10] shadow-xl ring-2 ring-[#0c0d10]"
                    : "border-[#e4eac8] shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#fdfe65] text-[#0c0d10] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full border border-[#0c0d10]/20 shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-[#0c0d10]">{pkg.name}</h3>
                  <p className="text-xs text-[#595959] mt-2 min-h-[36px] font-normal">{pkg.description}</p>
                  <div className="mt-6 pb-6 border-b border-[#e4eac8]">
                    <span className="text-4xl font-bold text-[#0c0d10]">{pkg.price}</span>
                    <span className="text-xs text-[#84878f] ml-2 font-semibold">USD / Flat Fee</span>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0c0d10]">
                      Included Scope:
                    </div>
                    {pkg.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#595959] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0c0d10] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#e4eac8]">
                  <div className="text-xs text-[#84878f] mb-3 text-center">
                    Estimated Timeline: <span className="font-bold text-[#0c0d10]">{pkg.timeline}</span>
                  </div>
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold py-3.5 rounded-full transition-all duration-200 border border-[#0c0d10]/15 ${
                      pkg.popular
                        ? "bg-[#fdfe65] text-[#0c0d10] hover:bg-[#edf04c] shadow-md"
                        : "bg-[#f2f6dc] text-[#0c0d10] hover:bg-[#e4eac8]"
                    }`}
                  >
                    <span>Book {pkg.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mt-24 pt-16 border-t border-[#e4eac8]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-[#595959] font-bold">
                Answers to Common Questions
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0c0d10] mt-2">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-[#ffffff] p-6 rounded-2xl border border-[#e4eac8]">
                  <h3 className="text-base font-bold text-[#0c0d10] flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#0c0d10] shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-[#595959] mt-3 pl-8 leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
