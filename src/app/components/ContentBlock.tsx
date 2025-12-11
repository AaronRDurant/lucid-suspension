import type { ElementType, ReactNode } from "react";
import { shadows } from "../lib/design-tokens";

type ContentBlockProps = {
  as?: ElementType;
  eyebrow?: string;
  title?: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
};

// ContentBlock is the soft card style for key ideas, lists, or small callouts.
export function ContentBlock({
  as: Component = "article",
  eyebrow,
  title,
  kicker,
  children,
  className,
}: ContentBlockProps) {
  return (
    <Component
      className={`rounded-2xl border border-neutral-100 bg-white px-6 py-5 sm:px-7 sm:py-6 ${
        className ?? ""
      }`.trim()}
      style={{ boxShadow: shadows.card }}
    >
      {(eyebrow || title || kicker) && (
        <header className="mb-3 space-y-1">
          {eyebrow ? (
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-neutral-500">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h3 className="text-sm font-semibold tracking-tight text-neutral-900 sm:text-base">
              {title}
            </h3>
          ) : null}
          {kicker ? <p className="text-xs text-neutral-500">{kicker}</p> : null}
        </header>
      )}

      <div className="text-sm leading-relaxed text-neutral-800">{children}</div>
    </Component>
  );
}
