"use client";

import { Button } from "@/components/ui/Button";
import { ParallaxHero } from "@/components/motion/ParallaxHero";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { motion, Variants } from "motion/react";

const headlineWords = ["CREATIVE", "SOLUTIONS", "TO", "STAND", "OUT"];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 80, rotate: 2 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export function Hero() {
  return (
    <ParallaxHero className="min-h-screen flex items-end">
      <div className="mx-auto max-w-[95vw] w-full pb-12 md:pb-20 pt-32 md:pt-40">
        {/* Small label above headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base font-medium uppercase tracking-widest text-muted-foreground mb-6 md:mb-8"
        >
          Creative Studio &mdash; Est. 2024
        </motion.p>

        {/* Main Headline — Cinematic Stagger Reveal */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-[clamp(3rem,11vw,13rem)] font-bold uppercase tracking-tighter leading-[0.85] flex flex-wrap gap-x-4 md:gap-x-8"
        >
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              variants={item}
              className={`inline-block ${word === "SOLUTIONS" || word === "OUT" ? "text-accent" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle + CTAs */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl leading-tight"
          >
            Creative solution for businesses looking to stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton>
              <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Start a Project
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                View Work
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden md:flex items-center gap-3 mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-border flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 bg-accent" />
          </motion.div>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </ParallaxHero>
  );
}
