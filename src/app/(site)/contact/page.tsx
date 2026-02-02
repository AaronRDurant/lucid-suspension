import type { Metadata } from "next";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact – Get in touch with Lucid Suspension",
  description:
    "Reach out to Lucid Suspension with questions about service, timing, or the Lucid Experience membership.",
  canonical: "/contact",
});

export default function ContactPage() {
  return (
    <section className="max-w-3xl border-t border-neutral-800 pt-16 pb-16 lg:pt-24 lg:pb-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
        Contact
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-neutral-50">
        Get in touch with Lucid.
      </h1>
      <p className="mt-4 text-base text-neutral-200 leading-relaxed">
        A more complete contact form and booking flow will live here. For now,
        this page is a placeholder while the service and membership logistics
        are finalized.
      </p>
      <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
        You can always reach out directly at{" "}
        <a
          href="mailto:aaron@lucidsuspension.com"
          className="font-medium text-neutral-200 underline underline-offset-4 hover:text-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded"
        >
          aaron@lucidsuspension.com
        </a>
        .
      </p>
    </section>
  );
}
