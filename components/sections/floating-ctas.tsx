import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingCtas() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <a className="grid h-12 w-12 place-items-center rounded-full bg-green-600 text-white shadow-lg" href={`https://wa.me/${site.whatsapp}`} aria-label="WhatsApp PK Transporters">
        <MessageCircle className="h-5 w-5" />
      </a>
      <a className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-slate-950 shadow-lg" href={`tel:${site.phone}`} aria-label="Call PK Transporters">
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
