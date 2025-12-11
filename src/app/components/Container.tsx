import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Container keeps content aligned to the Lucid layout grid.
 * use this for page shells so spacing stays consistent.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`
        mx-auto max-w-6xl
        px-6 md:pl-24 lg:px-10
        ${className ?? ""}
      `.trim()}
    >
      {children}
    </div>
  );
}
