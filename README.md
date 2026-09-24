# Tina Phan · Resume

**Digital resume for Tina Phan — Senior Software Engineer.**

A single-page neo-brutalist site built with React, TypeScript, Vite, and Tailwind.
Sections for experience, skills, education, awards/certs, and contact — with a
scrolling real-tool marquee, layered Framer Motion reveals, and a deploy target
of GitHub Pages.

## Live

👉 https://bing0i.github.io/resume/

## Highlights

- **Neo-brutalist UI:** 2–3 px ink borders, hard offset box-shadows, sand/ink
  palette, 900-weight display type.
- **Resume-driven content:** experience (NAB + stacked KMS roles), 5 skill
  categories, education + 11 awards/certs, contact/socials — all typed and
  centralised in `src/data.ts`.
- **Animated sections:** Framer Motion entry reveals, `layoutId` spring
  underline between nav pills, staggered intro, infinite 4x-duplicated tool
  marquee with real brand icons.
- **Responsive navigation:** sticky header with 6-pill desktop nav + mobile
  hamburger drawer; all in-page links use smooth programmatic scroll so
  click-to-navigate actually lands on the section (no race with drawer close).
- **CUSTONBD spotlight:** a Skills-side card describing the Customer
  Onboarding domain toolkit (mini-RAG + centralised `epic-pipeline` skills).
- **GitHub Pages static deploy:** Vite `base:'./'` plus a
  `npm run deploy` → `gh-pages -d dist` script. Downloads CV from
  `./cv.pdf` and uses the profile image at `./profile.png`; both live in
  `public/`.

## Tech

| Layer        | Stack                                                                     |
|--------------|---------------------------------------------------------------------------|
| Framework    | React 18 + TypeScript 5, Vite 5                                           |
| Styling      | Tailwind v3 (custom ink/sand palette, offset-only `shadow-ink` utilities)|
| Animation    | Framer Motion 11                                                          |
| Icons        | react-icons 5 (Simple Icons `Si*` brand logos for tools, Feather `Fi*`)  |
| Deploy       | GitHub Pages via `gh-pages` — `npm run deploy`                           |

## Local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + vite build → dist/
npm run deploy   # build + publish dist/ to gh-pages branch
```

## Structure

```
src/
├── App.tsx                       # Root, sections + mount animations
├── main.tsx  index.css           # Entry, Tailwind layer, custom utilities
├── data.ts                       # Single typed source of truth: roles, points, skillGroups, educations, awards
└── components/
    ├── Navbar.tsx                # Sticky header, 6-pill nav + mobile drawer, custom active section detection
    ├── Hero.tsx                  # Eyebrow "RESUME", name-only h1, intro paragraphs, ⚡ highlighted sentence,
    │                             #  contact row (mailto/tel:/map), CTA grid, infinite tool marquee at bottom
    ├── Experience.tsx            # NAB + KMS cards, stacked KMS roles, point bullets
    ├── Skills.tsx                # 5 category cards + CUSTONBD spotlight with internal-users callout chips
    ├── EducationAndAwards.tsx    # 2 edu cards, NAB-awards grid + industry certs list, watermarks
    └── Contact.tsx               # Contact card grid, footer band, avatar, dynamic year, back-to-top
public/
├── profile.png                   # Navbar + footer avatar (transparent bg)
└── cv.pdf                        # Download CV target
```

## Notes

- En-dashes / em-dashes are intentionally avoided site-wide — phrases use pipes,
  colons, or rewritten prose instead.
- The hero tool marquee is a pure CSS keyframe (`marqueeX`, 52s linear infinite)
  over a 4× duplicated `marqueeItems` list; this guarantees a seamless loop
  with zero visual jump at the animation boundary.
- Nav active-section detection uses a custom `score = |rect.top - 160|`
  heuristic and an explicit at-bottom → Contact rule so the last section
  highlights correctly on short pages.
