import { createMetadata, site } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export const metadata = createMetadata({
  title: "Get Freight Quote | Container Transport Pakistan",
  description: "Request a container transport, freight forwarding, road cargo, customs clearance, or warehouse logistics estimate from PK Transporters.",
  path: "/get-quote"
});

export default function GetQuotePage() {
  return (
    <section className="section-pad bg-slate-950 text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 text-center">
        <p className="font-bold text-secondary">Quick inquiry</p>
        <h1 className="text-4xl font-black md:text-6xl">Get a freight estimate on WhatsApp.</h1>
        <p className="text-lg leading-8 text-slate-300">
          Send us your container size, pickup point, delivery city, cargo type, weight, and timing. We&rsquo;ll reply with a practical plan and accurate pricing.
        </p>
        <a
          href={`https://wa.me/${site.whatsapp}`}
          className="inline-flex items-center gap-3 rounded-2xl bg-green-600 px-10 py-5 text-xl font-bold text-white shadow-lg hover:bg-green-700 transition-colors"
        >
          <MessageCircle className="h-7 w-7" />
          Request a Quote on WhatsApp
        </a>
        <p className="text-slate-400 text-sm">{site.phone} &mdash; {site.contactName}</p>
      </div>
    </section>
  );
}
