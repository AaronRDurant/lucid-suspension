import type { Metadata } from "next";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Dream Journal – Building Lucid Suspension in the open",
  description:
    "Honest notes from building Lucid Suspension: what's working, what's changing, and how the service is taking shape behind the scenes.",
  canonical: "/dream-journal",
});

export default function DreamJournalPage() {
  return (
    <section className="max-w-3xl border-t border-neutral-800 pt-16 pb-16 lg:pt-24 lg:pb-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
        Dream Journal
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Notes from building Lucid.
      </h1>
      <p className="mt-4 text-base text-neutral-200 leading-relaxed">
        Lucid&apos;s honest, low-pressure logbook &mdash; capturing what&apos;s
        working, what&apos;s being learned, and how the service is taking shape.
      </p>
      <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
        Dream Journal entries will appear here once the content system is wired
        up.
      </p>
    </section>
  );
}
