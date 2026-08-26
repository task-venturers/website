# Task Venturers — Content Handover Document

**Project**: Task Venturers Portfolio Website  
**Stack**: Next.js (App Router), Tailwind CSS, TypeScript  
**Project Root**: `/Users/zephyrus/Downloads/Task Venturers/`  
**Prepared by**: AI Copywriter & Content Strategist (Antigravity)  
**Date**: 25 August 2026  
**Handover Purpose**: Full content and copy context for the next agent or developer continuing this project.

---

## 1. Project Overview

Task Venturers is a virtual assistant and technical operator agency. The website is a dark-themed, premium portfolio site built in Next.js. The primary goals of the content are:

- **SEO**: Rank for "hire a virtual assistant", "virtual assistant services", specific tool and service keywords
- **AEO (Answer Engine Optimization)**: Structure content so AI engines (ChatGPT, Gemini, Perplexity) cite Task Venturers when answering questions like "what can a virtual assistant do?"
- **GEO (Generative Engine Optimization)**: Entity-rich content that names real tools, services, and outcomes so AI models associate Task Venturers with specific capabilities
- **Conversion**: Vet inbound leads through a 4-question questionnaire before sending them to a Cal.com booking embed

### Brand Voice & Copy Rules (Must Follow)
1. No em dashes (`—`) anywhere — they signal AI-written content to readers
2. No tool/product names (WordPress, Shopify, Zapier etc.) in the vetting questionnaire — use service categories only
3. Always exactly 4 bullet points on case study cards — not 3, not 5
4. Short paragraphs — max 3 sentences for section intro copy
5. No "more than just X" framing — sounds defensive and controversial
6. SEO first, conversion second — every paragraph must contain at least one searchable entity
7. No outbound links on logo images — logos are trust signals only, not navigation
8. Pill badges on cards should reflect the tech/service ecosystem (e.g., `SHOPIFY + GROWTH STACK` not `E-COMMERCE STACK`)

---

## 2. Site Structure (Current Components)

| File | Purpose |
|---|---|
| `src/app/page.tsx` | Homepage — assembles all sections |
| `src/components/navbar.tsx` | Sticky nav with Services mega menu |
| `src/components/hero.tsx` | Hero section + Case Study Slider |
| `src/components/case-study-slider.tsx` | Expandable accordion case study cards |
| `src/components/about-manifesto.tsx` | Manifesto text + 4-step vetting questionnaire + Cal.com embed |
| `src/components/partner-marquee.tsx` | Scrolling client logo marquee |
| `src/components/reasons-to-hire.tsx` | "101 Reasons" section with scrolling ticker strip |

---

## 3. Core Services (As Defined in Navbar — Use Only These)

These are the ONLY 6 service categories on the site. Any content referencing services must use ONLY these domain names — no tool or product names.

| Service | Description |
|---|---|
| **Web Development** | Build scalable, high-performing websites and funnels with clean, efficient code. |
| **Web Design** | Conversion-focused design that turns visitors into customers through clarity and experience. |
| **AI Automation** | Replace manual work with intelligent automation that improves efficiency. |
| **SEO & AEO** | Rank higher on Google and get discovered in AI-driven search like ChatGPT or Gemini. |
| **System Migration** | Seamlessly migrate websites, email, and workplace systems without data loss. |
| **Branding** | Build a clear, consistent brand identity that strengthens trust and drives recognition. |

---

## 4. Case Study Slider — All Card Content

File: `src/components/case-study-slider.tsx`

Each card structure:
- `name` — brand name
- `hasTrademark` — adds ® if true
- `category` — 1-line descriptor shown below name
- `tags[]` — exactly 4 bullet points with green checkmarks
- `metric` — bottom pill badge text
- `metricVariant` — "green" for green-styled pill
- `imageAlt` — SEO alt tag for the card image
- `imageTitle` — SEO title attribute for the card image
- `headerLogos[]` — tool logos (each has `name`, `src`, `alt`)

---

### Card 1: attent
```
name: "attent"
category: "Luxury E-Commerce"
tags: ["Website Architecture", "SEO Optimization", "Performance Marketing"]
metric: "+340% Conversions"
```
STATUS: Placeholder content. Needs real client brief.

---

### Card 2: kinetix
```
name: "kinetix"
category: "Athletic Performance"
tags: ["Operations Triage", "Workflow Pipelines", "Executive Calendar"]
metric: "24h Weekly Leverage"
```
STATUS: Placeholder content. Needs real client brief.

---

