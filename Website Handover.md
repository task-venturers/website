# Task Venturers — Project Handover

> [!IMPORTANT]
> **Skills are NOT stored in the project folder.** They live at `~/.gemini/config/plugins/` on the local machine. The only agent-related file in the project root is `AGENTS.md`, which contains Next.js-specific coding rules automatically enforced by the IDE.

---

## 0. Skills & Plugins Required

No special skills or plugins were actively used in this project beyond what comes built-in with the Antigravity IDE (file reading, code editing, terminal commands). The following built-in capabilities were used:

| Capability | Used for |
|---|---|
| File editing tools | Writing and editing all component files |
| Terminal / `run_command` | `npm run dev`, `npx tsc --noEmit` |
| Web search | Not needed — everything was done from code |

> [!NOTE]
> The `modern-web-guidance` and `next.js` rules in `AGENTS.md` are **auto-enforced by the IDE** — no plugin install needed. The new account just needs the standard Antigravity IDE and the project files. No extra skill installation required.

---



---

## 1. Project Overview

| Property | Value |
|---|---|
| **Project name** | Task Venturers |
| **Type** | Next.js 15 App Router web app |
| **Location** | `/Users/zephyrus/Downloads/Task Venturers/` |
| **Dev server** | `npm run dev` → `http://localhost:3000` |
| **Font** | Bricolage Grotesque (Google Fonts) |
| **Brand orange** | `#EA7A24` |
| **Background** | `#070707` (near-black) |

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, `src/` layout) |
| Styling | Tailwind CSS v4 (via `@import "tailwindcss"` in `globals.css`) |
| Language | TypeScript |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth + Google OAuth |
| Calendar | Google Calendar API (free/busy, event booking) |
| Icons | Lucide React |
| Package manager | npm |

---

## 3. Environment Variables

Copy `.env.example` → `.env.local` and fill in all values.

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/google/callback
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 4. Directory Structure

```
Task Venturers/
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── page.tsx                 # Landing page (root "/")
│   │   ├── layout.tsx               # Root layout (fonts, meta, Navbar)
│   │   ├── globals.css              # Global CSS, Tailwind, keyframes
│   │   ├── api/                     # API routes
│   │   │   └── calendar/            # Calendar endpoints (availability, bookings, users)
│   │   ├── app/
│   │   │   └── scheduling-flow/     # The scheduling app UI (main booking page)
│   │   ├── auth/                    # Auth callback pages
│   │   ├── book/                    # Public booking page
│   │   └── dashboard/               # Admin/host dashboard
│   └── components/                  # Landing page sections (all used on page.tsx)
│       ├── navbar.tsx               # Sticky header with mega menu
│       ├── hero.tsx                 # Hero section
│       ├── about-manifesto.tsx      # "Get Matched" questionnaire section
│       ├── partner-marquee.tsx      # Client logo marquee slider
│       ├── services-bento.tsx       # Services bento grid section
│       ├── reasons-to-hire.tsx      # "26 Reasons" CTA section
│       ├── how-it-works.tsx         # How it works steps
│       ├── case-study-slider.tsx    # Case study slider
│       └── growth-graph.tsx         # Growth graph visual
├── public/
│   ├── images/
│   │   ├── clients/                 # Client logo PNGs (6 logos, mask-based)
│   │   │   ├── physiio-connect.png
│   │   │   ├── winestreet.png
│   │   │   ├── corvis.png
│   │   │   ├── cadian.png
│   │   │   ├── meta-sabers.png
│   │   │   └── quantum-vsl.png
│   │   └── logos/                   # Other logo assets
│   └── assets/                      # Other static assets
├── supabase/
│   └── schema.sql                   # Database schema
├── AGENTS.md                        # Next.js agent coding rules (auto-enforced by IDE)
├── .env.local                       # 🔒 Real secrets (not committed)
└── .env.example                     # Template for secrets
```

---

## 5. Landing Page Sections (`src/app/page.tsx`)

The landing page renders sections in this order:

