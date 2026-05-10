import { siteConfig } from "@/lib/site-config";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-warm-200 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="Practical, professional, dedicated."
          />
        </FadeIn>

        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-12 lg:gap-20">
          <div className="md:col-span-7">
            <FadeIn delay={0.05}>
              <div className="space-y-6 text-base leading-relaxed text-warm-700 md:text-[1.0625rem]">
                {siteConfig.founder.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-5">
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-warm-200 bg-white p-6 shadow-card md:p-8">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent-700">
                  Credentials & Practice
                </p>
                <p className="mt-4 font-display text-2xl text-brand-500">
                  {siteConfig.founder.name}
                </p>
                <p className="mt-1 text-sm text-warm-600">
                  {siteConfig.founder.title}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-warm-700">
                  {siteConfig.founder.credentials.map((credential) => (
                    <li key={credential} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                      />
                      <span>{credential}</span>
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
