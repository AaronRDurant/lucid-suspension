"use client";

import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ reset }: ErrorProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-50 antialiased">
        <div className="flex min-h-screen items-center justify-center bg-neutral-950 text-neutral-50">
          <div className="max-w-md space-y-5 px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Lucid Suspension
            </p>

            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl text-neutral-50">
              Something went wrong while loading this page.
            </h1>

            <p className="text-sm leading-relaxed text-neutral-300">
              The request ran into an unexpected issue. You can try again, or
              head back to the overview.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => reset()}
                className="rounded-full border border-neutral-100 bg-neutral-50 px-5 py-2 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                Try again
              </button>

              <Link
                href="/"
                className="rounded-full border border-neutral-600 px-5 py-2 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:bg-neutral-800"
              >
                Back to overview
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
