"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

const ARTICLES: ArticleItem[] = [
  {
    id: "1",
    slug: "logo-design-trends-defining-modern-brands",
    title: "Ramp up sales with a creative promotion",
    category: "Digital",
    date: "Apr 21, 2026",
    readTime: "5 min read",
    image: "/images/blog/logo-trends-2025.jpg",
  },
  {
    id: "2",
    slug: "how-to-use-the-psychology-of-colors-to-drive-sales",
    title: "The winner of World Design Awards 2026",
    category: "Design",
    date: "Apr 21, 2026",
    readTime: "7 min read",
    image: "/images/blog/color-psychology-sales.jpg",
  },
  {
    id: "3",
    slug: "typography-in-branding-rules-for-impact",
    title: "How typography shapes luxury brand authority",
    category: "Identity",
    date: "Apr 15, 2026",
    readTime: "6 min read",
    image: "/images/blog/typography-in-branding.jpg",
  },
];

export const LunnaRecentArticles: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 md:py-36 border-b border-[#e4eac8] bg-[#ffffff]">
      {/* Expansive Full-Width Container */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Top Header Split: Left Title, Right Paragraph (Lunna elementor-element-59887bc3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-[#e4eac8]">
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#a5a6aa]">
              <span className="w-2 h-2 rounded-full bg-[#fdfe65] border border-[#0c0d10]" />
              <span>blog</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1d1d1d] tracking-tight leading-[1.05]">
              Check Our Recent Articles
            </h2>
          </div>

          <div className="lg:col-span-6 text-base sm:text-lg text-[#595959] leading-relaxed font-normal space-y-3 pt-2">
            <p>
              Adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitacion ullamco.
            </p>
            <p className="text-sm sm:text-base text-[#84878f]">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* 3-Column Articles Grid Spanning Width Evenly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pt-12 sm:pt-16">
          {ARTICLES.map((post) => (
            <article key={post.id} className="group space-y-5 flex flex-col justify-between">
              <div className="space-y-5">
                {/* Featured Image (Aspect 4/3 / Hover Zoom) */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[4/3] overflow-hidden rounded-2xl bg-[#0c0d10] shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Curtain */}
                  <div className="absolute inset-0 bg-[#0c0d10]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                {/* Meta: Category, Date & Read Time */}
                <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider font-semibold text-[#595959]">
                  <span className="text-[#0c0d10] font-bold bg-[#fdfe65] px-2.5 py-0.5 rounded-full border border-[#0c0d10]/15">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="text-[#a5a6aa]">{post.readTime}</span>
                </div>

                {/* Title Link */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1d] tracking-tight group-hover:text-[#0c0d10] transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
              </div>

              {/* Bottom Read More Arrow */}
              <div className="pt-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#1d1d1d] group-hover:text-[#0c0d10] pb-1 border-b border-[#1d1d1d] hover:border-[#fdfe65] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blog Link */}
        <div className="mt-16 sm:mt-20 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-[#1d1d1d] hover:text-[#0c0d10] pb-1.5 border-b-2 border-[#1d1d1d] hover:border-[#fdfe65] transition-all group"
          >
            <span>Explore All Journal Insights</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
