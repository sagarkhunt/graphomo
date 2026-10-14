import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About the Designer & Studio Philosophy",
  description:
    "Learn about Graphomo Studio and Founder Sagar Khunt. Our design philosophy, vector geometry standards, and passion for creating unforgettable brand marks.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Mathematical Balance",
      desc: "Every curve and angle follows strict geometric harmony, utilizing Golden Ratio circles and optical kerning to create natural visual equilibrium."
    },
    {
      title: "Radical Simplicity",
      desc: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to strip away. Clean silhouettes outlast decades."
    },
    {
      title: "Commercial Defense",
      desc: "A great logo must be legally defensible and unmistakably distinct from competitors in your trademark category."
    },
    {
      title: "Obsessive Craft",
      desc: "No auto-tracing. No AI vector shortcuts. Every anchor point is placed deliberately by hand for razor-sharp physical and digital reproduction."
    }
  ];

  const comparison = [
    {
      feature: "Custom Original Vectors",
      graphomo: "100% Handcrafted from Scratch",
      cheapFreelancers: "Pre-made Stock Graphics / Clipart",
      hugeAgencies: "Junior Designers with Markups"
    },
    {
      feature: "Direct Collaboration",
      graphomo: "Direct with Sagar Khunt",
      cheapFreelancers: "Fragmented Communication",
      hugeAgencies: "Multiple Layers of Account Execs"
    },
    {
      feature: "Turnaround Time",
      graphomo: "48-72h Initial Concepts",
      cheapFreelancers: "Unpredictable / Inconsistent",
      hugeAgencies: "6 to 12 Weeks of Meetings"
    },
    {
      feature: "Trademark Defensibility",
      graphomo: "Unique & Distinctive",
      cheapFreelancers: "High Risk of Infringement",
      hugeAgencies: "High Quality but $20K+ Pricing"
    },
    {
      feature: "Commercial Ownership",
      graphomo: "100% Full IP Transfer",
      cheapFreelancers: "Often Ambiguous or Missing",
      hugeAgencies: "Complex Licensing Terms"
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-[#fafcf4]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#595959] font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0c0d10]" />
            <span>Behind the Studio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0c0d10]">
            Bringing Your Vision To Life.
          </h1>
          <p className="text-base sm:text-lg text-[#595959] mt-4 leading-relaxed font-normal">
            Graphomo was founded on a simple conviction: ambitious businesses deserve bespoke, mathematically rigorous brand marks that build instant authority and endure for decades.
          </p>
        </div>

        {/* Studio Process Photo & Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-[#e4eac8]">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#e4eac8] shadow-md bg-[#f2f6dc]">
            <Image
              src="/images/about/studio-process.jpg"
              alt="Graphomo Studio Craft and Sketches"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#595959] font-bold">
              Who We Are
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0c0d10]">
              Independent Craftsmanship. Global Standards.
            </h2>
            <p className="text-base text-[#595959] leading-relaxed font-normal">
              Hello, I am Sagar Khunt, founder and lead brand designer at Graphomo. Over the past seven years, I have collaborated with founders, venture studios, boutique ateliers, and growing enterprises across 18+ countries to conceptualize and craft their definitive brand identities.
            </p>
            <p className="text-base text-[#595959] leading-relaxed font-normal">
              I believe that a logo is never just a pretty drawing. It is the core visual anchor of your entire enterprise. It appears on your invoices, your digital apps, your physical signage, and your customers' minds. Doing it right requires a deep convergence of commercial positioning, psychology, and obsessive vector discipline.
            </p>
            <div className="pt-2 flex items-center gap-6">
              <div>
                <div className="text-2xl font-bold text-[#0c0d10]">120+</div>
                <div className="text-xs text-[#595959] uppercase tracking-wider font-semibold">Logos Built</div>
              </div>
              <div className="h-8 w-px bg-[#e4eac8]" />
              <div>
                <div className="text-2xl font-bold text-[#0c0d10]">99.4%</div>
                <div className="text-xs text-[#595959] uppercase tracking-wider font-semibold">Satisfaction</div>
              </div>
              <div className="h-8 w-px bg-[#e4eac8]" />
              <div>
                <div className="text-2xl font-bold text-[#0c0d10]">18+</div>
                <div className="text-xs text-[#595959] uppercase tracking-wider font-semibold">Nations</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Design Principles */}
        <section className="py-20 border-b border-[#e4eac8]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#595959] font-bold">
              Design Philosophy
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0c0d10] mt-2">
              Our Non-Negotiable Standards.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <div
                key={i}
                className="bg-[#ffffff] p-8 rounded-2xl border border-[#e4eac8] flex flex-col justify-between hover-lift"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#0c0d10] bg-[#fdfe65] w-7 h-7 rounded-full flex items-center justify-center mb-4 border border-[#0c0d10]/15">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#0c0d10] mb-2">{p.title}</h3>
                  <p className="text-sm text-[#595959] leading-relaxed font-normal">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Clients Choose Graphomo Comparison Table */}
        <section className="py-20 border-b border-[#e4eac8]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#595959] font-bold">
              The Graphomo Advantage
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0c0d10] mt-2">
              Why Discerning Founders Choose Us.
            </h2>
            <p className="text-sm text-[#595959] mt-2 font-normal">
              How our dedicated studio model compares to generic marketplaces and bloated agencies.
            </p>
          </div>

          <div className="bg-[#ffffff] rounded-2xl border border-[#e4eac8] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#e4eac8] bg-[#f2f6dc]/60">
                    <th className="py-4 px-6 text-xs uppercase tracking-wider font-bold text-[#0c0d10]">
                      Criteria
                    </th>
                    <th className="py-4 px-6 text-xs uppercase tracking-wider font-bold text-[#0c0d10] bg-[#fdfe65]/40">
                      Graphomo Studio
                    </th>
                    <th className="py-4 px-6 text-xs uppercase tracking-wider font-bold text-[#84878f]">
                      Cheap Freelance Sites
                    </th>
                    <th className="py-4 px-6 text-xs uppercase tracking-wider font-bold text-[#84878f]">
                      Traditional Big Agencies
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e4eac8] text-xs text-[#595959]">
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#fafcf4] transition-colors">
                      <td className="py-4 px-6 font-bold text-[#0c0d10]">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 font-bold text-[#0c0d10] bg-[#fdfe65]/15">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#0c0d10]" />
                          <span>{row.graphomo}</span>
                        </span>
                      </td>
                      <td className="py-4 px-6 text-[#84878f] font-normal">{row.cheapFreelancers}</td>
                      <td className="py-4 px-6 text-[#84878f] font-normal">{row.hugeAgencies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#0c0d10]">
            Ready to bring your brand vision to life?
          </h3>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#fdfe65] hover:bg-[#edf04c] text-[#0c0d10] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full border border-[#0c0d10]/15 transition-all group shadow-md"
            >
              <span>Schedule a Discovery Call</span>
              <ArrowUpRight className="w-4 h-4 text-[#0c0d10] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
