import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "ArcStone Studios",
  shortName: "ArcStone",
  url: "https://arcstonestudio.in",
  description:
    "We craft unmistakable digital experiences and identity systems. Stop settling for unpredictable freelancers.",
  tagline: "Bold Digital Experiences",
  establishedYear: 2024,
  keywords: [
    "creative agency",
    "digital design",
    "web development",
    "branding",
    "UI/UX design",
    "motion design",
  ],
};

export const seoMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Creative Agency`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  other: {
    "theme-color": [
      { media: "(prefers-color-scheme: dark)", color: "#09090B" },
      { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    ],
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: "Strategy, design, and development for brands that refuse to blend in.",
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: "Strategy, design, and development for brands that refuse to blend in.",
  },
};

/**
 * JSON-LD Structured Data for Organization schema.
 * Embed in layout.tsx via a <script type="application/ld+json"> tag.
 */
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  foundingDate: String(siteConfig.establishedYear),
  sameAs: [
    "https://www.instagram.com/arcstonestudios.in",
    "https://www.linkedin.com/company/arcstone-studios/",
  ],
};

