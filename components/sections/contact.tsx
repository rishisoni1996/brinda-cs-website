import { Mail, MapPin } from "lucide-react";

import { mailtoConsult, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { LinkedinIcon } from "@/components/shared/linkedin-icon";
import { SectionHeading } from "@/components/shared/section-heading";

export function Contact() {
  const { contact, hero } = siteConfig;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-warm-200 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <FadeIn>
          <SectionHeading
            id="contact-heading"
            eyebrow="Get in touch"
            title="Let's talk about your compliance needs"
            description="We typically respond within one business day. The first consultation is on us — no commitment."
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-12 flex flex-col items-center gap-6">
            <a
              href={`mailto:${contact.email}`}
              className="font-display text-2xl text-brand-500 hover:text-accent-700 md:text-3xl"
              aria-label={`Email Brinda Soni at ${contact.email}`}
            >
              {contact.email}
            </a>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-warm-600">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-accent-500" aria-hidden="true" />
                {contact.location}
              </span>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brinda Soni on LinkedIn"
                className="inline-flex items-center gap-2 hover:text-brand-500"
              >
                <LinkedinIcon size={16} className="text-accent-500" />
                LinkedIn
              </a>
            </div>

            <a
              href={mailtoConsult(hero.primaryCta.subject)}
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-4 h-11 bg-brand-500 px-6 text-paper hover:bg-brand-600",
              )}
            >
              <Mail size={16} aria-hidden="true" className="mr-1.5" />
              Email Brinda
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
