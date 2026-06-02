import Link from "next/link";
import { services, cityPages } from "@/lib/content";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="text-xl font-black">PK Transporters</div>
          <p className="mt-3 text-sm leading-6 text-slate-300">{site.tagline}</p>
        </div>
        <div>
          <div className="font-bold">Core Services</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            {services.slice(0, 7).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}
          </div>
        </div>
        <div>
          <div className="font-bold">Coverage Areas</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            {cityPages.slice(0, 7).map((page) => <Link key={page.slug} href={`/locations/${page.slug}`}>{page.title}</Link>)}
          </div>
        </div>
        <div>
          <div className="font-bold">Contact</div>
          <div className="mt-3 space-y-2 text-sm text-slate-300">
            <p>{site.address}</p>
            <a href={`https://wa.me/${site.whatsapp}`} className="block text-green-400 hover:text-green-300">WhatsApp: {site.phone}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">© 2026 PK Transporters Logistics. All rights reserved.</div>
    </footer>
  );
}
