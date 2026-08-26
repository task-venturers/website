"use client";

import React from "react";

export default function ImpactMetrics() {
  const metrics = [
    {
      value: "3.5x",
      label: "Faster Execution",
    },
    {
      value: "70%",
      label: "Operational Savings",
    },
    {
      value: "99.4%",
      label: "Task Precision",
    },
    {
      value: "150+",
      label: "Growing Companies",
    },
  ];

  return (
    <section className="relative w-full bg-[#070707] font-sans border-t border-b border-white/[0.08] overflow-hidden">
      {/* Background Seamless SVG Film Grain */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="impactNoiseFilter">
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
          <rect width="100%" height="100%" filter="url(#impactNoiseFilter)" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* ULTRA-SLIM STAT METRICS STRIP: 4 ITEMS WITH WHITE VERTICAL DIVIDERS       */}
      {/* ========================================================================= */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10 py-5 sm:py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center">
          {metrics.map((m, index) => {
            const isLastInRow = index === metrics.length - 1;
            const isRightColTablet = index % 2 === 1;

            return (
              <div
                key={index}
                className={`group relative flex flex-col items-center text-center cursor-default select-none px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-1 transition-transform duration-200 ${
                  !isLastInRow ? "lg:border-r lg:border-white/[0.08]" : ""
                } ${
                  !isRightColTablet ? "max-lg:border-r max-lg:border-white/[0.08]" : ""
                } ${
                  index < 2 ? "max-lg:border-b max-lg:border-white/[0.08]" : ""
                }`}
              >
                {/* Stat Number as H3 (Greyish by default, White on Hover - No Orange) */}
                <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-neutral-400 group-hover:text-white tracking-tight leading-none mb-1.5 transition-colors duration-200">
                  {m.value}
                </h3>

                {/* Stat Label */}
                <p className="text-xs sm:text-sm font-semibold text-neutral-500 group-hover:text-neutral-200 tracking-wide transition-colors duration-200">
                  {m.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
