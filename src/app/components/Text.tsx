import type { ElementType, ReactNode } from "react";
import { typography } from "../lib/design-tokens";

type BaseTextProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

/**
 * Eyebrow is for small overline labels (e.g. section tags).
 */
export function Eyebrow({
  as: Component = "p",
  children,
  className,
}: BaseTextProps) {
  return (
    <Component
      className={cn("text-neutral-400", className)}
      style={{
        fontSize: typography.eyebrow.fontSize,
        lineHeight: typography.eyebrow.lineHeight,
        letterSpacing: typography.eyebrow.letterSpacing,
        textTransform: typography.eyebrow.textTransform,
        fontWeight: typography.eyebrow.fontWeight,
      }}
    >
      {children}
    </Component>
  );
}

/**
 * Caption is for supporting micro-copy below images or cards.
 */
export function Caption({
  as: Component = "p",
  children,
  className,
}: BaseTextProps) {
  return (
    <Component
      className={cn("text-neutral-500", className)}
      style={{
        fontSize: typography.caption.fontSize,
        lineHeight: typography.caption.lineHeight,
        letterSpacing: typography.caption.letterSpacing,
        fontWeight: typography.caption.fontWeight,
      }}
    >
      {children}
    </Component>
  );
}

/**
 * Lead is for intro paragraphs at the top of a section.
 */
export function Lead({
  as: Component = "p",
  children,
  className,
}: BaseTextProps) {
  return (
    <Component
      className={cn("text-neutral-300", className)}
      style={{
        fontSize: "1.05rem", // slightly larger than body
        lineHeight: 1.7,
        letterSpacing: typography.body.letterSpacing,
        fontWeight: typography.body.fontWeight,
      }}
    >
      {children}
    </Component>
  );
}

/**
 * Kicker is for small uppercase meta lines under headings.
 */
export function Kicker({
  as: Component = "p",
  children,
  className,
}: BaseTextProps) {
  return (
    <Component
      className={cn("text-neutral-500", className)}
      style={{
        fontSize: 0.75,
        lineHeight: 1.5,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        fontWeight: 500,
      }}
    >
      {children}
    </Component>
  );
}
