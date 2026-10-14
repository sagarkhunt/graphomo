"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  categories: string[];
  image: string;
  num: string;
  colSpan: string;
}

const FEATURED_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    slug: "aura-architectural-atelier",
    title: "Tommy Hilfiger",
    categories: ["Agency", "Fashion"],
    image: "/images/projects/aura-minimal.jpg",
    num: "01",
    colSpan: "lg:col-span-7",
  },
  {
    id: "2",
    slug: "kroma-fintech-identity",
    title: "L'Officiel",
    categories: ["Agency", "Digital"],
    image: "/images/projects/kroma-fintech.jpg",
    num: "02",
    colSpan: "lg:col-span-5",
  },
  {
    id: "3",
    slug: "verve-botanicals-organic-system",
    title: "Roseville Pottery",
    categories: ["Agency", "Personal"],
    image: "/images/projects/verve-botanicals.jpg",
    num: "03",
    colSpan: "lg:col-span-5",
  },
  {
    id: "4",
    slug: "nox-specialty-coffee-roasters",
    title: "Nail Saloon",
    categories: ["Agency", "Lifestyle"],
    image: "/images/projects/nox-coffee.jpg",
    num: "04",
    colSpan: "lg:col-span-7",
  },
  {
    id: "5",
    slug: "zenith-contemporary-apparel",
    title: "Zoik Water",
    categories: ["Agency", "Packaging"],
    image: "/images/projects/zenith-apparel.jpg",
    num: "05",
    colSpan: "lg:col-span-12",
  },
];

export const LunnaPortfolioGrid: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 border-b border-[#e4eac8]">
      {/* Expansive Full-Width Container */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {FEATURED_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.slug}`}
              className={`group relative block overflow-hidden rounded-2xl bg-[#0c0d10] ${item.colSpan} ${
                item.colSpan === "lg:col-span-12"
                  ? "aspect-[16/9] md:aspect-[21/9]"
                  : "aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[440px] xl:min-h-[500px]"
              } shadow-md hover:shadow-2xl transition-shadow duration-500`}
            >
              {/* Project Cover Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Lunna Dark Mask Curtain */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10]/90 via-[#0c0d10]/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top-Right Index Badge (Unique Agency Touch) */}
              <div className="absolute top-6 right-6 z-10 font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#0c0d10]/60 backdrop-blur-sm text-[#f4f5f1] border border-[#ffffff]/15 group-hover:bg-[#fdfe65] group-hover:text-[#0c0d10] group-hover:border-[#fdfe65] transition-all duration-300">
                {item.num} // ARCHIVE
              </div>

              {/* Lower-Left Info Block (sc_blogger_item_body) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 flex items-end justify-between z-10">
                <div className="space-y-1.5 sm:space-y-2 max-w-xl">
                  {/* Categories */}
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#fdfe65]">
                    {item.categories.map((cat, idx) => (
                      <span key={cat}>
                        {cat}
                        {idx < item.categories.length - 1 && (
                          <span className="text-[#a5a6aa] ml-1.5">•</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] tracking-tight group-hover:text-[#fdfe65] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Arrow Icon */}
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#ffffff]/10 backdrop-blur-sm border border-[#ffffff]/20 flex items-center justify-center text-[#ffffff] group-hover:bg-[#fdfe65] group-hover:text-[#0c0d10] transition-all duration-300 shrink-0 ml-4">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Lunna Centered "View All Projects" Button (elementor-element-327c3f7) */}
        <div className="mt-14 sm:mt-20 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-lg sm:text-xl font-bold text-[#1d1d1d] hover:text-[#0c0d10] pb-2 border-b-2 border-[#1d1d1d] hover:border-[#fdfe65] transition-all group"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-5 h-5 text-[#1d1d1d] group-hover:text-[#fdfe65] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
};
