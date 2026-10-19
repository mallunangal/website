import { cn } from "@/lib/utils";

function Block({ block }: { block: string }) {
  if (block.startsWith("## ")) {
    return (
      <h2 className="pt-6 font-display text-[1.65rem] font-medium leading-snug text-ink first:pt-0">
        {block.slice(3)}
      </h2>
    );
  }

  const lines = block.split("\n").filter((line) => line.trim());
  if (lines.length > 0 && lines.every((line) => /^[*-]\s+/.test(line))) {
    return (
      <ul className="list-disc space-y-1 pl-5">
        {lines.map((line) => (
          <li key={line}>{line.replace(/^[*-]\s+/, "")}</li>
        ))}
      </ul>
    );
  }

  return <p className="whitespace-pre-wrap">{block}</p>;
}

export function Prose({ text, className }: { text: string; className?: string }) {
  const blocks = text
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className={cn("space-y-4 text-[1.05rem] leading-relaxed text-ink-soft", className)}>
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  );
}