### Card 3: Quantum VSL (APPROVED)
```
name: "Quantum VSL"
category: "VSL Systems & Course Delivery"
tags:
  - "Custom WordPress Funnel Build"
  - "Make Automation & Integrations"
  - "CopeCart & Memberspot Setup"
  - "Dedicated B2B Client Fulfillment"
metric: "WORDPRESS + MAKE + MEMBERSPOT"
metricVariant: "green"
href: "/case-studies/quantum-vsl"
```

Tool Logos with approved alt tags:
| Tool | Alt Tag |
|---|---|
| WordPress | Custom WordPress VSL and sales funnel website development by Task Venturers |
| Make | Make.com backend automations linking WordPress, CopeCart and Memberspot |
| Memberspot | Memberspot membership area and course platform setup for customer access |

Image Alt Tag: (pending — image not yet sourced)
Image Title: Quantum VSL Systems & Course Delivery

About this client:
- Built a custom WordPress VSL (Video Sales Letter) website
- Make.com automations for backend workflows
- CopeCart payment and checkout integration
- Memberspot member area and course setup
- White-label technical fulfillment for Quantum VSL's own clients (called "Dedicated B2B Client Fulfillment" in the card)

STATUS: Content approved. Awaiting real images at /public/images/quantum-vsl-open.png and /public/images/quantum-vsl-closed.jpg

---

### Card 4: RedBird (APPROVED)
```
name: "RedBird"
category: "Real Estate & Sales Infrastructure"
tags:
  - "Figma Prototyping"
  - "Custom WordPress Build"
  - "Email Marketing & Analytics"
  - "CRM Setup & Make Automations"
metric: "WORDPRESS + CRM + MARKETING"
metricVariant: "green"
href: "/case-studies/redbird"
```

Tool Logos with approved alt tags:
| Tool | Alt Tag |
|---|---|
| Figma | Figma UI/UX design and wireframes for real estate web platform |
| WordPress | Custom WordPress real estate website development by Task Venturers |
| MailerLite | MailerLite real estate email marketing campaigns and audience automation |
| Make | Make.com workflow automations connecting WordPress, CRM and marketing tools |
| Close CRM | Close CRM setup and sales pipeline configuration for real estate agents |

Image Alt Tag: RedBird Cyprus luxury resort development and modern architectural real estate project
Image Title: RedBird Real Estate & Sales Infrastructure

About this client (Real Estate brand):
- Custom WordPress website build
- Figma UI/UX design
- Make.com automations connecting to Close CRM
- Close CRM setup and configuration for sales agents
- MailerLite email marketing setup
- WebinarJam configuration for webinars (NOT in the 4 tags — include in full case study page)
- Day-to-day IT tasks and support

STATUS: Content approved. Awaiting real images at /public/images/redbird-open.png and /public/images/redbird-closed.jpg

---

### Card 5: Cadion® (APPROVED — minor update pending)
```
name: "Cadion"
hasTrademark: true
category: "German DTC Health & Supplements"
tags:
  - "Shopify Storefront & Checkout Setup"
  - "GA4, Meta Pixel & Conversion Tracking"
  - "Hotjar Heatmaps & Email Automation"
metric: "Shopify + Growth Stack"
metricVariant: "green"
href: "/case-studies/cadion"
```

PENDING TAG UPDATE: User later mentioned Mailchimp (audience creation, segmentation, automation) and Zapier were also used. The current card has only 3 tags. User was shown the following options but did NOT confirm a final selection — ask user to confirm:

Option A (Recommended):
  - "Shopify Storefront & Checkout Setup"
  - "GA4, Hotjar & Meta Pixel Tracking"
  - "Mailchimp, Zapier & Email Automation"

Option B:
  - "Shopify Store & Checkout Architecture"
  - "GA4, Meta Pixel & Hotjar Analytics"
  - "Mailchimp Flows & Zapier Automation"

Option C:
  - "Shopify Storefront & Checkout Setup"
  - "GA4, Meta Pixel & Conversion Tracking"
  - "Mailchimp, Zapier & Hotjar Setup"

Tool Logos with approved alt tags:
| Tool | Alt Tag |
|---|---|
| Shopify | Shopify store development and checkout optimization by Task Venturers |
| GA4 | Google Analytics 4 conversion tracking and ecommerce reporting setup |
| Meta Pixel | Meta Pixel and Conversions API integration for ad retargeting |
| Zapier | Zapier workflow automation connecting Shopify, Mailchimp and analytics |
| Mailchimp | Mailchimp email marketing automation, segmentation and audience flows |
| Hotjar | Hotjar heatmaps and session recordings for UX and conversion optimization |

