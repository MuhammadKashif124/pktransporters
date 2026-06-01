import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const nav = [
  ["Services", "/services/container-services"],
  ["Karachi", "/locations/logistics-company-karachi"],
  ["Coverage", "/coverage-areas"],
  ["Industries", "/industries"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--pk-line)] bg-[var(--pk-bg)]/92 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-[var(--pk-ink-0)]">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--pk-ink-0)] text-sm text-[var(--pk-bg)]">P</span>
          <span>PakTransporters</span>
        </Link>
        <nav className="hidden items-center gap-2 text-sm font-medium text-[var(--pk-ink-2)] lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full px-3 py-2 transition hover:bg-[var(--pk-bg-tint)] hover:text-[var(--pk-ink-0)]">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex bg-green-600 hover:bg-green-700 text-white border-green-600">
            <a href={`https://wa.me/${site.whatsapp}`}><MessageCircle className="h-4 w-4" /> WhatsApp Us</a>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
