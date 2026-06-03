import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AccordionItem } from "@/components/motion/Accordion";

const faqs = [
  {
    question: "What is haven about?",
    answer:
      "Sincerely, it is as though you have a pair of spectacles enabling you to see deeper into problems man longs to dissipate and solve. And luckily for any man who reads you, he will get the answers to his worries except he still isn't ready to tackle himself. Kudos! Keep the ball rolling.",
  },
  {
    question: "What are the criteria to become a writer?",
    answer:
      "Friends who talk about cryptocurrencies and Web3, and you want to understand the terminology.",
  },
  {
    question: "I Want to Use AI in My Work, But I Don't Know How",
    answer:
      "You want to embrace the future of technology without fear.",
  },
  {
    question: "I Want to Be More Efficient and Creative, But There Are Too Many Tools",
    answer:
      "You're ready to navigate tomorrow's innovations confidently.",
  },
  {
    question: "What's the Onboarding process like",
    answer:
      "You're ready to navigate tomorrow's innovations confidently.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-32 border-t-2 border-border">
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
