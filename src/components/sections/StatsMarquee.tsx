"use client";

import Marquee from "react-fast-marquee";

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "98%", label: "Client Retention" },
  { number: "12", label: "Countries Reached" },
  { number: "8+", label: "Years of Craft" },
];

export function StatsMarquee() {
  return (
    <section className="bg-accent py-6 md:py-8 overflow-hidden border-y-2 border-accent-foreground/20">
      <Marquee speed={80} gradient={false} autoFill={true}>
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex items-center gap-4 md:gap-6 mx-8 md:mx-12"
          >
            <span className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-accent-foreground leading-none tracking-tighter">
              {stat.number}
            </span>
            <span className="text-sm md:text-lg font-medium uppercase tracking-widest text-accent-foreground/80 max-w-[100px] md:max-w-none leading-tight">
              {stat.label}
            </span>
            <span className="text-3xl md:text-5xl text-accent-foreground/30 mx-4 md:mx-8">
              ★
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
