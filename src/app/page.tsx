import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutManifesto from "@/components/about-manifesto";
import PartnerMarquee from "@/components/partner-marquee";
import ServicesBento from "@/components/services-bento";
import ImpactMetrics from "@/components/impact-metrics";
import ComparisonTable from "@/components/comparison-table";
import ReasonsToHire from "@/components/reasons-to-hire";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-white flex flex-col selection:bg-[#EA7A24] selection:text-white">
      {/* Sticky Header with untouched mega menu */}
      <Navbar />

      {/* Hero Section with Case Studies Track */}
      <Hero />

      {/* Get Matched: About Us Manifesto & Interactive Questionnaire */}
      <AboutManifesto />

      {/* Partner & Client Logo Marquee Slider */}
      <PartnerMarquee />

      {/* Virtual Assistant Services Bento Section */}
      <ServicesBento />

      {/* Measurable Operational Velocity: Ultra-Slim Stats Strip */}
      <ImpactMetrics />

      {/* Execution, Without Friction: Comparison Table */}
      <ComparisonTable />

      {/* 26 Reasons to Hire a Virtual Assistant Section (Brochure) */}
      <ReasonsToHire />

      {/* Testimonials & Social Proof Wall Section */}
      <Testimonials />
    </main>
  );
}
