import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy Policy for ${siteConfig.name}. Learn how we handle your data.`,
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="mx-auto max-w-[95vw]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
            PRIVACY <span className="text-accent">POLICY</span>
          </h1>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-12">
            Last updated: July 2026
          </p>

          <div className="max-w-3xl space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">
                Information We Collect
              </h2>
              <p>
                When you use our contact form, we collect your name, email address, and project
                details. This information is used solely to respond to your inquiry and discuss
                potential collaboration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p>
                We use the information you provide to respond to your inquiries, send project
                proposals, and communicate about our services. We do not sell, trade, or share your
                personal information with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">
                Email Communications
              </h2>
              <p>
                We use Resend as our email service provider. When you submit our contact form, you
                may receive a confirmation email. You can opt out of future communications at any
                time by contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">
                Analytics
              </h2>
              <p>
                We use Vercel Analytics to understand how visitors interact with our website. This
                data is anonymized and used to improve user experience. No personally identifiable
                information is collected through analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">
                Contact
              </h2>
              <p>
                If you have questions about this privacy policy, please contact us at{" "}
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
