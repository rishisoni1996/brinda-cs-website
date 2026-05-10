import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** ID for `aria-labelledby` plumbing on the parent <section>. */
  id?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-medium tracking-[0.2em] uppercase text-accent-700">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-display text-3xl font-medium text-brand-500 md:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={cn(
          "mt-5 block h-[2px] w-10 bg-accent-500",
          align === "center" && "mx-auto",
        )}
      />
      {description && (
        <p className="mt-6 max-w-prose text-base text-warm-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
