type GradientSpineProps = {
  className?: string;
};

/**
 * GradientSpine renders the vertical Lucid gradient bar.
 * use this for the global page spine or tall accent dividers.
 */
export function GradientSpine({ className }: GradientSpineProps) {
  return (
    <div
      aria-hidden="true"
      className={`
        h-full w-[6px] rounded-full
        bg-gradient-to-b
        from-[var(--lucid-gradient-start)]
        via-[var(--lucid-gradient-mid2)]
        to-[var(--lucid-gradient-end)]
        ${className ?? ""}
      `.trim()}
    />
  );
}
