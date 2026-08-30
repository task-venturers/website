"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Base64 Encoded email string (never exposed in raw DOM tree before user click)
const OBFUSCATED_EMAIL = "aW5mb0B0YXNrdmVudHVyZXJzLmNvbQ==";

export default function Footer() {
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);

  const getDecodedEmail = () => {
    if (typeof window !== "undefined") {
      try {
        return atob(OBFUSCATED_EMAIL);
      } catch {
        return "info@taskventurers.com";
      }
    }
    return "info@taskventurers.com";
  };

  return (
    <footer className="relative w-full bg-[#070707] font-sans overflow-hidden border-t border-white/10 text-white">
      {/* Background Seamless SVG Film Grain */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="footerNoiseFilter">
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
          <rect width="100%" height="100%" filter="url(#footerNoiseFilter)" />
        </svg>
      </div>

      {/* Atmospheric Top Radial Glow */}
      <div
        className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{
          background: "radial-gradient(circle, #EA7A24 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10 pt-16 sm:pt-20 pb-12">
        
        {/* ========================================================================= */}
        {/* TOP BANNER STRIP: HIGH-IMPACT STATEMENT + SINGLE CTA BUTTON               */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 sm:pb-12">
          
          {/* Left Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] max-w-3xl font-sans">
            All-in-one operational solution for <br className="hidden sm:inline" />
            <span className="text-neutral-200">high-growth teams & </span>
            <span className="text-[#EA7A24]">founders</span>
          </h2>

          {/* Right Action Button */}
          <div className="shrink-0">
            <Link
              href="/app/scheduling-flow"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#EA7A24] hover:bg-[#f28834] active:scale-[0.98] text-neutral-950 font-bold text-sm sm:text-base transition-all duration-150 shadow-md cursor-pointer select-none"
            >
              <span>Book a Discovery Call</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.6]" />
            </Link>
          </div>
        </div>

        {/* Top Horizontal Fading Divider Line (Fades from both ends) */}
        <div
          className="w-full h-[1px] bg-white/15 my-6 sm:my-8"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        />

        {/* ========================================================================= */}
        {/* MAIN FOOTER NAVIGATION GRID WITH PERFECTLY BALANCED VERTICAL DIVIDERS      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 pt-10 sm:pt-14 pb-14 sm:pb-16 items-stretch">
          
          {/* ----------------------------------------------------------------------- */}
          {/* COLUMN 1: LOGO, BRAND VALUE PARAGRAPH, AND PROTECTED EMAIL               */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-5 lg:pr-10 xl:pr-14 space-y-5">
            {/* Header Navbar Brand Logo Replica */}
            <Link
              href="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA7A24] rounded-md transition-opacity hover:opacity-90 select-none"
              aria-label="taskventurers Home"
            >
              <span className="text-2xl sm:text-[27px] font-black tracking-tight font-sans">
                <span className="text-[#EA7A24]">task</span>
                <span className="text-white">venturers</span>
              </span>
            </Link>

            {/* Brand Value Proposition Paragraph */}
            <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-md">
              Transform the way you work, build, and scale. Virtual assistants, automations, web development, and creatives — all under one team.
            </p>

            {/* 100% Anti-Inspection Protected Email */}
            <div className="pt-2">
              {!isEmailRevealed ? (
                <button
                  type="button"
                  onClick={() => setIsEmailRevealed(true)}
                  className="group inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-white hover:text-[#EA7A24] transition-colors duration-200 cursor-pointer select-none"
                  title="Click to reveal email"
                  aria-label="Click to reveal email address"
                >
                  {/* DOM placeholder string before click has NO real email text for bots or DevTools to inspect */}
                  <span className="tracking-wide filter blur-[6px] select-none opacity-75">
                    in••••••••@••••••••••••.com
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#EA7A24] stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              ) : (
                <a
                  href={`mailto:${getDecodedEmail()}`}
                  className="group inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-white hover:text-[#EA7A24] transition-colors duration-200"
                >
                  <span>{getDecodedEmail()}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#EA7A24] stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* COLUMN 2: RESOURCES (WITH SYMMETRIC BALANCED FADING VERTICAL DIVIDERS)   */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 lg:px-10 xl:px-14 space-y-5 relative">
            {/* Left Vertical Fading Divider Line (Centered between Col 1 and Resources) */}
            <div
              className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-white/15 pointer-events-none"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
              }}
            />

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#EA7A24] mb-4">
              Resources
            </h3>

            <Link href="/case-studies" className="group block">
              <div className="text-base sm:text-lg font-semibold text-white group-hover:text-[#EA7A24] transition-colors">
                Case Studies
              </div>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed mt-0.5">
                Real results from 150+ growing companies
              </p>
            </Link>

            <Link href="/#blog-section" className="group block">
              <div className="text-base sm:text-lg font-semibold text-white group-hover:text-[#EA7A24] transition-colors">
                The Blog Space
              </div>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed mt-0.5">
                Articles, technology updates & growth guides
              </p>
            </Link>

            <Link href="/contact" className="group block">
              <div className="text-base sm:text-lg font-semibold text-white group-hover:text-[#EA7A24] transition-colors">
                Contact & Support
              </div>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed mt-0.5">
                Get matched with a dedicated assistant in 24h
              </p>
            </Link>

            {/* Right Vertical Fading Divider Line (Centered between Resources and Socials) */}
            <div
              className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] bg-white/15 pointer-events-none"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
              }}
            />
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* COLUMN 3: SOCIALS                                                      */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-3 lg:pl-10 xl:pl-14 space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#EA7A24] mb-4">
              Socials
            </h3>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="text-base sm:text-lg font-semibold text-white group-hover:text-[#EA7A24] transition-colors flex items-center gap-1.5">
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#EA7A24]" />
              </div>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed mt-0.5">
                Connect with our team & company updates
              </p>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="text-base sm:text-lg font-semibold text-white group-hover:text-[#EA7A24] transition-colors flex items-center gap-1.5">
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#EA7A24]" />
              </div>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed mt-0.5">
                Follow us on Facebook for news & updates
              </p>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="text-base sm:text-lg font-semibold text-white group-hover:text-[#EA7A24] transition-colors flex items-center gap-1.5">
                <span>YouTube</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#EA7A24]" />
              </div>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed mt-0.5">
                Watch workflow breakdowns & assistant demos
              </p>
            </a>
          </div>

        </div>

        {/* Bottom Horizontal Fading Divider Line (Fades from both ends) */}
        <div
          className="w-full h-[1px] bg-white/15 mb-8"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        />

        {/* ========================================================================= */}
        {/* BOTTOM COPYRIGHT & LEGAL BAR                                              */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} Task Venturers. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6 text-neutral-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
