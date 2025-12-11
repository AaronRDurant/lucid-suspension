// Footer shows core Lucid contact + location details on every page.
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-100 py-8 text-[0.7rem] uppercase tracking-[0.22em] text-neutral-500">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:pl-24 lg:px-10">
        <span>Lucid Suspension</span>
        <div className="flex items-center gap-4">
          <a
            href="mailto:aaron@lucidsuspension.com"
            className="underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            aaron@lucidsuspension.com
          </a>
          <span>Michigan, USA</span>
          <span>&copy; {year}</span>
        </div>
      </div>
    </footer>
  );
}
