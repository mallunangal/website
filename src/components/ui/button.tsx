import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-[transform,background-color,color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-madder",
  {
    variants: {
      variant: {
        primary: "bg-madder text-paper hover:bg-madder-deep",
        secondary: "bg-ink text-paper hover:bg-ink-soft",
        outline:
          "bg-transparent text-ink shadow-[inset_0_0_0_1px_var(--color-border)] hover:bg-paper-deep",
        ghost: "bg-transparent text-ink hover:bg-paper-deep",
        inverse: "bg-paper text-ink hover:bg-paper-deep",
      },
      size: {
        sm: "h-10 px-3.5 text-sm rounded-md",
        md: "h-11 px-5 text-sm rounded-md",
        lg: "h-12 px-6 text-base rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
