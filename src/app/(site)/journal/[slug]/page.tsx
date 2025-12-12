type JournalEntryPageProps = {
  params: {
    slug: string;
  };
};

export default function JournalEntryPage({ params }: JournalEntryPageProps) {
  return (
    <section className="max-w-3xl border-t border-neutral-100 pt-16 pb-16 lg:pt-24 lg:pb-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
        journal
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {params.slug}
      </h1>
      <p className="mt-4 text-base text-neutral-800 leading-relaxed">
        this route will eventually render rich journal entries pulled from a
        content source. for now it confirms that the dynamic journal url
        structure is in place.
      </p>
    </section>
  );
}
