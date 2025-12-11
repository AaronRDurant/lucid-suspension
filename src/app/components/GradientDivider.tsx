type GradientDividerProps = {
  orientation?: "vertical" | "horizontal";
  className?: string;
};

// GradientDivider is the Lucid-branded accent line for emphasis, not generic separation.
export function GradientDivider({
  orientation = "horizontal",
  className,
}: GradientDividerProps) {
  const sizeClasses =
    orientation === "vertical" ? "w-[6px] h-full" : "h-[2px] w-16 md:w-24";

  const gradientClasses =
    orientation === "vertical"
      ? "bg-gradient-to-b from-[var(--lucid-gradient-start)] via-[var(--lucid-gradient-mid2)] to-[var(--lucid-gradient-end)]"
      : "bg-gradient-to-r from-[var(--lucid-gradient-start)] via-[var(--lucid-gradient-mid2)] to-[var(--lucid-gradient-end)]";

  return (
    <div
      className={`rounded-full ${sizeClasses} ${gradientClasses} ${
        className ?? ""
      }`.trim()}
      aria-hidden="true"
    />
  );
}
