"use client";

import { Calculator, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className="grid gap-3 rounded-lg border bg-white p-4 shadow-industrial" action="/get-quote">
      <div className="flex items-center gap-2 text-sm font-bold text-primary">
        <Calculator className="h-4 w-4" /> Freight quote request
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Input name="name" placeholder="Name" required />
        <Input name="phone" placeholder="Phone / WhatsApp" required />
        <Input name="pickup" placeholder="Pickup: Karachi Port" />
        <Input name="destination" placeholder="Destination city" />
      </div>
      {!compact && <Textarea name="cargo" placeholder="Cargo type, container size, timing, and any customs/warehouse requirement" />}
      <Button type="submit" size="lg">
        <Send className="h-4 w-4" /> Get Freight Estimate
      </Button>
    </form>
  );
}
