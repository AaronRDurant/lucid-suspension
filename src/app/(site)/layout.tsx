import type { ReactNode } from "react";
import { VerticalNav } from "../components/VerticalNav";

type SiteLayoutProps = {
  children: ReactNode;
};

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Lucid Experience", href: "/lucid-experience" },
  { label: "Dream Journal", href: "/dream-journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 pt-10 pb-20 md:pl-24 lg:px-10 lg:pb-24 lg:pt-12">
        <main className="min-w-0 flex-1 md:mr-[100px]">
          <div className="mx-auto w-full max-w-3xl">{children}</div>
        </main>
        {/* aside: gradient spine + reserved space for fixed nav */}
        <aside
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-[100px] md:block"
          aria-hidden="true"
        >
          <div
            className="lucid-gradient-spine absolute left-0 top-12 bottom-12 w-[6px] rounded-full md:top-16 md:bottom-16"
            aria-hidden="true"
          />
        </aside>
      </div>
      <VerticalNav items={navItems} ariaLabel="site navigation" />
    </div>
  );
}
