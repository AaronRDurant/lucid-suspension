import type { Metadata } from "next";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services – Lucid Suspension",
  description:
    "Clear, rider-first suspension service. Lucid focuses on honest fork and shock work: clean oil, fresh wear parts, and standards you actually understand.",
  canonical: "/services",
});

export default function ServicesPage() {
  return (
    <section className="max-w-3xl border-t border-neutral-100 pt-16 pb-16 lg:pt-24 lg:pb-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
        Services
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Suspension, made clear.
      </h1>
      <p className="mt-4 text-base text-neutral-800 leading-relaxed">
        A detailed breakdown of Lucid&apos;s fork and shock services will live
        here: what&apos;s included, when to service, and how each job is handled
        from teardown to final torque checks.
      </p>
      <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
        For now this page is a placeholder while the full service flow and
        pricing are finalized for the 2026 launch.
      </p>
    </section>
  );
}
