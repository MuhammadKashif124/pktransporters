import { SimplePage } from "@/components/sections/simple-page";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Careers | PK Transporters Logistics",
  description: "Career opportunities in transport coordination, operations, sales, dispatch, and logistics support at PK Transporters.",
  path: "/careers"
});

export default function CareersPage() {
  return <SimplePage eyebrow="Careers" title="Join a logistics operation built for scale." summary="PK Transporters hires for dispatch, sales, transport coordination, documentation, fleet operations, and customer support roles as the network grows." />;
}
