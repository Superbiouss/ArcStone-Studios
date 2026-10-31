# ArcStone Studios ✦ Creative Agency

A high-performance, brutalist kinetic typography portfolio and agency web application for **ArcStone Studios** — crafting unmistakable digital experiences and identity systems.

Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **Motion (Framer Motion)**, and **Lenis Smooth Scroll**.

---

## ⚡ Tech Stack

* **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
* **Library**: [React 19](https://react.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Typography**: Space Grotesk (Variable font)
* **Animations & Motion**:
  * [Motion](https://motion.dev/) (Framer Motion v12)
  * [Lenis](https://lenis.darkroom.engineering/) (Smooth momentum scrolling)
  * [React Fast Marquee](https://www.react-fast-marquee.com/)
* **Forms & Email Delivery**: [Resend](https://resend.com/) with custom HTML brutalist email templates
* **Analytics**: [@vercel/analytics](https://vercel.com/analytics)
* **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

---

## 🚀 Getting Started

### 1. Prerequisites
* Node.js 20.x or higher
* npm or pnpm

### 2. Installation
```bash
git clone https://github.com/ArcStone-Studios/arcstone-studios.git
cd arcstone-studios
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory:
```env
# Resend API Key for contact form submissions (https://resend.com)
RESEND_API_KEY="re_your_api_key_here"

# Optional Email Routing (defaults to onboarding@resend.dev / arcstonestudios.in@gmail.com)
CONTACT_EMAIL_FROM="onboarding@resend.dev"
CONTACT_EMAIL_TO="arcstonestudios.in@gmail.com"
```
*(Note: If `RESEND_API_KEY` is omitted in development, submissions will operate in mock mode with a simulated successful response).*

### 4. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 5. Production Build & Lint
```bash
npm run lint
npm run build
```

---

## 📁 Project Architecture

```
arcstone-studios/
├── public/
│   ├── images/               # Optimized project photography
│   ├── logos/                # ArcStone brand vectors & icons
│   └── opengraph-image.png   # 1200x630 social share preview
├── src/
│   ├── app/
│   │   ├── api/contact/      # Resend email handler with bot honeypot
│   │   ├── privacy/          # Privacy Policy page
│   │   ├── terms/            # Terms of Service page
│   │   ├── layout.tsx        # Root layout, fonts, metadata & SEO JSON-LD
│   │   ├── page.tsx          # Single-page agency showcase
│   │   ├── robots.ts         # Automated search engine robots directives
│   │   ├── sitemap.ts        # Dynamic XML sitemap generator
│   │   ├── not-found.tsx     # Custom 404 handler
│   │   └── error.tsx         # Global error boundary
│   ├── components/
│   │   ├── motion/           # Kinetic scroll reveals, accordions, parallax
│   │   ├── providers/        # Lenis smooth scroll & ThemeProvider
│   │   ├── sections/         # Navbar, Hero, Services, Work, FAQ, Contact, Footer
│   │   └── ui/               # Button, SectionHeading, ThemeToggle, Preloader
│   ├── config/
│   │   └── site.ts           # Centralized SEO metadata & schema markup
│   ├── data/
│   │   └── site-content.ts   # Editorial copy, projects, FAQs, testimonials
│   └── lib/
│       ├── email-templates.ts# Brutalist inline HTML email templates
│       └── useReducedMotion.ts# Hydration-safe accessibility hook
└── README.md
```

---

## 🛡️ License

Private repository © ArcStone Studios. All rights reserved.
