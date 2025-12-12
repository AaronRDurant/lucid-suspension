import type { Metadata } from "next";
import { createMetadata } from "../../../lib/seo";

type JournalEntryPageProps = {
  params: {
    slug: string;
  };
};

export const metadata: Metadata = createMetadata({
  title: "Journal entry – Lucid Suspension",
  description:
    "A journal entry from the ongoing build of Lucid Suspension. Full content will be wired in once the publishing workflow is ready.",
  canonical: "/journal",
});

export default function JournalEntryPage({ params }: JournalEntryPageProps) {
  return (
    <section className="max-w-3xl border-t border-neutral-100 pt-16 pb-16 lg:pt-24 lg:pb-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
        Journal
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {params.slug}
      </h1>
      <p className="mt-4 text-base text-neutral-800 leading-relaxed">
        This route will eventually render rich journal entries pulled from a
        content source. For now it confirms that the dynamic journal URL
        structure is in place.
      </p>
    </section>
  );
}
