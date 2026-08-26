"use client";

import {
  Search,
  Check,
  ArrowUpRight,
  TrendingUp,
  Target,
  Layers,
  Send,
  Workflow,
  Code2,
  CheckCircle2,
  ShieldCheck,
  PenTool,
  Zap,
  Sparkles,
} from "lucide-react";

export default function ProcessSteps() {
  const handleBookCall = () => {
    window.open("https://cal.com/prateik-banerjee-e6a5pr/30min", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#070707] font-sans overflow-hidden">
      {/* Seamless SVG Film Grain */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="processNoiseFilter">
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
          <rect width="100%" height="100%" filter="url(#processNoiseFilter)" />
        </svg>
      </div>

      {/* Atmospheric Top Radial Glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[750px] sm:w-[1000px] h-[380px] rounded-full blur-[110px] opacity-20 z-0"
        style={{
          background: "radial-gradient(circle, #EA7A24 0%, rgba(234, 122, 36, 0.25) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.18] text-center mb-5 font-sans">
            Your <span className="italic font-serif text-[#EA7A24] font-normal">Technical Operations</span>, rebuilt in 4 clear steps.
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 text-center max-w-2xl mx-auto font-medium leading-relaxed">
            No guesswork, no vague promises. Here is exactly how we take complex technical workflows completely off your plate.
          </p>
        </div>

        {/* 4-Column Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">
          
          {/* STEP 1: Deep-Dive Scope & Stack Research */}
          <div className="relative rounded-3xl p-7 sm:p-8 bg-[#0c0d12]/95 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl">
            <div>
              <div className="relative inline-block mb-6">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                  <Search className="w-5 h-5 text-neutral-200" />
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#10B981] text-neutral-950 flex items-center justify-center shadow-md">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white leading-tight mb-8">
                Deep-Dive<br />
                Scope <span className="italic font-serif font-normal text-[#EA7A24]">Research</span>
              </h3>
            </div>

            <div className="relative flex items-center justify-between w-full my-4">
              <div className="flex-1 space-y-3 pr-3">
                <div className="flex items-center justify-between px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-semibold text-neutral-300">Who You Target</span>
                  <TrendingUp className="w-3.5 h-3.5 text-neutral-400" />
                </div>

                <div className="flex items-center justify-between px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-semibold text-neutral-300">What You Need Built</span>
                  <Target className="w-3.5 h-3.5 text-neutral-400" />
                </div>

                <div className="flex items-center justify-between px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-semibold text-neutral-300">System Bottlenecks</span>
                  <Layers className="w-3.5 h-3.5 text-neutral-400" />
                </div>

                <div className="flex items-center justify-between px-4 py-2.5 rounded-full bg-[#10B981] text-neutral-950 font-bold shadow-[0_0_16px_rgba(16,185,129,0.3)]">
                  <span className="text-xs font-bold">Clear Roadmap</span>
                  <Send className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="relative flex flex-col items-center justify-between h-40 py-2">
                <div className="absolute top-2 bottom-2 w-[2px] bg-white/10" />
                <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-neutral-600" />
                <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-neutral-600" />
                <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-neutral-600" />
                <span className="relative z-10 w-3 h-3 rounded-full bg-[#10B981] ring-4 ring-[#10B981]/20" />
              </div>
            </div>

            <div className="pt-5 border-t border-white/[0.06] text-[11px] text-neutral-500">
              Step 01 • Discovery & Audit
            </div>
          </div>

          {/* STEP 2: Architecture & Workflow Crafting */}
          <div className="relative rounded-3xl p-7 sm:p-8 bg-[#0c0d12]/95 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl">
            <div>
              <div className="relative inline-block mb-6">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                  <Workflow className="w-5 h-5 text-neutral-200" />
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#10B981] text-neutral-950 flex items-center justify-center shadow-md">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white leading-tight mb-8">
                Architecture &<br />
                Workflow <span className="italic font-serif font-normal text-[#EA7A24]">Crafting</span>
              </h3>
            </div>

            <div className="relative w-full my-4 py-3 flex flex-col justify-between h-48">
              <div className="flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-300 shadow-sm">
                  Web & Funnels
                </div>
                <div className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-300 shadow-sm">
                  Make Automations
                </div>
              </div>

              <div className="relative w-full h-16 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 45 0 V 35 H 175 V 0" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
                  <path d="M 110 35 V 70" stroke="rgba(234,122,36,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="110" cy="35" r="3.5" fill="#EA7A24" />
                </svg>
              </div>

              <div className="flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-300 shadow-sm">
                  Close CRM Sync
                </div>
                <div className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-300 shadow-sm">
                  Tracking & GA4
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-white/[0.06] text-[11px] text-neutral-500">
              Step 02 • Systems Blueprint
            </div>
          </div>

          {/* STEP 3: High-Impact Technical Execution */}
          <div className="relative rounded-3xl p-7 sm:p-8 bg-[#0c0d12]/95 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl">
            <div>
              <div className="relative inline-block mb-6">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                  <Code2 className="w-5 h-5 text-neutral-200" />
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#10B981] text-neutral-950 flex items-center justify-center shadow-md">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white leading-tight mb-8">
                High-Impact<br />
                Technical <span className="italic font-serif font-normal text-[#EA7A24]">Execution</span>
              </h3>
            </div>

            <div className="relative w-full my-4 py-2 flex flex-col justify-between h-48">
              <div className="flex items-center justify-between relative">
                <span className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-300 z-10">
                  Custom Build
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-300 z-10">
                  0.8s LCP
                </span>
              </div>

              <div className="relative w-full h-16">
                <svg className="w-full h-full" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 40 10 Q 110 -15 180 10" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 40 25 Q 110 5 180 25" stroke="rgba(234,122,36,0.6)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 40 45 Q 110 25 180 45" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>

              <div className="flex items-center justify-between relative">
                <span className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-neutral-300 z-10">
                  AI Automations
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#EA7A24]/15 border border-[#EA7A24]/30 text-xs font-bold text-[#EA7A24] z-10">
                  Autonomous
                </span>
              </div>
            </div>

            <div className="pt-5 border-t border-white/[0.06] text-[11px] text-neutral-500">
              Step 03 • Production Sprint
            </div>
          </div>

          {/* STEP 4: Dedicated Deployment & Scale */}
          <div className="relative rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-[#064e3b] via-[#047857] to-[#022c22] text-white flex flex-col justify-between overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.2)] border border-[#10B981]/40 group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_70%)] pointer-events-none" />

            <div>
              <div className="relative inline-block mb-6">
                <div className="w-11 h-11 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white shadow-inner">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white text-emerald-900 flex items-center justify-center shadow-md">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white leading-tight mb-6">
                Dedicated Deployment<br />
                & Continuous Scale
              </h3>

              <div className="space-y-2.5 mb-7">
                <div className="flex items-center gap-3 p-2 rounded-2xl bg-white/[0.08] border border-white/15 backdrop-blur-sm">
                  <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <PenTool className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white">Vetted Technical Operators</span>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-2xl bg-white/[0.08] border border-white/15 backdrop-blur-sm">
                  <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white">Same-Week Deployment</span>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-2xl bg-white/[0.08] border border-white/15 backdrop-blur-sm">
                  <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white">Zero Management Overhead</span>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-2xl bg-white/[0.08] border border-white/15 backdrop-blur-sm">
                  <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white">Built to Scale Autonomously</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleBookCall}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white text-emerald-950 font-bold text-xs sm:text-sm hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl cursor-pointer"
              >
                <span>Book A Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
