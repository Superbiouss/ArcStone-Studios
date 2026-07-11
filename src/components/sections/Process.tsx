import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { processSteps } from "@/data/site-content";

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32 border-t-2 border-border">
      <div className="mx-auto max-w-[95vw]">
        <ScrollReveal>
          <SectionHeading
            title="HOW WE WORK"
            accentWord="WORK"
            subtitle="A proven process that turns ambition into reality."
          />
        </ScrollReveal>

        <div className="mt-16 md:mt-24 bg-border grid md:grid-cols-3 gap-px">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <div className="group bg-background p-8 md:p-12 hover:bg-accent hover:text-accent-foreground transition-colors duration-300 h-full">
                <span
                  className="block text-[6rem] md:text-[8rem] font-bold text-muted leading-none tracking-tighter group-hover:text-accent-foreground/20 transition-colors duration-300"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold uppercase tracking-tighter group-hover:text-accent-foreground transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-accent-foreground/80 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
