"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export interface TechLogoItem {
  name: string;
  src: string;
  alt: string;
}

export interface CaseStudyItem {
  id: string;
  name: string;
  hasTrademark?: boolean;
  category: string;
  image: string;
  closedImage?: string;
  imagePosition?: string;
  imageAlt?: string;
  imageTitle?: string;
  headerLogos?: TechLogoItem[];
  tags: string[];
  metric?: string;
  metricVariant?: "default" | "green" | "red";
  href: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    id: "attent",
    name: "attent",
    category: "Luxury E-Commerce",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&auto=format&fit=crop&q=80",
    tags: ["Website Architecture", "SEO Optimization", "Performance Marketing"],
    metric: "+340% Conversions",
    href: "/case-studies/attent",
  },
  {
    id: "kinetix",
    name: "kinetix",
    category: "Athletic Performance",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
    tags: ["Operations Triage", "Workflow Pipelines", "Executive Calendar"],
    metric: "24h Weekly Leverage",
    href: "/case-studies/kinetix",
  },
  {
    id: "quantum-vsl",
    name: "Quantum VSL",
    category: "VSL Systems & Course Delivery",
    image: "/images/quantum-vsl-open.png",
    closedImage: "/images/quantum-vsl-closed.jpg",
    imagePosition: "object-center",
    imageTitle: "Quantum VSL Systems & Course Delivery",
    headerLogos: [
      {
        name: "WordPress",
        src: "/images/logos/logo-wordpress.png",
        alt: "Custom WordPress funnel build and website development by Task Venturers",
      },
      {
        name: "Make",
        src: "/images/logos/logo-make.png",
        alt: "Make.com workflow automations connecting WordPress, CRM and marketing tools",
      },
      {
        name: "Memberspot",
        src: "/images/logos/logo-memberspot.png",
        alt: "Memberspot membership area and course platform setup for customer access",
      },
    ],
    tags: [
      "Custom WordPress Funnel Build",
      "Make Automation & Integrations",
      "CopeCart & Memberspot Setup",
      "Dedicated B2B Client Fulfillment",
    ],
    metric: "WORDPRESS + MAKE + MEMBERSPOT",
    metricVariant: "green",
    href: "/case-studies/quantum-vsl",
  },
  {
    id: "redbird",
    name: "RedBird",
    category: "Real Estate & Sales Infrastructure",
    image: "/images/redbird-open.png",
    closedImage: "/images/redbird-closed.jpg",
    imageTitle: "RedBird Real Estate & Sales Infrastructure",
    imageAlt: "RedBird Cyprus luxury resort development and modern architectural real estate project",
    headerLogos: [
      {
        name: "Figma",
        src: "/images/logos/logo-figma.png",
        alt: "Figma UI/UX design and wireframes for real estate web platform",
      },
      {
        name: "WordPress",
        src: "/images/logos/logo-wordpress.png",
        alt: "Custom WordPress real estate website development by Task Venturers",
      },
      {
        name: "MailerLite",
        src: "/images/logos/logo-mailerlite.png",
        alt: "MailerLite real estate email marketing campaigns and audience automation",
      },
      {
        name: "Make",
        src: "/images/logos/logo-make.png",
        alt: "Make.com workflow automations connecting WordPress, CRM and marketing tools",
      },
      {
        name: "Close CRM",
        src: "/images/logos/logo-close-crm.png",
        alt: "Close CRM setup and sales pipeline configuration for real estate agents",
      },
    ],
    tags: [
      "Figma Prototyping",
      "Custom WordPress Build",
      "Email Marketing & Analytics",
      "CRM Setup & Make Automations",
    ],
    metric: "WORDPRESS + CRM + MARKETING",
    metricVariant: "green",
    href: "/case-studies/redbird",
  },
  {
    id: "cadion",
    name: "Cadion",
    hasTrademark: true,
    category: "German DTC Health & Supplements",
    image: "/images/cadion-open.png",
    closedImage: "/images/cadion-closed.jpg",
    imagePosition: "object-center",
    imageTitle: "Cadion® Nahrungsergänzungsmittel Produktlinie",
    imageAlt: "Cadion German nutrition supplements collection featuring Astaxanthin, Amino Power, and natural wellness capsules on green display podiums",
    headerLogos: [
      {
        name: "Shopify",
        src: "/images/logos/logo-shopify.png",
        alt: "Shopify store development and checkout optimization by Task Venturers",
      },
      {
        name: "GA4",
        src: "/images/logos/logo-google-analytics.png",
        alt: "Google Analytics 4 conversion tracking and ecommerce reporting setup",
      },
      {
        name: "Meta Pixel",
        src: "/images/logos/logo-meta-pixel.png",
        alt: "Meta Pixel and Conversions API integration for ad retargeting",
      },
      {
        name: "Zapier",
        src: "/images/logos/logo-zapier.png",
        alt: "Zapier workflow automation connecting Shopify, Mailchimp and analytics",
      },
      {
        name: "Mailchimp",
        src: "/images/logos/logo-mailchimp.png",
        alt: "Mailchimp email marketing automation, segmentation and audience flows",
      },
      {
        name: "Hotjar",
        src: "/images/logos/logo-hotjar.png",
        alt: "Hotjar heatmaps and session recordings for UX and conversion optimization",
      },
    ],
    tags: [
      "Shopify Storefront & Checkout",
      "Analytics & Conversion Tracking",
      "Heatmaps & Email Automation",
      "Zapier Automation & Data Sync",
    ],
    metric: "SHOPIFY + GROWTH STACK",
    metricVariant: "green",
    href: "/case-studies/cadion",
  },
];

