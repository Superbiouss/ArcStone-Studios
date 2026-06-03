"use client";

import Image from "next/image";

const footerLinks = {
  services: [
    { label: "Brand Strategy", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Motion Design", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Careers", href: "#" },
  ],
  social: [
    { label: "Twitter / X", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground border-t-2 border-accent-foreground/20">
      <div className="mx-auto max-w-[95vw] py-16 md:py-24">
        {/* Giant wordmark */}
        <div className="mb-16 md:mb-24 flex items-center gap-4 md:gap-8">
          <Image
            src="/logos/arcstone-icon.png"
            alt="ArcStone Icon"
            width={120}
            height={120}
            className="w-16 h-16 md:w-32 md:h-32 object-contain"
          />
          <p className="text-[clamp(3rem,8vw,10rem)] font-bold uppercase tracking-tighter leading-none text-accent-foreground">
            ArcStone Studios
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 text-accent-foreground/60">
                {category}
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm md:text-base uppercase tracking-wide text-accent-foreground/80 hover:text-accent-foreground hover:underline underline-offset-4 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-accent-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm uppercase tracking-wide text-accent-foreground/60">
            &copy; {currentYear} ArcStone Studios. All rights reserved.
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
