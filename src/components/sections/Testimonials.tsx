"use client";

import Marquee from "react-fast-marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const testimonials = [
  {
    quote:
      "Working with Crate is like having a dedicated squad of tech wizards and branding experts at my fingertips. And believe it or not, the value they bring is priceless.",
    name: "Williams Paul",
    company: "HR, Greenish",
  },
  {
    quote:
      "It's as if I have a full squad of internet experts and advertising professionals on my side, and the highlight? It didn't charge me a single penny",
    name: "Adam Kary",
    company: "Creative Lead, Cloud",
  },
  {
    quote:
      "It feels like I’ve got an entire team of web gurus and marketing pros working for me, and the best part? It didn’t cost me a cent.",
    name: "Chris Waterwood",
    company: "VP, Minty",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 border-t-2 border-border">
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
