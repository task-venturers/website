"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronUp,
  ChevronDown,
  RotateCcw,
} from "lucide-react";

// Team avatars for the inline avatar stack
const teamAvatars = [
  { id: "1", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" },
  { id: "2", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" },
  { id: "3", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80" },
];

// Question 1 Options: Industry or Business Domain (Single-Select)
const q1Options = [
  "E-Commerce & DTC Brands",
  "Marketing & Creative Agencies",
  "Real Estate & PropTech",
  "Coaching, Info-Products & VSLs",
  "SaaS & Tech Startups",
  "Healthcare, Medical & Wellness",
  "Financial Services & Private Equity",
  "Consulting & Corporate Advisory",
  "Legal & Business Operations",
  "Manufacturing & Logistics",
  "Local & Multi-Location Businesses",
];

// Question 2 Options: Services or Technical Operations (Multi-Select)
const q2Options = [
  "Full-Stack Web & Platform Development",
  "High-Converting Funnel & Landing Page Builds",
  "Custom E-Commerce Store & Checkout Builds",
  "Custom API & Backend Integrations",
  "Conversion-Focused UI / UX Design",
  "Website Redesign & User Experience Auditing",
  "Design Systems & Interactive Prototypes",
  "Intelligent Workflow & Task Automation",
  "Automated CRM & Lead Routing Systems",
  "Cross-Platform Data Synchronization",
  "AI Search & Answer Engine Optimization (AEO)",
  "Technical SEO & Core Web Vitals Optimization",
  "Multi-Channel Tracking & Conversion Analytics",
  "Seamless Website & Database Migration",
  "CRM, Customer & Product Data Transfers",
  "Workplace, Email & Cloud System Transitions",
];

// Question 3 Options: Primary Bottleneck (Single-Select)
const q3Options = [
  "Need vetted technical operators immediately",
  "Sales team bogged down by manual CRM tasks",
  "Tracking blind spots & inaccurate ad attribution",
  "Current website is outdated and underperforming",
  "Agency overloaded — need white-label capacity",
  "Systems don't connect — need automated sync",
  "Losing leads due to lack of automated email follow-ups",
];

// Question 4 Options: Project Timeline & Engagement (Single-Select)
const q4Options = [
  "Urgent: Ready to deploy immediately (this week)",
  "Starting within 2–4 weeks",
  "Dedicated ongoing monthly technical pod",
  "Fixed-scope project build / system migration",
  "Exploring options for upcoming quarter",
];

export default function AboutManifesto() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Question 1 State
  const [selectedQ1, setSelectedQ1] = useState<string>("");
  const [customQ1, setCustomQ1] = useState<string>("");

  // Question 2 State (Multi-Select)
  const [selectedQ2, setSelectedQ2] = useState<string[]>([]);
  const [customQ2, setCustomQ2] = useState<string>("");

  // Question 3 State
  const [selectedQ3, setSelectedQ3] = useState<string>("");
  const [customQ3, setCustomQ3] = useState<string>("");

  // Question 4 State
  const [selectedQ4, setSelectedQ4] = useState<string>("");
  const [customQ4, setCustomQ4] = useState<string>("");

  // Question 1 Handler
  const handleQ1Select = (opt: string) => {
    setSelectedQ1(opt);
    setCurrentStep(2);
  };

  // Question 2 Handler (Multi-Select)
  const toggleQ2 = (item: string) => {
    if (selectedQ2.includes(item)) {
      setSelectedQ2(selectedQ2.filter((i) => i !== item));
    } else {
      setSelectedQ2([...selectedQ2, item]);
    }
  };

  const handleQ2Next = () => {
    if (selectedQ2.length > 0 || customQ2.trim().length > 0) {
      setCurrentStep(3);
    }
  };

  // Question 3 Handler
  const handleQ3Select = (opt: string) => {
    setSelectedQ3(opt);
    setCurrentStep(4);
  };

  // Question 4 Handler
  const handleQ4Select = (opt: string) => {
    setSelectedQ4(opt);
  };

  // Check if user can navigate to the next step
  const canGoNext =
    (currentStep === 1 && (!!selectedQ1 && selectedQ1 !== "Others" || !!customQ1.trim())) ||
    (currentStep === 2 && (selectedQ2.length > 0 || !!customQ2.trim())) ||
    (currentStep === 3 && (!!selectedQ3 && selectedQ3 !== "Others" || !!customQ3.trim()));

  // Final Action: Compile all answers into Cal.com notes
  const handleBookDiscoveryCall = () => {
    const q1Final = selectedQ1 === "Others" ? `Others: ${customQ1.trim()}` : selectedQ1;
    
    let q2FinalList = [...selectedQ2.filter((i) => i !== "Others")];
    if (selectedQ2.includes("Others") && customQ2.trim()) {
      q2FinalList.push(`Others: ${customQ2.trim()}`);
    }

    const q3Final = selectedQ3 === "Others" ? `Others: ${customQ3.trim()}` : selectedQ3;
    const q4Final = selectedQ4 === "Others" ? `Others: ${customQ4.trim()}` : selectedQ4;

    const bookingNotes = [
      `Industry/Domain: ${q1Final || "Not specified"}`,
      `Services Needed: ${q2FinalList.length > 0 ? q2FinalList.join(", ") : "Not specified"}`,
      `Primary Bottleneck: ${q3Final || "Not specified"}`,
      `Timeline & Engagement: ${q4Final || "Not specified"}`,
    ].join("\n");

    const bookingUrl = `/book/30min?notes=${encodeURIComponent(bookingNotes)}`;
    window.open(bookingUrl, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    setSelectedQ1("");
    setCustomQ1("");
    setSelectedQ2([]);
    setCustomQ2("");
    setSelectedQ3("");
    setCustomQ3("");
    setSelectedQ4("");
    setCustomQ4("");
    setCurrentStep(1);
  };

  return (
    <section className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 bg-[#070707] font-sans overflow-hidden">
      {/* Seamless SVG Film Grain */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="aboutNoiseFilter">
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
          <rect width="100%" height="100%" filter="url(#aboutNoiseFilter)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        {/* Full-Width 1-Column Stretched Layout */}
        <div className="w-full text-left">
          
          {/* Top Manifesto Statement with Inline Colored Avatars */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-white leading-[1.38] tracking-tight font-sans text-left max-w-5xl">
            We are a team
            {/* Inline Colored Avatar Stack */}
            <span className="inline-flex items-center align-middle -space-x-2 mx-2.5 relative -top-[2px]">
              {teamAvatars.map((person) => (
                <span
                  key={person.id}
                  className="relative inline-block w-6 h-6 sm:w-7 sm:h-7 rounded-full ring-2 ring-[#070707] overflow-hidden bg-gradient-to-br from-[#F08C38] via-[#EA7A24] to-[#B3450F] shrink-0 shadow-sm"
                >
                  <Image
                    src={person.image}
                    alt="Team Member"
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </span>
              ))}
            </span>
            of skilled assistants and operators—supporting businesses across websites, automation, seo, and digital marketing.
          </h2>

          {/* Subtext Prompt */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-neutral-300 font-medium leading-relaxed text-left">
            Answer these questions and put our thinking to work on your challenges.
          </p>

          {/* Full-Width Divider */}
          <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/[0.10] w-full text-left">
            
            {/* ================================================================= */}
            {/* QUESTION 1: WHAT IS YOUR INDUSTRY OR BUSINESS DOMAIN?             */}
            {/* ================================================================= */}
            {currentStep === 1 && (
              <div className="animate-in fade-in zoom-in-95 duration-200 w-full text-left">
                {/* Header with Title and Typeform-style Navigator */}
                <div className="flex items-center justify-between gap-4 mb-7 sm:mb-8">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    What is your industry or business domain?
                  </h3>
                  
                  {/* Typeform-style Up/Down Navigator */}
                  <div className="flex items-center gap-1 bg-[#12141a] border border-white/10 rounded-xl p-1 shadow-sm">
                    <button
                      type="button"
                      onClick={() => {
                        if (canGoNext) setCurrentStep(2);
                      }}
                      disabled={!canGoNext}
                      title="Next question"
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 disabled:opacity-25 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer"
                      aria-label="Next question"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="w-[1px] h-4 bg-white/10 mx-0.5" />
                    <button
                      type="button"
                      onClick={handleReset}
                      title="Reset questionnaire"
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label="Reset questionnaire"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 sm:gap-3 w-full">
                  {q1Options.map((opt) => {
                    const isSelected = selectedQ1 === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleQ1Select(opt)}
                        className={`inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? "bg-[#EA7A24] text-white border border-[#EA7A24] shadow-[0_0_16px_rgba(234,122,36,0.4)]"
                            : "bg-[#12141a]/90 text-neutral-300 border border-white/[0.08] hover:border-white/25 hover:text-white hover:bg-[#181b24]"
                        }`}
                      >
                        <span>{opt}</span>
                      </button>
                    );
                  })}

                  {/* Inline Editable Others Pill */}
                  <div
                    onClick={() => {
                      if (selectedQ1 !== "Others") {
                        setSelectedQ1("Others");
                      }
                    }}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                      selectedQ1 === "Others"
                        ? "bg-[#EA7A24] text-white border border-[#EA7A24] shadow-[0_0_16px_rgba(234,122,36,0.4)]"
                        : "bg-[#12141a]/90 text-neutral-300 border border-white/[0.08] hover:border-white/25 hover:text-white hover:bg-[#181b24]"
                    }`}
                  >
                    {selectedQ1 === "Others" ? (
                      <input
                        type="text"
                        autoFocus
                        placeholder="Type domain..."
                        value={customQ1}
                        onChange={(e) => setCustomQ1(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && customQ1.trim()) {
                            setCurrentStep(2);
                          }
                        }}
                        className="bg-transparent text-white placeholder-white/70 outline-none w-32 sm:w-44 text-xs sm:text-sm font-semibold"
                      />
                    ) : (
                      <span>Others</span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================= */}
            {/* QUESTION 2: WHAT SERVICES DO YOU NEED OFF YOUR PLATE? (MULTI)     */}
            {/* ================================================================= */}
            {currentStep === 2 && (
              <div className="animate-in fade-in zoom-in-95 duration-200 w-full text-left">
                {/* Header with Title and Typeform-style Navigator */}
                <div className="flex items-center justify-between gap-4 mb-7 sm:mb-8">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    What services or technical operations do you need off your plate?
                  </h3>
                  
                  {/* Typeform-style Up/Down Navigator */}
                  <div className="flex items-center gap-1 bg-[#12141a] border border-white/10 rounded-xl p-1 shadow-sm">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      title="Previous question"
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label="Previous question"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (canGoNext) setCurrentStep(3);
                      }}
                      disabled={!canGoNext}
                      title="Next question"
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 disabled:opacity-25 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer"
                      aria-label="Next question"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="w-[1px] h-4 bg-white/10 mx-0.5" />
                    <button
                      type="button"
                      onClick={handleReset}
                      title="Reset questionnaire"
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label="Reset questionnaire"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-8 w-full">
                  {q2Options.map((opt) => {
                    const isSelected = selectedQ2.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleQ2(opt)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? "bg-[#EA7A24] text-white border border-[#EA7A24] shadow-[0_0_16px_rgba(234,122,36,0.4)]"
                            : "bg-[#12141a]/90 text-neutral-300 border border-white/[0.08] hover:border-white/25 hover:text-white hover:bg-[#181b24]"
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                        <span>{opt}</span>
                      </button>
                    );
                  })}

                  {/* Inline Editable Others Pill (Multi-Select) */}
                  <div
                    onClick={() => {
                      if (!selectedQ2.includes("Others")) {
                        setSelectedQ2([...selectedQ2, "Others"]);
                      }
                    }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                      selectedQ2.includes("Others")
                        ? "bg-[#EA7A24] text-white border border-[#EA7A24] shadow-[0_0_16px_rgba(234,122,36,0.4)]"
                        : "bg-[#12141a]/90 text-neutral-300 border border-white/[0.08] hover:border-white/25 hover:text-white hover:bg-[#181b24]"
                    }`}
                  >
                    {selectedQ2.includes("Others") && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                    {selectedQ2.includes("Others") ? (
                      <input
                        type="text"
                        autoFocus
                        placeholder="Type scope..."
                        value={customQ2}
                        onChange={(e) => setCustomQ2(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleQ2Next();
                          }
                        }}
                        className="bg-transparent text-white placeholder-white/70 outline-none w-32 sm:w-44 text-xs sm:text-sm font-semibold"
                      />
                    ) : (
                      <span>Others</span>
                    )}
                  </div>
                </div>

                {/* Continue to Question 3 */}
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={handleQ2Next}
                    disabled={selectedQ2.length === 0 && !customQ2.trim()}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 shadow-md cursor-pointer"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ================================================================= */}
            {/* QUESTION 3: WHAT IS THE PRIMARY BOTTLENECK?                       */}
            {/* ================================================================= */}
            {currentStep === 3 && (
              <div className="animate-in fade-in zoom-in-95 duration-200 w-full text-left">
                {/* Header with Title and Typeform-style Navigator */}
                <div className="flex items-center justify-between gap-4 mb-7 sm:mb-8">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    What is the primary bottleneck you are looking to solve?
                  </h3>
                  
                  {/* Typeform-style Up/Down Navigator */}
                  <div className="flex items-center gap-1 bg-[#12141a] border border-white/10 rounded-xl p-1 shadow-sm">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      title="Previous question"
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label="Previous question"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (canGoNext) setCurrentStep(4);
                      }}
                      disabled={!canGoNext}
                      title="Next question"
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 disabled:opacity-25 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer"
                      aria-label="Next question"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="w-[1px] h-4 bg-white/10 mx-0.5" />
                    <button
                      type="button"
                      onClick={handleReset}
                      title="Reset questionnaire"
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label="Reset questionnaire"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 sm:gap-3 w-full">
                  {q3Options.map((opt) => {
                    const isSelected = selectedQ3 === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleQ3Select(opt)}
                        className={`inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? "bg-[#EA7A24] text-white border border-[#EA7A24] shadow-[0_0_16px_rgba(234,122,36,0.4)]"
                            : "bg-[#12141a]/90 text-neutral-300 border border-white/[0.08] hover:border-white/25 hover:text-white hover:bg-[#181b24]"
                        }`}
                      >
                        <span>{opt}</span>
                      </button>
                    );
                  })}

                  {/* Inline Editable Others Pill */}
                  <div
                    onClick={() => {
                      if (selectedQ3 !== "Others") {
                        setSelectedQ3("Others");
                      }
                    }}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                      selectedQ3 === "Others"
                        ? "bg-[#EA7A24] text-white border border-[#EA7A24] shadow-[0_0_16px_rgba(234,122,36,0.4)]"
                        : "bg-[#12141a]/90 text-neutral-300 border border-white/[0.08] hover:border-white/25 hover:text-white hover:bg-[#181b24]"
                    }`}
                  >
                    {selectedQ3 === "Others" ? (
                      <input
                        type="text"
                        autoFocus
                        placeholder="Type bottleneck..."
                        value={customQ3}
                        onChange={(e) => setCustomQ3(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && customQ3.trim()) {
                            setCurrentStep(4);
                          }
                        }}
                        className="bg-transparent text-white placeholder-white/70 outline-none w-32 sm:w-44 text-xs sm:text-sm font-semibold"
                      />
                    ) : (
                      <span>Others</span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================= */}
            {/* QUESTION 4: PROJECT TIMELINE & PREFERRED ENGAGEMENT               */}
            {/* ================================================================= */}
            {currentStep === 4 && (
              <div className="animate-in fade-in zoom-in-95 duration-200 w-full text-left">
                {/* Header with Title and Typeform-style Navigator */}
                <div className="flex items-center justify-between gap-4 mb-7 sm:mb-8">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    What is your project timeline and preferred engagement?
                  </h3>
                  
                  {/* Typeform-style Up/Down Navigator */}
                  <div className="flex items-center gap-1 bg-[#12141a] border border-white/10 rounded-xl p-1 shadow-sm">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      title="Previous question"
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label="Previous question"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      disabled
                      title="End of questionnaire"
                      className="p-1.5 rounded-lg text-neutral-400 opacity-25 cursor-not-allowed"
                      aria-label="No next question"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="w-[1px] h-4 bg-white/10 mx-0.5" />
                    <button
                      type="button"
                      onClick={handleReset}
                      title="Reset questionnaire"
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label="Reset questionnaire"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-8 w-full">
                  {q4Options.map((opt) => {
                    const isSelected = selectedQ4 === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleQ4Select(opt)}
                        className={`inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? "bg-[#EA7A24] text-white border border-[#EA7A24] shadow-[0_0_16px_rgba(234,122,36,0.4)]"
                            : "bg-[#12141a]/90 text-neutral-300 border border-white/[0.08] hover:border-white/25 hover:text-white hover:bg-[#181b24]"
                        }`}
                      >
                        <span>{opt}</span>
                      </button>
                    );
                  })}

                  {/* Inline Editable Others Pill */}
                  <div
                    onClick={() => {
                      if (selectedQ4 !== "Others") {
                        setSelectedQ4("Others");
                      }
                    }}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                      selectedQ4 === "Others"
                        ? "bg-[#EA7A24] text-white border border-[#EA7A24] shadow-[0_0_16px_rgba(234,122,36,0.4)]"
                        : "bg-[#12141a]/90 text-neutral-300 border border-white/[0.08] hover:border-white/25 hover:text-white hover:bg-[#181b24]"
                    }`}
                  >
                    {selectedQ4 === "Others" ? (
                      <input
                        type="text"
                        autoFocus
                        placeholder="Type timeline..."
                        value={customQ4}
                        onChange={(e) => setCustomQ4(e.target.value)}
                        className="bg-transparent text-white placeholder-white/70 outline-none w-32 sm:w-44 text-xs sm:text-sm font-semibold"
                      />
                    ) : (
                      <span>Others</span>
                    )}
                  </div>
                </div>

                {/* Final Action Button: Opens Cal.com with all 4 prefilled answers */}
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={handleBookDiscoveryCall}
                    disabled={!selectedQ4 || (selectedQ4 === "Others" && !customQ4.trim())}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 shadow-md cursor-pointer"
                  >
                    <span>Book a Discovery Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
