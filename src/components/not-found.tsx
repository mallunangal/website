import { Link } from "@tanstack/react-router";
import { GurmukhiName } from "@/components/layout/ornament";

export function NotFoundPage() {
  return (
    <section className="relative isolate flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center text-paper">
      <img
        src="/images/fields.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover outline-none"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/70">404</p>
        <GurmukhiName className="mt-4 text-paper/80" />
        <h1 className="mt-4 font-display text-4xl font-medium md:text-5xl">
          This page is not in the archive
        </h1>
        <p className="mx-auto mt-4 max-w-md text-paper/75">
          The address may have changed, or the record has not been published yet.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex h-11 items-center rounded-md bg-paper px-5 text-sm font-medium text-ink"
        >
          Back to Mallu Nangal
        </Link>
      </div>
    </section>
  );
}
