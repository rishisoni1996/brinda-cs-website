import { siteConfig } from "@/lib/site-config";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function International() {
  const { international } = siteConfig;

  return (
    <section
      id="international"
      aria-labelledby="international-heading"
      className="border-t border-warm-200 bg-paper-tinted py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            id="international-heading"
            eyebrow="International clients"
            title="India entry & compliance support for overseas clients"
          />
        </FadeIn>

        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-12 lg:gap-16">
          <div className="md:col-span-7">
            <FadeIn delay={0.05}>
              <h3 className="font-display text-2xl text-brand-500 md:text-[1.75rem]">
                {international.heading}
              </h3>
              <p className="mt-5 max-w-prose text-base text-warm-700 md:text-lg">
                {international.body}
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-5">
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-warm-200 bg-white p-7 shadow-card">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent-700">
                  How we support overseas clients
                </p>
                <ul className="mt-5 space-y-3 text-sm text-warm-700">
                  {international.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
