import { o as __toESM } from "./_runtime.mjs";
import { C as require_jsx_runtime, Z as require_react } from "./_libs/@tanstack/react-router+[...].mjs";
import { d as ChevronRight, f as ChevronLeft, n as X } from "./_libs/lucide-react.mjs";
import { f as Route$10 } from "./_ssr/router-wLaBQUbY.mjs";
import { t as PageHero } from "./_ssr/page-hero-BLviyspn.mjs";
import { n as DemoNotice } from "./_ssr/demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-3EOEtKBz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Lightbox({ items, index, onClose, onIndex }) {
	const item = items[index];
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
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
	}, [
		index,
		items.length,
		onClose,
		onIndex
	]);
	if (!item) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80] flex flex-col bg-ink/95 text-paper",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Photograph viewer",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-paper/70",
				children: [
					index + 1,
					" / ",
					items.length
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-11 place-items-center rounded-md hover:bg-paper/10",
				onClick: onClose,
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6",
			children: [
				items.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute left-2 grid size-12 place-items-center rounded-full bg-paper/10 hover:bg-paper/20 md:left-6",
					onClick: () => onIndex((index - 1 + items.length) % items.length),
					"aria-label": "Previous photograph",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-6" })
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "max-h-full max-w-5xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.src,
						alt: item.alt,
						className: "max-h-[78vh] w-full object-contain outline-none"
					}), item.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-3 text-center text-sm text-paper/70",
						children: item.caption
					}) : null]
				}),
				items.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute right-2 grid size-12 place-items-center rounded-full bg-paper/10 hover:bg-paper/20 md:right-6",
					onClick: () => onIndex((index + 1) % items.length),
					"aria-label": "Next photograph",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-6" })
				}) : null
			]
		})]
	});
}
function GalleryAlbumPage() {
	const album = Route$10.useLoaderData();
	const [index, setIndex] = (0, import_react.useState)(null);
	const items = (0, import_react.useMemo)(() => album.images.map((image) => ({
		src: image.image,
		alt: image.caption || album.title,
		caption: image.caption
	})), [album]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: album.category,
			title: album.title,
			lede: album.description,
			image: album.coverImage,
			compact: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-12 md:px-8",
			children: [album.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNotice, {}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3",
				children: album.images.map((image, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setIndex(i),
					className: "mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg text-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image.image,
						alt: image.caption || album.title,
						className: "w-full object-cover",
						loading: "lazy"
					})
				}, image.id))
			})]
		}),
		index !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			items,
			index,
			onClose: () => setIndex(null),
			onIndex: setIndex
		}) : null
	] });
}
//#endregion
export { GalleryAlbumPage as component };
