import { SimplePage } from "@/components/sections/simple-page";
import { industries } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Industries Served | Industrial Logistics Pakistan",
  description: "Logistics services for textile exporters, factories, import/export traders, industrial suppliers, shipping agencies, and commercial cargo clients.",
  path: "/industries"
});

export default function IndustriesPage() {
  return (
    <SimplePage eyebrow="Industries" title="Logistics for factories, exporters, and commercial cargo teams." summary="PK Transporters supports industries that need dependable container movement, road cargo, forwarding coordination, and warehouse-linked distribution.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{industries.map((industry) => <div key={industry} className="rounded-lg border p-5 text-lg font-black">{industry}</div>)}</div>
    </SimplePage>
  );
}
