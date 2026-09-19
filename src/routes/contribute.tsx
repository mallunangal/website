import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Field, TextAreaField, fieldClass } from "@/components/ui/field";
import { submitContribution } from "@/lib/mutations";
import { CONTRIBUTE_CATEGORIES, SITE, absUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contribute")({
  head: () => ({
    meta: [
      { title: `Contribute — ${SITE.name}` },
      {
        name: "description",
        content: "Offer photographs, manuscripts and family history to the Mallu Nangal archive for review.",
      },
    ],
    links: [{ rel: "canonical", href: absUrl("/contribute") }],
  }),
  component: ContributePage,
});

function ContributePage() {
  const [status, setStatus] = useState<"idle" | "saving" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const file = data.get("file");
    const filename = file instanceof File && file.size > 0 ? file.name : "";
    if (file instanceof File && file.size > 8 * 1024 * 1024) {
      setError("Please keep files under 8 MB, or describe the original instead.");
      setStatus("error");
      return;
    }
    setStatus("saving");
    setError("");
    try {
      await submitContribution({
        data: {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          category: String(data.get("category") ?? ""),
          description: String(data.get("description") ?? ""),
          filename,
          consent: data.get("consent") === "on",
          website: String(data.get("website") ?? ""),
        },
      });
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "The submission could not be stored.");
    }
  };

  return (
    <main>
      <PageHero
        kicker="Contribute"
        title="Help build the archive"
        lede="Villagers and visitors may offer old photographs, manuscripts, documents, family history, stories, and films. Nothing is published until it has been reviewed."
        image="/images/archive-table.jpg"
      />
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 md:grid-cols-2 md:px-8">
        <div className="space-y-4 text-ink-soft">
          <p>You may submit:</p>
          <ul className="list-disc space-y-1 pl-5">
            {CONTRIBUTE_CATEGORIES.filter((c) => c !== "Other").map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Please do not post the only copy of a manuscript through this form. Describe what you
            have; a safer copy can be arranged. Originals should always be kept by the family or a
            trusted repository — this website is not the only store for historical papers.
          </p>
        </div>
        {status === "ok" ? (
          <p className="rounded-xl bg-surface p-6 shadow-card">
            Thank you. The offer is in the review queue and will not appear on the public site until
            an editor accepts it.
          </p>
        ) : (
          <form onSubmit={(e) => void onSubmit(e)} className="space-y-4 rounded-xl bg-surface p-6 shadow-card">
            <Field label="Name" name="name" required autoComplete="name" />
            <Field label="Email" name="email" type="email" required autoComplete="email" />
            <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-ink">Category</span>
              <select
                name="category"
                required
                className={cn(fieldClass, "h-11")}
              >
                {CONTRIBUTE_CATEGORIES.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </label>
            <TextAreaField
              label="Description"
              name="description"
              required
              minLength={12}
              rows={6}
              placeholder="What is the object, roughly when is it from, and who should be credited?"
            />
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-ink">File (optional)</span>
              <input name="file" type="file" accept="image/*,.pdf" className="block w-full text-sm" />
              <span className="mt-1 block text-xs text-muted">
                A filename is stored for review. Keep files under 8 MB. Do not upload the only copy
                of a manuscript.
              </span>
            </label>
            <div className="hidden" aria-hidden="true">
              <input name="website" tabIndex={-1} autoComplete="off" />
            </div>
            <label className="flex items-start gap-3 text-sm">
              <input name="consent" type="checkbox" required className="mt-1 size-4" />
              <span>
                I understand this material will be reviewed and will not be published automatically.
                I have the right to offer a copy for the archive.
              </span>
            </label>
            {error ? <p className="text-sm text-madder">{error}</p> : null}
            <Button type="submit" disabled={status === "saving"}>
              {status === "saving" ? "Sending…" : "Send for review"}
            </Button>
          </form>
        )}
      </div>
    </main>
  );
}
