type GradientDividerProps = {
  orientation?: "vertical" | "horizontal";
  // optional overrides for custom sizing (e.g. "3rem", "120px", "100%")
  width?: string;
  height?: string;
  className?: string;
};

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

// gradientDivider is the Lucid-branded accent line for emphasis,
// not a generic separator.
export function GradientDivider({
  orientation = "horizontal",
  width,
  height,
  className,
}: GradientDividerProps) {
  const isVertical = orientation === "vertical";

  const sizeClasses = isVertical ? "w-[6px] h-full" : "h-[2px] w-16 md:w-24";

  const gradientClasses = isVertical
    ? "bg-gradient-to-b from-[var(--lucid-gradient-start)] via-[var(--lucid-gradient-mid2)] to-[var(--lucid-gradient-end)]"
    : "bg-gradient-to-r from-[var(--lucid-gradient-start)] via-[var(--lucid-gradient-mid2)] to-[var(--lucid-gradient-end)]";

  return (
    <div
      aria-hidden="true"
      className={cn("rounded-full", sizeClasses, gradientClasses, className)}
      style={{
        // allow explicit overrides while keeping good defaults
        width,
        height,
      }}
    />
  );
}
