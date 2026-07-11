"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { footerLinks } from "@/data/site-content";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground border-t-2 border-accent-foreground/20 overflow-hidden">
      <div className="py-8 md:py-12 border-b-2 border-accent-foreground/20">
        <Marquee speed={80} gradient={false} autoFill>
          <span 
            className="text-[clamp(4rem,10vw,8rem)] font-bold uppercase tracking-tighter leading-none mx-8 text-transparent opacity-80" 
            style={{ WebkitTextStroke: "2px currentColor" }}
          >
            LET&apos;S WORK TOGETHER ✦ HAVE A PROJECT IN MIND? ✦ 
          </span>
        </Marquee>
      </div>
      <div className="mx-auto max-w-[95vw] py-16 md:py-24">
        {/* Giant wordmark */}
        <div className="mb-16 md:mb-24 flex items-center gap-4 md:gap-8">
          <Image
            src="/logos/arcstone-icon.png"
            alt={`${siteConfig.name} Icon`}
            width={120}
            height={120}
            className="w-16 h-16 md:w-32 md:h-32 object-contain"
          />
          <p className="text-[clamp(3rem,8vw,10rem)] font-bold uppercase tracking-tighter leading-none text-accent-foreground">
            {siteConfig.name}
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24">
          {(Object.entries(footerLinks) as [string, { label: string; href: string }[]][]).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 text-accent-foreground/60">
                {category}
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                        className="text-sm md:text-base uppercase tracking-wide text-accent-foreground/80 hover:text-accent-foreground hover:underline underline-offset-4 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-accent-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm uppercase tracking-wide text-accent-foreground/60">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm font-bold uppercase tracking-widest text-accent-foreground hover:underline underline-offset-4 cursor-pointer"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
