"use client";

import { useState, useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.add("yellow-theme");
        } else {
          document.body.classList.remove("yellow-theme");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      document.body.classList.remove("yellow-theme");
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      website: formData.get("website") as string, // honeypot
    };
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll be in touch soon.");
        form.reset();
      } else {
        const result = await response.json();
        toast.error(result.error || "Oops! Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Oops! Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-32 border-t-2 border-border transition-colors duration-1000">
      <div className="mx-auto max-w-[95vw]">
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,6vw,5rem)] font-bold uppercase tracking-tighter leading-[0.85]">
            CHOOSE A CREATIVE
            <br />
            SOLUTION FOR YOUR
            <br />
            BUSINESSES,{" "}
            <span className="text-accent">STAND OUT!</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 md:mt-20 max-w-4xl">
          <form 
            className="space-y-0" 
            onSubmit={handleSubmit}
          >
            {/* Honeypot field — invisible to real users, bots will fill it */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                name="website"
                id="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <ScrollReveal delay={0.1}>
              <div className="border-b-2 border-border focus-within:border-accent focus-within:bg-accent/5 transition-colors">
                <label htmlFor="contact-name" className="sr-only">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  className="w-full h-20 md:h-24 bg-transparent text-2xl md:text-4xl font-bold uppercase tracking-tighter text-foreground placeholder:text-muted px-0 outline-none"
                  required
                  id="contact-name"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="border-b-2 border-border focus-within:border-accent focus-within:bg-accent/5 transition-colors">
                <label htmlFor="contact-email" className="sr-only">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  className="w-full h-20 md:h-24 bg-transparent text-2xl md:text-4xl font-bold uppercase tracking-tighter text-foreground placeholder:text-muted px-0 outline-none"
                  required
                  id="contact-email"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="border-b-2 border-border focus-within:border-accent focus-within:bg-accent/5 transition-colors">
                <label htmlFor="contact-message" className="sr-only">Project Details</label>
                <textarea
                  name="message"
                  placeholder="TELL US ABOUT YOUR PROJECT"
                  rows={3}
                  className="w-full bg-transparent text-2xl md:text-4xl font-bold tracking-tighter text-foreground placeholder:text-muted placeholder:uppercase px-0 py-6 md:py-8 outline-none resize-none"
                  required
                  id="contact-message"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="pt-8 md:pt-12">
                <Button variant="primary" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </Button>
              </div>
            </ScrollReveal>
          </form>
        </div>
      </div>
    </section>
  );
}
