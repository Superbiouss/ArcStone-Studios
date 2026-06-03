import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AccordionItem } from "@/components/motion/Accordion";

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "We work with ambitious brands on branding, web design, web development, motion design, and creative direction. From startups launching their first product to established companies redefining their digital presence — if you want to stand out, we're your team.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on scope. A brand identity project typically takes 4-6 weeks. A full website design and development runs 8-12 weeks. We'll define a clear timeline during our discovery phase and keep you updated throughout.",
  },
  {
    question: "What's your pricing structure?",
    answer:
      "We offer project-based pricing tailored to your specific needs and goals. Every engagement starts with a discovery session to define scope, after which we provide a detailed proposal. We believe in transparency — no hidden fees, no surprises.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely. We've delivered projects across 12+ countries and are experienced with remote collaboration across time zones. Our process is designed to work seamlessly whether you're across the street or across the globe.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Launch is just the beginning. We offer ongoing support packages that include maintenance, performance monitoring, content updates, and iterative improvements based on real user data. Your digital presence keeps evolving.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simple — reach out through our contact form or email us. We'll schedule a free 30-minute discovery call to understand your vision, discuss your goals, and see if we're the right fit. No commitment, no pressure.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-32 border-t-2 border-border">
      <div className="mx-auto max-w-[95vw]">
        <ScrollReveal>
          <SectionHeading
            title="FREQUENTLY ASKED QUESTIONS"
            accentWord="QUESTIONS"
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
