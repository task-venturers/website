"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What services do your virtual assistants provide?",
    answer:
      "We provide end-to-end operational support across Executive & Administrative Assistance, Project & Workflow Management, Customer Support, Lead Generation & Sales Pipeline Management, Social Media & Marketing Operations, Bookkeeping, and Technical / CRM System Automations.",
  },
  {
    question: "How long does it take to match and onboard an assistant?",
    answer:
      "Most clients are paired with a hand-vetted, role-specialized assistant within 48 to 72 hours. We handle all initial briefing, tool integrations, and standard operating procedures (SOPs) so your assistant is productive from day one.",
  },
  {
    question: "What tools and software platforms do your assistants support?",
    answer:
      "Our team is proficient in modern business ecosystems including Slack, Notion, ClickUp, Asana, Google Workspace, Microsoft 365, HubSpot, Salesforce, Zapier, Airtable, QuickBooks, Canva, Figma, and modern AI automation tools.",
  },
  {
    question: "Can we adjust hours or scale our support as our business grows?",
    answer:
      "Yes. Our month-to-month model is built for complete agility. You can increase hours, add specialized team members, or dial back anytime as your project demands and company roadmap evolve.",
  },
  {
    question: "How do you ensure high quality, confidentiality, and data security?",
    answer:
      "All Task Venturers assistants undergo strict background checks, sign comprehensive Non-Disclosure Agreements (NDAs), and use secure credential management (such as 1Password / LastPass) alongside enterprise data security protocols.",
  },
  {
    question: "What happens if our assigned assistant is sick or unavailable?",
    answer:
      "We provide seamless business continuity. If your primary assistant takes scheduled leave or is unavailable, a briefed contingency assistant from our team can step in immediately without disrupting your daily workflows.",
  },
  {
    question: "Are there long-term commitments or hidden onboarding fees?",
    answer:
      "Zero hidden fees and zero lock-in contracts. Everything is billed on a transparent month-to-month subscription that you can pause or cancel with simple notice at any time.",
  },
  {
    question: "How do I get started with Task Venturers?",
    answer:
      "Simply schedule a 15-minute discovery call with our team. We will analyze your operational bottlenecks, design a tailored delegation blueprint, and introduce your dedicated assistant within days.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-28 sm:pb-36 lg:pb-44 bg-[#070707] font-sans overflow-hidden">
      {/* Background Seamless SVG Film Grain */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="faqNoiseFilter">
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
          <rect width="100%" height="100%" filter="url(#faqNoiseFilter)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        {/* 2-Column Responsive Layout: Left (Squeezed 4-cols) | Right (Expanded 8-cols Accordion List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Column: Heading & "Still Have Questions?" Card (Squeezed to 4-columns) */}
          <div className="lg:col-span-4 flex flex-col gap-8 sm:gap-10">
            
            {/* Heading & Subtitle (Flawlessly aligned with top border of right column card) */}
            <div className="-mt-1.5 sm:-mt-2 lg:-mt-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[50px] font-bold text-white tracking-tight leading-[1.04] mb-4 sm:mb-5">
                <span>Frequently asked </span>
                <span className="text-[#EA7A24]">questions</span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                Find quick answers to common questions about our services, onboarding, workflows, and pricing.
              </p>
            </div>

            {/* "Still have questions?" Callout Card with Tighter Rounded Corners */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-[#0c0d12]/95 border border-white/15 backdrop-blur-2xl overflow-hidden shadow-2xl group">
              {/* Center-top warm atmospheric radial glow */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-30"
                style={{
                  background: "radial-gradient(circle, #EA7A24 0%, transparent 70%)",
                }}
              />

              {/* Black & White Avatar Stack + Green "+ You" Badge */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-[#0c0d12] object-cover grayscale brightness-110 contrast-125"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                    alt="Team member"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-[#0c0d12] object-cover grayscale brightness-110 contrast-125"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                    alt="Team member"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-[#0c0d12] object-cover grayscale brightness-110 contrast-125"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
                    alt="Team member"
                  />
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-400 tracking-wide">
                  + You
                </div>
              </div>

              {/* Card Copy */}
              <div className="relative z-10 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  Still have questions?
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  Reach out, and our team will guide you to the perfect assistant and workflow setup.
                </p>
              </div>

              {/* Talk to our team Button */}
              <div className="relative z-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#EA7A24] hover:bg-[#f28834] active:scale-[0.98] text-neutral-950 font-bold text-sm sm:text-base transition-all duration-150 shadow-md cursor-pointer select-none"
                >
                  <span>Talk to our team</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.4]" />
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: Expanded Accordion List (8-columns) */}
          <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#0e0f15] border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.6),0_0_24px_rgba(234,122,36,0.06)]"
                      : "bg-[#0c0d12]/70 border-white/10 hover:border-white/20 hover:bg-[#0e0f15]/80 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 sm:px-7 py-5 sm:py-5.5 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer select-none group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-base sm:text-lg font-medium tracking-tight transition-colors ${
                        isOpen ? "text-white" : "text-neutral-200 group-hover:text-white"
                      }`}
                    >
                      {item.question}
                    </span>

                    {/* Standalone 180° Rotating Plus/Minus Icon without circular border (animated like Navbar) */}
                    <span
                      className={`shrink-0 inline-flex items-center justify-center w-5 h-5 transition-transform duration-300 ease-out transform ${
                        isOpen
                          ? "rotate-180 text-[#EA7A24]"
                          : "group-hover:rotate-90 text-neutral-400 group-hover:text-white"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2.2]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2.2]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-5 pt-0 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/[0.06]">
                      <p className="pt-3">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
