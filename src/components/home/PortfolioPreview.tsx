"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PROJECTS, CATEGORIES } from "@/data/projects";

export const PortfolioPreview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-[#fafcf4] border-b border-[#e4eac8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#e4eac8]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#595959] font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0c0d10]" />
              <span>Selected Logo & Brand Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0c0d10]">
              Crafted With Obsessive Detail.
            </h2>
          </div>
          <div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-[#0c0d10] hover:text-[#595959] transition-colors editorial-link"
            >
              <span>View All Projects ({PROJECTS.length})</span>
              <ArrowUpRight className="w-4 h-4 text-[#0c0d10]" />
            </Link>
          </div>
        </div>

        {/* Category Filter Tabs with Logo Yellow Theme */}
        <div className="pt-8 pb-10 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 min-w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#fdfe65] text-[#0c0d10] border border-[#0c0d10]/20 shadow-sm"
                    : "bg-[#ffffff] text-[#595959] hover:text-[#0c0d10] hover:bg-[#f2f6dc] border border-[#e4eac8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group flex flex-col bg-[#ffffff] rounded-2xl overflow-hidden border border-[#e4eac8] hover-lift"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-[16/10] w-full bg-[#f2f6dc] overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-[#ffffff]/95 backdrop-blur-md rounded-full text-[11px] font-bold uppercase tracking-wider text-[#0c0d10] shadow-sm border border-[#e4eac8]/60">
                    {project.category}
                  </span>
                </div>

                {/* Arrow Icon Reveal on Hover in Logo Yellow */}
                <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-[#fdfe65] text-[#0c0d10] flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border border-[#0c0d10]/15">
                  <ArrowUpRight className="w-4 h-4 text-[#0c0d10]" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-[#84878f] uppercase tracking-wider font-bold mb-1">
                    {project.client} • {project.year}
                  </div>
                  <h3 className="text-xl font-bold text-[#0c0d10] tracking-tight group-hover:text-[#595959] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#595959] mt-2 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Deliverables snippet */}
                <div className="mt-5 pt-4 border-t border-[#e4eac8] flex items-center justify-between text-xs text-[#595959]">
                  <span className="font-semibold text-[#0c0d10]">
                    {project.deliverables[0]}
                  </span>
                  <span className="font-bold text-[#595959] group-hover:text-[#0c0d10] transition-colors flex items-center gap-1">
                    View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-[#ffffff] hover:bg-[#f2f6dc] text-[#0c0d10] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full border border-[#e4eac8] transition-all shadow-sm"
          >
            <span>Explore All Portfolio Case Studies</span>
            <ArrowUpRight className="w-4 h-4 text-[#0c0d10]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