| Order | Component | Description |
|---|---|---|
| 1 | `<Navbar />` | Sticky header, transparent → translucent on scroll (fixed on mount bug fixed) |
| 2 | `<Hero />` | Full-screen hero |
| 3 | `<AboutManifesto />` | "Get Matched" questionnaire |
| 4 | `<PartnerMarquee />` | "Trusted by 150+ Businesses" logo slider |
| 5 | `<ServicesBento />` | Services bento grid |
| 6 | `<ImpactMetrics />` | Ultra-slim typographic numbers strip with top/bottom boundary divider lines |
| 7 | `<ComparisonTable />` | "Execution, Without Friction" comparison table differentiating models |
| 8 | `<HowItWorks />` | 4-step process section with left-aligned header and discovery call CTA button |
| 9 | `<Testimonials />` | Social proof masonry grid with signature brand orange featured card |
| 10 | `<ReasonsToHire />` | "26 Reasons to Hire a VA" brochure CTA card |

---

## 6. Recently Completed Work

### 6.1 `<ComparisonTable />` — "Execution, Without Friction" Model Comparison Table
- **File**: `src/components/comparison-table.tsx`
- **Location**: Positioned directly after `<ImpactMetrics />` and before `<HowItWorks />`.
- **Header**: Single bold manifesto statement with expressive kinetic typography:
  - **Line 1**: *Tired of* <span className="text-[#EA7A24]">**Chasing**</span> *(animated running forward sprint motion)* *Freelancers,* <span className="text-amber-300">**Managing**</span> *(hectic tilted/jitter angle)*
  - **Line 2**: *Platforms, and* <span className="text-rose-400">**Paying Agency Prices**</span> *(with rising inflation badge `↑$$$`)*?
  - Paired with a right-aligned orange **"Book a Discovery Call"** CTA button.
- **Model Comparison Table**:
  - Clean uniform horizontal table grid with subtle dividers (`divide-white/[0.06]`).
  - Differentiates across 4 categories: *Freelancers*, *Fiverr / Upwork*, *Other Agencies*, and *Task Venturers*.
  - **8 Exact Dimensions**:
    1. *Dedicated Account Manager*: `Not Included` / `Not Included` / `Sometimes` / **`Always Included`**
    2. *Full-Spectrum Skill Coverage*: `Single Skill Only` / `Fragmented Talent` / `Billed Separately` / **`One Unified Team`**
    3. *Zero Ghosting Guarantee*: `No Commitment` / `No Accountability` / `Best Effort` / **`100% Guaranteed`**
    4. *Client Communication Channels*: `Manual Emails` / `Platform Locked` / `Ticketing Portal` / **`Direct Slack Access`**
    5. *Time to First Execution*: `3 to 7 Days` / `Unpredictable` / `2 to 4 Weeks` / **`Under 24 Hours`**
    6. *Quality Review on All Deliverables*: `Self-Reviewed` / `Buyer Responsibility` / `Charged Separately` / **`Multi-Layer QA`**
    7. *NDA and Data Confidentiality*: `Unregulated` / `Platform Terms Only` / `Standard NDA` / **`Enterprise Grade`**
    8. *Month-to-Month Flexibility*: `Pay Per Hour` / `Pay Per Gig` / `6 to 12 Month Lock-in` / **`Monthly`**
  - **Unified Column Headers**: Column header styled in standard clean text **Task Venturers** (`text-xs sm:text-sm font-semibold text-white`), perfectly consistent with *Freelancers*, *Fiverr / Upwork*, and *Other Agencies*.
  - **Clean White Typography for Task Venturers**: Text values under the Task Venturers column are styled in crisp white (`text-white font-semibold`).

### 6.2 `<ImpactMetrics />` — Measurable Operational Velocity (Ultra-Slim Stats Strip)
- **File**: `src/components/impact-metrics.tsx`
- **Location**: Positioned directly after `<ServicesBento />` as an ultra-slim, compact numbers strip (`py-5 sm:py-6`).
- **Top and Bottom Divider Lines**:
  - Full-width subtle horizontal border lines (`border-t border-b border-white/[0.08]`) with seamless SVG film grain overlay.
- **4 Key Operational Metrics with White Vertical Dividers**:
  1. `3.5x` — Faster Execution
  2. `70%` — Operational Savings
  3. `99.4%` — Task Precision
  4. `150+` — Growing Companies
  - Clean column layout separated by subtle vertical divider lines (`border-r border-white/[0.08]`).
  - **Muted Logo-Style Greyish Palette**: Numbers render in muted grey (`text-neutral-400`) and labels in `text-neutral-500` by default, transitioning to crisp white (`text-white`) on hover with zero orange colors.
  - Sits tightly and symmetrically between `<ServicesBento />` and `<HowItWorks />`.

