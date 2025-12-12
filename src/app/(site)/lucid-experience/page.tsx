import type { Metadata } from "next";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "The Lucid Experience – Membership for riders who care",
  description:
    "The Lucid Experience is an optional membership built for riders who want their suspension looked after year-round: service history, job updates, and direct access.",
  canonical: "/lucid-experience",
});

export default function LucidExperiencePage() {
  return (
    <section className="max-w-3xl border-t border-neutral-100 pt-16 pb-16 lg:pt-24 lg:pb-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
        The Lucid Experience
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Membership for riders who care about the details.
      </h1>
      <p className="mt-4 text-base text-neutral-800 leading-relaxed">
        This page will outline what the Lucid Experience membership includes,
        how it works, and why it&apos;s designed to feel worth keeping year
        after year.
      </p>
      <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
        The program is being built for a 2026 launch. This is a placeholder
        while the membership flow and portal are designed.
      </p>
    </section>
  );
}
