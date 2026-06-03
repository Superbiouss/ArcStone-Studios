"use client";

import { Button } from "@/components/ui/Button";
import { ParallaxHero } from "@/components/motion/ParallaxHero";
import { motion } from "motion/react";

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

        {/* Main Headline — viewport-width typography */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[clamp(3rem,11vw,13rem)] font-bold uppercase tracking-tighter leading-[0.85]"
        >
          CREATIVE{" "}
          <span className="text-accent">SOLUTIONS</span>
          <br />
          TO STAND
          <br />
          OUT
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
            <Button variant="primary" size="lg">
              Start a Project
            </Button>
            <Button variant="outline" size="lg">
              View Work
            </Button>
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
            className="w-5 h-8 border-2 border-border rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 bg-accent rounded-full" />
          </motion.div>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </ParallaxHero>
  );
}
