import { SimplePage } from "@/components/sections/simple-page";
import { createMetadata, site } from "@/lib/site";
import { MessageCircle, Phone } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact PK Transporters | Logistics Company Karachi",
  description: "Contact PK Transporters for container transport, freight forwarding, road cargo, customs clearance, and warehousing inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <SimplePage eyebrow="Contact" title="Talk to a logistics expert." summary="Message us on WhatsApp with your cargo details — container size, pickup point, destination, timing, and documentation needs. We'll respond with a practical movement plan and estimate.">
      <div className="flex flex-col items-center gap-6 py-8">
        <p className="text-sm text-muted-foreground">
          First point of contact: <span className="font-semibold">{site.contactPerson}</span> — call or WhatsApp directly.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={`https://wa.me/${site.whatsapp}`}
            className="inline-flex items-center gap-3 rounded-2xl bg-green-600 px-10 py-5 text-xl font-bold text-white shadow-lg hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="h-7 w-7" />
            Chat on WhatsApp
          </a>
          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-3 rounded-2xl border border-green-600 px-10 py-5 text-xl font-bold text-green-600 hover:bg-green-50 transition-colors"
          >
            <Phone className="h-7 w-7" />
            Call Now
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          Two direct lines, both reachable by call or WhatsApp: {site.phone} and {site.phoneSecondary}
        </p>
        <a href={`https://wa.me/${site.whatsapp}`} className="text-sm font-semibold text-green-600 hover:text-green-700 hover:underline">
          Prefer to type first? Message a representative on WhatsApp
        </a>
        <p className="text-muted-foreground text-sm">{site.address}</p>
        <p className="text-xs text-muted-foreground">
          Corporate offices needing documentation, guidance, or formal quotations: {site.corporatePhone}
        </p>
      </div>
    </SimplePage>
  );
}
