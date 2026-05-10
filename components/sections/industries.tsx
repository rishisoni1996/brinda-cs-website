import { siteConfig } from "@/lib/site-config";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="border-t border-warm-200 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            id="industries-heading"
            eyebrow="Sectors"
            title="Industries we support"
            description="From product startups to multi-generational family businesses, we adapt our compliance support to your sector."
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <ul className="mt-12 flex flex-wrap gap-3">
            {siteConfig.industries.map((industry) => (
              <li
                key={industry}
                className="rounded-full border border-warm-200 bg-white px-4 py-2 text-sm font-medium text-brand-600 shadow-card"
              >
                {industry}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
