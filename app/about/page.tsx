import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "About PK Transporters | Pakistan Logistics & Container Transport",
  description: "PK Transporters is a Karachi-based logistics company specialising in container transport, freight forwarding, customs clearance, and nationwide road cargo for commercial importers and exporters.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <Badge className="border-white/20 bg-white/10 text-white">About</Badge>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black md:text-6xl">
            Pakistan&apos;s trusted container transport and logistics partner.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            PK Transporters supports importers, exporters, factories, and shipping agencies with container
            transport, freight forwarding, customs clearance, warehousing coordination, and nationwide road
            cargo across Pakistan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/get-quote">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              <Link href="/contact">Contact Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-4xl space-y-10 px-4">
          <div>
            <h2 className="text-2xl font-black">Karachi port expertise at the core</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              PK Transporters was built around Karachi port operations. Karachi Port and Port Qasim together
              handle the vast majority of Pakistan&apos;s containerized trade — and the logistics challenges
              there are specific. Terminal gate procedures, goods declaration filing through WeBOC, gate-pass
              coordination, and time-sensitive container dray require operators who have done this work
              repeatedly and know where delays occur. That operational depth is what distinguishes us from
              general road transport providers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">Nationwide coverage from a Karachi base</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              From the Karachi port area, PK Transporters moves containers and commercial cargo to Lahore,
              Islamabad, Rawalpindi, Faisalabad, Sialkot, Multan, Peshawar, and destinations across Pakistan.
              The Karachi–Lahore corridor is the most active freight route in the country, and we operate
              it with the consistency that commercial import and export clients require. For cargo that needs
              to move upcountry on time — against vessel cut-offs, production schedules, or delivery
              commitments — route planning and dispatch timing matter as much as truck availability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">Who we work with</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              The client base is commercial and B2B focused: importers receiving cargo at Karachi port,
              textile exporters coordinating containers from Lahore and Karachi factories, industrial
              suppliers distributing raw materials, shipping agencies needing inland transport for
              their clients, and factories managing inbound and outbound cargo alongside production
              schedules. We are not built for household moves or one-off personal cargo — we are built
              for businesses that move cargo regularly and need a logistics partner that operates with
              the same discipline they do.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">Transparent freight estimates</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              Every engagement starts with a freight estimate. Before a container moves, the client
              receives a clear quote covering the route, container size, transit time estimate, and
              applicable conditions. There are no surprises after delivery. This process — quote first,
              then confirm — is a deliberate part of how PK Transporters works, because importers and
              exporters make business decisions based on landed costs and delivery timing. Clarity at
              the start of the process respects that.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black">Contact the team</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              For freight estimates, route enquiries, or logistics coordination, contact Muhammad Kashif
              and the operations team directly. The fastest route to a quote is the request form — share
              your container size, pickup point, destination, and timeline, and you will receive a
              freight estimate before any commitment is required.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/get-quote">Get a Freight Estimate <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
