import { SimplePage } from "@/components/sections/simple-page";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "About PK Transporters | Pakistan Logistics & Container Transport",
  description: "PK Transporters is positioned for Karachi port logistics, container transport, freight forwarding, and nationwide road cargo for commercial clients.",
  path: "/about"
});

export default function AboutPage() {
  return <SimplePage eyebrow="About" title="Pakistan's trusted container transport and logistics partner." summary="PK Transporters supports importers, exporters, factories, suppliers, and shipping agencies with containerized cargo movement, road transport, customs-connected logistics, warehousing coordination, and nationwide coverage." />;
}
