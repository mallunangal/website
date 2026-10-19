import { t as createServerFn } from "./ssr.mjs";
import { n as getSql, t as createServerRpc } from "./db-Ptz-QMt6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mutations-DgXZUhi5.js
var MAX_MESSAGE = 4e3;
var MAX_DESCRIPTION = 4e3;
function clean(value, max) {
	return String(value ?? "").trim().slice(0, max);
}
var submitContribution_createServerFn_handler = createServerRpc({
	id: "3d446d9f9540bbef06a6e1ea48d0c09fb468ccf4d85e76f557cf02aecfec83ac",
	name: "submitContribution",
	filename: "src/lib/mutations.ts"
}, (opts) => submitContribution.__executeServer(opts));
var submitContribution = createServerFn({ method: "POST" }).validator((data) => data).handler(submitContribution_createServerFn_handler, async ({ data }) => {
	if (data.website && data.website.trim()) return { ok: true };
	const name = clean(data.name, 120);
	const email = clean(data.email, 160);
	const phone = clean(data.phone, 40);
	const category = clean(data.category, 80);
	const description = clean(data.description, MAX_DESCRIPTION);
	const filename = clean(data.filename, 200);
	if (!name || !email.includes("@")) throw new Error("Please add your name and a working email so editors can reply.");
	if (!category || description.length < 12) throw new Error("Please add a category and a fuller description of the material.");
	if (!data.consent) throw new Error("Consent is required before a submission can be stored for review.");
	await (await getSql())`
      insert into contributions (
        category, description, filename, consent, sender_name, sender_email, sender_phone
      )
      values (${category}, ${description}, ${filename}, true, ${name}, ${email}, ${phone})
    `;
	return { ok: true };
});
var submitContact_createServerFn_handler = createServerRpc({
	id: "a08f60fbea25eb3365563c2133d381f3811f53eec127de698e1a5b2daca7c4df",
	name: "submitContact",
	filename: "src/lib/mutations.ts"
}, (opts) => submitContact.__executeServer(opts));
var submitContact = createServerFn({ method: "POST" }).validator((data) => data).handler(submitContact_createServerFn_handler, async ({ data }) => {
	if (data.website && data.website.trim()) return { ok: true };
	const name = clean(data.name, 120);
	const email = clean(data.email, 160);
	const phone = clean(data.phone, 40);
	const subject = clean(data.subject, 160);
	const message = clean(data.message, MAX_MESSAGE);
	if (!name || !email.includes("@")) throw new Error("Please add your name and a working email.");
	if (subject.length < 3 || message.length < 12) throw new Error("Please include a subject and a message.");
	await (await getSql())`
      insert into contact_messages (subject, message, sender_name, sender_email, sender_phone)
      values (${subject}, ${message}, ${name}, ${email}, ${phone})
    `;
	return { ok: true };
});
//#endregion
export { submitContact_createServerFn_handler, submitContribution_createServerFn_handler };
