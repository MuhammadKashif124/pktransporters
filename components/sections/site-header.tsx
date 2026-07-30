"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const nav = [
  ["Services", "/services/container-services"],
  ["Karachi", "/locations/logistics-company-karachi"],
  ["Coverage", "/coverage-areas"],
  ["Industries", "/industries"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--pk-line)] bg-[var(--pk-bg)]/92 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 font-semibold tracking-tight text-[var(--pk-ink-0)]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--pk-ink-0)] text-sm text-[var(--pk-bg)]">
              P
            </span>
            <span>PakTransporters</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 text-sm font-medium text-[var(--pk-ink-2)] lg:flex">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full px-3 py-2 transition hover:bg-[var(--pk-bg-tint)] hover:text-[var(--pk-ink-0)]"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              className="hidden sm:inline-flex"
            >
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </Button>
            <Button
              asChild
              className="hidden sm:inline-flex bg-green-600 hover:bg-green-700 text-white border-green-600"
            >
              <a href={`https://wa.me/${site.whatsapp}`}>
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </Button>

            {/* Burger — mobile only */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <nav className="absolute right-0 top-16 bottom-0 w-72 bg-[var(--pk-bg)] shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex flex-col gap-1 p-4">
              {nav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-[var(--pk-ink-1)] transition hover:bg-[var(--pk-bg-tint)] hover:text-[var(--pk-acc)] active:scale-[0.98]"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="mt-auto border-t border-[var(--pk-line)] p-4 space-y-2">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-green-600 px-4 py-3 text-base font-bold text-white hover:bg-green-700 transition"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-2 w-full rounded-xl border border-[var(--pk-line)] px-4 py-3 text-base font-bold text-[var(--pk-ink-0)] transition"
                onClick={() => setOpen(false)}
              >
                <Phone className="h-5 w-5" />
                Call Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
