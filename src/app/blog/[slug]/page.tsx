import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, MessageSquare, Tag, Share2, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "@/data/posts";

export const dynamic = "force-static";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return { title: "Article Not Found" };
    return {
      title: `${post.title} — Insights`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [{ url: post.featuredImage }],
      },
    };
  });
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="py-12 md:py-20 bg-[#f9fbf5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#595959] hover:text-[#141416] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Insights</span>
          </Link>
        </div>

        {/* Post Header */}
        <header className="pb-10 border-b border-[#e1e5d4]/70">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-[#141416] text-[#f9fbf5] rounded-full text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-xs font-mono text-[#8b8f87] uppercase tracking-wider">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141416] leading-tight">
            {post.title}
          </h1>

          {/* Author Row */}
          <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#e1e5d4]/60">
            <div className="flex items-center gap-3.5">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[#ffffff] border border-[#e1e5d4] p-1">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-[#141416]">{post.author.name}</div>
                <div className="text-xs text-[#595959]">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#8b8f87] uppercase tracking-wider">Share</span>
              <div className="w-8 h-8 rounded-full bg-[#ffffff] border border-[#e1e5d4] flex items-center justify-center text-[#141416]">
                <Share2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="my-10 relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#e1e5d4] shadow-md bg-[#f1f4ea]">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-lg max-w-none text-[#141416] space-y-6 leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="text-base sm:text-lg text-[#333333] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags Row */}
        <div className="mt-12 pt-8 border-t border-[#e1e5d4]/70 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#141416] mr-2">
            Filed Under:
          </span>
          {post.tags.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#ffffff] border border-[#e1e5d4] rounded-md text-xs font-medium text-[#595959]"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="my-12 p-8 bg-[#ffffff] rounded-2xl border border-[#e1e5d4] flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#f1f4ea] border border-[#e1e5d4] p-2 shrink-0">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="text-center sm:text-left space-y-2">
            <h3 className="text-lg font-bold text-[#141416]">
              Written by {post.author.name}
            </h3>
            <p className="text-xs text-[#595959] uppercase tracking-wider font-semibold">
              {post.author.role}
            </p>
            <p className="text-sm text-[#595959] leading-relaxed">
              Sagar directs brand architecture and vector identity design at Graphomo Studio, crafting timeless marks for visionary founders worldwide.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mt-16 pt-12 border-t border-[#e1e5d4]">
          <h3 className="text-2xl font-bold tracking-tight text-[#141416] mb-8">
            Related Insights & Articles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="bg-[#ffffff] rounded-2xl overflow-hidden border border-[#e1e5d4] group hover-lift flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-[#f1f4ea] overflow-hidden">
                  <Image
                    src={rel.featuredImage}
                    alt={rel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#8b8f87] uppercase tracking-wider">
                      {rel.date} • {rel.category}
                    </span>
                    <h4 className="text-lg font-bold text-[#141416] group-hover:text-[#595959] transition-colors mt-1 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#e1e5d4]/60 text-xs font-bold uppercase tracking-wider text-[#141416] flex items-center justify-between">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
