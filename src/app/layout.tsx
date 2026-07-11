import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { NoiseTexture } from "@/components/ui/NoiseTexture";
import { Preloader } from "@/components/ui/Preloader";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { seoMetadata, jsonLd } from "@/config/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  ...seoMetadata,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Preloader />
            {children}
            <NoiseTexture />
            <Toaster 
              position="bottom-right"
              toastOptions={{
                className: 'border-2 border-border rounded-none bg-background text-foreground font-bold uppercase tracking-widest',
              }}
            />
            <Analytics />
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
