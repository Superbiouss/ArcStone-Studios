import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NoiseTexture } from "@/components/ui/NoiseTexture";
import { Toaster } from "sonner";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arcstonestudio.in"),
  title: "ArcStone Studios | Creative Agency",
  description:
    "We craft unmistakable digital experiences and identity systems. Stop settling for unpredictable freelancers.",
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
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ArcStone Studios Preview",
      },
    ],
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
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <NoiseTexture />
          <CustomCursor />
          <Toaster 
            position="bottom-right"
            toastOptions={{
              className: 'border-2 border-border rounded-none bg-background text-foreground font-bold uppercase tracking-widest',
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