### 6.2 `<HowItWorks />` — 4-Step Process Workflow
- **File**: `src/components/how-it-works.tsx`
- **Symmetrical Section Spacing**: Top padding configured to `pt-28 sm:pt-36 lg:pt-40`, matching the spacing between `<PartnerMarquee />` and `<ServicesBento />`.
- **Header**: Left-aligned H2 heading (*"Your dedicated assistant, ready in 4 clear steps."*), paired with a right-aligned orange **"Book a Discovery Call"** CTA button.
- **Continuous 4-Column Tracks with Faded Ghost Cards**:
  - Each of the 4 columns features a continuous vertical track with semi-transparent ghost placeholder cards above and below the active step cards.
  - Symmetrical gradient masks on individual ghost cards (`linear-gradient(to bottom, black 0%, transparent 80%)`) and the outer column container (`linear-gradient(to bottom, transparent, black 18%, black 70%, transparent)`) ensure both top and bottom ghost cards dissolve smoothly into the background.
- **4 Custom Process Cards**:
  1. *Discovery Call*: `Book a Free Call` → `Meet the Team` → `Share Your Challenges` → `Align on Expectations` (emerald green pill).
  2. *Deep-Dive Scoping*: 2x2 grid structure with dashed directional pathway arrows: `Core Challenge` & `Solutions` (top row) → `Stack Finalised` & `Action Plan` (emerald green action pill).
  3. *Proposal & Sign-Off*: `Quotation Sent` → `Agreement Signed` (pen sign icon) → `Scope Confirmed` (check-check icon) → `Team Assigned` (emerald green action pill).
  4. *Onboarding & Execution*: **Matte Deep Forest Green (`#082d23`)** without colored outer drop shadow glow, with refined emerald border highlight, white circular rocket icon, and `Slack Access Granted` → `Project Dashboard Set Up` → `Tasks & Deadlines Locked` → `Execution Begins`.
- **Tightened Section Transition**: Reduced bottom padding on `<HowItWorks />` and top padding on `<Testimonials />` to eliminate excessive empty vertical space between sections.

### 6.2 `<ReasonsToHire />` — Current State
- **File**: `src/components/reasons-to-hire.tsx`
- **Slim Luxury Card**: Full-width container (`max-w-[1440px]`) with compact vertical length (`rounded-3xl sm:rounded-[36px]`, `bg-[#0c0d12]/95`, tight top/bottom padding)
- **2-Column Responsive Grid**: Left column has left-aligned H2 heading, paragraph copy, and orange **"Request the Brochure"** CTA button; Right column features the 3D open brochure mockup graphic (`/images/task-venturers-brochure.png`, 1024x682)
- Atmospheric orange glow (top radial + bottom ambient) + faint, 4-way radial-feathered technical graph grid pattern (`#EA7A24`)
- Top gradient border highlight (`via-[#EA7A24]/40`)
- H2 title: `26 Reasons` highlighted in brand orange (`#EA7A24`), with explicit desktop line breaks:
  - Line 1: `26 Reasons to Hire a`
  - Line 2: `Virtual Assistant from`
  - Line 3: `Task Venturers`
