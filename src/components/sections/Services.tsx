import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { services } from "@/data/site-content";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 border-t-2 border-border">
      <div className="mx-auto max-w-[95vw]">
        <ScrollReveal>
          <SectionHeading
            title="ENJOY PERKS SO GOOD"
            accentWord="PERKS"
            subtitle="Experience unparalleled perks that redefine your design journey. With us, you'll never need to search elsewhere."
          />
        </ScrollReveal>

        {/* Sticky scroll cards */}
        <div className="mt-16 md:mt-24 space-y-4">
          {services.map((service, i) => (
            <div
              key={service.number}
              className="sticky top-20 md:top-24"
              style={{ zIndex: i + 1 }}
            >
              <div className="group border-2 border-border bg-background p-8 md:p-12 hover:bg-accent hover:border-accent transition-colors duration-300 cursor-default">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                  {/* Number */}
                  <span
                    className="text-[4rem] md:text-[6rem] font-bold text-muted leading-none tracking-tighter group-hover:text-accent-foreground transition-colors duration-300 shrink-0"
                    aria-hidden="true"
                  >
                    {service.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12">
                    <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-tighter group-hover:text-accent-foreground transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground group-hover:text-accent-foreground/80 transition-colors duration-300 max-w-lg leading-relaxed md:text-right">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span className="hidden md:block text-3xl text-border group-hover:text-accent-foreground transition-colors duration-300 shrink-0">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
