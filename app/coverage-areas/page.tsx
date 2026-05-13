import Link from "next/link";
import { SimplePage } from "@/components/sections/simple-page";
import { cityPages } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Coverage Areas | Karachi, Lahore, Islamabad, Rawalpindi Logistics",
  description: "Pakistan-wide logistics coverage with city landing pages for Karachi, Lahore, Islamabad, and Rawalpindi container transport and freight services.",
  path: "/coverage-areas"
});

export default function CoverageAreasPage() {
  return (
    <SimplePage eyebrow="Coverage" title="Karachi-first logistics coverage across Pakistan." summary="Dedicated city pages support local SEO for high-intent searches around container transport, freight forwarding, road cargo, and trailer services.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{cityPages.map((page) => <Link key={page.slug} href={`/locations/${page.slug}`} className="rounded-lg border p-5 text-lg font-black hover:bg-slate-100">{page.title}</Link>)}</div>
    </SimplePage>
  );
}
