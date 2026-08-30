"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronDown } from "lucide-react";

// Social proof avatars for header pill
const trustedAvatars = [
  { id: "1", name: "Executive Lead", image: "/assets/avatar-user.webp" },
  { id: "2", name: "Operations Director", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" },
  { id: "3", name: "Strategy Partner", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" },
  { id: "4", name: "Ventures Lead", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80" },
  { id: "5", name: "Fintech Founder", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80" },
  { id: "6", name: "Product Architect", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80" },
];

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  tag: string;
  isFeatured?: boolean;
}

const testimonialsData: Testimonial[] = [
  // --- ROW 1 (Initial) ---
  {
    id: "1",
    name: "Fraol Mussa",
    role: "Founder & B2B Strategist",
    company: "ScaleFlow",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    content:
      "I worked with Task Venturers on design execution, workflow automation, and custom web development. They were responsive, deeply professional, and delivered flawless work with zero back-and-forth. I recommend them to any founder looking for reliable execution support.",
    tag: "Web Dev & Automation",
  },
  {
    id: "2",
    name: "David Boyle",
    role: "Head of Business & Legal Operations",
    company: "Motion Pictures Group",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    content:
      "Task Venturers did a fantastic job overhauling our entire CRM, automated client onboarding, and digital assets. They have an exceptional eye for quality and quickly understood our complex requirements. The entire collaboration was seamless, thoughtful, and high-speed.",
    tag: "CRM & Operations",
    isFeatured: true,
  },
  {
    id: "3",
    name: "Idriss Benbassou",
    role: "Senior Analytics Engineer & Founder",
    company: "DataCert.fr",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    content:
      "Task Venturers helped us build custom AI automation scripts and handle our entire outreach infrastructure. What used to take our internal team 20+ hours a week is now completely offloaded and runs like clockwork.",
    tag: "AI Automation",
  },

  // --- ROW 2 (Initial) ---
  {
    id: "4",
    name: "Dr. Iris Palmer, PhD",
    role: "Leadership Mentor & Executive Coach",
    company: "Leadership Vanguard",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    content:
      "The Task Venturers team has an incredible eye for detail. They manage my executive calendar, client communications, and brand collateral with zero friction. It feels like having a dedicated high-tier chief of staff.",
    tag: "Executive Operations",
  },
  {
    id: "5",
    name: "Sonia Castelan",
    role: "Strategic Growth Consultant",
    company: "Castelan Ventures",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
    content:
      "I can be very particular when it comes to brand guidelines and client delivery, and Task Venturers exceeded all expectations. They are proactive, reliable, and always one step ahead.",
    tag: "Brand & Growth",
  },
  {
    id: "6",
    name: "Cannelle Gaucher",
    role: "Deeptech Communications Director",
    company: "Cinnacom Global",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80",
    content:
      "In just a few days, Task Venturers delivered exactly what we needed: SEO architecture, landing page rebuilds, and automated workflows. Responsive, precise, zero pointless back-and-forth, and a genuine pleasure to work with.",
    tag: "SEO & Web Rebuild",
  },

  // --- ROW 3 (Initial) ---
  {
    id: "7",
    name: "Marcus Vance",
    role: "Co-Founder & CTO",
    company: "Synapse Systems",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
    content:
      "Having a dedicated technical virtual assistant from Task Venturers helped us streamline our sprint QA, bug documentation, and API integrations. Their turnaround speed has been phenomenal.",
    tag: "Workflow Architecture",
  },
  {
    id: "8",
    name: "Elena Rostova",
    role: "VP of Product & Operations",
    company: "FinTech Velocity",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&auto=format&fit=crop&q=80",
    content:
      "The precision and accountability of our Task Venturers assistant transformed our customer onboarding pipeline. They integrated seamlessly into our Slack and Notion workflows from day one.",
    tag: "HubSpot & CRM",
  },
  {
    id: "9",
    name: "Nathan Reed",
    role: "Managing Partner",
    company: "Greenfield Ventures",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80",
    content:
      "Our partners delegate deal flow tracking, investment deck preparation, and LP updates to Task Venturers. The level of operational competence and confidentiality is second to none.",
    tag: "Executive Support",
  },

  // --- ROW 4 (Revealed on Click) ---
  {
    id: "10",
    name: "Chloe Tremblay",
    role: "Head of Growth",
    company: "Omnichannel Studio",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    content:
      "We scaled our multi-channel e-commerce brand by delegating inventory audits, supplier follow-ups, and catalog management. Task Venturers delivered flawless execution every single week.",
    tag: "E-Commerce Ops",
  },
  {
    id: "11",
    name: "Julian Keller",
    role: "Founder & Principal",
    company: "Apex Media Group",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
    content:
      "From editing short-form video assets to scheduling guest appearances on our podcast, Task Venturers freed up over 30 hours of my personal schedule each month.",
    tag: "Podcast & Video",
  },
  {
    id: "12",
    name: "Amara Okafor",
    role: "Director of Client Solutions",
    company: "NovaBridge Global",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&auto=format&fit=crop&q=80",
    content:
      "Customer satisfaction ratings shot up after we delegated ticket triage and knowledge base maintenance to our Task Venturers team. Consistent, polite, and thoroughly trained.",
    tag: "Customer Success",
  },

  // --- ROW 5 (Revealed on Click) ---
  {
    id: "13",
    name: "Liam Gallagher",
    role: "CEO & Co-Founder",
    company: "Orbit Digital",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
    content:
      "Task Venturers took over our outbound prospecting, enrichment, and cold email deliverability. We saw a 3x lift in qualified meetings within our first 60 days.",
    tag: "Lead Generation",
  },
  {
    id: "14",
    name: "Sophia Chen",
    role: "Head of Content Marketing",
    company: "Lumina Health",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
    content:
      "Managing an omnichannel publication schedule used to be exhausting. Task Venturers handles research briefs, CMS uploads, and internal linking without missing a beat.",
    tag: "Content & SEO",
  },
  {
    id: "15",
    name: "Tariq Al-Mansoor",
    role: "Operations Director",
    company: "Horizon Logistics",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&auto=format&fit=crop&q=80",
    content:
      "Our billing reconciliation and invoice matching are now completely automated and double-checked by our Task Venturers assistant. Zero errors and complete peace of mind.",
    tag: "Financial Ops",
  },

  // --- ROW 6 (Revealed on Click) ---
  {
    id: "16",
    name: "Megan Ross",
    role: "Partner & Creative Lead",
    company: "Foundry Collective",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    content:
      "Our creative agency needed fast-turnaround asset resizing, presentation design, and brand asset management. Task Venturers has been our most reliable execution partner.",
    tag: "Graphic Design",
  },
  {
    id: "17",
    name: "Felix Weber",
    role: "Engineering Lead",
    company: "HyperScale Cloud",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    content:
      "They organized our entire company database in Airtable with automated Make.com webhooks. What used to take hours of manual data entry is now 100% synchronized.",
    tag: "Airtable & Notion",
  },
  {
    id: "18",
    name: "Olivia Bennett",
    role: "Brand & Community Director",
    company: "Vanguard Studio",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80",
    content:
      "Task Venturers handles community moderation, social calendar scheduling, and analytics reporting with supreme reliability. I can't imagine running operations without them.",
    tag: "Social Media Ops",
  },
];

export default function Testimonials() {
  const [isExpanded, setIsExpanded] = useState(false);

  // 2 rows visible initially = 6 cards. All 6 rows = 18 cards.
  const visibleTestimonials = isExpanded ? testimonialsData : testimonialsData.slice(0, 6);

  return (
    <section className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-0 bg-[#070707] font-sans overflow-hidden">
      {/* Background Seamless SVG Film Grain */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="testimonialsNoiseFilter">
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
          <rect width="100%" height="100%" filter="url(#testimonialsNoiseFilter)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center mb-14 sm:mb-18 lg:mb-20">
          
          {/* Social Proof Avatar Pill (Matching Hero standard) */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#13161c]/80 border border-white/10 backdrop-blur-md shadow-md mb-6 sm:mb-7 select-none cursor-default">
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

            {/* Social Proof Text with Tilted Green Badge */}
            <div className="flex items-center gap-2 text-xs sm:text-[13.5px] text-neutral-300 font-medium pr-1.5">
              <span>Trusted by</span>
              <span className="inline-flex items-center transform -rotate-6 px-1.5 py-0.5 rounded-none bg-gradient-to-br from-[#10B981] via-[#059669] to-[#047857] text-white shadow-[0_2px_8px_rgba(5,150,105,0.35)] border border-[#34d399]/30">
                <span className="font-black text-xs sm:text-sm tracking-tight leading-none">150</span>
                <span className="font-extrabold text-[11px] sm:text-xs ml-0.5 leading-none select-none opacity-95">+</span>
              </span>
              <span className="text-white">experts worldwide.</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.16] text-center mb-5">
            Don&apos;t Take <span className="text-[#EA7A24]">Our Word for It</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-[19px] text-neutral-300 font-normal max-w-2xl leading-relaxed text-center">
            Here is what happens when founders, operators, and high-growth teams delegate their mission-critical tasks to Task Venturers.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* TRUE MASONRY GRID WITH EQUAL VERTICAL & HORIZONTAL SPACING                 */}
        {/* ========================================================================= */}

        {/* Desktop View (3 Columns Masonry) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 sm:gap-7 items-start">
          {[0, 1, 2].map((colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6 sm:gap-7">
              {visibleTestimonials
                .filter((_, i) => i % 3 === colIndex)
                .map((t) => (
                  <TestimonialCard key={t.id} testimonial={t} />
                ))}
            </div>
          ))}
        </div>

        {/* Tablet View (2 Columns Masonry) */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 items-start">
          {[0, 1].map((colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {visibleTestimonials
                .filter((_, i) => i % 2 === colIndex)
                .map((t) => (
                  <TestimonialCard key={t.id} testimonial={t} />
                ))}
            </div>
          ))}
        </div>

        {/* Mobile View (1 Column Stacking) */}
        <div className="flex md:hidden flex-col gap-6">
          {visibleTestimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* ========================================================================= */}
        {/* SHOW MORE / SHOW LESS BUTTON ACTION (Orange Brand Hero Pill)              */}
        {/* ========================================================================= */}
        <div className="flex justify-center mt-12 sm:mt-14 lg:mt-16">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#EA7A24] hover:bg-[#f28834] active:scale-[0.98] text-neutral-950 font-bold text-sm sm:text-base transition-all duration-150 shadow-md cursor-pointer select-none"
          >
            <span>{isExpanded ? "Show Fewer Testimonials" : "Show More Testimonials"}</span>
            <ChevronDown
              className={`w-4 h-4 text-neutral-950 stroke-[2.6] transition-transform duration-300 ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  const isFeatured = t.isFeatured;

  return (
    <div
      className={`relative rounded-3xl bg-[#0c0d12]/95 p-7 sm:p-8 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between group overflow-hidden ${
        isFeatured
          ? "border border-[#EA7A24]/35 bg-gradient-to-b from-[#EA7A24]/[0.06] via-[#0c0d12]/95 to-[#0c0d12]/95"
          : "border border-white/[0.08] hover:border-white/20"
      }`}
    >
      {/* Top Ambient Hairline Highlight */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] pointer-events-none ${
          isFeatured
            ? "bg-gradient-to-r from-transparent via-[#EA7A24]/60 to-transparent"
            : "bg-gradient-to-r from-transparent via-white/[0.15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }`}
      />

      {/* Header Row */}
      <div>
        <div className="flex items-center gap-3.5 mb-6">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/10 shadow-md bg-neutral-800 shrink-0">
            <Image
              src={t.avatar}
              alt={t.name}
              width={48}
              height={48}
              className="w-full h-full object-cover grayscale contrast-125"
              unoptimized={t.avatar.startsWith("http")}
            />
          </div>
          <div>
            <h3 className="font-bold text-white text-base sm:text-[17px] leading-tight">
              {t.name}
            </h3>
            <p className="text-xs sm:text-[13px] text-neutral-400 leading-tight mt-1">
              {t.role}
            </p>
            <p className="text-[11px] font-semibold text-[#EA7A24] tracking-wide mt-0.5">
              {t.company}
            </p>
          </div>
        </div>

        {/* Testimonial Quote */}
        <p className="text-sm sm:text-[15px] text-neutral-300 font-normal leading-relaxed">
          &ldquo;{t.content}&rdquo;
        </p>
      </div>

      {/* Footer Rating & Category Pill */}
      <div
        className={`flex items-center justify-between mt-6 pt-5 border-t ${
          isFeatured ? "border-[#EA7A24]/15" : "border-white/[0.06]"
        }`}
      >
        <div className="flex items-center gap-1 text-[#10B981]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#10B981] text-[#10B981]" />
          ))}
        </div>
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide ${
            isFeatured
              ? "bg-[#EA7A24]/10 border border-[#EA7A24]/25 text-[#EA7A24]"
              : "bg-white/[0.06] border border-white/[0.08] text-neutral-300"
          }`}
        >
          {t.tag}
        </span>
      </div>
    </div>
  );
}
