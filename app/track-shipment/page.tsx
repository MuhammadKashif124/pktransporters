import type { Metadata } from "next";
import { PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Track Shipment | PK Transporters",
    description: "Shipment tracking UI for container, road cargo, and freight movement updates from PK Transporters.",
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
        <p className="mt-5 text-slate-300">Enter a container, booking, or shipment reference to view the tracking interface. Live carrier integrations can be connected through the CMS or future API layer.</p>
        <form className="mt-8 flex flex-col gap-3 rounded-lg bg-white p-3 sm:flex-row">
          <Input placeholder="Shipment reference" />
          <Button type="submit" size="lg">Track Shipment</Button>
        </form>
      </div>
    </section>
  );
}
