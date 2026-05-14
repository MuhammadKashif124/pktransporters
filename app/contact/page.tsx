import { SimplePage } from "@/components/sections/simple-page";
import { createMetadata, site } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact PK Transporters | Logistics Company Karachi",
  description: "Contact PK Transporters for container transport, freight forwarding, road cargo, customs clearance, and warehousing inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <SimplePage eyebrow="Contact" title="Talk to a logistics expert." summary="Share cargo size, pickup point, destination, timing, and documentation needs. The team will respond with a practical movement plan and estimate.">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-2xl font-black">Contact details</h2>
          <p className="mt-4 font-semibold">{site.contactName}</p>
          <p className="mt-2">{site.phone}</p>
          <p className="mt-2">{site.email}</p>
          <p className="mt-2 text-sm text-muted-foreground">{site.address}</p>
        </div>
        <iframe title="PK Transporters Karachi map" className="h-96 w-full rounded-lg border" loading="lazy" src="https://www.google.com/maps?q=Karachi%20Port%20Pakistan&output=embed" />
      </div>
    </SimplePage>
  );
}
