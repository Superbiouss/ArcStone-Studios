"use client";

import Marquee from "react-fast-marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const testimonials = [
  {
    quote:
      "ArcStone didn't just build our website — they built our entire digital identity. The result was nothing short of electric.",
    name: "Sarah Chen",
    company: "Neon Collective",
  },
  {
    quote:
      "Working with ArcStone felt like having a creative partner, not just an agency. They pushed us to be bolder at every turn.",
    name: "Marcus Rivera",
    company: "Vortex Labs",
  },
  {
    quote:
      "The attention to detail is insane. Every animation, every transition — it all feels intentional and alive.",
    name: "Priya Kapoor",
    company: "Pulse Audio",
  },
  {
    quote:
      "We came with a vague idea. They delivered a brand experience that made our competitors take notice.",
    name: "James Thornton",
    company: "Iron & Oak",
  },
  {
    quote:
      "Fast, decisive, and uncompromising on quality. ArcStone is what every creative agency should aspire to be.",
    name: "Elena Vasquez",
    company: "Drift Studio",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 border-t-2 border-border">
      <div className="mx-auto max-w-[95vw] mb-12 md:mb-16">
        <ScrollReveal>
          <SectionHeading
            title="WHAT THEY SAY"
            accentWord="SAY"
          />
          <p className="text-sm uppercase tracking-widest text-muted-foreground mt-4 md:mt-6 hidden md:block">
            ← Auto-scrolling →
          </p>
        </ScrollReveal>
      </div>

      {/* Slow marquee with testimonial cards */}
      <Marquee speed={40} gradient={false} pauseOnHover={false}>
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="mx-3 md:mx-4 min-w-[320px] md:min-w-[480px] border-2 border-border p-6 md:p-8 flex flex-col justify-between"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-tight mb-8 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div>
              <p className="text-sm md:text-base font-bold uppercase tracking-widest">
                {testimonial.name}
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
