# Task Venturers — Graphics Handover

> [!NOTE]
> This file documents all AI-generated graphic assets produced for the Task Venturers project. Every file listed below lives in the **project root** at `/Users/zephyrus/Downloads/Task Venturers/` unless otherwise stated. All graphics were generated using the Antigravity IDE's `generate_image` tool and post-processed with FFmpeg/Python for precise sizing and transparency.

---

## Brand Identity

| Property | Value |
|---|---|
| **Brand Name** | Task Venturers |
| **Primary Orange** | `#FF790C` / `#EA7A24` |
| **Background** | `#070707` (near-black) |
| **Accent Style** | Dark glassmorphic cards with subtle atmospheric orange glow |
| **Typography** | Bricolage Grotesque (Google Fonts) |
| **Design Language** | Premium dark-mode — frosted glass, glowing circuit traces, 3D orbs |

---

## File Naming Convention

All exported final assets follow this pattern:

```
<subject>_<variant>_<dimensions>_<format>.png
```

For multi-version assets, variants are:
- `_transparent.png` — fully transparent background (use on dark pages)
- `_dark.png` — solid `#070707` background
- `_card.png` — solid near-black card with slight context
- `_greenscreen.png` — chroma-key green background (for video editors)

---

## Section 1 — VA Services Glass Orbs Graphic

**Purpose:** Used in the `<ReasonsToHire />` section on the landing page — displayed on the right side of the card alongside the copy block. Represents Task Venturers' wide range of virtual assistant services.

**Design spec:**
- 10 dark frosted glass orbs, non-overlapping, fully contained within canvas (no edge-clipping)
- Each orb contains a vibrant colorful 3D generic icon (no brand logos, no text)
- Icons: Email envelope, Code `</>`, Paint palette, Gear cog, Magnifying glass, Database cylinder, Shopping bag, AI sparkles, Chat bubble, Growth chart
- Subtle warm brand orange (`#FF790C`) glow/rim lighting on orbs
- Pitch black `#000000` background (keyed out for transparent PNG)
- **Dimensions:** 500 × 515 px

### ✅ Final Recommended Assets

| File | Background | Use Case |
|---|---|---|
| `va_services_brand_orange_subtle_500x515_transparent.png` | ✅ Transparent | **PRIMARY — Place this on the website** |
| `va_services_brand_orange_subtle_500x515_card.png` | `#070707` dark | Preview / fallback |

### Iteration History (do not use in production)

| File | Notes |
|---|---|
| `va_services_glass_bubbles_graphic_500x515.png` | First pass — generic bubbles |
| `va_services_ui_card_500x515.png` | UI card version — rejected |
| `va_services_generic_bubbles_500x515_transparent.png` | Generic bubbles v2 |
| `va_services_generic_bubbles_500x515_card.png` | Generic bubbles card v2 |
| `va_services_crystal_orbs_500x515_transparent.png` | Crystal orbs — too glossy/reflective |
| `va_services_crystal_orbs_500x515_card.png` | Crystal orbs card |
| `va_services_subtle_monochrome_500x515_transparent.png` | Monochrome frosted — rejected (too muted) |
| `va_services_subtle_monochrome_500x515_card.png` | Monochrome card |
| `va_services_subtle_glass_500x515_transparent.png` | Subtle colorful frosted — close but no orange |
| `va_services_subtle_glass_500x515_card.png` | Subtle colorful card |

---

## Section 2 — Data Migration Card

**Purpose:** Graphic card used to visually represent data pipeline / migration services. Includes a styled dark glass container with a data table, and glowing orange circuit trace lines on the background.

**Design spec:**
- Figma-aesthetic dark glassmorphic card layout
- Data migration table (source → destination schema mapping)
- Grey PCB/circuitry lines in the background
- Glowing `#FF790C` orange accent traces
- Multiple export formats for versatile use

### ✅ Final Assets

