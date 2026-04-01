# Alex Nova — Portfolio

A modern, production-grade personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Featuring dopamine-color aesthetics, animated morphing blob, AI personalization chat, 3D tilt cards, and smooth scroll reveals.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 3 + CSS custom properties |
| Animation | Framer Motion + CSS keyframes |
| Icons | Lucide React |
| Fonts | Syne (display) + DM Sans (body) via `next/font` |
| Linting | ESLint with Next.js config |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, cursor
│   └── page.tsx            # Home page — section assembly
├── components/
│   ├── hooks/
│   │   ├── useCustomCursor.ts   # Magnetic RAF-driven cursor
│   │   ├── useScrollReveal.ts   # IntersectionObserver reveal
│   │   └── useCardTilt.ts       # 3D perspective tilt on hover
│   ├── layout/
│   │   ├── CustomCursor.tsx     # Global cursor overlay
│   │   ├── Navbar.tsx           # Sticky nav with scroll shrink
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero with blob + stats
│   │   ├── HeroAiChat.tsx       # Live AI personalization chat
│   │   ├── BlobCanvas.tsx       # Animated SVG morphing blob
│   │   ├── MarqueeSection.tsx   # Infinite scroll marquee
│   │   ├── SkillsSection.tsx    # 2×2 skill cards
│   │   ├── ProjectCard.tsx      # 3D tilt project card
│   │   ├── ProjectsSection.tsx  # Projects grid
│   │   ├── TestimonialsSection.tsx
│   │   ├── AboutSection.tsx     # Bio + timeline
│   │   └── ContactSection.tsx   # CTA + social links
│   └── ui/
│       ├── Button.tsx           # Variant button (primary/secondary/ghost)
│       ├── Badge.tsx            # Colored badge with optional dot
│       ├── Tag.tsx              # Skill tag pill
│       └── SectionLabel.tsx     # Eyebrow label with line
├── data/
│   └── index.ts            # All portfolio content (single source of truth)
├── lib/
│   └── utils.ts            # cn(), blob math, AI matcher, scroll helpers
├── styles/
│   └── globals.css         # Global styles, keyframes, cursor CSS
└── types/
    └── index.ts            # All TypeScript types
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Type check
npm run type-check

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Content
All portfolio data lives in **`src/data/index.ts`**. Edit it to update:
- Nav links
- Hero stats
- AI chat responses
- Skills cards
- Projects
- Testimonials
- Timeline / work history

### Colors
Design tokens live in **`tailwind.config.ts`** and **`src/styles/globals.css`** as CSS custom properties:

```css
--lime:   #C8F135   /* primary accent */
--coral:  #FF5C4D   /* secondary accent */
--sky:    #4DCDFF   /* tertiary accent */
--violet: #B57BFF   /* quaternary accent */
```

### Fonts
Fonts are loaded via `next/font/google` in `src/app/layout.tsx`. Swap `Syne` and `DM_Sans` for any Google Font.

## Deployment

Deploy instantly to Vercel:

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments on every push.

## License

MIT — use freely, attribution appreciated.
