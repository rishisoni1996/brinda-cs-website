import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  /** Render as link to `#` to act as a return-to-top control on the page. */
  asLink?: boolean;
  size?: "sm" | "md" | "lg";
};

const SIZE = {
  sm: { primary: "text-base", secondary: "text-[10px]" },
  md: { primary: "text-lg", secondary: "text-[10px]" },
  lg: { primary: "text-2xl", secondary: "text-[11px]" },
} as const;

export function Wordmark({
  className,
  asLink = false,
  size = "md",
}: WordmarkProps) {
  const sizes = SIZE[size];

  const inner = (
    <span
      className={cn(
        "inline-flex flex-col items-start leading-none",
        className,
      )}
    >
      <span
        className={cn(
          "font-display font-medium tracking-tight text-brand-500",
          sizes.primary,
        )}
      >
        Brinda Soni
      </span>
      <span
        className={cn(
          "mt-1 font-sans font-medium tracking-[0.18em] uppercase text-warm-600",
          sizes.secondary,
        )}
      >
        & Associates
      </span>
    </span>
  );

  if (asLink) {
    return (
      <a
        href="#main"
        aria-label="Brinda Soni & Associates — back to top"
        className="inline-flex rounded focus-visible:outline-none"
      >
        {inner}
      </a>
    );
  }

  return inner;
}
