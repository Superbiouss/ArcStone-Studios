"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};

const ScrubText = ({ text, className = "" }: { text: string; className?: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 85%", "end 50%"],
  });

  const words = text.split(" ");
  
  return (
    <div ref={container} className={`flex flex-wrap gap-x-[0.25em] ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
};

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="mx-auto max-w-[95vw]">
        {/* Decorative background number */}
        <div
          className="absolute top-12 right-4 md:right-12 text-[8rem] md:text-[14rem] font-bold text-muted/50 leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          01
        </div>

        <ScrollReveal>
          <SectionHeading
            title="FRUSTRATED BY UNPREDICTABLE FREELANCERS?"
            accentWord="UNPREDICTABLE"
            subtitle="Explore our tailored solutions to navigate the unpredictability of freelancers and unlock dependable support that fits your budgetary constraints."
          />
        </ScrollReveal>

        <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-12 md:gap-20">
          <ScrubText 
            text="Hiring with a limited budget? We offer a creative solution for businesses looking to stand out. From identity systems to immersive web experiences, we bring a relentless pursuit of excellence and a refusal to settle for ordinary." 
            className="text-lg md:text-xl lg:text-2xl text-foreground font-medium leading-tight" 
          />

          <ScrubText 
            text="Every pixel is deliberate. Every interaction is designed to leave an impression. Your brand deserves to be unmistakable." 
            className="text-lg md:text-xl lg:text-2xl text-foreground font-medium leading-tight" 
          />
        </div>
      </div>
    </section>
  );
}
