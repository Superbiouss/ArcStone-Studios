import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AccordionItem } from "@/components/motion/Accordion";
import { faqs } from "@/data/site-content";
import { Button } from "@/components/ui/Button";

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 border-t-2 border-border relative">
      <div className="mx-auto max-w-[95vw]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          
          {/* Left Column: Sticky Editorial Info */}
          <div className="relative">
            <div className="lg:sticky lg:top-32">
              <ScrollReveal>
                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase tracking-tighter leading-[0.9] mb-6">
                  GOT QUESTIONS?
                  <br />
                  <span className="text-accent">WE'VE GOT ANSWERS.</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md">
                  Everything you need to know about our process, pricing, and how we deliver world-class digital experiences.
                </p>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">ASK US ANYTHING</a>
                </Button>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <AccordionItem
                  index={i}
                  question={faq.question}
                  answer={faq.answer}
                />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
