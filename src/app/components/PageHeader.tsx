import type { ReactNode } from "react";
import { typography } from "../lib/design-tokens";

type PageHeaderAlign = "left" | "center";

export type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: PageHeaderAlign;
  kicker?: string;
  actions?: ReactNode;
  className?: string;
};

// simple class merge helper
function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

// PageHeader is the hero-style intro for top-of-page sections.
export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  kicker,
  actions,
  className,
}: PageHeaderProps) {
  const alignmentClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <header
      className={cn(
        "flex flex-col gap-6",
        // consistent hero spacing
        "pt-12 pb-10 sm:pt-16 sm:pb-12",
        alignmentClass,
        className,
      )}
    >
      <div className="space-y-3">
        {eyebrow ? (
          <p
            className="text-neutral-400"
            style={{
              fontSize: typography.eyebrow.fontSize,
              lineHeight: typography.eyebrow.lineHeight,
              letterSpacing: typography.eyebrow.letterSpacing,
              textTransform: typography.eyebrow.textTransform,
              fontWeight: typography.eyebrow.fontWeight,
            }}
          >
            {eyebrow}
          </p>
        ) : null}

        <h1
          className="text-neutral-50"
          style={{
            fontSize: typography.display.fontSize,
            lineHeight: typography.display.lineHeight,
            letterSpacing: typography.display.letterSpacing,
            fontWeight: typography.display.fontWeight,
          }}
        >
          {title}
        </h1>

        {description ? (
          <p
            className="max-w-2xl text-neutral-200"
            style={{
              fontSize: typography.body.fontSize,
              lineHeight: typography.body.lineHeight,
              letterSpacing: typography.body.letterSpacing,
              fontWeight: typography.body.fontWeight,
            }}
          >
            {description}
          </p>
        ) : null}

        {kicker ? (
          <p
            className="text-neutral-500"
            style={{
              fontSize: typography.caption.fontSize,
              lineHeight: typography.caption.lineHeight,
              letterSpacing: "0.2em",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {kicker}
          </p>
        ) : null}
      </div>

      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </header>
  );
}
