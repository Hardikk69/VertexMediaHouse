
# Vertex Media House — Project Walkthrough

Welcome to the Vertex Media House codebase! This document provides a comprehensive overview for future developers, designers, and maintainers. It covers the project’s architecture, technologies, core features, folder structure, and best practices.

---

## Overview

Vertex Media House is a modern, full-featured creative agency web platform. It offers a suite of digital services including:

- **Pitch Deck Creation**: Investor-ready, brand-consistent, and visually compelling pitch decks.
- **Video Editing**: Social media reels, motion graphics, podcast editing, and more.
- **Web Design & Development**: Custom, responsive, SEO-optimized websites.
- **AI & Automation**: Voice and email AI agents, workflow automation, and lead qualification.

The platform is built for scalability, performance, and a premium user experience.

---

## Tech Stack

- **Frontend**: React (TypeScript), Vite
- **Styling**: Tailwind CSS, shadcn/ui, custom CSS modules
- **UI Libraries**: Radix UI, Framer Motion, Lucide Icons
- **State & Forms**: React Hook Form, TanStack React Query
- **Utilities**: date-fns, clsx, zod, embla-carousel, gsap
- **Routing**: react-router-dom
- **Build & Tooling**: Vite, ESLint, PostCSS, TypeScript
- **Deployment**: Netlify (see `netlify.toml`)

---

## Folder Structure

- **public/**: Static assets (images, robots.txt, redirects)
- **src/**: Main source code
  - **assets/**: Images and icons used throughout the site
  - **components/**: Reusable UI and layout components
    - **ui/**: Atomic UI elements (buttons, dialogs, forms, etc.)
    - **sections/**: Page sections (hero, footer, FAQ, etc.)
  - **hooks/**: Custom React hooks (e.g., responsive utilities)
  - **lib/**: Utility functions and helpers
  - **pages/**: Main route components (About, Contact, Pitch-deck, AI-automation, Web-design, Video-editing, NotFound, etc.)
  - **App.tsx**: Main app entry (if using client-side routing)
  - **main.tsx**: Vite entry point
- **index.html**: HTML entry point
- **package.json**: Scripts and dependencies
- **tailwind.config.ts**: Tailwind CSS configuration
- **vite.config.ts**: Vite build configuration
- **README.md**: Quickstart and external links
- **WALKTHROUGH.md**: This file — in-depth project guide

---

## Core Features & Pages

### 1. Home (Landing) Page
- Hero section with animated grid, agency intro, and service highlights
- Dynamic logo showcase, service cards, portfolio preview, FAQ, and contact CTA

### 2. Services
- **Pitch Deck**: Professional deck design, content structuring, unlimited revisions
- **Video Editing**: Reels, motion graphics, podcast editing, channel management
- **Web Design**: Custom sites, landing pages, responsive design, performance focus
- **AI & Automation**: Voice/email AI agents, workflow automation, lead engagement

### 3. Portfolio
- Interactive portfolio section with drag/swipe navigation

### 4. About
- Agency values, team philosophy, and CTA

### 5. Contact
- Calendly integration for booking, direct contact info, and quick response badge

### 6. FAQ
- Dynamic, theme-aware FAQ section for common client questions

### 7. NotFound
- Custom 404 page for invalid routes

---

## Service Architecture

Each service (Pitch Deck, Video Editing, Web Design, AI Automation) has:
- A dedicated page with themed visuals, feature highlights, and pricing/CTA
- Animated hero sections and interactive UI
- Modular, theme-driven component structure for easy updates

---

## Development & Contribution Guidelines

- **TypeScript**: All new code should use TypeScript for type safety
- **Component Structure**: Place reusable UI in `src/components/ui/`, and larger sections in `src/components/sections/`
- **Styling**: Use Tailwind CSS and shadcn/ui for consistency; custom CSS for advanced visuals
- **Assets**: Store images/icons in `src/assets/` or `public/images/`
- **Routing**: Add new pages to `src/pages/` and update routing as needed
- **State Management**: Use React state/hooks; prefer React Query for async data
- **Testing**: (Add tests as the project grows)
- **Commits**: Use clear, descriptive commit messages

---

## Setup & Scripts

1. **Install dependencies:**
   ```sh
   npm install
   # or
   bun install
   ```
2. **Start development server:**
   ```sh
   npm run dev
   # or
   bun run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   # or
   bun run build
   ```
4. **Lint code:**
   ```sh
   npm run lint
   ```

---

## Deployment

- Deploy via Netlify or compatible static hosts
- Netlify configuration in `netlify.toml`
- For custom domains, see project settings or Netlify docs

---

## Additional Notes

- For detailed quickstart, see `README.md`
- For advanced UI, see shadcn/ui and Radix UI docs
- For questions, contact the project maintainer or check comments in code

---

_Last updated: 29 January 2026_
