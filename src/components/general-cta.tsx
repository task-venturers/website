"use client";

import React from "react";
import Link from "next/link";
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

export default function GeneralCTA() {
  // Marquee phrase repeated across the continuous loop track
  const marqueePhrases = [
    "DELEGATE SMARTER",
    "SCALE FASTER",
    "BACKED BY AN EXPERIENCED TEAM",
    "DELEGATE SMARTER",
    "SCALE FASTER",
    "BACKED BY AN EXPERIENCED TEAM",
    "DELEGATE SMARTER",
    "SCALE FASTER",
    "BACKED BY AN EXPERIENCED TEAM",
  ];

  return (
    <section className="relative w-full pt-0 sm:pt-2 lg:pt-4 pb-20 sm:pb-28 lg:pb-32 bg-[#070707] font-sans overflow-hidden">
      {/* Background Seamless SVG Film Grain */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="generalCtaNoiseFilter">
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
          <rect width="100%" height="100%" filter="url(#generalCtaNoiseFilter)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        
        {/* Main Content Card Container with Centered Layout & Symmetrical Padding */}
        <div className="relative w-full rounded-3xl sm:rounded-[36px] bg-[#0c0d12]/95 border border-white/[0.08] backdrop-blur-2xl pt-14 sm:pt-16 md:pt-20 lg:pt-24 px-8 sm:px-12 md:px-16 lg:px-20 pb-0 overflow-hidden flex flex-col items-center text-center">
          
          {/* ========================================================================= */}
          {/* ATMOSPHERIC WARM ORANGE GLOW (CENTERED AT TOP)                            */}
          {/* ========================================================================= */}
          <div className="pointer-events-none absolute inset-0 select-none overflow-hidden z-0" aria-hidden="true">
            {/* Center-Top Atmospheric Radial Orange Glow */}
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[420px] rounded-full blur-[130px] opacity-25"
              style={{
                background: "radial-gradient(circle, #EA7A24 0%, rgba(234, 122, 36, 0.35) 45%, transparent 70%)",
              }}
            />

            {/* Bottom Subtle Ambient Warmth */}
            <div
              className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full blur-[110px] opacity-20"
              style={{
                background: "radial-gradient(circle, #EA7A24 0%, transparent 70%)",
              }}
            />
          </div>

          {/* ========================================================================= */}
          {/* VERY SUBTLE ORANGE GRAPH / GRID BACKGROUND                                 */}
          {/* ========================================================================= */}
          <div
            className="pointer-events-none absolute inset-0 select-none overflow-hidden z-0"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, black 80%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 80%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
            aria-hidden="true"
          >
            <svg className="w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="generalCtaGridSmall"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="#EA7A24"
                    strokeWidth="0.5"
                    strokeOpacity="0.6"
                  />
                </pattern>
                <pattern
                  id="generalCtaGridPattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <rect width="40" height="40" fill="url(#generalCtaGridSmall)" />
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#EA7A24"
                    strokeWidth="1"
                    strokeOpacity="0.8"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#generalCtaGridPattern)" />
            </svg>
          </div>

          {/* Top Border Subtle Highlight */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#EA7A24]/40 to-transparent pointer-events-none" />

          {/* ========================================================================= */}
          {/* CENTERED TEXT CONTENT & CTA BUTTON (NO IMAGE)                             */}
          {/* ========================================================================= */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.16] text-center mb-4 sm:mb-5">
              <span className="text-[#EA7A24]">26 Reasons</span> to Hire a Virtual Assistant from Task Venturers
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal max-w-2xl text-center mb-8 sm:mb-9">
              Task Venturers virtual assistants handle 26 business-critical tasks so founders and teams can focus on growth. Get the full capability list delivered straight to your inbox.
            </p>

            {/* CTA Action Button */}
            <Link
              href="/reasons"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-9 sm:py-4.5 rounded-full bg-[#EA7A24] hover:bg-[#f28834] active:scale-[0.98] text-neutral-950 font-bold text-base transition-all duration-150 shadow-md cursor-pointer select-none"
            >
              <span>Request the Brochure</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.6]" />
            </Link>
          </div>

          {/* ========================================================================= */}
          {/* BOTTOM CONTINUOUS KINETIC MARQUEE TICKER TAPE (EXACT REPLICA OF EBOOK)    */}
          {/* ========================================================================= */}
          <div
            className="w-full py-4 sm:py-5 overflow-hidden relative select-none z-10 border-t border-white/[0.08] bg-black/40 backdrop-blur-md -mx-8 sm:-mx-12 md:-mx-16 lg:-mx-20 px-0"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
          >
            <div className="marquee-group flex w-max">
              {/* Track 1 */}
              <div className="animate-marquee flex items-center shrink-0">
                {marqueePhrases.map((phrase, idx) => (
                  <div key={`phrase-1-${idx}`} className="flex items-center shrink-0 px-6 sm:px-8">
                    <span className="text-xs sm:text-sm font-extrabold tracking-widest text-neutral-300 uppercase whitespace-nowrap select-none font-sans">
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
                    <span className="text-xs sm:text-sm font-extrabold tracking-widest text-neutral-300 uppercase whitespace-nowrap select-none font-sans">
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
