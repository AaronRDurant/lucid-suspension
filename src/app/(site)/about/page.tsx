import type { Metadata } from "next";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About – Why Lucid Suspension exists",
  description:
    "The story behind Lucid Suspension: a dirt bike suspension service built to remove mystique, avoid ego, and give riders clear, honest work.",
  canonical: "/about",
});

export default function AboutPage() {
  return (
    <section className="max-w-3xl border-t border-neutral-800 pt-16 pb-16 lg:pt-24 lg:pb-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
        About
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-neutral-50">
        Why Lucid exists.
      </h1>
      <p className="mt-4 text-base text-neutral-200 leading-relaxed">
        This page will tell the story behind Lucid Suspension, the standards it
        holds for every job, and how the service is being built with riders in
        mind from day one.
      </p>
    </section>
  );
}
