import {
  BadgeCheck,
  Briefcase,
  Building2,
  FileCheck2,
  Globe2,
  Shield,
  type LucideIcon,
} from "lucide-react";

import { siteConfig, type ServiceIconKey } from "@/lib/site-config";
import { FadeChild, FadeStagger, FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

const ICONS: Record<ServiceIconKey, LucideIcon> = {
  Building2,
  FileCheck2,
  Globe2,
  BadgeCheck,
  Shield,
  Briefcase,
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-warm-200 bg-paper py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            id="services-heading"
            eyebrow="What we do"
            title="Corporate & Secretarial Services"
            description="A complete range of secretarial, regulatory, and advisory services for companies operating in India."
          />
        </FadeIn>

        <FadeStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <FadeChild key={service.id}>
                <article className="group flex h-full flex-col rounded-2xl border border-warm-200 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-brand-500">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-warm-600">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-warm-700">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-accent-500"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeChild>
            );
          })}
        </FadeStagger>
      </div>
    </section>
  );
}
