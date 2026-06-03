import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "We define the core of your brand — positioning, messaging, and identity systems that resonate deeply with your audience and differentiate you in the market.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "User-centered design that balances beauty with function. Every interface we create is intuitive, accessible, and crafted to drive engagement and conversion.",
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "High-performance, responsive web experiences built with modern frameworks. We write clean, scalable code that performs flawlessly across every device.",
  },
  {
    number: "04",
    title: "Motion Design",
    description:
      "Kinetic typography, micro-interactions, and scroll-driven animations that make your digital presence feel alive. Static is dead — we make things move.",
  },
  {
    number: "05",
    title: "Creative Direction",
    description:
      "End-to-end creative vision that ensures every touchpoint — from pitch deck to production site — speaks with one bold, unmistakable voice.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 border-t-2 border-border">
      <div className="mx-auto max-w-[95vw]">
        <ScrollReveal>
          <SectionHeading
            title="WHAT WE DO"
            accentWord="DO"
            subtitle="Full-spectrum creative services for brands that demand more."
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
