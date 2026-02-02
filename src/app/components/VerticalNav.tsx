"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

export type VerticalNavItem = {
  label: string;
  href: string;
};

type VerticalNavProps = {
  items: VerticalNavItem[];
  ariaLabel?: string;
  className?: string;
};

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function VerticalNav({ items, ariaLabel, className }: VerticalNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const activeIndex = useMemo(() => {
    return items.findIndex((item) => {
      if (item.href === "/") {
        return pathname === "/";
      }
      return pathname.startsWith(item.href);
    });
  }, [items, pathname]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
      if (items.length === 0) return;

      const lastIndex = items.length - 1;
      let nextIndex = -1;

      switch (event.key) {
        case "ArrowDown":
        case "ArrowRight":
          nextIndex = index === lastIndex ? 0 : index + 1;
          break;
        case "ArrowUp":
        case "ArrowLeft":
          nextIndex = index === 0 ? lastIndex : index - 1;
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = lastIndex;
          break;
        default:
          break;
      }

      if (nextIndex !== -1) {
        event.preventDefault();
        const target = itemRefs.current[nextIndex];
        target?.focus();
      }
    },
    [items.length],
  );

  if (items.length === 0) return null;

  return (
    <nav
      aria-label={ariaLabel ?? "site navigation"}
      className={classNames(
        "pointer-events-none fixed bottom-24 right-6 z-40",
        className,
      )}
    >
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/90 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-neutral-300 shadow-lg backdrop-blur-sm transition hover:border-neutral-600 hover:text-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:hidden"
          aria-expanded={isOpen}
          aria-controls="lucid-vertical-nav"
        >
          <span>menu</span>
          <span
            className={classNames(
              "h-1 w-1 rounded-full bg-neutral-500 transition",
              isOpen && "scale-150 bg-neutral-50",
            )}
          />
        </button>

        {/* nav panel */}
        <div
          id="lucid-vertical-nav"
          className={classNames(
            // card geometry
            "w-full max-w-[280px] rounded-3xl border border-neutral-700/80 bg-neutral-900/90 px-4 py-4 shadow-xl backdrop-blur-md transition-all duration-200",
            "md:px-5 md:py-4",
            // mobile: slide / fade
            isOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0",
            // desktop: always visible
            "md:pointer-events-auto md:translate-y-0 md:opacity-100",
          )}
        >
          <ul className="flex flex-row gap-1.5 md:flex-col md:gap-2">
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <li key={item.href} className="flex">
                  <Link
                    href={item.href}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        setIsOpen(false);
                      }
                    }}
                    className={classNames(
                      "group relative flex items-center gap-2 rounded-2xl px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-all duration-150",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
                      isActive
                        ? "bg-neutral-100/[0.08] text-neutral-50"
                        : "text-neutral-400 hover:bg-neutral-100/[0.06] hover:text-neutral-50",
                    )}
                  >
                    {/* active indicator */}
                    <span
                      aria-hidden="true"
                      className={classNames(
                        "h-6 w-[3px] rounded-full lucid-gradient-spine",
                        "origin-center transition-all duration-200",
                        isActive
                          ? "scale-y-100 opacity-100"
                          : "scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-70",
                      )}
                    />
                    <span className="translate-y-[0.5px]">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