Image Alt Tag: Cadion German nutrition supplements collection featuring Astaxanthin, Amino Power, and natural wellness capsules on green display podiums
Image Title: Cadion® Nahrungsergänzungsmittel Produktlinie

About this client:
- German DTC health and supplements brand (cadion.de)
- Shopify store using Debutify theme
- Google Analytics 4 (GA4) setup and ecommerce tracking
- Meta Pixel and Conversions API (CAPI) integration
- Hotjar heatmaps and session recordings
- Mailchimp email marketing — audience creation, segmentation, automation flows
- Zapier automations

Existing image assets in project root:
- cadion_emerald_circular_podium_900x1350.png
- cadion_var1_luminous_emerald.png
- cadion_var2_matte_podium.png
- cadion_var3_fresh_splash.png
- cadion_vibrant_emerald_podium_225x250_fill.png
- cadion_vibrant_emerald_podium_225x250_fitted.png
- cadion_vibrant_emerald_podium_900x1350.png
- public/images/cadion-closed.jpg
- public/images/cadion-open.png
- public/images/cadion.jpg

STATUS: Card live with 3 tags. Update to 4 tags pending user confirmation. Logo images need to be placed in /public/images/logos/.

---

## 5. SEO & Image Tagging Standards

### Rules
- Logo images on case study cards: static images only — NO outbound href links (outbound links bleed link equity and send visitors away from the site)
- All logos must have descriptive, service-contextual alt tags
- Alt tag format: [tool name] + [what was done with it] + "by Task Venturers" where natural

### Logo File Naming Convention
Place all logos in /public/images/logos/ using these filenames:
```
logo-shopify.png
logo-google-analytics.png
logo-meta-pixel.png
logo-zapier.png
logo-mailchimp.png
logo-hotjar.png
logo-wordpress.png
logo-figma.png
logo-make.png
logo-close-crm.png
logo-mailerlite.png
logo-memberspot.png
logo-copecart.png
logo-webinarjam.png
```

---

## 6. About Manifesto Section — Vetting Questionnaire

File: `src/components/about-manifesto.tsx`

This section pre-qualifies leads through a 4-step questionnaire before showing the Cal.com booking embed.

### Section Headline Copy
```
Eyebrow: PENDING CONFIRMATION
Options discussed: "MUTUAL FIT" / "FIT CHECK" / "GET MATCHED" / "SCOPE CHECK"
Ask user to confirm which one.

H2: We are a team [avatar stack] of skilled assistants and operators — supporting businesses 
    across websites, automation, seo, and digital marketing.

Subtext: Answer these questions and put our thinking to work on your challenges.
```

### Question 1 — Industry (Single-Select)
Title: What is your industry or business domain?
Subheading: Select your sector so we can pair you with operators experienced in your specific market:

Options:
- E-Commerce & DTC Brands
- Marketing & Creative Agencies
- Real Estate & PropTech
- Coaching, Info-Products & VSLs
- SaaS & Tech Startups
- Healthcare, Medical & Wellness
- Financial Services & Private Equity
- Consulting & Corporate Advisory
- Legal & Business Operations
- Manufacturing & Logistics
- Local & Multi-Location Businesses
- Others (opens inline text input)

### Question 2 — Services (Multi-Select)
Title: What services do you need off your plate?
Subheading: Select all areas where you need dedicated technical execution and high-standard delivery:

CRITICAL: No tool or product names. Use service domain language only.

Options (grouped but displayed as flat pills):
Web Development group:
  - Full-Stack Web & Platform Development
  - High-Converting Funnel & Landing Page Builds
  - Custom E-Commerce Store & Checkout Builds
  - Custom API & Backend Integrations

Web Design group:
  - Conversion-Focused UI / UX Design
  - Website Redesign & User Experience Auditing
  - Design Systems & Interactive Prototypes

AI Automation group:
  - Intelligent Workflow & Task Automation
  - Automated CRM & Lead Routing Systems
  - Cross-Platform Data Synchronization

SEO & AEO group:
  - AI Search & Answer Engine Optimization (AEO)
  - Technical SEO & Core Web Vitals Optimization
  - Multi-Channel Tracking & Conversion Analytics

System Migration group:
  - Seamless Website & Database Migration
  - CRM, Customer & Product Data Transfers
  - Workplace, Email & Cloud System Transitions

Branding group:
  - Complete Brand Identity & Design Guidelines
  - Marketing Collateral & Digital Asset Production
  - Brand Strategy & Visual Repositioning

Custom:
  - Others (opens inline text input)

