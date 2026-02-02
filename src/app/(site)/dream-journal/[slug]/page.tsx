import type { Metadata } from "next";
import { createMetadata } from "../../../lib/seo";

type DreamJournalEntryPageProps = {
  params: {
    slug: string;
  };
};

export const metadata: Metadata = createMetadata({
  title: "Dream Journal entry – Lucid Suspension",
  description:
    "A Dream Journal entry from the ongoing build of Lucid Suspension. Full content will be wired in once the publishing workflow is ready.",
  canonical: "/dream-journal",
});

export default function DreamJournalEntryPage({
  params,
}: DreamJournalEntryPageProps) {
  return (
    <section className="max-w-3xl border-t border-neutral-800 pt-16 pb-16 lg:pt-24 lg:pb-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
        Dream Journal
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {params.slug}
      </h1>
      <p className="mt-4 text-base text-neutral-200 leading-relaxed">
        This route will eventually render rich Dream Journal entries pulled from
        a content source. For now it confirms that the dynamic Dream Journal URL
        structure is in place.
      </p>
    </section>
  );
}
