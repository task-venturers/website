"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ComparisonTable() {
  const comparisonRows = [
    {
      feature: "Dedicated Account Manager",
      freelancers: "Not Included",
      fiverr: "Not Included",
      agencies: "Sometimes",
      taskVenturers: "Always Included",
    },
    {
      feature: "Full-Spectrum Skill Coverage",
      freelancers: "Single Skill Only",
      fiverr: "Fragmented Talent",
      agencies: "Billed Separately",
      taskVenturers: "One Unified Team",
    },
    {
      feature: "Zero Ghosting Guarantee",
      freelancers: "No Commitment",
      fiverr: "No Accountability",
      agencies: "Best Effort",
      taskVenturers: "100% Guaranteed",
    },
    {
      feature: "Client Communication Channels",
      freelancers: "Manual Emails",
      fiverr: "Platform Locked",
      agencies: "Ticketing Portal",
      taskVenturers: "Direct Slack Access",
    },
    {
      feature: "Time to First Execution",
      freelancers: "3 to 7 Days",
      fiverr: "Unpredictable",
      agencies: "2 to 4 Weeks",
      taskVenturers: "Under 24 Hours",
    },
    {
      feature: "Quality Review on All Deliverables",
      freelancers: "Self-Reviewed",
      fiverr: "Buyer Responsibility",
      agencies: "Charged Separately",
      taskVenturers: "Multi-Layer QA",
    },
    {
      feature: "NDA and Data Confidentiality",
      freelancers: "Unregulated",
      fiverr: "Platform Terms Only",
      agencies: "Standard NDA",
      taskVenturers: "Enterprise Grade",
    },
    {
      feature: "Month-to-Month Flexibility",
      freelancers: "Pay Per Hour",
      fiverr: "Pay Per Gig",
      agencies: "6 to 12 Month Lock-in",
      taskVenturers: "Monthly",
    },
  ];

  return (
    <section className="relative w-full pt-20 sm:pt-28 lg:pt-32 pb-20 sm:pb-28 lg:pb-32 bg-[#070707] font-sans overflow-hidden">
      {/* Dynamic Keyframes for Kinetic Typography */}
      <style jsx global>{`
        @keyframes chaseSprint {
          0%, 100% {
            transform: translateX(0) skewX(-12deg);
          }
          30% {
            transform: translateX(5px) translateY(-2px) skewX(-18deg);
          }
          60% {
            transform: translateX(2px) translateY(0) skewX(-10deg);
          }
          85% {
            transform: translateX(6px) translateY(-1.5px) skewX(-16deg);
          }
        }
        @keyframes hecticJitter {
          0%, 100% {
            transform: rotate(-4deg) scale(0.98);
          }
          50% {
            transform: rotate(3.5deg) scale(1.02);
          }
        }
      `}</style>

      {/* Background Seamless SVG Film Grain */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="tableNoiseFilter">
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
          <rect width="100%" height="100%" filter="url(#tableNoiseFilter)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER: BOLD STATEMENT WITH KINETIC ANIMATIONS + RIGHT CTA BUTTON */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16 lg:mb-20">
          {/* Left Column: Bold Statement */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-white leading-[1.38] tracking-tight font-sans text-left max-w-4xl">
            Tired of{" "}
            {/* Running "Chasing" */}
            <span className="inline-block relative italic font-extrabold text-[#EA7A24] animate-[chaseSprint_1.8s_ease-in-out_infinite] origin-bottom tracking-normal pr-0.5">
              Chasing
            </span>{" "}
            Freelancers,{" "}
            {/* Hectic Tilted "Managing" */}
            <span className="inline-block relative font-serif italic text-amber-300 rotate-[-4deg] animate-[hecticJitter_2.4s_ease-in-out_infinite] origin-center px-1">
              Managing
            </span>{" "}
            <br className="hidden sm:inline" />
            Platforms, and{" "}
            {/* Expensive "Paying Agency Prices" */}
            <span className="relative inline-flex items-center gap-1.5 text-rose-400">
              <span className="underline decoration-rose-500/50 decoration-wavy decoration-1 underline-offset-4">
                Paying Agency Prices
              </span>
              <span className="inline-flex items-center text-[11px] sm:text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-rose-500/15 border border-rose-500/30 text-rose-400 align-middle animate-bounce">
                ↑$$$
              </span>
            </span>
            ?
          </h2>

          {/* Right Column: CTA Button */}
          <div className="shrink-0 flex items-center lg:justify-end">
            <Link
              href="/app/scheduling-flow"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#EA7A24] hover:bg-[#f28834] active:scale-[0.98] text-neutral-950 font-bold text-sm sm:text-base transition-all duration-150 shadow-md cursor-pointer select-none"
            >
              <span>Book a Discovery Call</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.6]" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPARISON TABLE: EXACT REPLICA OF THE SPECIFIED DATA                     */}
        {/* ========================================================================= */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10">
          <table className="w-full min-w-[780px] border-collapse text-left">
            
            {/* Table Header */}
            <thead>
              <tr className="border-b border-white/[0.12]">
                <th className="py-5 px-4 text-xs sm:text-sm font-semibold text-neutral-400 uppercase tracking-wider w-[34%]">
                  Feature
                </th>
                <th className="py-5 px-4 text-xs sm:text-sm font-semibold text-neutral-300 text-center w-[16%]">
                  Freelancers
                </th>
                <th className="py-5 px-4 text-xs sm:text-sm font-semibold text-neutral-300 text-center w-[16%]">
                  Fiverr / Upwork
                </th>
                <th className="py-5 px-4 text-xs sm:text-sm font-semibold text-neutral-300 text-center w-[16%]">
                  Other Agencies
                </th>
                <th className="py-5 px-4 text-xs sm:text-sm font-semibold text-white text-center w-[18%]">
                  Task Venturers
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-white/[0.06]">
              {comparisonRows.map((row, idx) => {
                return (
                  <tr
                    key={idx}
                    className="hover:bg-white/[0.02] transition-colors duration-150 group"
                  >
                    {/* Feature Title */}
                    <td className="py-4 sm:py-5 px-4 text-sm sm:text-[15px] font-medium text-neutral-200">
                      {row.feature}
                    </td>

                    {/* Freelancers */}
                    <td className="py-4 sm:py-5 px-4 text-center text-xs sm:text-sm text-neutral-400">
                      {row.freelancers}
                    </td>

                    {/* Fiverr / Upwork */}
                    <td className="py-4 sm:py-5 px-4 text-center text-xs sm:text-sm text-neutral-400">
                      {row.fiverr}
                    </td>

                    {/* Other Agencies */}
                    <td className="py-4 sm:py-5 px-4 text-center text-xs sm:text-sm text-neutral-400">
                      {row.agencies}
                    </td>

                    {/* Task Venturers (Clean White Text) */}
                    <td className="py-4 sm:py-5 px-4 text-center text-xs sm:text-sm font-semibold text-white">
                      {row.taskVenturers}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
