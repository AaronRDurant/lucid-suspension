import type { Metadata } from "next";
import { CTAButton } from "../../components/CTAButton";
import { GradientDivider } from "../../components/GradientDivider";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About – Why Lucid Suspension exists",
  description:
    "Why Lucid exists: a dirt bike suspension service built to strip away the mystique. Refresh only, clear pricing, one set of standards.",
  canonical: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Why Lucid exists."
        description="Suspension service shouldn't feel like a black box. Lucid is built to give riders clarity, consistency, and work they can trust."
      />

      <Section id="philosophy" eyebrow="Philosophy" borderTop>
        <div className="space-y-6 text-base leading-relaxed text-neutral-200">
          <p>
            Most dirt bike suspension service runs on mystique — revalves,
            upcharges, and bloated pricing that leave riders unsure what they're
            really paying for. Lucid doesn't revalve; the focus is refresh only.
            That means oil changes and full rebuilds done to the highest
            standard, with no corners cut and fair prices, the same way every
            time.
          </p>
          <p>
            What most riders need is regular service, careful installation, and
            a solid baseline — not secret sauce. Lucid is built that way:
            documented, repeatable, and clear from day one.
          </p>
          <p>
            The Lucid Experience will give riders service history, live job
            status, and a direct line when they need it — plus special touches
            that make the work feel transparent and the experience feel
            personal. It's a first for moto suspension: a membership built
            around clarity and access.
          </p>
        </div>

        <dl className="mt-12 space-y-8 sm:mt-14">
          <div className="flex flex-col gap-2 border-l-2 border-neutral-700 pl-5">
            <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Who's behind Lucid
            </dt>
            <dd className="text-base leading-relaxed text-neutral-200">
              Aaron Durant founded Lucid and runs it from a single workshop in
              Michigan. He's a front-end software engineer and a mid-pack
              C-class weekend warrior. One workshop means one set of hands —
              your suspension is handled by the same person from drop-off to
              pickup.
            </dd>
          </div>
        </dl>
      </Section>

      <section
        id="get-in-touch"
        aria-labelledby="about-cta-heading"
        className="border-t border-neutral-800 py-12 sm:py-16 lg:py-20"
      >
        <div className="flex flex-col items-center text-center">
          <GradientDivider className="mx-auto mb-8" />
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Get in touch
          </p>
          <h2
            id="about-cta-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl"
          >
            Ready to talk suspension?
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-neutral-400">
            Have questions about service, timing, or how to get your parts to
            Lucid? Send a note.
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
