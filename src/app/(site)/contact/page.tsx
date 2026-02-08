import type { Metadata } from "next";
import { CTAButton } from "../../components/CTAButton";
import { GradientDivider } from "../../components/GradientDivider";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact – Get in touch with Lucid Suspension",
  description:
    "Reach out to Lucid Suspension with questions about service, timing, or the Lucid Experience membership.",
  canonical: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with Lucid."
        description="Email about service, timing, or how to get your parts to Lucid."
      />

      <Section id="location-service" eyebrow="Location & service" borderTop>
        <p className="mb-10 text-base leading-relaxed text-neutral-200">
          Reach out at{" "}
          <a
            href="mailto:aaron@lucidsuspension.com"
            className="font-medium text-neutral-200 underline underline-offset-4 hover:text-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded"
          >
            aaron@lucidsuspension.com
          </a>
          .
        </p>
        <dl className="space-y-8">
          <div className="flex flex-col gap-2 border-l-2 border-neutral-700 pl-5">
            <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Location
            </dt>
            <dd className="text-base leading-relaxed text-neutral-200">
              Southeast Michigan. One workshop, by appointment. Location and
              timing are coordinated when you reach out.
            </dd>
          </div>
          <div className="flex flex-col gap-2 border-l-2 border-neutral-700 pl-5">
            <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Hours
            </dt>
            <dd className="text-base leading-relaxed text-neutral-200">
              By appointment. Email to schedule drop-off or discuss timing.
            </dd>
          </div>
          <div className="flex flex-col gap-2 border-l-2 border-neutral-700 pl-5">
            <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Local drop-off
            </dt>
            <dd className="text-base leading-relaxed text-neutral-200">
              Drop-off and pick-up by appointment. Details are coordinated when
              you email.
            </dd>
          </div>
          <div className="flex flex-col gap-2 border-l-2 border-neutral-700 pl-5">
            <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Shipping
            </dt>
            <dd className="text-base leading-relaxed text-neutral-200">
              Shipping coming in 2026. Local drop-off only for now.
            </dd>
          </div>
        </dl>
      </Section>

      <section
        id="get-in-touch"
        aria-labelledby="contact-cta-heading"
        className="border-t border-neutral-800 py-12 sm:py-16 lg:py-20"
      >
        <div className="flex flex-col items-center text-center">
          <GradientDivider className="mx-auto mb-8" />
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Get in touch
          </p>
          <h2
            id="contact-cta-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl"
          >
            Ready to talk suspension?
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-neutral-400">
            Send a note.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="mailto:aaron@lucidsuspension.com">
              Email Lucid
            </CTAButton>
            <CTAButton href="/services" variant="secondary">
              View services
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
