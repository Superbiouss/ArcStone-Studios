import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AccordionItem } from "@/components/motion/Accordion";
import { faqs } from "@/data/site-content";

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 border-t-2 border-border">
      <div className="mx-auto max-w-[95vw]">
        <ScrollReveal>
          <SectionHeading
            title="GOT QUESTIONS? WE'VE GOT ANSWERS!"
            accentWord="ANSWERS"
          />
        </ScrollReveal>

        <div className="mt-12 md:mt-20 max-w-4xl">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
