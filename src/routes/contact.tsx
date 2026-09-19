import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Field, TextAreaField, fieldClass } from "@/components/ui/field";
import { submitContact } from "@/lib/mutations";
import { SITE, absUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${SITE.name}` },
      { name: "description", content: "Write to the Mallu Nangal digital archive." },
    ],
    links: [{ rel: "canonical", href: absUrl("/contact") }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "saving" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("saving");
    setError("");
    try {
      await submitContact({
        data: {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          subject: String(data.get("subject") ?? ""),
          message: String(data.get("message") ?? ""),
          website: String(data.get("website") ?? ""),
        },
      });
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "The message could not be stored.");
    }
  };

  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Write to the archive"
        lede="Questions about the website, a missing photograph, or a correction to a published page."
        image="/images/village-lane.jpg"
      />
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 md:grid-cols-2 md:px-8">
        <div className="text-ink-soft">
          <p className="font-display text-3xl text-ink">{SITE.name}</p>
          <p className="mt-2">{SITE.locationLine}</p>
          <p>PIN {SITE.pin}</p>
          <p className="mt-4">{SITE.email}</p>
          <p className="mt-6 text-sm text-muted">
            Messages are stored for the editors and are not listed on the public site. Include a
            reply address so the archive can write back.
          </p>
        </div>
        {status === "ok" ? (
          <p className="rounded-xl bg-surface p-6 shadow-card">The message has been received.</p>
        ) : (
          <form onSubmit={(e) => void onSubmit(e)} className="space-y-4 rounded-xl bg-surface p-6 shadow-card">
            <Field label="Name" name="name" required autoComplete="name" />
            <Field label="Email" name="email" type="email" required autoComplete="email" />
            <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
            <Field label="Subject" name="subject" required minLength={3} />
            <TextAreaField label="Message" name="message" required minLength={12} rows={6} />
            <div className="hidden" aria-hidden="true">
              <input name="website" tabIndex={-1} autoComplete="off" className={cn(fieldClass, "h-11")} />
            </div>
            {error ? <p className="text-sm text-madder">{error}</p> : null}
            <Button type="submit" disabled={status === "saving"}>
              {status === "saving" ? "Sending…" : "Send message"}
            </Button>
          </form>
        )}
      </div>
    </main>
  );
}
