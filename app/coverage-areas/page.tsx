import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { QuoteForm } from "@/components/sections/forms";
import { cityPages } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Coverage Areas | Karachi, Lahore, Islamabad, Rawalpindi Logistics",
  description: "Pakistan-wide logistics coverage with dedicated city pages for Karachi, Lahore, Islamabad, and Rawalpindi container transport, freight forwarding, and road cargo services.",
  path: "/coverage-areas"
});

const coverageSummary = [
  {
    city: "Karachi",
    description: "Primary base of operations. Direct access to Karachi Port (KICT, PICT) and Port Qasim (QICT, FOTCO). Container pickup, port haulage, city delivery to SITE, Korangi, Landhi, and nationwide dispatch."
  },
  {
    city: "Lahore",
    description: "Major destination for upcountry container transport. Delivery to Sundar Industrial Estate, Quaid-e-Azam Industrial Estate, Kot Lakhpat, and Raiwind Road. Textile export container coordination from Lahore factories."
  },
  {
    city: "Islamabad",
    description: "Federal capital cargo destination. Container delivery to I-9 and I-10 industrial areas, Rawat, and Kahuta Road. CPEC-linked cargo and government procurement logistics covered."
  },
  {
    city: "Rawalpindi",
    description: "Twin-city cargo partner to Islamabad. Active demand on the GT Road corridor, Chakri Road, and Saddar commercial belt. Container and road cargo delivery to factories and commercial premises."
  }
];

export default function CoverageAreasPage() {
  return (
    <>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.55fr]">
          <div>
            <Badge className="border-white/20 bg-white/10 text-white">Coverage</Badge>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black md:text-6xl">
              Karachi-first logistics coverage across Pakistan.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Container transport, freight forwarding, and road cargo services operating from Karachi Port
              to business destinations across Pakistan, with dedicated city coverage for Lahore, Islamabad,
              and Rawalpindi.
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
          <QuoteForm compact />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {coverageSummary.map((area) => (
              <div key={area.city} className="rounded-lg border p-6">
                <h2 className="text-xl font-black">{area.city}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-black">City logistics pages</h2>
            <p className="mt-3 leading-7 text-muted-foreground max-w-3xl">
              Each city page covers the specific industrial zones, freight routes, and logistics
              requirements for that location. Select a city to see service availability and request
              a freight estimate.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cityPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/locations/${page.slug}`}
                  className="rounded-lg border p-5 text-lg font-black hover:bg-slate-100 transition-colors"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-lg bg-slate-950 p-8 text-white">
            <h2 className="text-2xl font-black">Delivering beyond these cities?</h2>
            <p className="mt-4 text-slate-300 leading-7 max-w-2xl">
              The route network extends to Faisalabad, Sialkot, Multan, Gujranwala, Peshawar,
              Hyderabad, Sukkur, and other commercial destinations across Pakistan. Contact the
              operations team for coverage to secondary cities and remote delivery points.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">Contact Operations Team <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
