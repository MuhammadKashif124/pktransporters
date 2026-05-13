import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPinned, Phone, Route, Warehouse } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteForm } from "@/components/sections/forms";
import { FadeIn } from "@/components/sections/motion";
import { cityPages, services, type CityPage, type Service } from "@/lib/content";
import { site } from "@/lib/site";

export function ServiceLanding({ service }: { service: Service }) {
  return (
    <>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.55fr]">
          <FadeIn>
            <Badge className="border-white/20 bg-white/10 text-white">{service.eyebrow}</Badge>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black md:text-6xl">{service.title} in Pakistan</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{service.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/get-quote">Get Freight Estimate</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <a href={`tel:${site.phone}`}><Phone className="h-4 w-4" /> Speak to Logistics Expert</a>
              </Button>
            </div>
          </FadeIn>
          <FadeIn><QuoteForm compact /></FadeIn>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge>Direct answer</Badge>
            <h2 className="mt-4 text-3xl font-black">What is {service.title.toLowerCase()}?</h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              {service.title} is the planned movement, coordination, and documentation support required to move commercial cargo from origin to destination. For Pakistan-based businesses, that often means Karachi port pickup, container trailer coordination, customs release timing, inland road movement, and delivery to factories, warehouses, dry ports, or customer locations.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <Card key={benefit}><CardContent className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" /><span className="font-semibold">{benefit}</span></CardContent></Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <Badge>How it works</Badge>
            <h2 className="mt-4 text-3xl font-black">Operational process for {service.title.toLowerCase()}.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {service.process.map((step, index) => (
              <Card key={step}>
                <CardContent>
                  <div className="text-3xl font-black text-secondary">0{index + 1}</div>
                  <p className="mt-4 font-bold">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <SeoFaq faqs={service.faqs} title={`${service.title} FAQs`} />
      <InternalLinks current={service.slug} />
    </>
  );
}

export function CityLanding({ page }: { page: CityPage }) {
  return (
    <>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.55fr]">
          <FadeIn>
            <Badge className="border-white/20 bg-white/10 text-white">Local SEO landing page</Badge>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black md:text-6xl">{page.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{page.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/get-quote">Book Container Transport</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <a href={`https://wa.me/${site.whatsapp}`}>WhatsApp Us</a>
              </Button>
            </div>
          </FadeIn>
          <FadeIn><QuoteForm compact /></FadeIn>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <Badge>{page.city} logistics coverage</Badge>
            <h2 className="mt-4 text-3xl font-black">Service availability in {page.city}</h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              PK Transporters supports {page.focus} for containerized cargo, road cargo, import/export shipments, warehouse dispatches, factory deliveries, and Karachi-port connected routes. The page is structured to answer buyer questions clearly for search engines and AI answer systems.
            </p>
            <div className="mt-6 grid gap-3">
              {page.routes.map((route) => (
                <div key={route} className="flex gap-3 rounded-lg border p-4 font-semibold"><Route className="h-5 w-5 text-accent" /> {route}</div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border bg-slate-100 p-4">
            <iframe
              title={`${page.city} logistics map`}
              className="h-[420px] w-full rounded-md border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(page.city + " Pakistan industrial area")}&output=embed`}
            />
          </div>
        </div>
      </section>
      <section className="section-pad bg-slate-100">
        <div className="mx-auto max-w-7xl px-4">
          <Badge>Nearby industrial zones</Badge>
          <h2 className="mt-4 text-3xl font-black">Commercial and industrial areas served in {page.city}.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.industrialZones.map((zone) => (
              <Card key={zone}><CardContent className="flex gap-3"><Warehouse className="h-5 w-5 text-accent" /><span className="font-bold">{zone}</span></CardContent></Card>
            ))}
          </div>
        </div>
      </section>
      <SeoFaq faqs={page.faqs} title={`${page.title} FAQs`} />
      <InternalLinks current={page.slug} city />
    </>
  );
}

function SeoFaq({ faqs, title }: { faqs: { question: string; answer: string }[]; title: string }) {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <Badge>AI-ready answers</Badge>
          <h2 className="mt-4 text-3xl font-black">{title}</h2>
        </div>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-lg border p-5">
              <h3 className="font-black">{faq.question}</h3>
              <p className="mt-2 leading-7 text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InternalLinks({ current, city = false }: { current: string; city?: boolean }) {
  const items: { slug: string; title: string }[] = city
    ? cityPages.filter((item) => item.slug !== current)
    : services.filter((item) => item.slug !== current);
  return (
    <section className="section-pad bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Badge className="border-white/20 bg-white/10 text-white">Related pages</Badge>
            <h2 className="mt-4 text-3xl font-black">Continue comparing logistics options.</h2>
          </div>
          <Button asChild><Link href="/get-quote">Request a Quote</Link></Button>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 9).map((item) => (
            <Link key={item.slug} href={city ? `/locations/${item.slug}` : `/services/${item.slug}`} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.08] p-4 font-semibold">
              {item.title} <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
