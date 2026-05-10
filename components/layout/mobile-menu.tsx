"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { mailtoConsult, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    closeRef.current?.focus();

    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-500 hover:bg-warm-100"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "fixed inset-x-0 top-[64px] z-40 origin-top transform border-t border-warm-200 bg-paper transition-all duration-300 ease-out",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav className="flex flex-col px-6 py-6">
          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="sr-only"
          >
            Close menu
          </button>

          <ul className="flex flex-col divide-y divide-warm-200">
            {siteConfig.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-xl text-brand-500 hover:text-accent-700"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-accent-500">→</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <a
              href={mailtoConsult(siteConfig.hero.primaryCta.subject)}
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full justify-center bg-brand-500 text-paper hover:bg-brand-600",
              )}
            >
              Book Consultation
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