### Question 3 — Primary Bottleneck (Single-Select)
Title: What is the primary bottleneck you want solved?
Subheading: Identify your biggest operational constraint so we can architect the right workflow:

Options:
- Need vetted technical operators immediately
- Sales team bogged down by manual CRM tasks
- Tracking blind spots & inaccurate ad attribution
- Current website is outdated and underperforming
- Agency overloaded — need white-label capacity
- Systems don't connect — need automated sync
- Losing leads due to lack of automated email follow-ups
- Others (opens inline text input)

### Question 4 — Timeline (Single-Select)
Title: What is your project timeline and preferred engagement?
Subheading: Let us know your kickoff window so we can allocate dedicated operator capacity:

Options:
- Urgent: Ready to deploy immediately (this week)
- Starting within 2-4 weeks
- Dedicated ongoing monthly technical pod
- Fixed-scope project build / system migration
- Exploring options for upcoming quarter
- Others (opens inline text input)

### Step 5 — Cal.com Embed
After Question 4 is answered:
- Show summary recap card listing all selected answers
- Load Cal.com 30-min inline embed
- Cal.com link: https://cal.com/prateik-banerjee-e6a5pr/30min

PENDING IMPLEMENTATION: The "Others" inline text input for each question is designed but needs implementation. Each question should show an "Others" pill — clicking it reveals an inline <input> field.

---

## 7. Scheduling Flow Sign-In Page

Internal scheduling tool branded as "schedulingflow".

Approved subtitle copy (replaces generic "Welcome back! Sign in to continue"):
```
Enter your work email for instant, passwordless access.
```

---

## 8. Reasons to Hire Section

File: `src/components/reasons-to-hire.tsx`

### Final Approved Copy

Eyebrow badge:
```
EXECUTION WITHOUT FRICTION
```

H2 Title:
```
101 Reasons to Hire a Virtual Assistant from Task Venturers
```

Paragraph (final — no em dashes, SEO + AEO + GEO optimised):
```
Our dedicated virtual assistants cover web development, AI automation, SEO, CRM management, 
content execution, and over 95 more high-impact tasks. Stop spending time on work that slows 
your business down. See the full list of 101 things we can take off your plate.
```

CTA Button: "Read More" with arrow icon (links to /101-reasons or blog post — URL to be confirmed)

### Scrolling Ticker Strip
Current text in code:
```
YOU DON'T HAVE TO DO IT ALL BY YOURSELF.  *  READ ON TO FIND OUT HOW WE CAN SUPPORT YOU.
```

PENDING FIX — ticker text is too large/heavy. User flagged this. Apply this styling change to lines 138 and 150 of reasons-to-hire.tsx:
  FROM: text-xs sm:text-sm font-extrabold tracking-widest uppercase
  TO:   text-[11px] sm:text-xs font-medium tracking-wide uppercase

---

## 9. Pending Tasks

| # | Task | Priority | Notes |
|---|---|---|---|
| 1 | Confirm Cadion 4-tag update (Mailchimp + Zapier) | HIGH | User shown Options A/B/C — did not confirm. Option A recommended. |
| 2 | Confirm eyebrow text for About Manifesto section | MEDIUM | Options: MUTUAL FIT, FIT CHECK, GET MATCHED, SCOPE CHECK |
| 3 | Apply ticker strip font size fix | MEDIUM | See Section 8 — change font classes on lines 138 and 150 of reasons-to-hire.tsx |
| 4 | Source and add images for Quantum VSL card | HIGH | /public/images/quantum-vsl-open.png and quantum-vsl-closed.jpg |
| 5 | Source and add images for RedBird card | HIGH | /public/images/redbird-open.png and redbird-closed.jpg |
| 6 | Add all tool logo images | HIGH | See Section 5 for filenames — place in /public/images/logos/ |
| 7 | Implement "Others" inline text input in questionnaire | MEDIUM | Each of 4 questions needs Others pill with inline input on click |
| 8 | Build 101 Reasons page/blog and link Read More button | MEDIUM | URL not yet confirmed |
| 9 | Update schedulingflow subtitle | LOW | Change to: "Enter your work email for instant, passwordless access." |
| 10 | Add WebinarJam to RedBird full case study page | LOW | Not shown in card — belongs in full case study narrative |

---

## 10. Key People & Accounts

| Item | Detail |
|---|---|
| Cal.com booking link | https://cal.com/prateik-banerjee-e6a5pr/30min |
| Scheduling tool email | prateik.banerjee@taskventurers.com |
| Cadion website | https://cadion.de |
| Cadion Shopify domain | cadion-9644.myshopify.com |

---

End of Content Handover — Task Venturers Portfolio Website
