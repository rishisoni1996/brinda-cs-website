import { cn } from "@/lib/utils";

/**
 * Text-only credibility chip. Intentionally avoids the ICSI logo (trademark);
 * if logo usage is licensed in future, this component can be swapped to render
 * an Image without changing call sites.
 */
export function IcsiBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-warm-200 bg-white/95 px-3 py-1.5 text-xs font-medium text-brand-700 shadow-card backdrop-blur",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="block h-1.5 w-1.5 rounded-full bg-accent-500"
      />
      Member, ICSI
    </span>
  );
}
