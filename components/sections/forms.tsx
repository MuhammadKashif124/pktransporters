import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      className={`inline-flex items-center gap-3 rounded-2xl bg-green-600 font-bold text-white shadow-lg hover:bg-green-700 transition-colors ${compact ? "px-6 py-3 text-base" : "px-8 py-4 text-lg"}`}
    >
      <MessageCircle className={compact ? "h-5 w-5" : "h-6 w-6"} />
      {compact ? "WhatsApp Us" : "Get a Quote on WhatsApp"}
    </a>
  );
}
