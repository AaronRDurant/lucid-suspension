type GradientSpineProps = {
  className?: string;
};

/**
 * GradientSpine renders the vertical Lucid gradient bar.
 * uses the shared .lucid-gradient-spine token from globals.css.
 */
export function GradientSpine({ className }: GradientSpineProps) {
  return (
    <div
      aria-hidden="true"
      className={`h-full w-[6px] flex-shrink-0 rounded-full lucid-gradient-spine ${className ?? ""}`.trim()}
    />
  );
}
