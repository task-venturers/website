"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/notion";

interface BlogArticlesProps {
  initialPosts?: BlogPost[];
  initialCategories?: string[];
}

export default function BlogArticles({
  initialPosts = [],
  initialCategories = [],
}: BlogArticlesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  // Fallback posts if initialPosts is empty (6 posts total)
  const posts =
    initialPosts.length > 0
      ? initialPosts
      : [
          {
            id: "1",
            slug: "ux-review-presentations",
            title: "UX review presentations",
            excerpt:
              "How do you create compelling presentations that wow your colleagues and impress your managers? Look no further.",
            category: "Operations",
            categories: ["Operations"],
            readTime: "5 min read",
            publishedAt: "20 Jan 2022",
            featuredImage:
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80",
            status: "Published",
          },
          {
            id: "2",
            slug: "best-books-on-scaling-your-startup",
            title: "Best books on scaling your startup",
            excerpt:
              "This collection of the best startup books for scaling your startup are packed full with valuable insights and advice.",
            category: "Operations",
            categories: ["Operations"],
            readTime: "4 min read",
            publishedAt: "19 Jan 2022",
            featuredImage:
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
            status: "Published",
          },
          {
            id: "3",
            slug: "building-scalable-web-applications",
            title: "Building scalable web applications in Next.js",
            excerpt:
              "Learn architectural patterns for high-performance React and Next.js applications with zero technical debt.",
            category: "Technology",
            categories: ["Technology"],
            readTime: "6 min read",
            publishedAt: "15 Jan 2022",
            featuredImage:
              "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&auto=format&fit=crop&q=80",
            status: "Published",
          },
          {
            id: "4",
            slug: "leadership-lessons-for-growing-teams",
            title: "Leadership lessons for growing B2B teams",
            excerpt:
              "Effective delegation strategies to help founders and executive leaders focus on high-impact growth.",
            category: "Operations",
            categories: ["Operations"],
            readTime: "5 min read",
            publishedAt: "12 Jan 2022",
            featuredImage:
              "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=80",
            status: "Published",
          },
          {
            id: "5",
            slug: "mastering-ui-ux-design",
            title: "Mastering UI/UX Design for Modern Applications",
            excerpt:
              "Streamlining complex workflows with intuitive interface micro-interactions and bold typography.",
            category: "Industries",
            categories: ["Industries"],
            readTime: "5 min read",
            publishedAt: "10 Jan 2022",
            featuredImage:
              "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&auto=format&fit=crop&q=80",
            status: "Published",
          },
          {
            id: "6",
            slug: "ai-automation-strategies-for-startups",
            title: "AI Automation Strategies for High-Growth Teams",
            excerpt:
              "Leveraging intelligent workflows and custom AI agents to multiply output without scaling headcount.",
            category: "Automations",
            categories: ["Automations"],
            readTime: "7 min read",
            publishedAt: "08 Jan 2022",
            featuredImage:
              "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&auto=format&fit=crop&q=80",
            status: "Published",
          },
        ];

  // Filter categories so empty categories with 0 published posts are NEVER shown
  const availableCategories =
    initialCategories.length > 0
      ? initialCategories
      : Array.from(
          new Set(
            posts
              .flatMap((p) => p.categories || [p.category])
              .filter(Boolean)
          )
        );

  // Only include categories that actually have at least 1 published post
  const activeCategoriesWithPosts = availableCategories.filter((cat) =>
    posts.some((p) =>
      p.categories?.some((c) => c.toLowerCase() === cat.toLowerCase()) ||
      p.category?.toLowerCase() === cat.toLowerCase()
    )
  );

  const categories = ["All", ...activeCategoriesWithPosts];

  // Filter posts strictly for active category without padding unrelated posts
  const finalPosts =
    activeCategory === "All"
      ? posts.slice(0, 6)
      : posts.filter(
          (p) =>
            p.categories?.some(
              (c) => c.toLowerCase() === activeCategory.toLowerCase()
            ) || p.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section className="relative w-full pt-0 pb-12 sm:pb-16 lg:pb-20 bg-[#070707] font-sans overflow-hidden">
      {/* Background Seamless SVG Film Grain */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="blogNoiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.4 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#blogNoiseFilter)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        
        {/* Inter-Section Horizontal Fading Divider Line (Symmetrically spaced matching Screen 3 gap) */}
        <div
          className="w-full h-[1px] bg-white/15 my-28 sm:my-32 lg:my-36"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        />

        {/* ========================================================================= */}
        {/* TOP HEADER: TITLE + SUBTITLE + TOP-ALIGNED SUBSCRIPTION PILL              */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10 sm:mb-12">
          
          {/* Left Column: Title & Subtitle */}
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            {/* Title: The Blog Space */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight font-sans leading-none">
              The <span className="text-[#EA7A24]">Blog Space</span>
            </h2>

            {/* Subtitle description */}
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              New product features, the latest in technology, solutions, and updates.
            </p>
          </div>

          {/* Right Column: Top-Aligned Subscription Pill */}
          <div className="w-full lg:w-auto shrink-0 lg:pt-1">
            <form onSubmit={handleSubscribe} className="w-full sm:w-[460px] lg:w-[500px]">
              {/* Pill container with Orange Focus Glow Border */}
              <div className="p-1.5 rounded-full bg-[#0c0d12] border border-white/15 backdrop-blur-xl flex items-center justify-between gap-2 shadow-lg focus-within:border-[#EA7A24] focus-within:ring-2 focus-within:ring-[#EA7A24]/30 focus-within:shadow-[0_0_24px_rgba(234,122,36,0.3)] transition-all duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full px-5 py-2.5 bg-transparent text-white placeholder-neutral-400 font-medium text-sm sm:text-base focus:outline-none"
                  required
                />
                
                {/* Button featuring 3 B&W Avatars + "Join 1,200+ Readers" text (Swapped to Solid White) */}
                <button
                  type="submit"
                  className="shrink-0 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 active:scale-[0.98] text-neutral-950 font-bold text-xs sm:text-sm transition-all flex items-center shadow-md cursor-pointer"
                >
                  {/* 3 B&W Avatars inside button */}
                  <div className="flex -space-x-2 mr-2.5 overflow-hidden shrink-0">
                    <img
                      className="w-6 h-6 rounded-full border border-neutral-950 object-cover grayscale brightness-110 contrast-125"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                      alt="Reader"
                    />
                    <img
                      className="w-6 h-6 rounded-full border border-neutral-950 object-cover grayscale brightness-110 contrast-125"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                      alt="Reader"
                    />
                    <img
                      className="w-6 h-6 rounded-full border border-neutral-950 object-cover grayscale brightness-110 contrast-125"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
                      alt="Reader"
                    />
                  </div>

                  <span>{subscribed ? "Subscribed! ✓" : "Join 1,200+ Readers"}</span>
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Category Tabs Pill Bar (Left) + "To The Blog Space" CTA Button (Right - Swapped to Brand Orange) */}
        <div className="w-full mb-10 sm:mb-12 lg:mb-16 flex items-center justify-between gap-4 flex-wrap">
          {/* Left: Pill Category Bar */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#0c0d12] border border-white/15 backdrop-blur-xl gap-1 shadow-lg overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-white text-neutral-950 font-bold shadow-md"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right: "To The Blog Space ↗" Solid Orange Pill Button */}
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#EA7A24] text-neutral-950 font-bold text-sm shadow-md hover:bg-[#f28834] active:scale-[0.98] transition-all duration-150 select-none cursor-pointer"
          >
            <span>To The Blog Space</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.4]" />
          </Link>
        </div>

        {/* ========================================================================= */}
        {/* 6-BLOG GRID WITH CONTINUOUS VERTICAL LINES PASSING THROUGH HORIZONTAL LINE */}
        {/* ========================================================================= */}
        <div className="relative w-full pt-2">
          {finalPosts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-neutral-400 text-lg">No articles found in this category.</p>
            </div>
          ) : (
            <div className="relative">
              {/* Continuous Desktop Vertical Fading Divider 1 (Top to Bottom through horizontal line) */}
              {finalPosts.length >= 2 && (
                <div
                  className="hidden lg:block absolute top-0 bottom-0 w-[1px] bg-white/15 pointer-events-none z-10 left-[calc(33.333333%_-_10.66px)] xl:left-[calc(33.333333%_-_13.33px)]"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                  }}
                />
              )}

              {/* Continuous Desktop Vertical Fading Divider 2 (Top to Bottom through horizontal line) */}
              {finalPosts.length >= 3 && (
                <div
                  className="hidden lg:block absolute top-0 bottom-0 w-[1px] bg-white/15 pointer-events-none z-10 left-[calc(66.666667%_+_10.66px)] xl:left-[calc(66.666667%_+_13.33px)]"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                  }}
                />
              )}

              {/* Middle Horizontal Fading Divider Line (Only rendered when Row 2 exists, i.e., > 3 posts) */}
              {finalPosts.length > 3 && (
                <div
                  className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/15 pointer-events-none z-10 -translate-y-1/2"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                  }}
                />
              )}

              {/* Unified 3-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-y-20 gap-x-10 md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
                {finalPosts.map((post, idx) => (
                  <Link
                    key={`${post.id}-${idx}`}
                    href={`#${post.slug}`}
                    className="group flex flex-col h-full cursor-pointer"
                  >
                    {/* Rectangular Image Container (Sharp 90° Edges) */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden mb-6 bg-neutral-900 border border-white/10">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Bottom Frosted Glass Overlay: Date & Category ONLY */}
                      <div className="absolute bottom-0 left-0 right-0 p-3.5 bg-black/50 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-medium text-white">
                        <span className="text-neutral-200 font-semibold">{post.publishedAt}</span>
                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white">
                          {activeCategory !== "All" &&
                          post.categories?.some(
                            (c) => c.toLowerCase() === activeCategory.toLowerCase()
                          )
                            ? activeCategory
                            : post.category || post.categories?.[0] || "General"}
                        </span>
                      </div>
                    </div>

                    {/* Text Below Image (Clean White Title, Orange Hover Read Button) */}
                    <div className="flex flex-col flex-1 justify-between gap-5">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3 group-hover:text-neutral-200 transition-colors duration-200">
                          {post.title}
                        </h3>
                        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed line-clamp-3 mb-5">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Card Read Button */}
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 bg-white/5 group-hover:bg-[#EA7A24] group-hover:border-[#EA7A24] group-hover:text-neutral-950 text-white font-semibold text-xs transition-all duration-300 shadow-sm">
                          <span>Read Article</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
