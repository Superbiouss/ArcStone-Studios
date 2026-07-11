"use client";

import Marquee from "react-fast-marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { testimonials } from "@/data/site-content";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 border-t-2 border-border overflow-hidden">
      <div className="mx-auto max-w-[95vw] mb-12 md:mb-16">
        <ScrollReveal>
          <SectionHeading
            title="WHAT THE BRANDS SAY"
            accentWord="BRANDS"
          />
          <p className="text-sm uppercase tracking-widest text-muted-foreground mt-4 md:mt-6 hidden md:block">
            ← Auto-scrolling →
          </p>
        </ScrollReveal>
      </div>

      {/* Slow marquee with testimonial cards */}
      <Marquee speed={40} gradient={false} pauseOnHover={true} className="py-4">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="mx-4 md:mx-6 min-w-[320px] md:min-w-[500px] border-2 border-border p-8 md:p-10 flex flex-col justify-between bg-background relative transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_var(--accent)] group"
          >
            {/* Giant decorative quotes */}
            <div className="absolute -top-4 right-4 text-[8rem] md:text-[12rem] font-serif leading-none text-muted opacity-20 pointer-events-none group-hover:text-accent group-hover:opacity-100 transition-all duration-500">
              &rdquo;
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-12 italic relative z-10">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="relative z-10 border-t-2 border-border/50 pt-6">
              <p className="text-sm md:text-base font-bold uppercase tracking-widest">
                {testimonial.name}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-1">
                {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
