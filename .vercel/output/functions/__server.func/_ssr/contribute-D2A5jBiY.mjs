import { o as __toESM } from "../_runtime.mjs";
import { r as cn } from "./utils-DCrcS2-8.mjs";
import { r as CONTRIBUTE_CATEGORIES } from "./site-VEeElnQv.mjs";
import { C as require_jsx_runtime, Z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./page-hero-BLviyspn.mjs";
import { t as Button } from "./button-B86fwFSJ.mjs";
import { a as submitContribution, n as TextAreaField, r as fieldClass, t as Field } from "./mutations-KrdoKCGF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contribute-D2A5jBiY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContributePage() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)("");
	const onSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const file = data.get("file");
		const filename = file instanceof File && file.size > 0 ? file.name : "";
		if (file instanceof File && file.size > 8388608) {
			setError("Please keep files under 8 MB, or describe the original instead.");
			setStatus("error");
			return;
		}
		setStatus("saving");
		setError("");
		try {
			await submitContribution({ data: {
				name: String(data.get("name") ?? ""),
				email: String(data.get("email") ?? ""),
				phone: String(data.get("phone") ?? ""),
				category: String(data.get("category") ?? ""),
				description: String(data.get("description") ?? ""),
				filename,
				consent: data.get("consent") === "on",
				website: String(data.get("website") ?? "")
			} });
			setStatus("ok");
			form.reset();
		} catch (err) {
			setStatus("error");
			setError(err instanceof Error ? err.message : "The submission could not be stored.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Contribute",
		title: "Help build the archive",
		lede: "Villagers and visitors may offer old photographs, manuscripts, documents, family history, stories, and films. Nothing is published until it has been reviewed.",
		image: "/images/archive-table.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-5xl gap-10 px-5 py-12 md:grid-cols-2 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 text-ink-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You may submit:" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "list-disc space-y-1 pl-5",
					children: CONTRIBUTE_CATEGORIES.filter((c) => c !== "Other").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Please do not post the only copy of a manuscript through this form. Describe what you have; a safer copy can be arranged. Originals should always be kept by the family or a trusted repository — this website is not the only store for historical papers." })
			]
		}), status === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-xl bg-surface p-6 shadow-card",
			children: "Thank you. The offer is in the review queue and will not appear on the public site until an editor accepts it."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => void onSubmit(e),
			className: "space-y-4 rounded-xl bg-surface p-6 shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Name",
					name: "name",
					required: true,
					autoComplete: "name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					name: "email",
					type: "email",
					required: true,
					autoComplete: "email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Phone (optional)",
					name: "phone",
					type: "tel",
					autoComplete: "tel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1 block font-medium text-ink",
						children: "Category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						name: "category",
						required: true,
						className: cn(fieldClass, "h-11"),
						children: CONTRIBUTE_CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: category }, category))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, {
					label: "Description",
					name: "description",
					required: true,
					minLength: 12,
					rows: 6,
					placeholder: "What is the object, roughly when is it from, and who should be credited?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block font-medium text-ink",
							children: "File (optional)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "file",
							type: "file",
							accept: "image/*,.pdf",
							className: "block w-full text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs text-muted",
							children: "A filename is stored for review. Keep files under 8 MB. Do not upload the only copy of a manuscript."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "website",
						tabIndex: -1,
						autoComplete: "off"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-start gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "consent",
						type: "checkbox",
						required: true,
						className: "mt-1 size-4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I understand this material will be reviewed and will not be published automatically. I have the right to offer a copy for the archive." })]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-madder",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: status === "saving",
					children: status === "saving" ? "Sending…" : "Send for review"
				})
			]
		})]
	})] });
}
//#endregion
export { ContributePage as component };
