import { cn } from "@/lib/utils";

export function DemoBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm bg-paper-deep px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted",
        className,
      )}
    >
      Demo content
    </span>
  );
}

export function DemoNotice() {
  return (
    <p className="border-l-2 border-bronze pl-3 text-sm text-muted">
      Demo Content — Replace with verified information.
    </p>
  );
}
