import "server-only";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Renders the founder photo via next/image, or a navy placeholder block with
 * "BS" Fraunces initials if the image file is missing in /public.
 *
 * The fs check runs at module evaluation in a Server Component, so it's
 * resolved at build time and adds zero client-side overhead.
 */

const PHOTO_PATH = path.join(process.cwd(), "public", "brinda-soni.jpg");
const PHOTO_EXISTS = fs.existsSync(PHOTO_PATH);

type FounderPortraitProps = {
  className?: string;
  priority?: boolean;
};

export function FounderPortrait({ className, priority }: FounderPortraitProps) {
  if (PHOTO_EXISTS) {
    return (
      <Image
        src={siteConfig.founder.image}
        alt={siteConfig.founder.imageAlt}
        width={800}
        height={1000}
        priority={priority}
        sizes="(min-width: 768px) 480px, 100vw"
        className={cn(
          "h-full w-full rounded-2xl object-cover ring-1 ring-warm-200/60 shadow-soft",
          className,
        )}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={siteConfig.founder.imageAlt}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-2xl bg-brand-500 text-paper ring-1 ring-warm-200/60 shadow-soft",
        "aspect-[4/5]",
        className,
      )}
    >
      <span className="font-display text-7xl font-medium tracking-tight text-paper/95 md:text-8xl">
        BS
      </span>
    </div>
  );
}
