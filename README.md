# Abdu Shoeb — DevOps Portfolio

A terminal-themed personal portfolio for Abdelrahman (Abdu) Shoeb — DevOps & Cloud Engineer.

The whole page is rendered as a macOS Terminal window. Each section is triggered by a "command" that types itself out as you scroll, with its output animating in below.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS**
- **GSAP** + **ScrollTrigger** for scroll-driven animations
- **JetBrains Mono** via `next/font/google`

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Features

- macOS terminal window UI (red/yellow/green traffic-light buttons, title bar)
- Boot sequence loading animation on first paint
- Scroll-driven typewriter command prompts per section
- Animated skill bars that fill as they enter the viewport
- Git-log styled experience timeline
- Project cards rendered as mini terminal windows with `$` commands and status badges
- Interactive terminal Easter egg (`help`, `whoami`, `ls`, `cat`, `echo`, `clear`, history with ↑/↓, `Ctrl+L`)
- Subtle CRT scanlines + vignette
- Reduced-motion support, full keyboard navigation, semantic landmarks
- SEO: Open Graph, Twitter card, JSON-LD Person schema

## File structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Terminal.tsx
│   ├── BootSequence.tsx
│   ├── CommandSection.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── InteractiveTerminal.tsx
├── data/content.ts
├── hooks/useScrollTrigger.ts
└── utils/animations.ts
```

## Try the interactive terminal

Scroll to the bottom and try:

```
help
whoami
ls projects/
cat about.txt
echo hello world
date
uname -a
clear
```

Use **↑/↓** to navigate command history, **Ctrl+L** to clear.
