"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import CaseStudySlider from "@/components/case-study-slider";

// Easily replaceable avatar images for the social proof badge
const trustedAvatars = [
  { id: "1", name: "Executive Lead", image: "/assets/avatar-user.webp" },
  { id: "2", name: "Operations Director", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" },
  { id: "3", name: "Strategy Partner", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" },
  { id: "4", name: "Ventures Lead", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80" },
  { id: "5", name: "Fintech Founder", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80" },
  { id: "6", name: "Product Architect", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80" },
];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubmitted(true);
  };

  return (
    <section className="relative w-full overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 font-sans bg-[#070707]">
      {/* ========================================================================= */}
      {/* PURE ATMOSPHERIC STUDIO SPOTLIGHT & FILM GRAIN (CLEAN)                    */}
      {/* ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        {/* Tier 1: Wide Deep Warm Velvet Ambient Wash */}
        <div
          className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[1100px] sm:w-[1450px] lg:w-[1700px] h-[550px] sm:h-[750px]"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 32%, rgba(185, 80, 15, 0.32) 0%, rgba(130, 45, 10, 0.2) 28%, rgba(50, 14, 3, 0.08) 55%, transparent 75%)",
            filter: "blur(90px)",
          }}
          aria-hidden="true"
        />

        {/* Tier 2: Soft Studio Core Horizontal Spotlight */}
        <div
          className="absolute top-[20px] sm:top-[40px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] lg:w-[1100px] h-[280px] sm:h-[380px]"
          style={{
            background:
              "radial-gradient(ellipse 65% 38% at 50% 45%, rgba(215, 95, 20, 0.42) 0%, rgba(160, 55, 12, 0.24) 32%, rgba(65, 18, 5, 0.08) 60%, transparent 80%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        {/* Tier 3: Warm Ochre Center Glow behind Text */}
        <div
          className="absolute top-[60px] sm:top-[90px] left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[130px] sm:h-[180px]"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% 50%, rgba(235, 120, 30, 0.46) 0%, rgba(185, 70, 15, 0.2) 45%, transparent 80%)",
            filter: "blur(40px)",
          }}
          aria-hidden="true"
        />

        {/* Pure Code SVG Film Grain / Analog Noise Texture Overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="heroNoiseFilter">
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
          <rect width="100%" height="100%" filter="url(#heroNoiseFilter)" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* HERO FOREGROUND CONTENT                                                   */}
      {/* ========================================================================= */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        {/* Headline & Subtitle Section */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* Social Proof Glassmorphic Avatar Pill Container */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#13161c]/80 border border-white/10 backdrop-blur-md shadow-md mb-6 sm:mb-8 select-none cursor-default pointer-events-none">
            {/* Overlapping Avatar Stack */}
            <div className="flex items-center -space-x-2 overflow-hidden py-0.5 pl-0.5">
              {trustedAvatars.map((person) => (
                <div
                  key={person.id}
                  className="relative inline-block w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-2 ring-[#0a0a0c] overflow-hidden bg-neutral-800 shrink-0"
                >
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover grayscale contrast-125"
                    unoptimized={person.image.startsWith("http")}
                  />
                </div>
              ))}
            </div>

            {/* Social Proof Text with Sharp-Cornered, Larger, Tilted Green Gradient Badge */}
            <div className="flex items-center gap-2 text-xs sm:text-[13.5px] text-neutral-300 font-medium pr-1.5">
              <span>Trusted by</span>
              <span className="inline-flex items-center transform -rotate-6 px-1.5 py-0.5 rounded-none bg-gradient-to-br from-[#10B981] via-[#059669] to-[#047857] text-white shadow-[0_2px_8px_rgba(5,150,105,0.35)] border border-[#34d399]/30">
                <span className="font-black text-xs sm:text-sm tracking-tight leading-none">150</span>
                <span className="font-extrabold text-[11px] sm:text-xs ml-0.5 leading-none select-none opacity-95">+</span>
              </span>
              <span className="text-white">experts worldwide.</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.08] select-none font-sans">
            <span className="block text-[#F08C38] drop-shadow-[0_4px_35px_rgba(240,140,56,0.3)]">
              High Standards,
            </span>
            <span className="block text-white mt-1">Quietly Delivered.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-[19px] text-neutral-300 font-normal mt-4 sm:mt-5 max-w-2xl leading-relaxed">
            Experienced assistants, seamlessly integrated into your workflow.
          </p>

          {/* Email Capture Input Bar */}
          <div className="w-full max-w-[560px] sm:max-w-[620px] mt-8 sm:mt-9">
            {isSubmitted ? (
              <div className="flex items-center justify-center gap-2.5 p-4 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md text-white text-sm font-medium animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 text-[#EA7A24]" />
                <span>Thank you! We will be in touch shortly.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={`group flex flex-col sm:flex-row items-stretch sm:items-center bg-[#13161c]/90 rounded-full p-2 transition-all duration-200 shadow-2xl backdrop-blur-md border ${
                  isFocused
                    ? "border-[#EA7A24] ring-1 ring-[#EA7A24]/50 shadow-[0_0_25px_rgba(234,122,36,0.25)]"
                    : "border-white/15 hover:border-[#EA7A24] hover:ring-1 hover:ring-[#EA7A24]/40 hover:shadow-[0_0_20px_rgba(234,122,36,0.18)]"
                }`}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Work Email Address"
                  required
                  className="flex-1 bg-transparent px-5 py-3 text-sm sm:text-base text-white placeholder:text-neutral-400 focus:outline-none focus:ring-0 border-0 outline-none rounded-full"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 sm:py-3.5 rounded-full bg-[#EA7A24] hover:bg-[#f28834] active:scale-[0.98] text-neutral-950 font-bold text-sm sm:text-[15px] transition-all duration-150 shadow-md shrink-0 cursor-pointer mt-2 sm:mt-0"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.6]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* EXPANDABLE CASE STUDY ACCORDION SLIDER (MATCHING SCREENSHOT)              */}
      {/* ========================================================================= */}
      <CaseStudySlider />
    </section>
  );
}
