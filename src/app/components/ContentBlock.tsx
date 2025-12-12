import type { ElementType, ReactNode } from "react";
import { shadows } from "../lib/design-tokens";

type ContentBlockVariant = "stacked" | "inline";

type ContentBlockProps = {
  as?: ElementType;
  eyebrow?: string;
  title?: string;
  kicker?: string;
  children: ReactNode;
  variant?: ContentBlockVariant;
  className?: string;
};

// small className helper
function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

// contentBlock is the soft card style for key ideas, lists, or small callouts.
export function ContentBlock({
  as: Component = "article",
  eyebrow,
  title,
  kicker,
  children,
  variant = "stacked",
  className,
}: ContentBlockProps) {
  const hasHeader = eyebrow || title || kicker;

  const headerLayout =
    variant === "inline"
      ? "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
      : "space-y-1";

  return (
    <Component
      className={cn(
        "rounded-2xl border border-neutral-100 bg-white px-6 py-5 sm:px-7 sm:py-6",
        "shadow-xl/0", // semantic hint; actual shadow via style
        className
      )}
      style={{ boxShadow: shadows.card }}
    >
      {hasHeader ? (
        <header className={cn("mb-3", headerLayout)}>
          <div className="space-y-1">
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
          </div>

          {kicker ? <p className="text-xs text-neutral-500">{kicker}</p> : null}
        </header>
      ) : null}

      <div
        className={cn(
          "text-sm leading-relaxed text-neutral-800",
          "space-y-2",
          // friendly defaults for lists inside cards
          "[&>ul]:list-disc [&>ul]:pl-4 [&>ol]:list-decimal [&>ol]:pl-4",
          "[&>li]:marker:text-neutral-400"
        )}
      >
        {children}
      </div>
    </Component>
  );
}
