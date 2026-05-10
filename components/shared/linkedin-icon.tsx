import { cn } from "@/lib/utils";

/**
 * lucide-react no longer ships a LinkedIn glyph (brand trademark policy),
 * so we inline a minimal LinkedIn-style icon. Used in header social link + footer.
 */
export function LinkedinIcon({
  className,
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className)}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7" />
      <circle cx="8" cy="7" r="1" fill="currentColor" stroke="none" />
      <path d="M12 17v-4a3 3 0 0 1 6 0v4" />
      <path d="M12 13v4" />
    </svg>
  );
}
