import type { Metadata } from "next";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Journal – Building Lucid Suspension in the open",
  description:
    "Honest notes from building Lucid Suspension: what’s working, what’s changing, and how the service is taking shape behind the scenes.",
  canonical: "/journal",
});

export default function JournalPage() {
  return (
    <section className="max-w-3xl border-t border-neutral-100 pt-16 pb-16 lg:pt-24 lg:pb-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
        Journal
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Notes from building Lucid.
      </h1>
      <p className="mt-4 text-base text-neutral-800 leading-relaxed">
        This is Lucid&apos;s honest, low-pressure logbook &mdash; capturing
        what&apos;s working, what&apos;s being learned, and how the service is
        taking shape.
      </p>
      <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
        Journal entries will appear here once the content system is wired up.
      </p>
    </section>
  );
}
