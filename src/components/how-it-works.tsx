"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  PhoneCall,
  Search,
  FileCheck,
  Rocket,
  Send,
  Calendar,
  Users,
  MessageSquare,
  Sparkles,
  Sliders,
  Maximize2,
  BookOpen,
  FileText,
  PenLine,
  CheckCheck,
  UserCheck,
  Workflow,
  LayoutDashboard,
  Clock,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-6 sm:pb-8 lg:pb-10 bg-[#070707] font-sans overflow-hidden">
      {/* Background Seamless SVG Film Grain */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="howItWorksNoiseFilter">
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
          <rect width="100%" height="100%" filter="url(#howItWorksNoiseFilter)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER: LEFT ALIGNED TITLE + RIGHT CTA BUTTON (NO PARAGRAPH)      */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 sm:mb-14 lg:mb-16 pb-2">
          
          {/* Left Column: Heading */}
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.16]">
              Your dedicated assistant, ready in{" "}
              <span className="text-[#EA7A24]">4 clear steps.</span>
            </h2>
          </div>

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
        {/* 4-COLUMN CONTINUOUS GRID WITH FADED GHOST CARDS (TOP & BOTTOM)            */}
        {/* ========================================================================= */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-start relative"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 70%, transparent 100%)",
          }}
        >
          
          {/* ======================================================================= */}
          {/* CARD 1: Discovery Call                                                  */}
          {/* ======================================================================= */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {/* Faded Ghost Card Above */}
            <div
              className="hidden lg:block w-full h-36 rounded-3xl border border-white/[0.06] bg-gradient-to-t from-white/[0.02] to-transparent backdrop-blur-sm pointer-events-none"
              style={{
                maskImage: "linear-gradient(to top, black 0%, transparent 85%)",
                WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 85%)",
              }}
            />

            {/* Active Step Card 1 */}
            <div className="relative rounded-3xl bg-[#0c0d12]/95 border border-white/[0.08] hover:border-white/20 p-6 sm:p-7 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between group overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Step Icon */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 text-white">
                    <PhoneCall className="w-4 h-4 text-neutral-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-[22px] font-bold text-white leading-tight mb-5">
                  Discovery <br />
                  <span className="italic font-serif font-normal text-neutral-200">Call</span>
                </h3>
              </div>

              {/* Visual Flow Graphic with Timeline Rail */}
              <div className="relative w-full flex items-stretch gap-3 pt-1">
                <div className="flex-1 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs text-neutral-300">
                    <span>Book a Free Call</span>
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs text-neutral-300">
                    <span>Meet the Team</span>
                    <Users className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs text-neutral-300">
                    <span>Share Your Challenges</span>
                    <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 text-xs font-semibold text-[#10B981] mt-0.5">
                    <span>Align on Expectations</span>
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Connected Dots Rail */}
                <div className="w-2 flex flex-col justify-between items-center py-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-0.5 h-full bg-white/10 my-1" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-0.5 h-full bg-white/10 my-1" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-0.5 h-full bg-white/10 my-1" />
                  <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                </div>
              </div>
            </div>

            {/* Faded Ghost Card Below */}
            <div
              className="hidden lg:block w-full h-44 rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-sm pointer-events-none"
              style={{
                maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
              }}
            />
          </div>

          {/* ======================================================================= */}
          {/* CARD 2: Deep-Dive Scoping                                               */}
          {/* ======================================================================= */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {/* Faded Ghost Card Above */}
            <div
              className="hidden lg:block w-full h-16 rounded-3xl border border-white/[0.06] bg-gradient-to-t from-white/[0.02] to-transparent backdrop-blur-sm pointer-events-none"
              style={{
                maskImage: "linear-gradient(to top, black 0%, transparent 85%)",
                WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 85%)",
              }}
            />

            {/* Active Step Card 2 */}
            <div className="relative rounded-3xl bg-[#0c0d12]/95 border border-white/[0.08] hover:border-white/20 p-6 sm:p-7 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between group overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Step Icon */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 text-white">
                    <Search className="w-4 h-4 text-neutral-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-[22px] font-bold text-white leading-tight mb-5">
                  Deep-Dive <br />
                  <span className="italic font-serif font-normal text-neutral-200">Scoping</span>
                </h3>
              </div>

              {/* 2x2 Grid Structure with Dashed Arrows */}
              <div className="relative w-full pt-1 pb-1 flex flex-col justify-between">
                {/* Top Row Nodes */}
                <div className="w-full flex justify-between gap-2.5 mb-2">
                  <div className="flex-1 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs text-center text-neutral-300">
                    Core Challenge
                  </div>
                  <div className="flex-1 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs text-center text-neutral-300">
                    Solutions
                  </div>
                </div>

                {/* SVG Dashed Connecting Arrows */}
                <div className="w-full h-14 relative flex items-center justify-center my-1">
                  <svg className="w-full h-full" viewBox="0 0 240 55" fill="none">
                    <defs>
                      <marker
                        id="dashedArrow"
                        viewBox="0 0 6 6"
                        refX="3"
                        refY="3"
                        markerWidth="4"
                        markerHeight="4"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 0 L 6 3 L 0 6 z" fill="#10B981" />
                      </marker>
                    </defs>
                    {/* Dashed Connecting Path */}
                    <path
                      d="M 55 5 L 55 35 Q 55 45 65 45 L 175 45 Q 185 45 185 35 L 185 5"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    {/* Downward connecting pointer */}
                    <path
                      d="M 120 45 L 120 50"
                      stroke="#10B981"
                      strokeWidth="1.5"
                      markerEnd="url(#dashedArrow)"
                    />
                    {/* Center glowing node */}
                    <circle cx="120" cy="45" r="3.5" fill="#10B981" />
                    <circle cx="120" cy="45" r="7" stroke="#10B981" strokeWidth="1" opacity="0.35" />
                  </svg>
                </div>

                {/* Bottom Row Nodes */}
                <div className="w-full flex justify-between gap-2.5 mt-1">
                  <div className="flex-1 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs text-center text-neutral-300">
                    Stack Finalised
                  </div>
                  <div className="flex-1 px-3 py-2.5 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 text-xs font-semibold text-center text-[#10B981]">
                    Action Plan
                  </div>
                </div>
              </div>
            </div>

            {/* Faded Ghost Card Below */}
            <div
              className="hidden lg:block w-full h-56 rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-sm pointer-events-none"
              style={{
                maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
              }}
            />
          </div>

          {/* ======================================================================= */}
          {/* CARD 3: Proposal & Sign-Off                                             */}
          {/* ======================================================================= */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {/* Faded Ghost Card Above */}
            <div
              className="hidden lg:block w-full h-52 rounded-3xl border border-white/[0.06] bg-gradient-to-t from-white/[0.02] to-transparent backdrop-blur-sm pointer-events-none"
              style={{
                maskImage: "linear-gradient(to top, black 0%, transparent 85%)",
                WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 85%)",
              }}
            />

            {/* Active Step Card 3 */}
            <div className="relative rounded-3xl bg-[#0c0d12]/95 border border-white/[0.08] hover:border-white/20 p-6 sm:p-7 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between group overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Step Icon */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 text-white">
                    <FileCheck className="w-4 h-4 text-neutral-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-[22px] font-bold text-white leading-tight mb-5">
                  Proposal <br />
                  <span className="italic font-serif font-normal text-neutral-200">&amp; Sign-Off</span>
                </h3>
              </div>

              {/* Stacked Pointers Matching Other Cards */}
              <div className="relative w-full flex flex-col gap-2.5 pt-1">
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs text-neutral-300">
                  <span>Quotation Sent</span>
                  <FileText className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs text-neutral-300">
                  <span>Agreement Signed</span>
                  <PenLine className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs text-neutral-300">
                  <span>Scope Confirmed</span>
                  <CheckCheck className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 text-xs font-semibold text-[#10B981]">
                  <span>Team Assigned</span>
                  <UserCheck className="w-3.5 h-3.5 text-[#10B981]" />
                </div>
              </div>
            </div>

            {/* Faded Ghost Card Below */}
            <div
              className="hidden lg:block w-full h-36 rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-sm pointer-events-none"
              style={{
                maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
              }}
            />
          </div>

          {/* ======================================================================= */}
          {/* CARD 4: Onboarding & Execution (Solid Emerald Green "Way to Go" Card)   */}
          {/* ======================================================================= */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {/* Faded Ghost Card Above */}
            <div
              className="hidden lg:block w-full h-20 rounded-3xl border border-white/[0.06] bg-gradient-to-t from-white/[0.02] to-transparent backdrop-blur-sm pointer-events-none"
              style={{
                maskImage: "linear-gradient(to top, black 0%, transparent 85%)",
                WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 85%)",
              }}
            />

            {/* Active Step Card 4: Deep Refined Forest Green */}
            <div className="relative rounded-3xl bg-[#082d23] border border-[#10B981]/30 p-6 sm:p-7 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between group overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/40 to-transparent pointer-events-none" />

              <div>
                {/* Step Icon */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/15 text-white">
                    <Rocket className="w-4 h-4 text-emerald-200" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-[22px] font-bold text-white leading-tight mb-5">
                  Onboarding <br />
                  <span className="italic font-serif font-normal text-emerald-100">&amp; Execution</span>
                </h3>
              </div>

              {/* Checklist Stack Matching Card 4 Pointers */}
              <div className="relative w-full flex flex-col gap-2.5 pt-1">
                <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-black/30 border border-white/[0.08] text-xs text-neutral-100">
                  <Workflow className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Slack Access Granted</span>
                </div>
                <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-black/30 border border-white/[0.08] text-xs text-neutral-100">
                  <LayoutDashboard className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Project Dashboard Set Up</span>
                </div>
                <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-black/30 border border-white/[0.08] text-xs text-neutral-100">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tasks &amp; Deadlines Locked</span>
                </div>
                <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 text-xs font-semibold text-emerald-200">
                  <Send className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Execution Begins</span>
                </div>
              </div>
            </div>

            {/* Faded Ghost Card Below */}
            <div
              className="hidden lg:block w-full h-52 rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-sm pointer-events-none"
              style={{
                maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
