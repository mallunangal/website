import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const fieldClass =
  "w-full rounded-md bg-paper px-3 text-sm text-ink shadow-[inset_0_0_0_1px_var(--color-border)] placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-madder";

export function Field({
  label,
  name,
  type = "text",
  required,
  hint,
  className,
  ...props
}: {
  label: string;
  hint?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className={cn(fieldClass, "h-11", className)}
        {...props}
      />
      {hint ? <span className="mt-1 block text-xs text-muted">{hint}</span> : null}
    </label>
  );
}

export function TextAreaField({
  label,
  name,
  required,
  className,
  ...props
}: {
  label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-ink">{label}</span>
      <textarea
        name={name}
        required={required}
        className={cn(fieldClass, "py-2", className)}
        {...props}
      />
    </label>
  );
}
