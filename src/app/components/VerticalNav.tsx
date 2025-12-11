"use client";

type NavItem = {
  href: string;
  label: string;
};

type VerticalNavProps = {
  items: NavItem[];
  activeHref?: string;
  className?: string;
};

export function VerticalNav({
  items,
  activeHref,
  className,
}: VerticalNavProps) {
  return (
    <nav
      aria-label="site navigation"
      className={`pointer-events-auto flex flex-col items-end gap-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] ${
        className ?? ""
      }`.trim()}
    >
      <ul className="flex flex-col items-end gap-1">
        {items.map((item) => {
          const normalizedActive = activeHref?.replace(/\/$/, "");
          const isActive = normalizedActive === item.href;

          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={`inline-flex items-center gap-2 text-neutral-500 transition hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  isActive ? "text-neutral-900" : ""
                }`}
              >
                <span className="relative inline-flex h-[3px] w-3 items-center rounded-full bg-neutral-300">
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--lucid-gradient-start)] via-[var(--lucid-gradient-mid2)] to-[var(--lucid-gradient-end)]" />
                  )}
                </span>
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
