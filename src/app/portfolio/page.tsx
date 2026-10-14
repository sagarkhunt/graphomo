"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PROJECTS, CATEGORIES } from "@/data/projects";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20 bg-[#fafcf4]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#595959] font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0c0d10]" />
            <span>Archive of Selected Works</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0c0d10]">
            Brand Identities & Logo Design.
          </h1>
          <p className="text-base sm:text-lg text-[#595959] mt-4 leading-relaxed font-normal">
            Explore our curated portfolio of bespoke logo marks, corporate visual systems, and luxury brand assets designed for ambitious companies across the globe.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="pb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[#e4eac8]">
          {/* Category Tabs with Logo Yellow Theme */}
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[#fdfe65] text-[#0c0d10] border border-[#0c0d10]/20 shadow-sm"
                    : "bg-[#ffffff] text-[#595959] hover:text-[#0c0d10] hover:bg-[#f2f6dc] border border-[#e4eac8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#ffffff] border border-[#e4eac8] rounded-full px-4 py-2 text-xs font-semibold text-[#0c0d10] placeholder-[#84878f] focus:outline-none focus:border-[#0c0d10] focus:ring-2 focus:ring-[#fdfe65]"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                {/* Arrow Icon Reveal in Logo Yellow */}
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
                  <h2 className="text-xl font-bold text-[#0c0d10] tracking-tight group-hover:text-[#595959] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[#595959] mt-2 line-clamp-2 leading-relaxed font-normal">
                    {project.tagline}
                  </p>
                </div>

                {/* Deliverables snippet */}
                <div className="mt-5 pt-4 border-t border-[#e4eac8] flex items-center justify-between text-xs text-[#595959]">
                  <span className="font-semibold text-[#0c0d10]">
                    {project.industry}
                  </span>
                  <span className="font-bold text-[#595959] group-hover:text-[#0c0d10] transition-colors flex items-center gap-1">
                    Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center bg-[#ffffff] rounded-2xl border border-[#e4eac8]">
            <p className="text-base text-[#595959]">
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-bold uppercase tracking-wider text-[#0c0d10] underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Pre-CTA Callout */}
        <div className="mt-20 p-8 sm:p-12 bg-[#ffffff] rounded-2xl border border-[#e4eac8] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-2xl font-bold text-[#0c0d10]">
              Have a Project in Mind?
            </h3>
            <p className="text-sm text-[#595959] mt-1">
              Let's create a custom logo mark that defines your category.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#fdfe65] hover:bg-[#edf04c] text-[#0c0d10] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full border border-[#0c0d10]/15 transition-all duration-200 group shadow-md"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4 text-[#0c0d10] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
