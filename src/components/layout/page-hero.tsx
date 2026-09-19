import type { ReactNode } from "react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  lede,
  image,
  compact,
  showPunjabi,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  image?: string;
  compact?: boolean;
  showPunjabi?: boolean;
}) {
  return (
    <header
      className={cn(
        "relative isolate overflow-hidden bg-ink text-paper",
        compact ? "min-h-[38vh]" : "min-h-[46vh]",
      )}
    >
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 size-full object-cover outline-none"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35" />
      <div className="relative mx-auto flex min-h-[inherit] max-w-6xl flex-col justify-end px-5 pb-12 pt-28 md:px-8 md:pb-16">
        {kicker ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/80">
            {kicker}
          </p>
        ) : null}
        {showPunjabi ? (
          <p lang="pa" className="mt-3 font-gurmukhi text-2xl font-semibold text-paper/90 md:text-3xl">
            {SITE.gurmukhiName}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-[1.05] md:text-6xl">
          {title}
        </h1>
        {lede ? <p className="mt-4 max-w-2xl text-base text-paper/80 md:text-lg">{lede}</p> : null}
      </div>
    </header>
  );
}

export function SectionHeading({
  kicker,
  title,
  lede,
  action,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {kicker ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-madder">{kicker}</p>
        ) : null}
        <h2 className="mt-2 font-display text-3xl font-medium text-ink md:text-4xl">{title}</h2>
        {lede ? <p className="mt-3 text-muted">{lede}</p> : null}
      </div>
      {action}
    </div>
  );
}
