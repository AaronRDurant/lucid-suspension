import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  kicker?: string;
  actions?: ReactNode;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  kicker,
  actions,
  className,
}: PageHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <header
      className={`flex flex-col gap-6 ${alignment} ${className ?? ""}`.trim()}
    >
      <div className="space-y-3">
        {eyebrow ? (
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-600">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {description ? (
          <p className="max-w-2xl text-base leading-relaxed text-neutral-800">
            {description}
          </p>
        ) : null}

        {kicker ? (
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            {kicker}
          </p>
        ) : null}
      </div>

      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </header>
  );
}
