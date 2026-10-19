import { o as __toESM } from "./_runtime.mjs";
import { r as cn } from "./_ssr/utils-DCrcS2-8.mjs";
import { C as require_jsx_runtime, Z as require_react } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, c as Maximize2, d as ChevronRight, f as ChevronLeft, o as Minus } from "./_libs/lucide-react.mjs";
import { o as Route$4 } from "./_ssr/router-wLaBQUbY.mjs";
import { t as PageHero } from "./_ssr/page-hero-BLviyspn.mjs";
import { t as Prose } from "./_ssr/prose-BhPbesxw.mjs";
import { t as Button } from "./_ssr/button-B86fwFSJ.mjs";
import { n as DemoNotice } from "./_ssr/demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_code-2pYc9It5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ManuscriptViewer({ title, coverImage, pages }) {
	const sequence = (0, import_react.useMemo)(() => {
		return [{
			image: coverImage,
			caption: "Cover",
			label: "Cover"
		}, ...pages.map((page) => ({
			image: page.image,
			caption: page.caption,
			label: `Page ${String(page.pageNumber).padStart(3, "0")}`
		}))];
	}, [coverImage, pages]);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [zoom, setZoom] = (0, import_react.useState)(1);
	const stageRef = (0, import_react.useRef)(null);
	const current = sequence[index];
	const go = (next) => {
		setIndex(Math.min(sequence.length - 1, Math.max(0, next)));
		setZoom(1);
	};
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "ArrowRight") go(index + 1);
			if (event.key === "ArrowLeft") go(index - 1);
			if (event.key === "+" || event.key === "=") setZoom((z) => Math.min(3, Number((z + .25).toFixed(2))));
			if (event.key === "-" || event.key === "_") setZoom((z) => Math.max(1, Number((z - .25).toFixed(2))));
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [index, sequence.length]);
	if (!current) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "No pages have been attached to this record yet."
	});
	const fullscreen = async () => {
		const el = stageRef.current;
		if (!el) return;
		if (document.fullscreenElement) await document.exitFullscreen();
		else await el.requestFullscreen();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_11rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: stageRef,
			className: "overflow-hidden rounded-xl bg-ink-soft/90 p-3 shadow-card md:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex flex-wrap items-center justify-between gap-2 text-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-paper/80",
						children: [
							current.label,
							" · ",
							index + 1,
							" of ",
							sequence.length
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								className: "text-paper hover:bg-paper/10",
								onClick: () => setZoom((z) => Math.max(1, Number((z - .25).toFixed(2)))),
								"aria-label": "Zoom out",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "w-12 text-center text-xs tabular-nums text-paper/70",
								children: [Math.round(zoom * 100), "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								className: "text-paper hover:bg-paper/10",
								onClick: () => setZoom((z) => Math.min(3, Number((z + .25).toFixed(2)))),
								"aria-label": "Zoom in",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								className: "text-paper hover:bg-paper/10",
								onClick: () => void fullscreen(),
								"aria-label": "Fullscreen",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "size-4" })
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-auto rounded-lg bg-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current.image,
						alt: `${title} — ${current.label}`,
						className: "mx-auto max-h-[78vh] origin-center object-contain outline-none transition-transform duration-200",
						style: { transform: `scale(${zoom})` }
					})
				}),
				current.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-sm text-paper/70",
					children: current.caption
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "inverse",
						size: "sm",
						disabled: index === 0,
						onClick: () => go(index - 1),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "Previous"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "inverse",
						size: "sm",
						disabled: index === sequence.length - 1,
						onClick: () => go(index + 1),
						children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2 overflow-x-auto lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden",
			children: sequence.map((leaf, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => go(i),
				className: cn("relative w-24 shrink-0 overflow-hidden rounded-md lg:w-full", i === index ? "ring-2 ring-madder ring-offset-2 ring-offset-paper" : "opacity-80"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: leaf.image,
					alt: "",
					className: "aspect-[3/4] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-x-0 bottom-0 bg-ink/70 px-1 py-0.5 text-[10px] text-paper",
					children: leaf.label
				})]
			}, `${leaf.label}-${i}`))
		})]
	});
}
function ManuscriptDetail() {
	const item = Route$4.useLoaderData();
	const meta = [
		["Catalogue ID", item.itemCode],
		["Author", item.author],
		["Date", item.yearLabel],
		["Period", item.period],
		["Language", item.language],
		["Script", item.script],
		["Material", item.material],
		["Pages", String(item.pageCount || item.pages.length || "—")],
		["Source / owner", item.sourceOwner],
		["Keywords", item.keywords]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: item.category,
		title: item.title,
		lede: item.itemCode,
		image: item.coverImage,
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl space-y-10 px-5 py-12 md:px-8",
		children: [
			item.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNotice, {}) : null,
			item.coverImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManuscriptViewer, {
				title: item.title,
				coverImage: item.coverImage,
				pages: item.pages
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "space-y-3 rounded-xl bg-surface p-5 text-sm shadow-card",
					children: meta.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-muted",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: value || "[To be added]"
					})] }, label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: "Description"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, {
						text: item.description,
						className: "mt-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 font-display text-2xl font-medium",
						children: "Historical significance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, {
						text: item.significance,
						className: "mt-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-sm text-muted",
						children: ["References: ", item.references]
					})
				] })]
			})
		]
	})] });
}
//#endregion
export { ManuscriptDetail as component };