export default function CaseStudySlider() {
  const [activeId, setActiveId] = useState<string>("cadion");

  // Schema.org Structured Data (JSON-LD) for Case Studies & Deliverables
  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Task Venturers Client Case Studies & Deliverables",
    "description":
      "Verified portfolio deliverables and growth outcomes executed across DTC, E-Commerce, Real Estate, Venture Infrastructure, and AI Automation.",
    "itemListElement": caseStudies.map((study, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "CreativeWork",
        "name": `${study.name}${study.hasTrademark ? "®" : ""} - ${study.category}`,
        "headline": `${study.name}${study.hasTrademark ? "®" : ""} Case Study`,
        "description": study.imageAlt || `Verified deliverables for ${study.name}: ${study.tags.join(", ")}. Outcome: ${study.metric || ""}`,
        "image": study.image.startsWith("http")
          ? study.image
          : `https://taskventurers.com${study.image}`,
        "url": `https://taskventurers.com${study.href}`,
        "about": {
          "@type": "Thing",
          "name": study.category,
        },
        "keywords": study.tags,
        "hasPart": study.tags.map((tag, tagIdx) => ({
          "@type": "ListItem",
          "position": tagIdx + 1,
          "name": tag,
        })),
      },
    })),
  };

  return (
    <div className="w-full mt-12 sm:mt-16 lg:mt-20 py-2 sm:py-4 relative z-10 bg-transparent select-none">
      {/* Schema.org Structured JSON-LD for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudiesSchema),
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        
        {/* Full-Width Expandable Accordion Slider Track (Single Clean Row) */}
        <div className="flex items-stretch gap-3 sm:gap-4 w-full h-[255px] sm:h-[280px] md:h-[305px]">
          {caseStudies.map((item) => {
            const isExpanded = activeId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`relative h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isExpanded
                    ? "flex-[3.2] sm:flex-[3.5] md:flex-[3.8] border border-white/[0.14] bg-[#101217]/95 backdrop-blur-2xl shadow-2xl"
                    : "flex-1 min-w-[70px] sm:min-w-[90px] border border-white/[0.06] hover:border-white/20 bg-[#0c0d11]"
                }`}
              >
                {/* Background Obsidian Glass Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#161820] via-[#101217] to-[#0c0d11] pointer-events-none" />

                {/* Unified Fluid Flex Container */}
                <div className="w-full h-full flex items-stretch text-white relative z-10 overflow-hidden">
                  
                  {/* ========================================================= */}
                  {/* FLUID IMAGE CONTAINER (No border flashes or outline jumps)*/}
                  {/* ========================================================= */}
                  <div
                    className={`relative h-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isExpanded
                        ? "w-[44%] p-2.5 sm:p-3 shrink-0"
                        : "w-full p-0 shrink-0"
                    }`}
                  >
                    <div
                      className={`w-full h-full relative overflow-hidden transition-all duration-500 bg-[#08090d] ${
                        isExpanded ? "rounded-xl" : "rounded-none"
                      }`}
                    >
                      {/* Closed Custom Image (Smooth Crossfade) */}
                      {item.closedImage && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={item.closedImage}
                          alt={item.imageAlt || item.name}
                          title={item.imageTitle || `${item.name}${item.hasTrademark ? "®" : ""} - ${item.category}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                            isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
                          }`}
                        />
                      )}

                      {/* Main / Opened Image */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.imageAlt || item.name}
                        title={item.imageTitle || `${item.name}${item.hasTrademark ? "®" : ""} - ${item.category}`}
                        className={`w-full h-full object-cover ${item.imagePosition || "object-center"} transition-opacity duration-500 ease-in-out ${
                          item.closedImage && !isExpanded ? "opacity-0" : "opacity-100"
                        }`}
                      />

                      {/* Dark overlay when collapsed */}
                      <div
                        className={`absolute inset-0 bg-black/35 transition-opacity duration-500 pointer-events-none ${
                          isExpanded ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </div>

                    {/* Collapsed Overlay Pill Label */}
                    <div
                      className={`absolute bottom-3 left-2 right-2 text-center transition-all duration-300 ${
                        isExpanded
                          ? "opacity-0 pointer-events-none translate-y-2"
                          : "opacity-100 translate-y-0"
                      }`}
                    >
                      <span className="text-[11px] font-bold text-white/95 uppercase tracking-wider drop-shadow-md bg-black/70 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                        {item.name}
                        {item.hasTrademark && "®"}
                      </span>
                    </div>
                  </div>

                  {/* ========================================================= */}
                  {/* FLUID CONTENT PANEL (Smoothly expands and fades in)      */}
                  {/* ========================================================= */}
                  <div
                    className={`relative h-full flex flex-col justify-between overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isExpanded
                        ? "w-[56%] opacity-100 translate-x-0 p-4 sm:p-5 md:p-6 pointer-events-auto"
                        : "w-0 opacity-0 translate-x-3 p-0 pointer-events-none"
                    }`}
                  >
                    {/* Header: Name + Overlapping Tech Stack Circles + Category + Static Arrow Button */}
                    <div className="flex items-start justify-between gap-2 min-w-0">
                      <div className="min-w-0 space-y-1">
                        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-black tracking-tight font-sans text-white flex items-center">
                            <span>{item.name}</span>
                            {item.hasTrademark && (
                              <sup className="text-xs font-bold text-neutral-300 ml-0.5 relative -top-1">
                                ®
                              </sup>
                            )}
                          </h3>

                          {/* Overlapping Circular Tech Stack Badges (Exact 6 Unique Uploaded Images) */}
                          {item.headerLogos && (
                            <span className="inline-flex items-center -space-x-1.5 sm:-space-x-2 relative -top-[1px]">
                              {item.headerLogos.map((logo) => (
                                <span
                                  key={logo.name}
                                  title={logo.name}
                                  className="relative inline-flex items-center justify-center w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full ring-2 ring-[#101217] overflow-hidden bg-transparent shrink-0 shadow-sm hover:z-20 hover:scale-115 transition-transform"
                                >
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={`${logo.src}?v=5`}
                                    alt={logo.alt}
                                    className="w-full h-full object-cover rounded-full"
                                  />
                                </span>
                              ))}
                            </span>
                          )}
                        </div>

                        <span className="text-xs font-semibold text-neutral-400 block truncate">
                          {item.category}
                        </span>
                      </div>
                      <Link
                        href={item.href}
                        className="w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white text-neutral-300 hover:text-neutral-950 flex items-center justify-center transition-all border border-white/10 shrink-0 cursor-pointer"
                        aria-label={`View ${item.name} case study`}
                      >
                        <ArrowUpRight className="w-4 h-4 stroke-[2.4]" />
                      </Link>
                    </div>

                    {/* Deliverables / Scope Rows with generous spacing, dividers, and checkmarks */}
                    <div className="divide-y divide-white/[0.08] my-auto py-1 min-w-0">
                      {item.tags.map((tag) => (
                        <div
                          key={tag}
                          className="py-1.5 sm:py-2 first:pt-0 last:pb-0 text-xs sm:text-[13px] font-medium text-neutral-200 leading-snug flex items-center gap-2"
                        >
                          <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 stroke-[2.5]" />
                          <span className="truncate">{tag}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Metric Pill */}
                    {item.metric && (
                      <div className="pt-1">
                        <span
                          className={`inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full ${
                            item.metricVariant === "green"
                              ? "bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                              : item.metricVariant === "red"
                              ? "bg-[#FF2121]/15 text-[#FF2121] border border-[#FF2121]/30 shadow-[0_0_12px_rgba(255,33,33,0.15)]"
                              : "bg-white/[0.05] text-neutral-200 border border-white/10 backdrop-blur-md"
                          }`}
                        >
                          {item.metric}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
