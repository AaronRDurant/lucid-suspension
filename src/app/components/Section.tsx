import type { ReactNode } from "react";
import { spacing } from "../lib/design-tokens";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  borderTop?: boolean;
  borderBottom?: boolean;
  children: ReactNode;
  className?: string;
};

// small className helper
function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

// section wraps page content blocks with consistent spacing and optional borders.
export function Section({
  id,
  eyebrow,
  title,
  description,
  borderTop,
  borderBottom,
  children,
  className,
}: SectionProps) {
  const hasHeader = eyebrow || title || description;

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24",
        borderTop && "border-t border-neutral-100",
        borderBottom && "border-b border-neutral-100",
        className
      )}
      style={{
        // anchor offset for in-page links / vertical nav
        scrollMarginTop: spacing["3xl"],
      }}
    >
      <div className="mx-auto max-w-3xl py-12 sm:py-16 lg:py-20">
        {hasHeader ? (
          <header className="mb-8 space-y-3">
            {eyebrow ? (
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-600">
                {eyebrow}
              </p>
            ) : null}

            {title ? (
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
                {title}
              </h2>
            ) : null}

            {description ? (
              <p className="text-base leading-relaxed text-neutral-800">
                {description}
              </p>
            ) : null}
          </header>
        ) : null}

        {children}
      </div>
    </section>
  );
}
