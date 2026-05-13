import { QuoteForm } from "@/components/sections/forms";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Get Freight Quote | Container Transport Pakistan",
  description: "Request a container transport, freight forwarding, road cargo, customs clearance, or warehouse logistics estimate from PK Transporters.",
  path: "/get-quote"
});

export default function GetQuotePage() {
  return (
    <section className="section-pad bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_0.7fr]">
        <div>
          <p className="font-bold text-secondary">Fast inquiry form</p>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Get a freight estimate for your cargo.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">For accurate pricing, include container size, pickup point, delivery city, cargo type, cargo weight, timing, and any customs or warehousing requirement.</p>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
