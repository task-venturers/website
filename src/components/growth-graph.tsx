"use client";

import { useState, useEffect } from "react";

export default function GrowthGraph() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // 4 Milestone points with 100% UNIFORM / EQUIDISTANT horizontal spacing (ΔX = 270px / 22.5%)
  // Symmetrical outer margins = 195px (16.25%) on both sides across 1200px container width
  const milestones = [
    {
      title: "Clarity",
      subtitle: "Less Noise. More Focus.",
      x: 195,
      y: 411.1,
      percent: "16.25%",
    },
    {
      title: "Continuity",
      subtitle: "Work that keeps moving.",
      x: 465,
      y: 361.1,
      percent: "38.75%",
    },
    {
      title: "Precision",
      subtitle: "Attention in every detail.",
      x: 735,
      y: 266.0,
      percent: "61.25%",
    },
    {
      title: "Momentum",
      subtitle: "Steady progress, every day.",
      x: 1005,
      y: 128.5,
      percent: "83.75%",
    },
  ];

  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 z-10 select-none">
      {/* SVG Graph Graphic */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px]">
        <svg
          viewBox="0 0 1200 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          {/* Underlying Soft Amber Glow for the Arc */}
          <path
            d="M 20 420 C 440 420, 800 270, 1180 20"
            stroke="#EA7A24"
            strokeWidth="16"
            strokeOpacity="0.3"
            strokeLinecap="round"
            className="filter blur-[12px]"
          />

          {/* Single Pure Dramatic Exponential Arc */}
          <path
            d="M 20 420 C 440 420, 800 270, 1180 20"
            stroke="#D97724"
            strokeWidth="4.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: 1600,
              strokeDashoffset: isAnimated ? 0 : 1600,
              transition: "stroke-dashoffset 2.2s cubic-bezier(0.25, 0.9, 0.25, 1)",
            }}
          />

          {/* 4 Vertical Dashed Connector Lines with Uniform Spacing */}
          {milestones.map((m, idx) => {
            const delays = ["delay-300", "delay-600", "delay-900", "delay-1100"];
            return (
              <line
                key={`line-${m.title}`}
                x1={m.x}
                y1={m.y}
                x2={m.x}
                y2={440}
                stroke="#505058"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                strokeOpacity={isAnimated ? 0.75 : 0}
                className={`transition-opacity duration-700 ${delays[idx]}`}
              />
            );
          })}

          {/* 4 Connected Milestone Nodes with 100% Uniform Horizontal Gap */}
          {milestones.map((m, idx) => {
            const delays = ["delay-300", "delay-600", "delay-900", "delay-1100"];
            const isHovered = hoveredMilestone === idx;
            return (
              <g
                key={`node-${m.title}`}
                className={`transition-opacity duration-500 ${isAnimated ? "opacity-100" : "opacity-0"} ${delays[idx]}`}
              >
                {/* Outer ambient glow halo */}
                <circle
                  cx={m.x}
                  cy={m.y}
                  r={isHovered ? "11" : "8"}
                  fill="#EA7A24"
                  fillOpacity={isHovered ? "0.55" : "0.28"}
                  className="transition-all duration-200"
                />
                {/* Inner solid amber dot centered on the curve */}
                <circle
                  cx={m.x}
                  cy={m.y}
                  r={isHovered ? "6" : "4.8"}
                  fill="#F28C38"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                  className="transition-all duration-200"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* 4 Milestone Label Columns with 100% Uniform Spacing across container */}
      <div className="relative w-full h-16 mt-2 hidden sm:block">
        {milestones.map((m, idx) => {
          const isHovered = hoveredMilestone === idx;
          return (
            <div
              key={m.title}
              style={{ left: m.percent }}
              onMouseEnter={() => setHoveredMilestone(idx)}
              onMouseLeave={() => setHoveredMilestone(null)}
              className="absolute top-0 -translate-x-1/2 text-center flex flex-col items-center cursor-default transition-transform duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <h3
                className={`text-base lg:text-lg font-bold transition-colors duration-200 ${
                  isHovered ? "text-[#F28C38]" : "text-white"
                }`}
              >
                {m.title}
              </h3>
              <p className="text-xs lg:text-[13.5px] text-neutral-400 mt-1 font-normal">
                {m.subtitle}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile Fallback Grid */}
      <div className="grid grid-cols-2 gap-4 pt-4 sm:hidden">
        {milestones.map((m) => (
          <div key={m.title} className="text-center">
            <h3 className="text-sm font-bold text-white">{m.title}</h3>
            <p className="text-xs text-neutral-400 mt-0.5">{m.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
