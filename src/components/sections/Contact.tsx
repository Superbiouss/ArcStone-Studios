"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      budget: formData.get("budget") as string,
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
    <section id="contact" className="yellow-theme bg-background text-foreground py-20 md:py-32 border-t-2 border-border transition-colors duration-1000">
      <div className="mx-auto max-w-[95vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Heading & Contact Info */}
          <div>
            <ScrollReveal>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase tracking-tighter leading-[0.85] mb-12">
                CHOOSE A CREATIVE
                <br />
                SOLUTION FOR YOUR
                <br />
                BUSINESSES,{" "}
                <span className="text-accent">STAND OUT!</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-8 mt-12 md:mt-24">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted mb-2">Email Us</h4>
                  <a href="mailto:arcstonestudios.in@gmail.com" className="text-2xl md:text-3xl font-medium hover:text-accent transition-colors">
                    arcstonestudios.in@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted mb-2">Visit Us</h4>
                  <p className="text-xl md:text-2xl font-medium opacity-80">
                    Mumbai, Maharashtra
                    <br />
                    India
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Form */}
          <div>
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
                    placeholder="YOUR NAME *"
                    className="w-full h-16 md:h-20 bg-transparent text-xl md:text-3xl font-bold uppercase tracking-tighter text-foreground placeholder:text-muted px-0 outline-none"
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
                    placeholder="YOUR EMAIL *"
                    className="w-full h-16 md:h-20 bg-transparent text-xl md:text-3xl font-bold uppercase tracking-tighter text-foreground placeholder:text-muted px-0 outline-none"
                    required
                    id="contact-email"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="border-b-2 border-border focus-within:border-accent focus-within:bg-accent/5 transition-colors">
                  <label htmlFor="contact-company" className="sr-only">Company or Brand</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="COMPANY / BRAND"
                    className="w-full h-16 md:h-20 bg-transparent text-xl md:text-3xl font-bold uppercase tracking-tighter text-foreground placeholder:text-muted px-0 outline-none"
                    id="contact-company"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="border-b-2 border-border focus-within:border-accent focus-within:bg-accent/5 transition-colors">
                  <label htmlFor="contact-budget" className="sr-only">Budget</label>
                  <select
                    name="budget"
                    className="w-full h-16 md:h-20 bg-transparent text-xl md:text-3xl font-bold uppercase tracking-tighter text-muted focus:text-foreground px-0 outline-none appearance-none cursor-pointer"
                    id="contact-budget"
                  >
                    <option value="" disabled selected hidden>PROJECT BUDGET</option>
                    <option value="Under $5k" className="bg-background text-foreground text-lg">Under $5k</option>
                    <option value="$5k - $10k" className="bg-background text-foreground text-lg">$5k - $10k</option>
                    <option value="$10k - $25k" className="bg-background text-foreground text-lg">$10k - $25k</option>
                    <option value="$25k+" className="bg-background text-foreground text-lg">$25k+</option>
                  </select>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="border-b-2 border-border focus-within:border-accent focus-within:bg-accent/5 transition-colors">
                  <label htmlFor="contact-message" className="sr-only">Project Details</label>
                  <textarea
                    name="message"
                    placeholder="TELL US ABOUT YOUR PROJECT *"
                    rows={4}
                    className="w-full bg-transparent text-xl md:text-3xl font-bold tracking-tighter text-foreground placeholder:text-muted placeholder:uppercase px-0 py-6 md:py-8 outline-none resize-none"
                    required
                    id="contact-message"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <div className="pt-8 md:pt-12">
                  <Button variant="primary" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </Button>
                </div>
              </ScrollReveal>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
