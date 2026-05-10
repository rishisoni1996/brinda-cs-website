"use client";

import { useEffect, useState } from "react";

import { mailtoConsult, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Wordmark } from "@/components/shared/wordmark";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "bg-paper/85 shadow-[0_1px_0_rgb(0_0_0/0.04)] backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Wordmark asLink size="md" />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          <ul className="flex items-center gap-7 text-sm font-medium text-warm-700">
            {siteConfig.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative inline-block py-1 transition-colors hover:text-brand-500 [&:hover_span]:scale-x-100"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent-500 transition-transform duration-200"
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={mailtoConsult(siteConfig.hero.primaryCta.subject)}
            className={cn(
              buttonVariants({ size: "default" }),
              "h-9 bg-brand-500 px-4 text-paper hover:bg-brand-600",
            )}
          >
            Book Consultation
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