| File | Background | Use Case |
|---|---|---|
| `data_migration_figma_aesthetic_transparent.png` | Transparent | Website / Figma |
| `data_migration_figma_aesthetic_card.png` | Dark card | Standalone card use |
| `data_migration_figma_aesthetic_dark.png` | `#070707` | Dark page embed |
| `data_migration_figma_aesthetic_greenscreen.png` | Chroma green | Video / motion design |

### Earlier Migration Variants

| File | Notes |
|---|---|
| `data_migration_pipeline_transparent.png` | Earlier pipeline version |
| `data_migration_pipeline_card.png` | Pipeline card |
| `data_migration_pipeline_dark.png` | Pipeline dark |
| `data_migration_pipeline_greenscreen.png` | Pipeline greenscreen |
| `data_transfer_pipeline_transparent.png` | Data transfer variant |
| `data_transfer_pipeline_card.png` | Data transfer card |
| `data_transfer_pipeline_dark.png` | Data transfer dark |
| `data_transfer_pipeline_greenscreen.png` | Data transfer greenscreen |

---

## Section 3 — Migrations Tunnel Graphic

**Purpose:** Abstract tunnel/portal graphic used to represent automated data migrations and workflow pipelines.

### Glass Tunnel Variant (Recommended)

| File | Background | Use Case |
|---|---|---|
| `migrations_glass_tunnel_transparent.png` | Transparent | Website |
| `migrations_glass_tunnel_card.png` | Dark card | Standalone |
| `migrations_glass_tunnel_dark.png` | Dark | Embed |
| `migrations_glass_tunnel_greenscreen.png` | Chroma green | Video |

### Horizontal Tunnel Variant

| File | Background |
|---|---|
| `migrations_horizontal_tunnel_transparent.png` | Transparent |
| `migrations_horizontal_tunnel_card.png` | Dark card |
| `migrations_horizontal_tunnel_dark.png` | Dark |
| `migrations_horizontal_tunnel_greenscreen.png` | Chroma green |

### Luxury Tunnel Variant

| File | Background |
|---|---|
| `migrations_luxury_tunnel_transparent.png` | Transparent |
| `migrations_luxury_tunnel_card.png` | Dark card |
| `migrations_luxury_tunnel_dark.png` | Dark |
| `migrations_luxury_tunnel_greenscreen.png` | Chroma green |

---

## Section 4 — Automations / AI Graphics

**Purpose:** Graphics for the Automations service section — representing AI-driven workflows, task automation, and intelligent processing.

### Glass Orbit (Recommended)

| File | Background | Use Case |
|---|---|---|
| `automations_glass_orbit_transparent.png` | Transparent | **PRIMARY** |
| `automations_glass_orbit_dark.png` | Dark | Embed |
| `automations_glass_orbit_greenscreen.png` | Chroma green | Video |

### Matte Semicircle Variant

| File | Background |
|---|---|
| `automations_matte_semicircle_transparent.png` | Transparent |
| `automations_matte_semicircle_card.png` | Card |
| `automations_matte_semicircle_card_transparent.png` | Card + Transparent |
| `automations_matte_semicircle_dark.png` | Dark |
| `automations_matte_semicircle_greenscreen.png` | Chroma green |

### Semicircle Variant

| File | Background |
|---|---|
| `automations_semicircle_transparent.png` | Transparent |
| `automations_semicircle_card.png` | Card |
| `automations_semicircle_dark.png` | Dark |
| `automations_semicircle_greenscreen.png` | Chroma green |

### Squircle Card

| File | Background |
|---|---|
| `automations_squircle_card.png` | Card |

---

## Section 5 — AI Search / Keywords Pill

**Purpose:** Floating pill/tag cloud graphic representing AI-powered search and keyword research services.

| File | Background | Use Case |
|---|---|---|
| `ai_search_keywords_pill_transparent.png` | Transparent | Website |
| `ai_search_keywords_pill_dark.png` | Dark | Embed |
| `ai_search_keywords_pill_greenscreen.png` | Chroma green | Video |
| `ai_search_squircle_card.png` | Card | Standalone |

---

## Section 6 — Figma / Web Dev Editor Cards

