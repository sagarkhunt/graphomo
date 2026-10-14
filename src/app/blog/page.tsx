"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Calendar, MessageSquare, ChevronRight, ArrowUpRight } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES, BLOG_TAGS } from "@/data/posts";

export default function BlogStandardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesTag =
      !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesCategory && matchesTag;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="py-12 md:py-20 bg-[#fafcf4]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Page Header (Lunna Style Breadcrumb & Title) */}
        <div className="max-w-3xl mb-14 border-b border-[#e4eac8] pb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-[#84878f] uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-[#0c0d10]">Home</Link>
            <span>/</span>
            <span className="text-[#0c0d10]">Blog Standard</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0c0d10]">
            Design & Branding Insights
          </h1>
          <p className="text-base text-[#595959] mt-3 font-normal">
            In-depth perspectives on custom logo creation, typography architecture, chromatic psychology, and commercial brand longevity.
          </p>
        </div>

        {/* 2-Column Layout (Lunna Standard Blog + Sticky Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Feed Column (approx 68% / 8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            {displayedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#ffffff] rounded-2xl overflow-hidden border border-[#e4eac8] group hover-lift shadow-sm"
              >
                {/* Featured Image with Zoom & Hover Mask */}
                <div className="relative aspect-[16/9] w-full bg-[#f2f6dc] overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 840px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="px-3.5 py-1.5 bg-[#ffffff]/95 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-[#0c0d10] shadow-sm border border-[#e4eac8]/60">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Article Header & Excerpt */}
                <div className="p-8 sm:p-10 space-y-4">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-6 text-xs text-[#84878f] uppercase tracking-wider font-bold">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0c0d10]" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#0c0d10]" />
                      <span>{post.commentsCount} Comments</span>
                    </div>
                    <span className="text-[#595959]">{post.readTime}</span>
                  </div>

                  {/* Post Title */}
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0c0d10] group-hover:text-[#595959] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Post Excerpt */}
                  <p className="text-base text-[#595959] leading-relaxed font-normal">
                    {post.excerpt}
                  </p>

                  {/* Read More Button with animated icon (Lunna style) */}
                  <div className="pt-4 border-t border-[#e4eac8] flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#0c0d10] hover:text-[#595959] transition-colors group/link"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 text-[#0c0d10] transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>

                    <div className="flex items-center gap-2">
                      {post.tags.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="text-[11px] font-semibold text-[#84878f] bg-[#f2f6dc]/60 px-2.5 py-1 rounded-md border border-[#e4eac8]/60">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {displayedPosts.length === 0 && (
              <div className="py-20 text-center bg-[#ffffff] rounded-2xl border border-[#e4eac8]">
                <p className="text-base text-[#595959]">
                  No articles found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedTag(null);
                  }}
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-[#0c0d10] underline"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination Controls (Lunna Style with Logo Yellow Active) */}
            {totalPages > 1 && (
              <nav className="pt-6 flex items-center justify-center gap-2 select-none" aria-label="Pagination">
                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-11 h-11 rounded-lg text-sm font-bold transition-all duration-200 ${
                        currentPage === pageNum
                          ? "bg-[#fdfe65] text-[#0c0d10] border border-[#0c0d10]/20 shadow-sm"
                          : "bg-[#ffffff] text-[#0c0d10] hover:bg-[#f2f6dc] border border-[#e4eac8]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                {currentPage < totalPages && (
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="w-11 h-11 rounded-lg text-sm font-bold bg-[#ffffff] text-[#0c0d10] hover:bg-[#f2f6dc] border border-[#e4eac8] flex items-center justify-center transition-all duration-200"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </nav>
            )}
          </div>

          {/* Sidebar Column (approx 32% / 4 cols) - Sticky */}
          <aside className="lg:col-span-4 space-y-8 sticky top-28">
            {/* Widget 1: Search Form */}
            <div className="bg-[#ffffff] p-6 sm:p-7 rounded-2xl border border-[#e4eac8] shadow-sm">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#0c0d10] mb-4">
                Search Articles
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search &hellip;"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#f2f6dc]/40 border border-[#e4eac8] rounded-lg pl-4 pr-10 py-3 text-sm text-[#0c0d10] placeholder-[#84878f] focus:outline-none focus:border-[#0c0d10] focus:ring-2 focus:ring-[#fdfe65]"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#595959] hover:text-[#0c0d10]"
                  aria-label="Submit search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Widget 2: Categories List with Counts */}
            <div className="bg-[#ffffff] p-6 sm:p-7 rounded-2xl border border-[#e4eac8] shadow-sm">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#0c0d10] mb-4">
                Category
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setCurrentPage(1);
                    }}
                    className={`w-full flex items-center justify-between py-1 transition-colors ${
                      selectedCategory === "All"
                        ? "text-[#0c0d10] font-bold"
                        : "text-[#595959] hover:text-[#0c0d10]"
                    }`}
                  >
                    <span>All Categories</span>
                    <span className="text-xs text-[#84878f] font-semibold">({BLOG_POSTS.length})</span>
                  </button>
                </li>
                {BLOG_CATEGORIES.map((cat) => (
                  <li key={cat.name}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat.name);
                        setCurrentPage(1);
                      }}
                      className={`w-full flex items-center justify-between py-1 transition-colors ${
                        selectedCategory === cat.name
                          ? "text-[#0c0d10] font-bold"
                          : "text-[#595959] hover:text-[#0c0d10]"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs text-[#84878f] font-semibold">({cat.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 3: Recent Posts with 120x120 Thumbnails */}
            <div className="bg-[#ffffff] p-6 sm:p-7 rounded-2xl border border-[#e4eac8] shadow-sm">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#0c0d10] mb-5">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {BLOG_POSTS.slice(0, 3).map((recent) => (
                  <article key={recent.id} className="flex gap-4 items-center group">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#f2f6dc] shrink-0 border border-[#e4eac8]">
                      <Image
                        src={recent.featuredImage}
                        alt={recent.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#84878f]">
                        {recent.date}
                      </div>
                      <h4 className="text-xs font-bold text-[#0c0d10] group-hover:text-[#595959] transition-colors leading-snug line-clamp-2 mt-0.5">
                        <Link href={`/blog/${recent.slug}`}>
                          {recent.title}
                        </Link>
                      </h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Widget 4: Tag Cloud */}
            <div className="bg-[#ffffff] p-6 sm:p-7 rounded-2xl border border-[#e4eac8] shadow-sm">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#0c0d10] mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {BLOG_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTag(selectedTag === tag ? null : tag);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                      selectedTag === tag
                        ? "bg-[#fdfe65] text-[#0c0d10] border border-[#0c0d10]/20"
                        : "bg-[#f2f6dc]/60 text-[#595959] hover:text-[#0c0d10] hover:bg-[#e4eac8] border border-[#e4eac8]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Widget 5: Studio Banner Card with Logo Yellow Theme */}
            <div className="bg-[#0c0d10] text-[#f4f5f1] p-7 rounded-2xl border border-[#22252d] shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#fdfe65]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-[#fdfe65] font-bold">
                  Bespoke Branding
                </span>
                <h4 className="text-xl font-bold text-[#f4f5f1] tracking-tight">
                  Need a Custom Logo For Your Venture?
                </h4>
                <p className="text-xs text-[#a5a7ad] leading-relaxed font-normal">
                  Partner directly with Graphomo. Receive 3–5 original concepts within 48 hours.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#fdfe65] hover:bg-[#edf04c] text-[#0c0d10] font-bold text-xs uppercase tracking-wider py-3.5 rounded-full transition-all duration-200 border border-[#0c0d10]/15"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
