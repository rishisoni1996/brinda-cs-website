import { Quote } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { FadeChild, FadeStagger, FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="border-t border-warm-200 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Client voices"
            title="What clients say"
          />
        </FadeIn>

        <FadeStagger className="mt-14 grid gap-6 md:grid-cols-3">
          {/* TODO: Replace with real client testimonials before launch. */}
          {siteConfig.testimonials.map((t, idx) => (
            <FadeChild key={idx}>
              <figure className="flex h-full flex-col rounded-2xl border border-warm-200 bg-white p-7 shadow-card">
                <Quote
                  size={18}
                  strokeWidth={1.75}
                  className="text-accent-500"
                  aria-hidden="true"
                />
                <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-warm-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-warm-200 pt-4 text-sm">
                  <p className="font-medium text-brand-500">{t.author}</p>
                  <p className="text-warm-600">
                    {t.role} · {t.company}
                  </p>
                </figcaption>
              </figure>
            </FadeChild>
          ))}
        </FadeStagger>
      </div>
    </section>
  );
}
