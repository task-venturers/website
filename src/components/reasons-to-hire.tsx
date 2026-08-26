"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Signature Brand 8-Point Asterisk Icon
function BrandAsterisk() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      className="text-[#EA7A24] shrink-0 ml-6 sm:ml-8"
      aria-hidden="true"
    >
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    </svg>
  );
}

export default function ReasonsToHire() {
  // Marquee phrase repeated across the continuous loop track
  const marqueePhrases = [
    "DELEGATE SMARTER.",
    "SCALE FASTER.",
    "BACKED BY AN EXPERIENCED TEAM.",
    "DELEGATE SMARTER.",
    "SCALE FASTER.",
    "BACKED BY AN EXPERIENCED TEAM.",
    "DELEGATE SMARTER.",
    "SCALE FASTER.",
    "BACKED BY AN EXPERIENCED TEAM.",
  ];

  return (
    <section className="relative w-full pt-0 pb-16 sm:pb-24 lg:pb-28 bg-[#070707] font-sans overflow-hidden">
      {/* Background Seamless SVG Film Grain */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="reasonsNoiseFilter">
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
          <rect width="100%" height="100%" filter="url(#reasonsNoiseFilter)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        
        {/* Main Content Card Container with Full Width & Balanced Symmetrical Vertical Padding */}
        <div className="relative w-full rounded-3xl sm:rounded-[36px] bg-[#0c0d12]/95 border border-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.7)] backdrop-blur-2xl pt-10 sm:pt-12 md:pt-14 lg:pt-14 px-8 sm:px-12 md:px-14 lg:px-16 pb-0 overflow-hidden flex flex-col">
          
          {/* ========================================================================= */}
          {/* ATMOSPHERIC WARM ORANGE GLOW                                              */}
          {/* ========================================================================= */}
          <div className="pointer-events-none absolute inset-0 select-none overflow-hidden z-0" aria-hidden="true">
            {/* Center-Top Atmospheric Radial Orange Glow */}
            <div
              className="absolute -top-32 left-1/3 -translate-x-1/2 w-[700px] sm:w-[950px] h-[420px] rounded-full blur-[130px] opacity-25"
              style={{
                background: "radial-gradient(circle, #EA7A24 0%, rgba(234, 122, 36, 0.35) 45%, transparent 70%)",
              }}
            />

            {/* Bottom Subtle Ambient Warmth */}
            <div
              className="absolute -bottom-24 right-1/4 w-[550px] h-[280px] rounded-full blur-[110px] opacity-20"
              style={{
                background: "radial-gradient(circle, #EA7A24 0%, transparent 70%)",
              }}
            />
          </div>

          {/* ========================================================================= */}
          {/* VERY SUBTLE ORANGE GRAPH / GRID BACKGROUND (FADING FROM ALL SIDES)        */}
          {/* ========================================================================= */}
          <div
            className="pointer-events-none absolute inset-0 select-none overflow-hidden z-0"
            style={{
              maskImage:
                "radial-gradient(ellipse 65% 55% at 50% 45%, black 15%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 65% 55% at 50% 45%, black 15%, transparent 75%)",
            }}
            aria-hidden="true"
          >
            <svg
              className="w-full h-full opacity-[0.14]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 10px Sub-grid lines */}
                <pattern
                  id="reasonsGridSmall"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="#EA7A24"
                    strokeWidth="0.5"
                    strokeOpacity="0.35"
                  />
                </pattern>
                {/* 40px Primary grid lines */}
                <pattern
                  id="reasonsGridPattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <rect width="40" height="40" fill="url(#reasonsGridSmall)" />
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#EA7A24"
                    strokeWidth="1"
                    strokeOpacity="0.8"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#reasonsGridPattern)" />
            </svg>
          </div>

          {/* Top Border Subtle Highlight */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#EA7A24]/40 to-transparent pointer-events-none" />

          {/* 2-Column Responsive Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full mb-10 sm:mb-12 md:mb-14 lg:mb-14">
            
            {/* Left Column: Left-aligned Text, Heading & CTA Button */}
            <div className="lg:col-span-6 flex flex-col items-start text-left pr-0 lg:pr-2">

              {/* Heading (Exact same H2 size & weight as all other landing page H2s) */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.16] text-left mb-3 sm:mb-4 max-w-xl">
                <span className="text-[#EA7A24]">26 Reasons</span> to Hire a{" "}
                <br className="hidden lg:block" />
                Virtual Assistant from{" "}
                <br className="hidden lg:block" />
                Task Venturers
              </h2>

              {/* Paragraph */}
              <p className="text-base sm:text-[17px] text-neutral-300 leading-relaxed font-normal max-w-lg text-left mb-6 sm:mb-7">
                Task Venturers virtual assistants handle 26 business-critical tasks so founders and teams can focus on growth. Get the full capability list delivered straight to your inbox.
              </p>

              {/* CTA Action Button (Matching Hero Get Started Button) */}
              <Link
                href="/reasons"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#EA7A24] hover:bg-[#f28834] active:scale-[0.98] text-neutral-950 font-bold text-sm sm:text-base transition-all duration-150 shadow-md cursor-pointer select-none"
              >
                <span>Request the Brochure</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.6]" />
              </Link>
            </div>

            {/* Right Column: 3D Task Venturers Brochure Mockup (Enlarged) */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[620px] xl:max-w-[660px] flex items-center justify-center">
                {/* Soft ambient back-glow for the graphic */}
                <div
                  className="absolute inset-0 rounded-full blur-[70px] opacity-30 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, #EA7A24 0%, transparent 70%)",
                  }}
                />
                <Image
                  src="/images/task-venturers-brochure.png"
                  alt="Task Venturers 26 Reasons to Hire Us Brochure"
                  width={1024}
                  height={682}
                  className="w-full h-auto object-contain relative z-10 drop-shadow-[0_24px_50px_rgba(0,0,0,0.65)]"
                  priority
                  unoptimized
                />
              </div>
            </div>

          </div>

          {/* Top Line Above Ticker with Graceful Fade on Both Sides */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent relative z-10" />

          {/* Bottom Continuous Scrolling Marquee Strip (Gracefully Fading on Left and Right Sides) */}
          <div
            className="marquee-group w-full py-3.5 sm:py-4 bg-[#07080b]/90 overflow-hidden relative select-none z-10 rounded-b-3xl sm:rounded-b-[36px]"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
          >
            <div className="flex w-max">
              {/* Track 1 */}
              <div className="animate-marquee flex items-center shrink-0">
                {marqueePhrases.map((phrase, idx) => (
                  <div key={`phrase-1-${idx}`} className="flex items-center shrink-0 px-6 sm:px-8">
                    <span className="text-xs sm:text-sm font-extrabold tracking-widest text-neutral-300 uppercase whitespace-nowrap select-none">
                      {phrase}
                    </span>
                    <BrandAsterisk />
                  </div>
                ))}
              </div>

              {/* Track 2 (Cloned for 100% seamless infinite loop) */}
              <div className="animate-marquee flex items-center shrink-0" aria-hidden="true">
                {marqueePhrases.map((phrase, idx) => (
                  <div key={`phrase-2-${idx}`} className="flex items-center shrink-0 px-6 sm:px-8">
                    <span className="text-xs sm:text-sm font-extrabold tracking-widest text-neutral-300 uppercase whitespace-nowrap select-none">
                      {phrase}
                    </span>
                    <BrandAsterisk />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
