import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { QuoteForm } from "@/components/sections/forms";
import { industryDetails } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Industries Served | Industrial Logistics Pakistan",
  description: "Container transport, freight forwarding, and road cargo logistics for textile exporters, factories, import/export traders, industrial suppliers, and commercial cargo clients across Pakistan.",
  path: "/industries"
});

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.55fr]">
          <div>
            <Badge className="border-white/20 bg-white/10 text-white">Industries</Badge>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black md:text-6xl">
              Logistics for factories, exporters, and commercial cargo teams.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              PK Transporters supports industries that move container cargo through Pakistan&apos;s ports,
              manage regular import and export volumes, and need a logistics partner that understands
              their cargo type and delivery requirements.
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
          <p className="text-lg leading-8 text-muted-foreground max-w-3xl">
            The cargo challenges vary by industry — textile exporters need cut-off management, industrial
            importers need heavy equipment handling, and FMCG distributors need multi-drop coverage.
            The services below are structured around these specific requirements rather than generic
            freight categories.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {industryDetails.map((industry) => (
              <div key={industry.name} className="rounded-lg border p-6">
                <h2 className="text-xl font-black">{industry.name}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-lg bg-slate-950 p-8 text-white">
            <h2 className="text-2xl font-black">Not sure which service fits your cargo?</h2>
            <p className="mt-4 text-slate-300 leading-7 max-w-2xl">
              Share your cargo type, volume, origin, and destination, and the operations team will
              match it to the right service and provide a freight estimate before any commitment.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/get-quote">Get a Freight Estimate <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
