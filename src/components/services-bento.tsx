"use client";

import React from "react";
import Image from "next/image";

export default function ServicesBento() {
  return (
    <section
      className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-[#070707] font-sans overflow-hidden"
    >
      {/* Seamless SVG Film Grain */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="bentoNoiseFilter">
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
          <rect width="100%" height="100%" filter="url(#bentoNoiseFilter)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.16] text-center mb-5">
            <span className="text-[#EA7A24]">Virtual Assistant Services</span>
            <br />
            <span>That Scale Your Business</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 text-center max-w-2xl mx-auto font-medium leading-relaxed">
            From websites and automation to SEO and operations—our virtual assistants help you delegate faster and scale efficiently.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 3-COLUMN BENTO GRID: 6 SERVICES (LOCKED IMAGE POSITIONS)                  */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start">
          
          {/* ======================================================================= */}
          {/* COLUMN 1: 1. Branding & 2. Web Design                                   */}
          {/* ======================================================================= */}
          <div className="flex flex-col gap-6">
            
            {/* 1. BRANDING (Top Left) */}
            <a
              href="#branding"
              className="relative rounded-3xl p-7 sm:p-8 bg-[#0c0d12]/95 border border-white/[0.08] hover:border-white/20 transition-colors duration-200 overflow-hidden group shadow-xl block min-h-[220px] sm:min-h-[230px]"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3.5 sm:mb-4 font-sans tracking-tight">
                Branding
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                Build a clear, consistent brand identity that strengthens trust and drives recognition.
              </p>

              {/* Visual: Branding Swatches Strip */}
              <div className="relative w-full mt-8 sm:mt-10 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/branding-swatches-new.png"
                  alt="Brand Identity and Design Virtual Assistant Services"
                  width={1024}
                  height={192}
                  unoptimized
                  className="w-full h-auto object-contain block max-w-[280px] sm:max-w-[320px] mx-auto"
                />
              </div>
            </a>

            {/* 2. WEB DESIGN (Bottom Left) */}
            <a
              href="#web-design"
              className="relative rounded-3xl p-7 sm:p-8 bg-[#0c0d12]/95 border border-white/[0.08] hover:border-white/20 transition-colors duration-200 overflow-hidden group shadow-xl block min-h-[360px] sm:min-h-[380px]"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3.5 sm:mb-4 font-sans tracking-tight">
                Web Design
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                Conversion-focused design that turns visitors into customers through clarity and experience.
              </p>

              {/* Visual: Transparent Figma Design Interface */}
              <div className="relative w-full mt-8 sm:mt-10 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/web-design-final.png"
                  alt="Premium Web Design Services"
                  width={1024}
                  height={792}
                  unoptimized
                  className="w-full h-auto object-contain block max-w-[310px] sm:max-w-[335px] mx-auto"
                />
              </div>
            </a>

          </div>

          {/* ======================================================================= */}
          {/* COLUMN 2: 3. Web Development & 4. SEO & AEO                             */}
          {/* ======================================================================= */}
          <div className="flex flex-col gap-6">
            
            {/* 3. WEB DEVELOPMENT (Top Center) */}
            <a
              href="#web-development"
              className="relative rounded-3xl p-7 sm:p-8 bg-[#0c0d12]/95 border border-white/[0.08] hover:border-white/20 transition-colors duration-200 overflow-hidden group shadow-xl block min-h-[360px] sm:min-h-[380px]"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3.5 sm:mb-4 font-sans tracking-tight">
                Web Development
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                Build scalable, high-performing websites and funnels with clean, efficient code.
              </p>

              {/* Visual: Organic Network Graphic (Touches sides, does NOT touch bottom) */}
              <div className="relative -mx-7 sm:-mx-8 mt-8 sm:mt-10 overflow-hidden w-[calc(100%+3.5rem)] sm:w-[calc(100%+4rem)] flex items-center justify-center">
                <Image
                  src="/images/web-dev-network.png"
                  alt="Premium Web Development Services"
                  width={1024}
                  height={725}
                  unoptimized
                  className="w-full h-auto object-contain block"
                />
              </div>
            </a>

            {/* 4. SEO & AEO (Bottom Center) */}
            <a
              href="#seo-aeo"
              className="relative rounded-3xl p-7 sm:p-8 bg-[#0c0d12]/95 border border-white/[0.08] hover:border-white/20 transition-colors duration-200 overflow-hidden group shadow-xl block min-h-[220px] sm:min-h-[230px]"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3.5 sm:mb-4 font-sans tracking-tight">
                SEO & AEO
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                Rank higher on Google and get discovered in AI-driven search like ChatGPT or Gemini.
              </p>

              {/* Visual: Contained Search Bar Image (Fills interior width cleanly, zero cut) */}
              <div className="relative w-full mt-8 sm:mt-10 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/seo-aeo-pill-new.png"
                  alt="SEO and AEO Search Engine and AI Engine Optimization"
                  width={907}
                  height={132}
                  unoptimized
                  className="w-full h-auto object-contain block"
                />
              </div>
            </a>

          </div>

          {/* ======================================================================= */}
          {/* COLUMN 3: 5. Automations & 6. System Migration                          */}
          {/* ======================================================================= */}
          <div className="flex flex-col gap-6">
            
            {/* 5. AUTOMATIONS (Top Right) */}
            <a
              href="#ai-automation"
              className="relative rounded-3xl pt-7 px-7 pb-4 sm:pt-8 sm:px-8 sm:pb-5 bg-[#0c0d12]/95 border border-white/[0.08] hover:border-white/20 transition-colors duration-200 overflow-hidden group shadow-xl block"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3.5 sm:mb-4 font-sans tracking-tight">
                Automations
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                Replace manual work with intelligent automation that improves efficiency.
              </p>

              {/* Visual: Automations Integration Arches (Exact mt-8 sm:mt-10 spacing) */}
              <div className="relative w-full mt-8 sm:mt-10 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/ai-automation-new.png"
                  alt="AI Automation Virtual Assistant Services"
                  width={706}
                  height={401}
                  unoptimized
                  className="w-full h-auto object-contain block max-w-[320px] sm:max-w-[350px] mx-auto"
                />
              </div>
            </a>

            {/* 6. DATA MIGRATION (Bottom Right) */}
            <a
              href="#data-migration"
              className="relative rounded-3xl p-7 sm:p-8 bg-[#0c0d12]/95 border border-white/[0.08] hover:border-white/20 transition-colors duration-200 overflow-hidden group shadow-xl block"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3.5 sm:mb-4 font-sans tracking-tight">
                Data Migration
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                Seamlessly migrate websites, email, and workplace systems without data loss.
              </p>

              {/* Visual: Data Migration Pipeline Graphic */}
              <div className="relative w-full mt-8 sm:mt-10 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/system-migration-new.png"
                  alt="Data and System Migration Virtual Assistant Services"
                  width={1024}
                  height={378}
                  unoptimized
                  className="w-full h-auto object-contain block max-w-[310px] sm:max-w-[340px] mx-auto"
                />
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
