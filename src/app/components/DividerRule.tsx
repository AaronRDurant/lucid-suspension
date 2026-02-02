type DividerRuleProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

/**
 * DividerRule is the neutral 1px rule used between sections.
 * use when you want separation without drawing attention.
 */
export function DividerRule({
  orientation = "horizontal",
  className,
}: DividerRuleProps) {
  const sizeClasses =
    orientation === "vertical" ? "w-px h-full" : "h-px w-full";

  return (
    <div
      aria-hidden="true"
      className={`
        ${sizeClasses}
        bg-neutral-800
        ${className ?? ""}
      `.trim()}
    />
  );
}
