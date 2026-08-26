"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Plus,
  Minus,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Globe,
  Check,
  Calendar,
  Sparkles,
} from "lucide-react";

// 6 Core Services
const servicesCol1 = [
  {
    title: "Web Development",
    description: "Build scalable, high-performing websites and funnels with clean, efficient code.",
    href: "/services/web-development",
  },
  {
    title: "Web Design",
    description: "Conversion-focused design that turns visitors into customers through clarity and experience.",
    href: "/services/web-design",
  },
  {
    title: "Automations",
    description: "Replace manual work with intelligent automation that improves efficiency.",
    href: "/services/ai-automation",
  },
];

const servicesCol2 = [
  {
    title: "SEO & AEO",
    description: "Rank higher on Google and get discovered in AI-driven search like ChatGPT or Gemini.",
    href: "/services/seo-aeo",
  },
  {
    title: "Data Migration",
    description: "Seamlessly migrate websites, email, and workplace systems without data loss.",
    href: "/services/system-migration",
  },
  {
    title: "Branding",
    description: "Build a clear, consistent brand identity that strengthens trust and drives recognition.",
    href: "/services/branding",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"EN" | "DE">("EN");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Run immediately on mount to handle page reloads at scrolled positions
    handleScroll();

    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
      onMouseLeave={handleMouseLeave}
    >
      {/* Sticky Navbar Background Layer (Separated to prevent nested backdrop-filter collapse) */}
      <div
        className={`absolute inset-0 transition-all duration-300 pointer-events-none ${
          isScrolled
            ? "bg-[#070707]/55 backdrop-blur-xl backdrop-saturate-150 border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.35)]"
            : "bg-transparent border-b border-transparent"
        }`}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-4 sm:py-5 relative z-10">
        <div className="flex items-center justify-between">
          {/* Brand Logo in Pure Typography (Bricolage Grotesque) */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA7A24] rounded-md transition-opacity hover:opacity-90 select-none group"
            aria-label="taskventurers Home"
          >
            <span className="text-2xl sm:text-[27px] font-black tracking-tight font-sans">
              <span className="text-[#EA7A24]">task</span>
              <span className="text-white">venturers</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            <Link
              href="/"
              className="text-[15px] font-medium text-neutral-300 hover:text-[#EA7A24] transition-colors duration-200"
            >
              Home
            </Link>

            {/* Services Mega Menu Trigger with Smooth 180° Rotating Plus-to-Minus Button */}
            <div
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-200 relative group cursor-pointer ${
                  isServicesOpen
                    ? "text-[#EA7A24]"
                    : "text-neutral-300 hover:text-[#EA7A24]"
                }`}
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                {/* 180° Rotating Plus-to-Minus Icon */}
                <span
                  className={`inline-flex items-center justify-center w-4 h-4 transition-transform duration-300 ease-out transform ${
                    isServicesOpen
                      ? "rotate-180 text-[#EA7A24]"
                      : "group-hover:rotate-90 text-neutral-400 group-hover:text-[#EA7A24]"
                  }`}
                >
                  {isServicesOpen ? (
                    <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 stroke-[2.2]" />
                  )}
                </span>
              </button>
            </div>

            {/* Case Studies */}
            <Link
              href="/case-studies"
              className="text-[15px] font-medium text-neutral-300 hover:text-[#EA7A24] transition-colors duration-200"
            >
              Case Studies
            </Link>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="text-[15px] font-medium text-neutral-300 hover:text-[#EA7A24] transition-colors duration-200"
            >
              Pricing
            </Link>

            <Link
              href="/careers"
              className="text-[15px] font-medium text-neutral-300 hover:text-[#EA7A24] transition-colors duration-200"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className="text-[15px] font-medium text-neutral-300 hover:text-[#EA7A24] transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Area: Language Switcher + Classic "Sign In ↗" Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher Dropdown (DE / EN) */}
            <div ref={langMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-full text-neutral-300 hover:text-[#EA7A24] hover:bg-white/[0.06] transition-all cursor-pointer select-none"
                aria-label="Language selection"
              >
                <Globe className="w-4 h-4 text-neutral-400" />
                <span className="text-xs font-bold uppercase">{selectedLanguage}</span>
                <ChevronDown className="w-3 h-3 text-neutral-400" />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-[#13161c] border border-white/10 rounded-xl p-1.5 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 z-50">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedLanguage("EN");
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedLanguage === "EN"
                        ? "bg-[#EA7A24]/15 text-[#EA7A24]"
                        : "text-neutral-300 hover:bg-white/[0.06] hover:text-[#EA7A24]"
                    }`}
                  >
                    <span>English (EN)</span>
                    {selectedLanguage === "EN" && <Check className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedLanguage("DE");
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedLanguage === "DE"
                        ? "bg-[#EA7A24]/15 text-[#EA7A24]"
                        : "text-neutral-300 hover:bg-white/[0.06] hover:text-[#EA7A24]"
                    }`}
                  >
                    <span>Deutsch (DE)</span>
                    {selectedLanguage === "DE" && <Check className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}
            </div>

            {/* Classic Solid White "Sign In ↗" Pill Button */}
            <Link
              href="/signin"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-bold text-sm shadow-sm hover:bg-neutral-100 active:scale-[0.98] transition-all duration-150 select-none"
            >
              <span>Sign In</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.4]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* ========================================================================= */}
        {/* REFINED SERVICES MEGA MENU (INTENSE 64px OPTICAL BLUR & HIGH CONTRAST)    */}
        {/* ========================================================================= */}
        {isServicesOpen && (
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full mt-5 sm:mt-6 w-[95vw] max-w-[940px] bg-[#07080c]/88 border border-white/[0.12] rounded-2xl p-6 sm:p-7 shadow-[0_40px_110px_rgba(0,0,0,0.95),inset_0_1px_1px_0_rgba(255,255,255,0.12)] animate-in fade-in zoom-in-95 duration-200 z-50 select-none before:absolute before:-top-6 before:left-0 before:right-0 before:h-6 before:content-['']"
            style={{
              backdropFilter: "blur(64px) saturate(220%)",
              WebkitBackdropFilter: "blur(64px) saturate(220%)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-0">
              
              {/* ========================================================= */}
              {/* LEFT & CENTER: 2 COLUMNS OF SERVICES WITH MIDDLE DIVIDER  */}
              {/* ========================================================= */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:pr-7 lg:border-r border-white/[0.08]">
                
                {/* Column 1 (Left 3 Services) */}
                <div className="divide-y divide-white/[0.08] sm:pr-6 sm:border-r border-white/[0.08]">
                  {servicesCol1.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="group/item block py-3.5 first:pt-0 last:pb-0 transition-all duration-150"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-[14.5px] sm:text-[15px] font-bold text-white group-hover/item:text-[#EA7A24] transition-colors font-sans">
                          {service.title}
                        </h4>
                        <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover/item:text-[#EA7A24] group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all shrink-0" />
                      </div>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-sans font-normal line-clamp-2">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>

                {/* Column 2 (Right 3 Services with minimal horizontal dividers) */}
                <div className="divide-y divide-white/[0.08] sm:pl-6 mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/[0.08]">
                  {servicesCol2.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="group/item block py-3.5 first:pt-0 last:pb-0 transition-all duration-150"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-[14.5px] sm:text-[15px] font-bold text-white group-hover/item:text-[#EA7A24] transition-colors font-sans">
                          {service.title}
                        </h4>
                        <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover/item:text-[#EA7A24] group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all shrink-0" />
                      </div>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-sans font-normal line-clamp-2">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>

              </div>

              {/* ========================================================= */}
              {/* RIGHT SIDEBAR: 1:1 CONSULTATION & ENTERPRISE PODS (IMG 2) */}
              {/* ========================================================= */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-5 lg:pl-7 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/[0.08]">
                
                {/* Block 1: 1:1 Consultation Call */}
                <div className="space-y-1.5">
                  <h4 className="text-[14.5px] sm:text-[15px] font-bold text-white font-sans flex items-center gap-1.5">
                    <span>1:1 Consultation</span>
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans font-normal">
                    Schedule a discovery session to match with the ideal dedicated assistant.
                  </p>
                  <Link
                    href="/book-call"
                    className="group/cta inline-flex items-center gap-1 text-xs font-bold text-[#EA7A24] hover:text-[#f39548] pt-1 transition-colors"
                  >
                    <span>Book a Free 1:1 Call</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Subtle Horizontal Divider */}
                <div className="border-t border-white/[0.08]" />

                {/* Block 2: Custom Enterprise Architecture */}
                <div className="space-y-1.5">
                  <h4 className="text-[14.5px] sm:text-[15px] font-bold text-white font-sans flex items-center gap-1.5">
                    <span>Custom Pods</span>
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans font-normal">
                    Dedicated multi-assistant and AI pipelines architected for high-growth operations.
                  </p>
                  <Link
                    href="/contact"
                    className="group/cta inline-flex items-center gap-1 text-xs font-bold text-[#EA7A24] hover:text-[#f39548] pt-1 transition-colors"
                  >
                    <span>Request Custom Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* MOBILE HAMBURGER DRAWER                                                   */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 bg-[#0a0a0c]/98 border-t border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-300 hover:text-[#EA7A24] transition-colors"
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-neutral-300 hover:text-[#EA7A24] transition-colors"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileServicesExpanded ? "rotate-180 text-[#EA7A24]" : ""
                }`}
              />
            </button>

            {mobileServicesExpanded && (
              <div className="pl-4 pr-2 py-2 space-y-3 border-l-2 border-[#EA7A24]/40 ml-4 mt-2">
                {[...servicesCol1, ...servicesCol2].map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm text-neutral-300 hover:text-[#EA7A24] transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-300 hover:text-[#EA7A24] transition-colors"
          >
            Case Studies
          </Link>

          {/* Mobile Pricing Link */}
          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-300 hover:text-[#EA7A24] transition-colors"
          >
            Pricing
          </Link>

          <Link
            href="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-300 hover:text-[#EA7A24] transition-colors"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-300 hover:text-[#EA7A24] transition-colors"
          >
            Contact
          </Link>

          {/* Mobile Language Selector */}
          <div className="pt-2 flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.04] text-sm">
            <span className="text-neutral-400 flex items-center gap-2">
              <Globe className="w-4 h-4" /> Language
            </span>
            <div className="flex gap-2 font-bold text-xs">
              <button
                type="button"
                onClick={() => setSelectedLanguage("EN")}
                className={`px-2.5 py-1 rounded ${
                  selectedLanguage === "EN" ? "bg-white text-neutral-950" : "text-neutral-400"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setSelectedLanguage("DE")}
                className={`px-2.5 py-1 rounded ${
                  selectedLanguage === "DE" ? "bg-white text-neutral-950" : "text-neutral-400"
                }`}
              >
                DE
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10">
            <Link
              href="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-white text-neutral-950 font-bold text-sm shadow-sm hover:bg-neutral-100 transition-colors"
            >
              <span>Sign In</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.4]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
