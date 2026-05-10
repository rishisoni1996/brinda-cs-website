"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site-config";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-warm-200 bg-paper-tinted py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            id="faq-heading"
            eyebrow="Frequently asked"
            title="Common questions"
            description="Quick answers to the questions founders and finance teams ask us most."
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-12">
            <Accordion className="mx-auto max-w-3xl divide-y divide-warm-200 border-y border-warm-200">
              {siteConfig.faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="not-last:border-b-0"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg text-brand-500 hover:no-underline md:text-xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-warm-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
