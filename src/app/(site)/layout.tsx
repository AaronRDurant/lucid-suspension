import type { ReactNode } from "react";
import { VerticalNav } from "../components/VerticalNav";

type SiteLayoutProps = {
  children: ReactNode;
};

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Lucid Experience", href: "/lucid-experience" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-10 md:pl-24 lg:px-10 lg:pb-24 lg:pt-12">
        <VerticalNav items={navItems} ariaLabel="site navigation" />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
