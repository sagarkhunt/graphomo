import React from "react";
import Link from "next/link";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f9fbf5] border-b border-[#e1e5d4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#595959] font-bold">
            Client Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141416] mt-3">
            Trusted by Visionary Founders.
          </h2>
          <p className="text-base text-[#595959] mt-4 leading-relaxed">
            Here is what leaders say about partnering with Graphomo to engineer their definitive brand marks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#ffffff] p-8 sm:p-10 rounded-2xl border border-[#e1e5d4] flex flex-col justify-between hover-lift relative"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#f3cc0c]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#e1e5d4]" />
                </div>

                <p className="text-base sm:text-lg text-[#141416] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-8 pt-6 border-t border-[#e1e5d4]/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#141416] text-sm">
                    {t.clientName}
                  </h4>
                  <p className="text-xs text-[#595959] mt-0.5">
                    {t.role}
                  </p>
                  <p className="text-xs text-[#8b8f87]">
                    {t.company}
                  </p>
                </div>

                {t.projectSlug && (
                  <Link
                    href={`/portfolio/${t.projectSlug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#141416] hover:text-[#595959] transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
