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
    <section className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-14 lg:pb-16 bg-[#070707] font-sans overflow-hidden">
      {/* Dynamic Keyframes for Kinetic Typography */}
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
        {/* SECTION HEADER: CLEAN BOLD STATEMENT + RIGHT CTA BUTTON (TOP ALIGNED)     */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 sm:mb-16 lg:mb-20">
          {/* Left Column: Bold Statement */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-white leading-[1.38] tracking-tight font-sans text-left max-w-4xl">
            Tired of <span className="text-[#EA7A24]">Chasing</span> Freelancers, <span className="text-[#EA7A24]">Managing</span> <br className="hidden sm:inline" />
            Platforms, and <span className="text-[#EA7A24]">Paying</span> Agency Prices?
          </h2>

          {/* Right Column: CTA Button (Top Aligned) */}
          <div className="shrink-0 flex items-start lg:justify-end lg:pt-1">
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
                <th className="py-5 px-4 w-[34%]">
                  <span className="sr-only">Feature</span>
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
