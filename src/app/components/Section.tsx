import type { ReactNode } from "react";

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

// Section wraps page content blocks with consistent spacing and optional borders.
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
  const borders = [
    borderTop ? "border-t border-neutral-100" : "",
    borderBottom ? "border-b border-neutral-100" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      className={`scroll-mt-24 ${borders} ${className ?? ""}`.trim()}
    >
      <div className="mx-auto max-w-3xl py-12 sm:py-16 lg:py-20">
        {(eyebrow || title || description) && (
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
        )}

        {children}
      </div>
    </section>
  );
}
