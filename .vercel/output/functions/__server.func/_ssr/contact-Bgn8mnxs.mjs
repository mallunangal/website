import { o as __toESM } from "../_runtime.mjs";
import { r as cn } from "./utils-DCrcS2-8.mjs";
import { l as SITE } from "./site-DdCvrrSo.mjs";
import { C as require_jsx_runtime, Z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./page-hero-CRWXV7fW.mjs";
import { t as Button } from "./button-B86fwFSJ.mjs";
import { i as submitContact, n as TextAreaField, r as fieldClass, t as Field } from "./mutations-KrdoKCGF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bgn8mnxs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)("");
	const onSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		setStatus("saving");
		setError("");
		try {
			await submitContact({ data: {
				name: String(data.get("name") ?? ""),
				email: String(data.get("email") ?? ""),
				phone: String(data.get("phone") ?? ""),
				subject: String(data.get("subject") ?? ""),
				message: String(data.get("message") ?? ""),
				website: String(data.get("website") ?? "")
			} });
			setStatus("ok");
			form.reset();
		} catch (err) {
			setStatus("error");
			setError(err instanceof Error ? err.message : "The message could not be stored.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Contact",
		title: "Write to the archive",
		lede: "Questions about the website, a missing photograph, or a correction to a published page.",
		image: "/images/village-lane.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-5xl gap-10 px-5 py-12 md:grid-cols-2 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-ink-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl text-ink",
					children: SITE.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: SITE.locationLine
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["PIN ", SITE.pin] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4",
					children: SITE.email
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-muted",
					children: "Messages are stored for the editors and are not listed on the public site. Include a reply address so the archive can write back."
				})
			]
		}), status === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-xl bg-surface p-6 shadow-card",
			children: "The message has been received."
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Subject",
					name: "subject",
					required: true,
					minLength: 3
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, {
					label: "Message",
					name: "message",
					required: true,
					minLength: 12,
					rows: 6
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "website",
						tabIndex: -1,
						autoComplete: "off",
						className: cn(fieldClass, "h-11")
					})
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-madder",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: status === "saving",
					children: status === "saving" ? "Sending…" : "Send message"
				})
			]
		})]
	})] });
}
//#endregion
export { ContactPage as component };
