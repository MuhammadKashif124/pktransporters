import { SimplePage } from "@/components/sections/simple-page";
import { createMetadata, site } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact PK Transporters | Logistics Company Karachi",
  description: "Contact PK Transporters for container transport, freight forwarding, road cargo, customs clearance, and warehousing inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <SimplePage eyebrow="Contact" title="Talk to a logistics expert." summary="Message us on WhatsApp with your cargo details — container size, pickup point, destination, timing, and documentation needs. We'll respond with a practical movement plan and estimate.">
      <div className="flex flex-col items-center gap-6 py-8">
        <a
          href={`https://wa.me/${site.whatsapp}`}
          className="inline-flex items-center gap-3 rounded-2xl bg-green-600 px-10 py-5 text-xl font-bold text-white shadow-lg hover:bg-green-700 transition-colors"
        >
          <MessageCircle className="h-7 w-7" />
          Chat on WhatsApp
        </a>
        <p className="text-muted-foreground text-sm">{site.phone} &mdash; {site.contactName}</p>
        <p className="text-muted-foreground text-sm">{site.address}</p>
      </div>
    </SimplePage>
  );
}
