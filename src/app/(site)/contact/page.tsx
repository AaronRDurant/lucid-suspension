export default function ContactPage() {
  return (
    <section className="max-w-3xl border-t border-neutral-100 pt-16 pb-16 lg:pt-24 lg:pb-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
        contact
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        get in touch with Lucid.
      </h1>
      <p className="mt-4 text-base text-neutral-800 leading-relaxed">
        a more complete contact form and booking flow will live here. for now,
        this page is a placeholder while the service and membership logistics
        are finalized.
      </p>
      <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
        you can always reach out directly at{" "}
        <a
          href="mailto:aaron@lucidsuspension.com"
          className="font-medium text-neutral-800 underline underline-offset-4 hover:text-neutral-900"
        >
          aaron@lucidsuspension.com
        </a>
        .
      </p>
    </section>
  );
}
