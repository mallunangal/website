import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inverted = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-200",
        inverted
          ? "bg-transparent text-paper"
          : "bg-paper/95 text-ink shadow-[0_1px_0_var(--color-border)] backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 md:h-[4.25rem] md:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Mallu Nangal home">
          <span
            className={cn(
              "grid size-9 shrink-0 place-items-center rounded-sm font-display text-sm font-semibold tracking-wide",
              inverted ? "bg-paper text-ink" : "bg-madder text-paper",
            )}
          >
            MN
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-semibold leading-none">
              {SITE.name}
            </span>
            <span
              lang="pa"
              className={cn(
                "mt-1 hidden font-gurmukhi text-[11px] leading-none sm:block",
                inverted ? "text-paper/75" : "text-muted",
              )}
            >
              {SITE.gurmukhiName}
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center xl:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active =
              link.to === "/" ? pathname === "/" : pathname === link.to || pathname.startsWith(`${link.to}/`);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-md px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors",
                  inverted
                    ? active
                      ? "text-paper"
                      : "text-paper/70 hover:text-paper"
                    : active
                      ? "text-madder"
                      : "text-muted hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1 xl:ml-2">
          <Link
            to="/search"
            className={cn(
              "grid size-11 place-items-center rounded-md",
              inverted ? "text-paper hover:bg-paper/10" : "text-ink hover:bg-paper-deep",
            )}
            aria-label="Search the archive"
          >
            <Search className="size-5" strokeWidth={1.75} />
          </Link>
          <button
            type="button"
            className={cn(
              "grid size-11 place-items-center rounded-md xl:hidden",
              inverted ? "text-paper hover:bg-paper/10" : "text-ink hover:bg-paper-deep",
            )}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-paper text-ink xl:hidden">
          <nav className="flex flex-col px-5 py-6" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="border-b border-border py-4 font-display text-2xl font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/news" className="border-b border-border py-4 text-lg text-muted">
              Village news
            </Link>
            <Link to="/contribute" className="py-4 text-lg text-muted">
              Contribute
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
