import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

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
            title="WE DON'T FOLLOW TRENDS — WE SET THEM"
            accentWord="SET"
            subtitle="ArcStone Studios is a collective of designers, developers, and strategists who believe digital experiences should be felt, not just seen."
          />
        </ScrollReveal>

        <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-tight">
              We partner with ambitious brands to craft digital products that
              command attention. Every pixel is deliberate. Every interaction is
              designed to leave an impression.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-tight">
              From identity systems to immersive web experiences, we bring a
              relentless pursuit of excellence and a refusal to settle for
              ordinary. Your brand deserves to be{" "}
              <span className="text-accent font-bold">unmistakable</span>.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
