import type { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Eyebrow is for small overline labels like section tags.
 */
export function Eyebrow({ children, className }: TextProps) {
  return (
    <p
      className={`
        text-[0.7rem] font-semibold uppercase
        tracking-[0.25em] text-neutral-600
        ${className ?? ""}
      `.trim()}
    >
      {children}
    </p>
  );
}

/**
 * Caption is for supporting micro-copy below images or cards.
 */
export function Caption({ children, className }: TextProps) {
  return (
    <p
      className={`
        text-xs leading-relaxed text-neutral-500
        ${className ?? ""}
      `.trim()}
    >
      {children}
    </p>
  );
}

/**
 * Kicker is for small uppercase meta lines under headings.
 */
export function Kicker({ children, className }: TextProps) {
  return (
    <p
      className={`
        text-[0.75rem] font-medium uppercase
        tracking-[0.2em] text-neutral-500
        ${className ?? ""}
      `.trim()}
    >
      {children}
    </p>
  );
}
