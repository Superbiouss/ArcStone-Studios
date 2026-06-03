import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { NoiseTexture } from "@/components/ui/NoiseTexture";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArcStone Studios — Bold Digital Experiences",
  description:
    "We are a creative agency that builds bold, kinetic digital experiences. Strategy, design, and development for brands that refuse to blend in.",
  keywords: [
    "creative agency",
    "digital design",
    "web development",
    "branding",
    "UI/UX design",
    "motion design",
  ],
  openGraph: {
    title: "ArcStone Studios — Bold Digital Experiences",
    description:
      "Strategy, design, and development for brands that refuse to blend in.",
    type: "website",
    locale: "en_US",
    siteName: "ArcStone Studios",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArcStone Studios — Bold Digital Experiences",
    description:
      "Strategy, design, and development for brands that refuse to blend in.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <NoiseTexture />
      </body>
    </html>
  );
}
