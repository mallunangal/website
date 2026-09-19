import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

export type LightboxItem = { src: string; alt: string; caption?: string };

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onIndex: (next: number) => void;
}) {
  const item = items[index];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (event.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onIndex]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col bg-ink/95 text-paper"
      role="dialog"
      aria-modal="true"
      aria-label="Photograph viewer"
    >
      <div className="flex items-center justify-between px-4 py-3">
        <p className="text-sm text-paper/70">
          {index + 1} / {items.length}
        </p>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-md hover:bg-paper/10"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="size-5" />
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6">
        {items.length > 1 ? (
          <button
            type="button"
            className="absolute left-2 grid size-12 place-items-center rounded-full bg-paper/10 hover:bg-paper/20 md:left-6"
            onClick={() => onIndex((index - 1 + items.length) % items.length)}
            aria-label="Previous photograph"
          >
            <ChevronLeft className="size-6" />
          </button>
        ) : null}
        <figure className="max-h-full max-w-5xl">
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[78vh] w-full object-contain outline-none"
          />
          {item.caption ? (
            <figcaption className="mt-3 text-center text-sm text-paper/70">{item.caption}</figcaption>
          ) : null}
        </figure>
        {items.length > 1 ? (
          <button
            type="button"
            className="absolute right-2 grid size-12 place-items-center rounded-full bg-paper/10 hover:bg-paper/20 md:right-6"
            onClick={() => onIndex((index + 1) % items.length)}
            aria-label="Next photograph"
          >
            <ChevronRight className="size-6" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
