import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 border-t-2 border-border">
      <div className="mx-auto max-w-[95vw]">
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,8vw,7rem)] font-bold uppercase tracking-tighter leading-[0.85]">
            LET&apos;S CREATE
            <br />
            SOMETHING{" "}
            <span className="text-accent">BOLD</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 md:mt-20 max-w-4xl">
          <form className="space-y-0">
            <ScrollReveal delay={0.1}>
              <div className="border-b-2 border-border focus-within:border-accent focus-within:bg-accent/5 transition-colors">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-full h-20 md:h-24 bg-transparent text-2xl md:text-4xl font-bold uppercase tracking-tighter text-foreground placeholder:text-muted px-0 outline-none"
                  required
                  id="contact-name"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="border-b-2 border-border focus-within:border-accent focus-within:bg-accent/5 transition-colors">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="w-full h-20 md:h-24 bg-transparent text-2xl md:text-4xl font-bold uppercase tracking-tighter text-foreground placeholder:text-muted px-0 outline-none"
                  required
                  id="contact-email"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="border-b-2 border-border focus-within:border-accent focus-within:bg-accent/5 transition-colors">
                <textarea
                  placeholder="TELL US ABOUT YOUR PROJECT"
                  rows={3}
                  className="w-full bg-transparent text-2xl md:text-4xl font-bold uppercase tracking-tighter text-foreground placeholder:text-muted px-0 py-6 md:py-8 outline-none resize-none"
                  required
                  id="contact-message"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="pt-8 md:pt-12">
                <Button variant="primary" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </div>
            </ScrollReveal>
          </form>
        </div>
      </div>
    </section>
  );
}
