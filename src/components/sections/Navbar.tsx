"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "motion/react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks } from "@/data/site-content";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-[95vw] flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Image
              src="/logos/arcstone-icon.png"
              alt={`${siteConfig.name} Icon`}
              width={48}
              height={48}
              className="h-8 w-8 md:h-10 md:w-10 object-contain invert dark:invert-0"
              priority
            />
            <span className="font-bold uppercase tracking-tighter text-xl md:text-2xl text-foreground">
              {siteConfig.name}
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <Button variant="primary" size="sm">
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-start justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                  className="text-5xl font-bold uppercase tracking-tighter text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Theme
                </span>
                <ThemeToggle />
              </div>
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Let&apos;s Talk
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