**Purpose:** Visual representing the web development and design services (Figma, code editors, UI work).

| File | Notes |
|---|---|
| `figma_editor_frosted_glass_card.png` | Frosted glass Figma editor card |
| `figma_editor_graphical_dark_card.png` | Dark graphical Figma editor card |
| `figma_glass_diagram_dark_v1.png` | Glass diagram v1 |
| `figma_glass_diagram_dark_v2.png` | Glass diagram v2 |
| `glass_metaball_diagram_transparent.png` | Glass metaball — transparent |
| `glass_metaball_diagram_dark.png` | Glass metaball — dark |
| `glass_metaball_diagram_greenscreen.png` | Glass metaball — greenscreen |
| `webdev_code_preview_card_v1.png` | Web dev code preview card v1 |
| `webdev_code_preview_card_v2.png` | Web dev code preview card v2 |

---

## Section 7 — Agent / Presenter Portraits

**Purpose:** AI-generated human presenter/agent portraits used in social content, landing pages, or as VA service representatives.

### Agent Portrait (Light Red / Neutral)

| File | Dimensions | Use Case |
|---|---|---|
| `agent_portrait_lightred_225x250.png` | 225×250 | Thumbnail / avatar |
| `agent_portrait_lightred_900x1350.png` | 900×1350 | Full poster / social |

### Presenter — Purple Script Style

| File | Dimensions |
|---|---|
| `presenter_purple_script_v1_225x250.png` | 225×250 |
| `presenter_purple_script_v1_900x1350.png` | 900×1350 |
| `presenter_purple_script_v2_225x250.png` | 225×250 |
| `presenter_purple_script_v2_900x1350.png` | 900×1350 |

---

## Section 8 — Cadion Product Photography

**Purpose:** AI-generated premium product photography for Cadion (client brand). Emerald green podium studio setup with luxury aesthetics.

| File | Dimensions | Notes |
|---|---|---|
| `cadion_vibrant_emerald_podium_900x1350.png` | 900×1350 | **Recommended — vibrant emerald** |
| `cadion_vibrant_emerald_podium_225x250_fill.png` | 225×250 | Fill crop |
| `cadion_vibrant_emerald_podium_225x250_fitted.png` | 225×250 | Fitted crop |
| `cadion_emerald_circular_podium_900x1350.png` | 900×1350 | Circular podium variant |
| `cadion_var1_luminous_emerald.png` | Full res | Luminous emerald splash |
| `cadion_var2_matte_podium.png` | Full res | Matte podium studio |
| `cadion_var3_fresh_splash.png` | Full res | Fresh splash lifestyle |

---

## Section 9 — Cyprus Real Estate Photography

**Purpose:** AI-generated luxury real estate photography for Cyprus-based property listings. Multiple style treatments applied.

### Agent with Villa

| File | Dimensions |
|---|---|
| `cyprus_agent_villa_v1_900x1350.png` | 900×1350 |
| `cyprus_agent_villa_v1_225x250.png` | 225×250 |
| `cyprus_agent_villa_v2_900x1350.png` | 900×1350 |
| `cyprus_agent_villa_v2_225x250.png` | 225×250 |

### Coastal Scenery

| File | Dimensions |
|---|---|
| `cyprus_coast_extended_900x1350.png` | 900×1350 |
| `cyprus_coast_extended_225x250.png` | 225×250 |
| `cyprus_coast_fitted_ambient_900x1350.png` | 900×1350 |
| `cyprus_coast_fitted_ambient_225x250.png` | 225×250 |

### Resort

| File | Dimensions |
|---|---|
| `cyprus_resort_fullframe_900x1350.png` | 900×1350 |
| `cyprus_resort_fullframe_225x250.png` | 225×250 |
| `cyprus_resort_fitted_ambient_900x1350.png` | 900×1350 |
| `cyprus_resort_fitted_ambient_225x250.png` | 225×250 |

### Brand Colour Tinted Variants

