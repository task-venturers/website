import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://taskventurers.com"),
  title: {
    default: "Task Venturers | High Standards, Quietly Delivered",
    template: "%s | Task Venturers",
  },
  description:
    "Experienced virtual assistants and elite operators embedded seamlessly into your workflow. Specializing in scalable web development, AI automation, SEO & AEO, and digital growth systems.",
  keywords: [
    "Task Venturers",
    "virtual assistants",
    "executive operators",
    "AI automation",
    "SEO & AEO",
    "web development",
    "web design",
    "system migration",
    "workflow optimization",
    "business delegation",
    "operations agency",
  ],
  authors: [{ name: "Task Venturers Team", url: "https://taskventurers.com" }],
  creator: "Task Venturers",
  publisher: "Task Venturers",
  applicationName: "Task Venturers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://taskventurers.com",
    languages: {
      "en-US": "https://taskventurers.com",
      "de-DE": "https://taskventurers.com/de",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taskventurers.com",
    siteName: "Task Venturers",
    title: "Task Venturers | High Standards, Quietly Delivered",
    description:
      "Experienced virtual assistants and operators seamlessly integrated into your workflow. Taking ownership, executing with precision, and keeping work moving without friction.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=630&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Task Venturers - High Standards, Quietly Delivered",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Task Venturers | High Standards, Quietly Delivered",
    description:
      "Experienced virtual assistants and elite operators embedded into your workflow.",
    creator: "@taskventurers",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=630&auto=format&fit=crop&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Business Operations & Technology Services",
};

// Schema.org Structured Data (JSON-LD)
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://taskventurers.com/#organization",
      name: "Task Venturers",
      url: "https://taskventurers.com",
      logo: {
        "@type": "ImageObject",
        url: "https://taskventurers.com/logo.png",
      },
      description:
        "High-performance virtual assistants, executive operators, web development, and AI automation for agile businesses.",
      sameAs: [
        "https://twitter.com/taskventurers",
        "https://linkedin.com/company/taskventurers",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services Offered",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development",
              description: "Build scalable, high-performing websites and funnels with clean, efficient code.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Design",
              description: "Conversion-focused design that turns visitors into customers through clarity and experience.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automations",
              description: "Replace manual work with intelligent automation that improves efficiency.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO & AEO",
              description: "Rank higher on Google and get discovered in AI-driven search like ChatGPT or Gemini.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Migration",
              description: "Seamlessly migrate websites, email, and workplace systems without data loss.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Branding",
              description: "Build a clear, consistent brand identity that strengthens trust and drives recognition.",
            },
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://taskventurers.com/#case-studies",
      "name": "Featured Client Case Studies & Deliverables",
      "description":
        "Verified deliverables executed by Task Venturers across Shopify development, conversion tracking, AI automations, and digital operations.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "CreativeWork",
            "name": "Cadion® - German DTC Health & Supplements",
            "headline": "Cadion® Case Study",
            "description":
              "Cadion German nutrition supplements collection featuring Astaxanthin, Amino Power, and natural wellness capsules on green display podiums. Deliverables: Shopify Storefront & Checkout, Analytics & Conversion Tracking, Heatmaps & Email Automation, Zapier Automation & Data Sync. Metric: SHOPIFY + GROWTH STACK.",
            "image": "https://taskventurers.com/images/cadion-open.png",
            "keywords": [
              "Shopify Storefront & Checkout",
              "Analytics & Conversion Tracking",
              "Heatmaps & Email Automation",
              "Zapier Automation & Data Sync",
              "German DTC Health & Supplements"
            ],
            "hasPart": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Shopify Storefront & Checkout"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Analytics & Conversion Tracking"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Heatmaps & Email Automation"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Zapier Automation & Data Sync"
              }
            ]
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "CreativeWork",
            "name": "RedBird - Real Estate & Sales Infrastructure",
            "headline": "RedBird Case Study",
            "description":
              "RedBird Cyprus luxury resort development and modern architectural real estate project. Deliverables: Figma Prototyping, Custom WordPress Build, Email Marketing & Analytics, CRM Setup & Make Automations. Metric: WORDPRESS + CRM + MARKETING.",
            "image": "https://taskventurers.com/images/redbird-open.png",
            "keywords": [
              "Figma Prototyping",
              "Custom WordPress Build",
              "Email Marketing & Analytics",
              "CRM Setup & Make Automations",
              "Real Estate & Sales Infrastructure"
            ],
            "hasPart": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Figma Prototyping"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Custom WordPress Build"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Email Marketing & Analytics"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "CRM Setup & Make Automations"
              }
            ]
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "CreativeWork",
            "name": "Quantum VSL - VSL Systems & Course Delivery",
            "headline": "Quantum VSL Case Study",
            "description":
              "Quantum VSL course delivery platform and presenter video sales letter architecture. Deliverables: Custom WordPress Funnel Build, Make Automation & Integrations, CopeCart & Memberspot Setup, Dedicated B2B Client Fulfillment. Metric: WORDPRESS + MAKE + MEMBERSPOT.",
            "image": "https://taskventurers.com/images/quantum-vsl-open.png",
            "keywords": [
              "Custom WordPress Funnel Build",
              "Make Automation & Integrations",
              "CopeCart & Memberspot Setup",
              "Dedicated B2B Client Fulfillment",
              "VSL Systems & Course Delivery"
            ],
            "hasPart": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Custom WordPress Funnel Build"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Make Automation & Integrations"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "CopeCart & Memberspot Setup"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Dedicated B2B Client Fulfillment"
              }
            ]
          }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://taskventurers.com/#website",
      "url": "https://taskventurers.com",
      "name": "Task Venturers",
      "publisher": {
        "@id": "https://taskventurers.com/#organization",
      },
      "inLanguage": "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#070707] text-white selection:bg-[#EA7A24] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
