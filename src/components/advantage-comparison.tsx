"use client";

import { ThumbsDown, ThumbsUp, ArrowUpRight } from "lucide-react";

// Friction points for the "Without" column
const withoutPoints = [
  "Tasks pile up faster than you can clear them",
  "Constant context switching breaks your focus",
  "Spending time on work that doesn’t need you",
  "Delays, because everything depends on you",
  "Hiring full-time feels sluggish and expensive",
];

// Advantage points for the "With" column
const withPoints = [
  "Tasks are handled without constant oversight",
  "Space to focus on what actually matters",
  "Work moves forward without bottlenecks",
  "Clear structure and consistent execution",
  "Scale support without hiring overhead",
  "Less time on tasks, more on decisions",
  "Faster turnaround on everyday work",
  "Control without being involved in everything",
  "Your day finally feels structured, not reactive",
];

export default function AdvantageComparison() {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#070707] font-sans overflow-hidden">
      {/* Seamless SVG Film Grain */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="advantageNoiseFilter">
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
          <rect width="100%" height="100%" filter="url(#advantageNoiseFilter)" />
        </svg>
      </div>

      {/* Atmospheric Warm Center Spotlight */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[350px] rounded-full blur-[100px] opacity-25 z-0"
        style={{
          background: "radial-gradient(circle, #EA7A24 0%, rgba(234, 122, 36, 0.2) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-14 sm:mb-20">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/15 bg-[#12141a]/80 backdrop-blur-md mb-6 shadow-inner">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-neutral-200 uppercase">
              THE ADVANTAGE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.18] text-center mb-5">
            <span className="text-[#EA7A24]">Execution,</span>
            <br />
            <span>Without Friction</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-300 text-center max-w-xl mx-auto font-medium leading-relaxed">
            A virtual assistant brings structure to your day and clarity to your work.
          </p>
        </div>

        {/* Comparison Cards (Side-by-Side Overlapping Layout) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center max-w-5xl mx-auto gap-6 lg:gap-0 relative">
          
          {/* ========================================================================= */}
          {/* LEFT CARD: WITHOUT A VIRTUAL ASSISTANT (Red / Friction State)            */}
          {/* ========================================================================= */}
          <div className="relative w-full lg:w-[460px] rounded-3xl p-6 sm:p-8 bg-[#0e0f14]/90 border border-red-500/25 shadow-[0_0_40px_rgba(239,68,68,0.06)] backdrop-blur-xl lg:-mr-6 z-10 flex flex-col">
            {/* Subtle red spotlight glow */}
            <div
              className="absolute top-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #EF4444 0%, transparent 70%)" }}
            />

            {/* Header Badge */}
            <div className="mb-6">
              <span className="border border-red-500/30 bg-red-500/10 text-red-400 text-[11px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex">
                WITHOUT A VIRTUAL ASSISTANT
              </span>
            </div>

            {/* List */}
            <div className="space-y-0 divide-y divide-white/[0.06]">
              {withoutPoints.map((text, idx) => (
                <div key={idx} className="py-3.5 sm:py-4 flex items-center gap-3.5 text-xs sm:text-sm text-neutral-300 font-medium">
                  <div className="w-7 h-7 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0">
                    <ThumbsDown className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT CARD: WITH A VIRTUAL ASSISTANT (Green / Advantage State)           */}
          {/* ========================================================================= */}
          <div className="relative w-full lg:w-[510px] rounded-3xl p-6 sm:p-8 bg-[#09110f]/95 border border-[#10B981]/35 shadow-[0_0_50px_rgba(16,185,129,0.12)] backdrop-blur-xl z-20 flex flex-col">
            {/* Subtle green spotlight glow */}
            <div
              className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl opacity-25 pointer-events-none"
              style={{ background: "radial-gradient(circle, #10B981 0%, transparent 70%)" }}
            />

            {/* Header Badge */}
            <div className="mb-6">
              <span className="border border-[#10B981]/30 bg-[#10B981]/15 text-[#10B981] text-[11px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                WITH A VIRTUAL ASSISTANT
              </span>
            </div>

            {/* List */}
            <div className="space-y-0 divide-y divide-white/[0.06]">
              {withPoints.map((text, idx) => (
                <div key={idx} className="py-2.5 sm:py-3 flex items-center gap-3.5 text-xs sm:text-sm text-neutral-200 font-medium">
                  <div className="w-7 h-7 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 text-[#10B981] flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.2)]">
                    <ThumbsUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Callout & CTA Button */}
        <div className="mt-16 sm:mt-20 text-center max-w-xl mx-auto flex flex-col items-center">
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal mb-7">
            And this is only a small part of what a virtual assistant can take off your plate.
            <br />
            To learn more on{" "}
            <span className="text-[#EA7A24] font-semibold">
              how Task Venturers can support your workflow
            </span>
            , explore the guide below.
          </p>

          <a
            href="#guide"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#EA7A24] hover:bg-[#f38631] text-neutral-950 font-bold text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_24px_rgba(234,122,36,0.3)] cursor-pointer"
          >
            <span>To The Guide</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
}