| File | Treatment |
|---|---|
| `cyprus_brand_duotone_900x1350.png` | Duotone brand overlay |
| `cyprus_brand_tint_900x1350.png` | Brand tint |
| `cyprus_crimson_sunset_900x1350.png` | Crimson sunset mood |
| `cyprus_realestate_red_multiply_900x1350.png` | Red multiply blend |
| `cyprus_realestate_red_multiply_225x250.png` | Thumbnail |
| `cyprus_realestate_red_overlay_900x1350.png` | Red overlay blend |
| `cyprus_realestate_red_overlay_225x250.png` | Thumbnail |
| `cyprus_realestate_red_softlight_900x1350.png` | Soft-light blend |
| `cyprus_realestate_red_softlight_225x250.png` | Thumbnail |

---

## Pending / Outstanding Work

> [!WARNING]
> The following tasks were requested but have either not been completed or need a follow-up action from the new agent:

### 1. `<ReasonsToHire />` Layout Update *(website code change)*

**File:** `src/components/reasons-to-hire.tsx`

The graphic is ready. The website component still needs to be updated:
- Make the text content (eyebrow pill, H2, paragraph, CTA button) **left-aligned**
- Place the VA services orbs graphic on the **right side** of the card
- Import the final image using `next/image`:
  ```tsx
  import Image from "next/image";
  // ...
  <Image
    src="/images/va_services_brand_orange_subtle_500x515_transparent.png"
    alt="VA Services"
    width={500}
    height={515}
  />
  ```
- **First:** Copy the image to the public folder:
  ```bash
  cp "va_services_brand_orange_subtle_500x515_transparent.png" "public/images/"
  ```

---

## Image Generation Notes for Next Agent

> [!TIP]
> These notes will help you re-generate or refine any graphic without starting from scratch.

### Tools Used
- **Image generation:** `generate_image` (Antigravity IDE built-in)
- **Post-processing:** Python + FFmpeg for:
  - Chroma-key transparency (black background removal with soft-edge alpha)
  - Exact pixel sizing (`scale` + `pad` filters)
  - Format conversion

### FFmpeg Transparency Pipeline

```python
# Black background keying — per-pixel in Python
if max(r, g, b) <= 12:    alpha = 0          # fully transparent
elif max(r, g, b) <= 25:  alpha = gradual     # soft edge blend
else:                      alpha = 255        # fully opaque

# Scale and pad to exact 500x515 px
ffmpeg -i input.jpg \
  -vf "scale=460:460:force_original_aspect_ratio=decrease,pad=500:515:(ow-iw)/2:(oh-ih)/2:color=black@0.0" \
  output_transparent.png
```

### Key Prompt Elements that Worked for VA Orbs

```
"Dark frosted crystal glass spheres, non-overlapping, fully contained within canvas borders
with generous margin padding on all 4 edges. Subtle soft-toned glass finish without harsh
white specular gloss or glare. Subtle ambient warm orange glow (#FF790C) on rim reflections.
Vibrant colorful 3D generic icons inside. Pitch black (#000000) background.
Photorealistic 3D Cinema 4D Octane render quality."
```

---

## Asset Quick-Reference Summary

| Category | Count | Primary File |
|---|---|---|
| VA Services Glass Orbs | 10 files | `va_services_brand_orange_subtle_500x515_transparent.png` |
| Data Migration Cards | 8 files | `data_migration_figma_aesthetic_transparent.png` |
| Migration Tunnels | 12 files | `migrations_glass_tunnel_transparent.png` |
| Automations Graphics | 15 files | `automations_glass_orbit_transparent.png` |
| AI Search Pill | 4 files | `ai_search_keywords_pill_transparent.png` |
| Figma / Web Dev Cards | 9 files | `figma_editor_frosted_glass_card.png` |
| Agent Portraits | 6 files | `agent_portrait_lightred_900x1350.png` |
| Cadion Product Photos | 7 files | `cadion_vibrant_emerald_podium_900x1350.png` |
| Cyprus Real Estate | 18 files | `cyprus_resort_fullframe_900x1350.png` |
| **Total** | **~89 files** | — |
