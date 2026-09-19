import { ChevronLeft, ChevronRight, Maximize2, Minus, Plus } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ManuscriptPage } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ManuscriptViewer({
  title,
  coverImage,
  pages,
}: {
  title: string;
  coverImage: string;
  pages: ManuscriptPage[];
}) {
  const sequence = useMemo(() => {
    const leaves: { image: string; caption: string; label: string }[] = [
      { image: coverImage, caption: "Cover", label: "Cover" },
      ...pages.map((page) => ({
        image: page.image,
        caption: page.caption,
        label: `Page ${String(page.pageNumber).padStart(3, "0")}`,
      })),
    ];
    return leaves;
  }, [coverImage, pages]);

  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const stageRef = useRef<HTMLDivElement>(null);
  const current = sequence[index];

  const go = (next: number) => {
    setIndex(Math.min(sequence.length - 1, Math.max(0, next)));
    setZoom(1);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(index + 1);
      if (event.key === "ArrowLeft") go(index - 1);
      if (event.key === "+" || event.key === "=") setZoom((z) => Math.min(3, Number((z + 0.25).toFixed(2))));
      if (event.key === "-" || event.key === "_") setZoom((z) => Math.max(1, Number((z - 0.25).toFixed(2))));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, sequence.length]);

  if (!current) {
    return <p className="text-muted">No pages have been attached to this record yet.</p>;
  }

  const fullscreen = async () => {
    const el = stageRef.current;
    if (!el) return;
    if (document.fullscreenElement) await document.exitFullscreen();
    else await el.requestFullscreen();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_11rem]">
      <div
        ref={stageRef}
        className="overflow-hidden rounded-xl bg-ink-soft/90 p-3 shadow-card md:p-5"
      >
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-paper">
          <p className="text-sm text-paper/80">
            {current.label} · {index + 1} of {sequence.length}
          </p>
          <div className="flex items-center gap-1">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-paper hover:bg-paper/10"
              onClick={() => setZoom((z) => Math.max(1, Number((z - 0.25).toFixed(2))))}
              aria-label="Zoom out"
            >
              <Minus className="size-4" />
            </Button>
            <span className="w-12 text-center text-xs tabular-nums text-paper/70">
              {Math.round(zoom * 100)}%
            </span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-paper hover:bg-paper/10"
              onClick={() => setZoom((z) => Math.min(3, Number((z + 0.25).toFixed(2))))}
              aria-label="Zoom in"
            >
              <Plus className="size-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-paper hover:bg-paper/10"
              onClick={() => void fullscreen()}
              aria-label="Fullscreen"
            >
              <Maximize2 className="size-4" />
            </Button>
          </div>
        </div>
        <div className="relative overflow-auto rounded-lg bg-ink">
          <img
            src={current.image}
            alt={`${title} — ${current.label}`}
            className="mx-auto max-h-[78vh] origin-center object-contain outline-none transition-transform duration-200"
            style={{ transform: `scale(${zoom})` }}
          />
        </div>
        {current.caption ? (
          <p className="mt-3 text-center text-sm text-paper/70">{current.caption}</p>
        ) : null}
        <div className="mt-4 flex items-center justify-between">
          <Button
            type="button"
            variant="inverse"
            size="sm"
            disabled={index === 0}
            onClick={() => go(index - 1)}
          >
            <ChevronLeft className="size-4" />
            Previous
          </Button>
          <Button
            type="button"
            variant="inverse"
            size="sm"
            disabled={index === sequence.length - 1}
            onClick={() => go(index + 1)}
          >
            Next
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden">
        {sequence.map((leaf, i) => (
          <button
            key={`${leaf.label}-${i}`}
            type="button"
            onClick={() => go(i)}
            className={cn(
              "relative w-24 shrink-0 overflow-hidden rounded-md lg:w-full",
              i === index ? "ring-2 ring-madder ring-offset-2 ring-offset-paper" : "opacity-80",
            )}
          >
            <img src={leaf.image} alt="" className="aspect-[3/4] w-full object-cover" />
            <span className="absolute inset-x-0 bottom-0 bg-ink/70 px-1 py-0.5 text-[10px] text-paper">
              {leaf.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
