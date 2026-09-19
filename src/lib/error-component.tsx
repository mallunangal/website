import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center text-paper">
      <img
        src="/images/archive-table.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover outline-none"
      />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="relative max-w-lg">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/70">500</p>
        <h1 className="mt-4 font-display text-4xl font-medium">The reading room is interrupted</h1>
        <p className="mt-4 text-sm break-words text-paper/75">{errorMessage(error)}</p>
        <Link
          to="/"
          className="mt-8 inline-flex h-11 items-center rounded-md bg-paper px-5 text-sm font-medium text-ink"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
