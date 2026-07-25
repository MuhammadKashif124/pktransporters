import type { Metadata } from "next";
import { MessageCircle, PackageSearch } from "lucide-react";
import { createMetadata, site } from "@/lib/site";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Track Shipment | PK Transporters",
    description: "Get real-time updates on your container, road cargo, or freight movement from PK Transporters. Contact us directly on WhatsApp with your shipment reference.",
    path: "/track-shipment"
  }),
  robots: { index: false, follow: false }
};

export default function TrackShipmentPage() {
  return (
    <section className="section-pad bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <PackageSearch className="mx-auto h-14 w-14 text-secondary" />
        <h1 className="mt-6 text-4xl font-black md:text-6xl">Track your shipment.</h1>
        <p className="mt-5 text-slate-300 text-lg leading-8">
          Send your container number, booking reference, or shipment details directly to our operations team on WhatsApp. We&rsquo;ll reply with a status update and estimated delivery time.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href={`https://wa.me/${site.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20track%20my%20shipment.%20Reference%3A%20`}
            className="inline-flex items-center gap-3 rounded-2xl bg-green-600 px-10 py-5 text-xl font-bold text-white shadow-lg hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="h-7 w-7" />
            Track via WhatsApp
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20track%20my%20shipment.%20Reference%3A%20`}
            className="text-sm font-semibold text-green-400 hover:text-green-300 hover:underline"
          >
            Or send our team a message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
