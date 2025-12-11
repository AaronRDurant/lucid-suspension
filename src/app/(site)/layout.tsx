import type { ReactNode } from "react";

import { VerticalNav } from "../components/VerticalNav";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-10 md:pl-24 lg:px-10 lg:pb-24 lg:pt-12">
        {/* fixed bottom-right vertical nav container – empty for now */}
        <VerticalNav items={[]} />

        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