- Updated paragraph copy: *"Task Venturers virtual assistants handle 26 business-critical tasks so founders and teams can focus on growth. Get the full capability list delivered straight to your inbox."*
- Orange **"Request the Brochure"** button linking to `/reasons` (`bg-[#EA7A24]` with dark text, matching the Hero section's "Get Started" button style)
- **Top Separator Line & Ticker**: The divider line above the marquee and the marquee text track both gracefully fade into transparency at the left and right edges (`linear-gradient(to right, transparent, black 12%, black 88%, transparent)`), with synchronized hover pause and copy:
  - `DELEGATE SMARTER. ✦ SCALE FASTER. ✦ BACKED BY AN EXPERIENCED TEAM.`

### 6.3 `<Testimonials />` — Social Proof Masonry Grid
- **File**: `src/components/testimonials.tsx`
- Clean pitch-black backdrop (`#070707`) with pure SVG film grain (no ambient glow behind header).
- Header: Social proof avatar pill (`Trusted by 150+ experts worldwide.`) with tilted green badge, H2 heading (`Don't take our word for it.`), and subtitle.
- **True Cascading Masonry Architecture**:
  - Cards stack naturally inside 3 separate column flex tracks on desktop (`grid-cols-3 gap-6 sm:gap-7 items-start`) with round-robin distribution (`i % 3`).
  - Equal vertical and horizontal spacing (`gap-6 sm:gap-7`) with zero artificial whitespace gaps between cards.
  - Responsive down to 2 columns on tablet (`grid-cols-2`) and 1 column on mobile.
- **18 Detailed Testimonials (6 Total Rows)**:
  - **Initial State**: 2 rows visible (6 cards).
  - **Expand Button**: Orange signature pill button (`bg-[#EA7A24]` with dark text and bold rotating chevron, matching Hero and CTA buttons) reveals all remaining rows (18 cards total) on click.
- **Unified Dark Glassmorphic Design**: All cards share the same premium dark background (`bg-[#0c0d12]/95`), avatar styling, clean typography hierarchy, and emerald green 5-star ratings (`#10B981`).
- **Featured Card Subtle Accent**: Refined brand orange top hairline gradient and subtle border accent (`border-[#EA7A24]/35`).
- **Card Footer**: Emerald green stars on the left, service category pill tags in the bottom right. Static hover (no translateY).

### 6.3 `<PartnerMarquee />` — Client Logo Slider
- 6 real client logos (PNG, CSS mask-based — appear as flat white/neutral, go white on hover)
- Dual-track seamless CSS marquee loop (`animate-marquee` at `65s`)
- Badge copy: `TRUSTED BY 150+ BUSINESSES FOR RELIABLE EXECUTION`
- Logo sizes are optically balanced across all 6

### 6.4 `<Navbar />` — Scroll-On-Mount Fix
- `handleScroll()` is called immediately on mount inside `useEffect`
- This fixes the bug where reloading mid-page showed transparent nav until first scroll

---

## 7. Styling Conventions

### H2 Heading Standard (all sections)
```
text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.16]
```

### CSS Marquee (in `globals.css`)
```css
@keyframes marquee {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 65s linear infinite;
}
```

### Logo Masking Pattern (CSS mask for white logo effect)
```tsx
style={{
  maskImage: `url(${logo.image})`,
  WebkitMaskImage: `url(${logo.image})`,
  maskSize: "contain",
  maskRepeat: "no-repeat",
  maskPosition: "center",
}}
```

---

## 8. Scheduling App (`/app/scheduling-flow`)

A full Google Calendar–backed scheduling flow:
- Google OAuth sign-in (staff/hosts)
- Live Google Calendar free/busy availability check
- Public booking flow at `/book`
- Bookings stored in Supabase
- Known issue: slight delay on time slot fetch (live Google API call — discussed caching in Supabase as future work)

### API Routes
| Route | Purpose |
|---|---|
| `/api/calendar/availability` | Fetch free/busy from Google Calendar |
| `/api/calendar/bookings` | CRUD for bookings in Supabase |
| `/api/calendar/users` | List calendar users/hosts |
| `/api/auth/google/callback` | OAuth callback handler |

### Database
Schema is in `supabase/schema.sql`. Run it in your Supabase SQL Editor to set up tables.

---

## 9. Pending / Incomplete Work

All landing page sections requested are implemented and running. Future planned work:
- Calendar free/busy Supabase/Redis caching optimization for the scheduling app.

---

## 10. Skills Location

> [!NOTE]
> **Skills are NOT in the project folder.** They are installed per-user on the local machine at:
> ```
> ~/.gemini/config/plugins/
> ```
> The project only contains `AGENTS.md` in its root, which holds Next.js-specific rules for the coding agent (auto-regenerated by `next dev`).
> 
> When you open this project on another account/machine, the same skills won't automatically be available unless that machine has the Antigravity IDE set up with the same plugins.

---

## 11. Running the Project

```bash
cd "/Users/zephyrus/Downloads/Task Venturers"
npm install          # First time only
npm run dev          # Start dev server at http://localhost:3000
```

Typecheck:
```bash
npx tsc --noEmit
```
