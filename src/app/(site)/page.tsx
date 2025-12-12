import type { Metadata } from "next";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lucid Suspension – Demystifying dirt bike suspension",
  description:
    "Suspension, made clear. Lucid is a transparent, rider-first dirt bike fork and shock service built around clarity, fresh wear parts, and careful work — launching 2026.",
  canonical: "/",
});

export default function HomePage() {
  return (
    <>
      {/* gradient spine (right) */}
      <div className="pointer-events-none absolute inset-y-16 right-20 hidden md:flex">
        <div className="h-full w-[6px] rounded-full bg-gradient-to-b from-[#ff3b1f] via-[#6a00ff] to-[#00eaff]" />
      </div>

      {/* mobile header */}
      <header className="mb-10 flex items-center justify-between lg:hidden">
        <span className="text-xs font-semibold uppercase tracking-[0.25em]">
          Lucid Suspension
        </span>
        <div className="h-8 w-[4px] rounded-full bg-gradient-to-b from-[#ff3b1f] via-[#6a00ff] to-[#00eaff]" />
      </header>

      {/* hero */}
      <section
        id="hero"
        className="flex min-h-[70vh] flex-col justify-center gap-10 lg:min-h-screen"
      >
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Lucid Suspension
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Demystifying dirt bike suspension.
          </h1>

          <p className="mt-4 text-[0.8rem] sm:text-xs font-medium uppercase tracking-[0.25em] text-neutral-600">
            Built around clarity &mdash; coming 2026
          </p>

          <p className="mt-6 max-w-md text-base text-neutral-800 leading-relaxed">
            Lucid is a clear alternative to the mystique and markup of most
            suspension shops &mdash; clean oil, fresh wear parts, and work done
            with real care.
          </p>
        </div>
      </section>

      {/* why Lucid */}
      <section className="scroll-mt-24">
        <div className="max-w-3xl border-t border-neutral-100 pt-16 pb-16 lg:pt-24 lg:pb-24">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
            Why Lucid exists
          </h2>

          <p className="mt-4 text-base text-neutral-800 leading-relaxed">
            Riders put off suspension service because the usual options feel
            overpriced, wrapped in mystique, and vague about what was even done.
            Lucid isn&apos;t a race-team tuning lab or a secret-sauce revalve
            brand &mdash; it&apos;s the straightforward option: clean oil, fresh
            wear parts, and careful work done the right way.
          </p>

          <dl className="mt-10 space-y-10">
            {/* pillar 1 */}
            <div className="flex flex-col gap-2 border-l border-neutral-200 pl-5">
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-600">
                Clarity over mystique
              </dt>
              <dd className="text-base text-neutral-800 leading-relaxed">
                No mystique and no ego. Just transparent suspension work you can
                trust.
              </dd>
            </div>

            {/* pillar 2 */}
            <div className="flex flex-col gap-2 border-l border-neutral-200 pl-5">
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-600">
                Service without the upsell
              </dt>
              <dd className="text-base text-neutral-800 leading-relaxed">
                Straightforward work, no surprise add-ons, and no pressure to
                buy anything you don&apos;t need.
              </dd>
            </div>

            {/* pillar 3 */}
            <div className="flex flex-col gap-2 border-l border-neutral-200 pl-5">
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-600">
                Care that shows in the details
              </dt>
              <dd className="text-base text-neutral-800 leading-relaxed">
                Each fork and shock is treated like it&apos;s my own &mdash;
                cleaned properly, inspected closely, torqued to spec, and
                assembled with real care.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 2026 launch */}
      <section className="scroll-mt-24">
        <div className="max-w-3xl border-t border-neutral-100 pt-10 pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
            2026 launch
          </p>

          <p className="mt-3 text-base text-neutral-800 leading-relaxed">
            Lucid Suspension is in build mode &mdash; refining the service flow,
            sharpening the standards, and dialing in the details that define the
            Lucid way, so the first customer jobs start from a process that
            already feels solid and well-proven.
          </p>

          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            If you&apos;d like to reach out ahead of launch, you can send a note
            to{" "}
            <a
              href="mailto:aaron@lucidsuspension.com"
              className="font-medium text-neutral-800 underline underline-offset-4 hover:text-neutral-900"
            >
              aaron@lucidsuspension.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* the Lucid Experience */}
      <section className="scroll-mt-24">
        <div className="max-w-3xl border-t border-neutral-100 pt-16 pb-16 lg:pt-24 lg:pb-24">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
            The Lucid Experience
          </h2>

          <p className="mt-4 text-base text-neutral-800 leading-relaxed">
            Lucid goes beyond routine service. The Lucid Experience is an
            optional membership for riders who want their suspension looked
            after year-round: a private portal with service history, real-time
            job updates while your parts are in the shop, and a direct line when
            you need it. Members also receive rider-first touches &mdash;
            preserved wear parts, oil samples, and clarity in the details that
            other shops never bother sharing.
          </p>

          <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
            No pricing or sign-ups yet. This layer is being designed in the
            background so that, when it launches, it feels simple, genuinely
            helpful, and worth keeping for the long haul.
          </p>
        </div>
      </section>
    </>
  );
}
