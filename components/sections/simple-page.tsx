import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteForm } from "@/components/sections/forms";
import { Badge } from "@/components/ui/badge";

export function SimplePage({
  eyebrow,
  title,
  summary,
  children
}: {
  eyebrow: string;
  title: string;
  summary: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.55fr]">
          <div>
            <Badge className="border-white/20 bg-white/10 text-white">{eyebrow}</Badge>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/get-quote">Request a Quote <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20"><Link href="/contact">Contact Team</Link></Button>
            </div>
          </div>
          <QuoteForm compact />
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-4">
          {children || (
            <div className="grid gap-4 md:grid-cols-3">
              {["Port expertise", "Nationwide coverage", "Commercial cargo focus"].map((item) => (
                <Card key={item}><CardContent><h2 className="text-xl font-black">{item}</h2><p className="mt-3 leading-7 text-muted-foreground">Structured for logistics buyers who need fast estimates, practical routing, and dependable communication.</p></CardContent></Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
