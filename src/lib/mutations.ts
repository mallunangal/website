import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";

const MAX_MESSAGE = 4000;
const MAX_DESCRIPTION = 4000;

function clean(value: unknown, max: number): string {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

export const submitContribution = createServerFn({ method: "POST" })
  .validator((data: {
    name: string;
    email: string;
    phone?: string;
    category: string;
    description: string;
    filename?: string;
    consent: boolean;
    website?: string;
  }) => data)
  .handler(async ({ data }) => {
    if (data.website && data.website.trim()) {
      return { ok: true as const };
    }
    const name = clean(data.name, 120);
    const email = clean(data.email, 160);
    const phone = clean(data.phone, 40);
    const category = clean(data.category, 80);
    const description = clean(data.description, MAX_DESCRIPTION);
    const filename = clean(data.filename, 200);
    if (!name || !email.includes("@")) {
      throw new Error("Please add your name and a working email so editors can reply.");
    }
    if (!category || description.length < 12) {
      throw new Error("Please add a category and a fuller description of the material.");
    }
    if (!data.consent) {
      throw new Error("Consent is required before a submission can be stored for review.");
    }
    const sql = await getSql();
    await sql`
      insert into contributions (
        category, description, filename, consent, sender_name, sender_email, sender_phone
      )
      values (${category}, ${description}, ${filename}, true, ${name}, ${email}, ${phone})
    `;
    return { ok: true as const };
  });

export const submitContact = createServerFn({ method: "POST" })
  .validator((data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    website?: string;
  }) => data)
  .handler(async ({ data }) => {
    if (data.website && data.website.trim()) {
      return { ok: true as const };
    }
    const name = clean(data.name, 120);
    const email = clean(data.email, 160);
    const phone = clean(data.phone, 40);
    const subject = clean(data.subject, 160);
    const message = clean(data.message, MAX_MESSAGE);
    if (!name || !email.includes("@")) {
      throw new Error("Please add your name and a working email.");
    }
    if (subject.length < 3 || message.length < 12) {
      throw new Error("Please include a subject and a message.");
    }
    const sql = await getSql();
    await sql`
      insert into contact_messages (subject, message, sender_name, sender_email, sender_phone)
      values (${subject}, ${message}, ${name}, ${email}, ${phone})
    `;
    return { ok: true as const };
  });
