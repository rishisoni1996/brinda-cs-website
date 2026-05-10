import { Check } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { FadeChild, FadeStagger, FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="border-t border-warm-200 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            id="why-us-heading"
            eyebrow="Why us"
            title="Why businesses work with us"
            description="A small, focused practice that prioritises accuracy, communication, and long-term relationships."
          />
        </FadeIn>

        <FadeStagger className="mt-14 grid gap-x-10 gap-y-5 md:grid-cols-2">
          {siteConfig.whyChooseUs.map((point) => (
            <FadeChild key={point}>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                  <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <p className="text-base text-warm-700 md:text-[1.0625rem]">
                  {point}
                </p>
              </div>
            </FadeChild>
          ))}
        </FadeStagger>
      </div>
    </section>
  );
}
