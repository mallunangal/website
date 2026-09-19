import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function GurmukhiName({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
}) {
  const sizes = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-3xl md:text-4xl",
    hero: "text-2xl md:text-4xl",
  };
  return (
    <p lang="pa" className={cn("font-gurmukhi font-semibold leading-none", sizes[size], className)}>
      {SITE.gurmukhiName}
    </p>
  );
}

export function PhulkariRule({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-3 w-full max-w-xs bg-repeat-x", className)}
      style={{
        backgroundImage: "url(/patterns/phulkari.svg)",
        backgroundSize: "96px 12px",
      }}
      aria-hidden="true"
    />
  );
}
