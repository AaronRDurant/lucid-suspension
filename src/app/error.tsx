"use client";

import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ reset }: ErrorProps) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-white text-neutral-900">
          <div className="max-w-md space-y-5 px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Lucid Suspension
            </p>

            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Something went wrong while loading this page.
            </h1>

            <p className="text-sm leading-relaxed text-neutral-700">
              The request ran into an unexpected issue. You can try again, or
              head back to the overview.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => reset()}
                className="rounded-full border border-neutral-900 px-5 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
              >
                Try again
              </button>

              <Link
                href="/"
                className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-800 transition hover:border-neutral-900"
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
