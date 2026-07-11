import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms of Service for ${siteConfig.name}. Understand our terms and conditions.`,
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="mx-auto max-w-[95vw]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
            TERMS OF <span className="text-accent">SERVICE</span>
          </h1>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-12">
            Last updated: July 2026
          </p>

          <div className="max-w-3xl space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">
                Agreement to Terms
              </h2>
              <p>
                By accessing or using the {siteConfig.name} website, you agree to be bound by these
                Terms of Service. If you do not agree, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">
                Services
              </h2>
              <p>
                {siteConfig.name} provides creative design, branding, web development, and digital
                experience services. Project scope, deliverables, and timelines are defined in
                individual project agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">
                Intellectual Property
              </h2>
              <p>
                All content on this website, including designs, code, text, and graphics, is the
                property of {siteConfig.name} unless otherwise stated. Client deliverables become
                the property of the client upon full payment as outlined in project agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p>
                {siteConfig.name} shall not be liable for any indirect, incidental, or consequential
                damages arising from the use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">
                Contact
              </h2>
              <p>
                For questions regarding these terms, please contact us at{" "}
                <a
                  href="mailto:hello@arcstonestudio.in"
                  className="text-accent hover:underline underline-offset-4"
                >
                  hello@arcstonestudio.in
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
