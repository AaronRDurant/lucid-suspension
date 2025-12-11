import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col justify-center">
      <section className="max-w-xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Lucid Suspension
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          This page doesn&apos;t exist yet.
        </h1>

        <p className="text-base leading-relaxed text-neutral-700">
          You&apos;ve hit a route Lucid hasn&apos;t built out. If you were
          expecting something specific, you can head back to the overview or
          send a note so it&apos;s on the radar.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full border border-neutral-900 px-5 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
          >
            Back to overview
          </Link>

          <a
            href="mailto:aaron@lucidsuspension.com"
            className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-800 transition hover:border-neutral-900"
          >
            Email Lucid
          </a>
        </div>
      </section>
    </div>
  );
}
