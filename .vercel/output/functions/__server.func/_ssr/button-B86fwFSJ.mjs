import { o as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn } from "./utils-DCrcS2-8.mjs";
import { H as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-B86fwFSJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-[transform,background-color,color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-madder", {
	variants: {
		variant: {
			primary: "bg-madder text-paper hover:bg-madder-deep",
			secondary: "bg-ink text-paper hover:bg-ink-soft",
			outline: "bg-transparent text-ink shadow-[inset_0_0_0_1px_var(--color-border)] hover:bg-paper-deep",
			ghost: "bg-transparent text-ink hover:bg-paper-deep",
			inverse: "bg-paper text-ink hover:bg-paper-deep"
		},
		size: {
			sm: "h-10 px-3.5 text-sm rounded-md",
			md: "h-11 px-5 text-sm rounded-md",
			lg: "h-12 px-6 text-base rounded-lg"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = (0, import_react.forwardRef)(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	ref,
	className: cn(buttonVariants({
		variant,
		size
	}), className),
	...props
}));
Button.displayName = "Button";
//#endregion
export { Button as t };
