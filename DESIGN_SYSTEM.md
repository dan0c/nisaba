# Nisaba Design System

Extracted from the live Astro + Tailwind codebase. This document reflects what's actually implemented today, not an idealized spec — a few one-off values are flagged where the system could be tightened.

## Colors

| Token | Hex | Usage |
|---|---|---|
| `linen` | `#F7F4EF` | Page background |
| `ink` | `#1C1917` | Primary text |
| `sage` | `#3D6B4F` | Accent green — links, eyebrow labels, active nav states, CTA band backgrounds |
| `warm-grey` | `#E8E0D5` | Card backgrounds, borders, dividers |
| `terracotta` | `#D4875A` | Primary buttons, icons, decorative dots |

Opacity modifiers are used instead of separate grey tokens: `ink/70`, `ink/65`, `ink/60`, `ink/50`, `ink/40`, `ink/30`, `linen/95` (sticky header blur), `linen/65`, `white/70`, `white/75`, `black/15`, `black/5`.

**Flag:** one off-palette hex appears once — `#f6f1e9` (alt pricing-card background). Consider promoting to a token if used again.

## Typography

- **Display** — Playfair Display (serif). Weights loaded: italic 400, normal 400, normal 700. Used for all headings, price numbers, and the logo wordmark.
- **Body** — Inter (sans-serif). Weights loaded: 400, 500, 600, 700. Used for everything else: body copy, labels, nav, buttons, form fields.
- There is no separate "label" font — labels are Inter `font-semibold` at small sizes.

### Type scale in use

| Role | Classes |
|---|---|
| Eyebrow label | `text-sm font-semibold text-sage` |
| Page H1 (large hero) | `font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1]` |
| Page H1 (standard) | `font-display text-4xl sm:text-5xl leading-tight` |
| Section H2 | `font-display text-4xl sm:text-5xl` |
| Card H3 | `font-display text-xl leading-snug` |
| Module H3 (courses page) | `font-display text-[40px] leading-[1.02]` |
| Bio section H2 | `font-display text-2xl` |
| CTA band H2 (on sage bg) | `font-display text-4xl sm:text-5xl text-linen leading-tight` |
| Price display | `font-display text-[42px] leading-none` + unit in `text-[17px] text-ink/60` |
| Body — large | `text-lg sm:text-xl leading-relaxed` |
| Body — base | `text-base leading-relaxed` |
| Small print / list items | `text-sm` down to `text-[13px]`, `leading-[1.5]` |
| Caption | `text-xs text-ink/40` |
| Button text | `text-sm font-medium` (primary) / `text-[13.5px] font-semibold` (secondary) |

**Flag:** several one-off pixel sizes exist outside the standard Tailwind scale (`text-[68px]`, `text-[46px]`, `text-[30px]`, `text-[17px]`, `text-[13.5px]`, etc.). Fine as intentional fine-tuning, but worth normalizing into a formal scale if the system is being handed off for reuse.

## Layout & Spacing

**Two container systems currently coexist:**
- `max-w-[1180px] mx-auto px-6 lg:px-14` — header/nav, courses page
- `max-w-5xl` / `max-w-6xl` / `max-w-2xl mx-auto px-6` (no `lg:` padding bump) — home, à propos, contact

**Section vertical rhythm:** `py-24` is the default section padding on most pages. Hero sections use larger asymmetric padding (e.g. `pt-32 pb-20 lg:pt-40 lg:pb-28`). The courses page uses tighter, more varied padding per section (`py-11`, `py-12`, `py-20`, scaling up at `lg:`).

**Grid gaps:**
- `gap-5` — card grids (home course cards)
- `gap-16` — two-column teasers
- `gap-10`–`gap-12` — content columns
- `gap-6` — form rows
- `gap-2.5` — nav/menu lists

**Breakpoints used:** `sm` (640px), `md` (768px), `lg` (1024px) only. No `xl`/`2xl` customization appears anywhere in the codebase.

## Components

### Primary button (terracotta)
```
inline-flex items-center gap-3 bg-terracotta text-white px-8 py-4 text-sm font-medium hover:bg-terracotta/90 transition-colors
```
Always paired with a trailing 15×15 arrow icon (line style, see Icons below).

### Secondary button (courses page — smaller, rounded)
```
inline-flex items-center gap-2 bg-terracotta text-white text-[13.5px] font-semibold px-5 py-3 rounded-[3px] hover:bg-terracotta/85 transition-colors
```

### Text link (sage, gap grows on hover instead of color change)
```
inline-flex items-center gap-2 text-sage font-medium hover:gap-3 transition-all duration-200
```

### Cards
Near-zero border-radius throughout — the system leans sharp-cornered by default. Exceptions: pricing card (`rounded-[5px]`), secondary buttons (`rounded-[3px]`), and small decorative dots (`rounded-full`).

- **Home course card:** `bg-warm-grey p-8 border border-transparent hover:border-sage` — border only appears on hover, no resting border.
- **Pricing card (courses page):** `border border-warm-grey rounded-[5px] p-6`, background `bg-linen` (or `bg-[#f6f1e9]` on alternating modules).
- **Alternating section backgrounds** (courses page modules): `bg-warm-grey/50` vs `bg-linen`, toggled per module.

### Form inputs
```
w-full bg-linen border border-warm-grey px-4 py-3 text-base text-ink focus:outline-none focus:border-sage transition-colors
```
Focus state is border-color only — no ring or shadow. Radio buttons: `accent-sage w-4 h-4`.

## Icons

Two distinct icon families are used deliberately for different purposes:

1. **Line icons** — utility UI (menu, close, arrows): `stroke="currentColor"`, `stroke-width` 1.5–2, rounded caps/joins, no fill. Sized per context (24×24 menu icons, 15×15 CTA arrows, 13×13 card-link arrows).
2. **Hand-drawn scribble icons** — brand signature illustrations: solid-fill (`fill="currentColor"`, no stroke), organic hand-drawn paths, colored terracotta via `currentColor`. Used for the logo mark (`w-6 h-6`) and the four course icons (`w-16 h-16`).

## Signature Detail

`.stroke-underline` — a hand-drawn wavy brushstroke underline (sage-colored SVG, applied via a CSS `::after` background-image) used on emphasized words within H1/H2 headings. This is the one recurring illustrated flourish outside the icon set, giving otherwise clean typographic headings a handmade accent.

```css
.stroke-underline {
  position: relative;
  display: inline;
}
.stroke-underline::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.2em;
  height: 0.45em;
  background-image: url("data:image/svg+xml,...stroke='%233D6B4F'...");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  pointer-events: none;
}
```
