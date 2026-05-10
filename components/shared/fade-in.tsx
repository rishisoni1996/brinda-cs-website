"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

import { motion as motionTokens } from "@/lib/theme";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  /** Override the default 16px slide-up. */
  y?: number;
};

export function FadeIn({
  children,
  delay = 0,
  y,
  ...rest
}: FadeInProps) {
  const reduce = useReducedMotion();
  const offset = y ?? motionTokens.slideUp;

  if (reduce) {
    return <motion.div {...rest}>{children}</motion.div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: motionTokens.duration,
        ease: motionTokens.ease,
        delay,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  /** Time between each child's entrance, in seconds. Defaults to motion.stagger. */
  stagger?: number;
};

/**
 * Coordinates entrance of multiple FadeIn-equivalent children. Use as a wrapper
 * around `<FadeChild>` items.
 */
export function FadeStagger({ children, className, stagger }: StaggerProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger ?? motionTokens.stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeChild({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: motionTokens.slideUp },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: motionTokens.duration,
            ease: motionTokens.ease,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
