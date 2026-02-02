import type { Metadata } from "next";
import { CTAButton } from "../components/CTAButton";
import { Section } from "../components/Section";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lucid Suspension — Suspension, made clear",
  description:
    "Suspension, made clear. Lucid is a transparent, rider-first dirt bike fork and shock service built around clarity, fresh wear parts, and careful work — launching 2026.",
  canonical: "/",
});

export default function HomePage() {
  return (
    <>
      {/* mobile-only header */}
      <header className="mb-12 flex items-center justify-between lg:hidden">
        <span className="text-base font-semibold tracking-tight text-neutral-100">
          Lucid Suspension
        </span>
        <div
          className="h-8 w-[4px] rounded-full lucid-gradient-spine"
          aria-hidden="true"
        />
      </header>

      {/* hero — Framer-style: banner, headline, paragraph, dual CTAs */}
      <section
        id="hero"
        className="relative flex min-h-[75vh] flex-col justify-center py-16 lg:min-h-[88vh] lg:py-24"
      >
        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          {/* announcement banner — wrench emoji (decorative), accessible label on container */}
          <div
            className="mb-10 flex cursor-default items-center justify-center gap-3 rounded-full border border-neutral-800 bg-neutral-900/60 px-5 py-2.5 text-center transition-colors duration-200 hover:border-neutral-700 hover:bg-neutral-800/60 sm:mb-12"
            role="status"
            aria-label="Coming soon. Building for 2026 launch."
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full lucid-gradient-spine p-px"
              aria-hidden="true"
            >
              <span
                className="flex h-full w-full items-center justify-center rounded-full bg-neutral-950 text-[1.25rem] leading-none"
                aria-hidden="true"
              >
                {/* hammer and wrench emoji (U+1F6E0); decorative — meaning conveyed by aria-label and text */}
                🛠️
              </span>
            </span>
            <span className="flex flex-col items-start gap-0.5">
              <span className="text-sm font-medium leading-tight text-neutral-100">
                Coming soon
              </span>
              <span className="text-xs leading-tight text-neutral-500">
                Building for 2026 launch
              </span>
            </span>
          </div>

          {/* headline — two lines, generous line height */}
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-neutral-50 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">Suspension,</span>
            <span className="block">made clear.</span>
          </h1>

          {/* supporting paragraph — length and rhythm match reference */}
          <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-400 sm:mt-10 sm:text-[1.0625rem] md:text-lg">
            Lucid is the suspension service built for riders who want clarity,
            not mystique. Transparent from teardown to torque — fresh wear
            parts, careful work, and no upsell. Built to earn your trust.
          </p>

          {/* dual CTAs — pill shape, side by side */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
            <CTAButton href="/services">Services</CTAButton>
            <CTAButton
              href="mailto:aaron@lucidsuspension.com"
              variant="secondary"
            >
              Email Lucid
            </CTAButton>
          </div>
        </div>
      </section>

      {/* why Lucid exists */}
      <Section id="why-lucid" eyebrow="Why Lucid exists" borderTop>
        <p className="text-base leading-relaxed text-neutral-200">
          Riders put off suspension service because the usual options feel
          overpriced, wrapped in mystique, and vague about what was even done.
          Lucid isn&apos;t a race-team tuning lab or a secret-sauce revalve
          brand &mdash; it&apos;s the straightforward option: clean oil, fresh
          wear parts, and careful work done the right way.
        </p>
        <dl className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
          <div className="flex flex-col gap-2 border-l-2 border-neutral-700 pl-5">
            <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Clarity over mystique
            </dt>
            <dd className="text-base leading-relaxed text-neutral-200">
              No mystique and no ego. Just transparent suspension work you can
              trust.
            </dd>
          </div>
          <div className="flex flex-col gap-2 border-l-2 border-neutral-700 pl-5">
            <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Service without the upsell
            </dt>
            <dd className="text-base leading-relaxed text-neutral-200">
              Straightforward work, no surprise add-ons, and no pressure to buy
              anything you don&apos;t need.
            </dd>
          </div>
          <div className="flex flex-col gap-2 border-l-2 border-neutral-700 pl-5">
            <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Care that shows in the details
            </dt>
            <dd className="text-base leading-relaxed text-neutral-200">
              Each fork and shock is treated like it&apos;s my own &mdash;
              cleaned properly, inspected closely, torqued to spec, and
              assembled with real care.
            </dd>
          </div>
        </dl>
      </Section>

      {/* 2026 launch section */}
      <Section id="launch" eyebrow="2026 launch" borderTop>
        <p className="text-base leading-relaxed text-neutral-200">
          Lucid Suspension is in build mode &mdash; refining the service flow,
          sharpening the standards, and dialing in the details that define the
          Lucid way, so the first customer jobs start from a process that
          already feels solid and well-proven.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-400">
          If you&apos;d like to reach out ahead of launch, send a note to{" "}
          <a
            href="mailto:aaron@lucidsuspension.com"
            className="font-medium text-neutral-200 underline underline-offset-4 hover:text-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded"
          >
            aaron@lucidsuspension.com
          </a>
          .
        </p>
      </Section>

      {/* the Lucid Experience */}
      <Section id="lucid-experience" eyebrow="The Lucid Experience" borderTop>
        <p className="text-base leading-relaxed text-neutral-200">
          Lucid goes beyond routine service. The Lucid Experience is an optional
          membership for riders who want their suspension looked after
          year-round: a private portal with service history, real-time job
          updates while your parts are in the shop, and a direct line when you
          need it. Members also receive rider-first touches &mdash; preserved
          wear parts, oil samples, and clarity in the details that other shops
          never bother sharing.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-400">
          No pricing or sign-ups yet. This layer is being designed in the
          background so that, when it launches, it feels simple, genuinely
          helpful, and worth keeping for the long haul.
        </p>
      </Section>
    </>
  );
}
