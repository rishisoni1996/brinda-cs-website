import { mailtoConsult, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { FounderPortrait } from "@/components/shared/founder-portrait";
import { IcsiBadge } from "@/components/shared/icsi-badge";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-24 pb-20 md:pt-28 md:pb-28 lg:min-h-[85vh] lg:pb-32"
    >
      {/* subtle decorative paper-tinted band, kept off the hero focus area */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-paper"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12 md:gap-10 lg:gap-16 lg:px-8">
        <div className="md:col-span-7">
          <FadeIn>
            <p className="mb-5 text-xs font-medium tracking-[0.2em] uppercase text-accent-700">
              {hero.eyebrow}
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1
              id="hero-heading"
              className="font-display font-medium text-brand-500 tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
                lineHeight: 1.05,
              }}
            >
              {hero.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-6 max-w-xl text-base text-warm-700 md:text-lg">
              {hero.subhead}
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={mailtoConsult(hero.primaryCta.subject)}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 bg-brand-500 px-5 text-paper hover:bg-brand-600",
                )}
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "h-11 px-5 text-brand-500 hover:bg-warm-100",
                )}
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn
          delay={0.1}
          className="md:col-span-5"
        >
          <div className="relative mx-auto max-w-sm md:max-w-none">
            <FounderPortrait priority />
            <IcsiBadge className="absolute bottom-4 left-4" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
