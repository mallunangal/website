import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";
import type { ReactNode } from "react";
import { GurmukhiName } from "@/components/layout/ornament";
import { NAV_LINKS, SECONDARY_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <p className="font-display text-2xl font-medium">{SITE.name}</p>
          <GurmukhiName size="sm" className="mt-2 text-paper/70" />
          <p className="mt-3 text-sm leading-relaxed text-paper/70">
            {SITE.shortTagline} for a village in {SITE.locationLine}. PIN {SITE.pin}.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/55">
            Quick links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.slice(0, 6).map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-paper/80 hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/55">
            The archive
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.slice(6).map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-paper/80 hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
            {SECONDARY_LINKS.filter((l) => l.to !== "/privacy" && l.to !== "/terms").map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-paper/80 hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/55">
            Contact
          </p>
          <p className="mt-4 text-sm text-paper/80">{SITE.locationLine}</p>
          <p className="mt-1 text-sm text-paper/80">PIN {SITE.pin}</p>
          <p className="mt-1 text-sm text-paper/80">{SITE.email}</p>
          <div className="mt-5 flex gap-2" aria-label="Social pages to be added">
            <SocialGhost label="Facebook page to be added">
              <Facebook className="size-4" />
            </SocialGhost>
            <SocialGhost label="Instagram to be added">
              <Instagram className="size-4" />
            </SocialGhost>
            <SocialGhost label="YouTube to be added">
              <Youtube className="size-4" />
            </SocialGhost>
          </div>
          <p className="mt-3 text-xs text-paper/45">
            Village social accounts will be linked here when they are confirmed.
          </p>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-paper/55 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} Mallu Nangal digital archive. Not a substitute for original
            manuscripts.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-paper">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-paper">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialGhost({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span
      title={label}
      className="grid size-10 place-items-center rounded-md bg-paper/10 text-paper/70"
    >
      {children}
      <span className="sr-only">{label}</span>
    </span>
  );
}
