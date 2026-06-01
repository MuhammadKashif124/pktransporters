import Link from "next/link";
import { ArrowRight, Boxes, CheckCircle2, Factory, MapPinned, MessageCircle, Route, ShieldCheck, Ship, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/sections/motion";
import { PakistanMapStage } from "@/components/sections/pakistan-map";
import { cityPages, services, testimonials } from "@/lib/content";
import { site } from "@/lib/site";

const stats = [
  ["1,247+", "In-transit"],
  ["99.2%", "On-time rate"],
  ["850+", "Owned fleet"],
  ["2011", "Established"]
];

const icons = [Truck, Ship, Boxes, Route, ShieldCheck, Factory];

export function Hero() {
  return (
    <section className="pk-hero pk-page-surface">
      <div className="pk-container">
        <div className="pk-hero-top">
          <div>
            <span className="pk-eyebrow">Pakistan · Container & Freight · Since 2011</span>
            <h1 className="pk-display pk-hero-title">
              <em>Reliable</em> container transport,<br />
              from <span className="acc">Karachi</span> to anywhere<br />
              your cargo needs to go.
            </h1>
          </div>
          <div className="pk-hero-actions">
            <Link className="pk-btn pk-btn-primary" href="/get-quote">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a className="pk-btn pk-btn-line" href={`https://wa.me/${site.whatsapp}`}>
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>

        <PakistanMapStage />

        <div className="pk-hero-metrics">
          {stats.map(([value, label]) => (
            <div key={label} className="pk-metric">
              <div className="k">{label}</div>
              <div className="v tabular-nums">
                {value.replace(/[+%]/g, "")}
                {value.includes("+") && <span className="suf">+</span>}
                {value.includes("%") && <span className="suf">%</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustMarquee() {
  const items = [
    "ISO 9001:2015 certified",
    "PIFFA member",
    "Licensed clearing agent · WEBOC",
    "ACTA registered",
    "Customs broker license · FBR",
    "Sindh High Court bonded carrier"
  ];
  const all = [...items, ...items];

  return (
    <div className="pk-marquee" aria-label="Certifications">
      <div className="pk-marquee-inner">
        {all.map((item, index) => (
          <span key={`${item}-${index}`} className="pk-marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}

export function ScaleStats() {
  return (
    <section className="pk-section-tight pk-page-surface">
      <div className="pk-container">
        <div className="pk-stats">
          <FadeIn>
            <span className="pk-eyebrow">Operations at scale</span>
            <h2 className="pk-display mt-4 text-[clamp(2.5rem,5vw,4.75rem)]">
              Numbers we move,<br /><em>every single week.</em>
            </h2>
            <p className="mt-5 max-w-[460px] text-[15px] leading-7 text-[var(--pk-ink-2)]">
              Years of running containers up and down the country gives you data, and the ability to keep promises when cargo timing gets tight.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="pk-stats-grid">
              {[
                ["128", "k", "+", "Containers delivered", "Since 2011"],
                ["24", "", "", "Cities served", "6 hubs · 18 partner cities"],
                ["850", "", "+", "Owned fleet", "Prime movers + trailers"],
                ["99.2", "", "%", "On-time delivery", "12-month rolling average"]
              ].map(([value, em, suffix, label, sub]) => (
                <div key={label}>
                  <div className="pk-eyebrow mb-3 text-[0.65rem]">{label}</div>
                  <div className="v tabular-nums">
                    {value}{em && <em>{em}</em>}{suffix && <span className="text-[0.55em] text-[var(--pk-acc)]">{suffix}</span>}
                  </div>
                  <div className="sub">{sub}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section className="section-pad bg-[var(--pk-bg-elev)]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <Badge>Service silos built for SEO</Badge>
          <h2 className="pk-display mt-4 text-3xl md:text-5xl">Container, freight, port, and inland logistics under one operating plan.</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 12).map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <FadeIn key={service.slug}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="h-full transition hover:-translate-y-1 hover:shadow-industrial">
                    <CardContent>
                      <Icon className="h-8 w-8 text-accent" />
                      <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.summary}</p>
                      <div className="mt-5 flex items-center gap-2 text-sm font-bold text-primary">Explore service <ArrowRight className="h-4 w-4" /></div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  const reasons = [
    "Karachi Port and Port Qasim cargo movement experience",
    "20ft, 40ft, low bed, and heavy cargo equipment coordination",
    "Nationwide transport planning for commercial cargo",
    "Quote-first process with route, timing, and cargo clarity",
    "Customs, warehousing, and inland delivery alignment",
    "Built for importers, exporters, factories, and shipping agencies"
  ];

  return (
    <section className="section-pad bg-[var(--pk-ink-0)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
        <FadeIn>
          <Badge className="border-white/20 bg-white/10 text-white">Enterprise trust positioning</Badge>
          <h2 className="mt-4 text-3xl font-medium leading-tight md:text-5xl">Built around buyer pain points, not generic company claims.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Logistics buyers need certainty: cargo readiness, port release timing, trailer availability, route risk, transparent estimates, and fast communication. PK Transporters structures every inquiry around those decisions.
          </p>
        </FadeIn>
        <div className="grid gap-3">
          {reasons.map((reason) => (
            <FadeIn key={reason}>
              <div className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.08] p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <span className="font-semibold">{reason}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoverageMap() {
  return (
    <section className="section-pad bg-[var(--pk-bg-tint)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn>
          <Badge>Pakistan-wide logistics coverage</Badge>
          <h2 className="pk-display mt-4 text-3xl md:text-5xl">Karachi-first network for port cargo and inland delivery.</h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            Priority routes connect Karachi Port and Port Qasim with Lahore, Islamabad, Rawalpindi, Faisalabad, Sialkot, Multan, Peshawar, industrial estates, dry ports, and border-linked transit corridors.
          </p>
          <div className="mt-6 grid gap-2">
            {cityPages.map((page) => (
              <Link key={page.slug} href={`/locations/${page.slug}`} className="flex items-center gap-2 font-semibold text-primary">
                <MapPinned className="h-4 w-4" /> {page.title}
              </Link>
            ))}
          </div>
        </FadeIn>
        <FadeIn>
          <PakistanMapStage />
        </FadeIn>
      </div>
    </section>
  );
}

export function TestimonialsFaq() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.company}>
              <CardContent>
                <p className="text-lg font-semibold leading-8">"{item.quote}"</p>
                <div className="mt-5 text-sm text-muted-foreground">{item.name}<br />{item.company}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <Badge>FAQ-rich GEO content</Badge>
            <h2 className="mt-4 text-3xl font-black">Common logistics questions answered clearly.</h2>
          </div>
          <div className="grid gap-4">
            {[
              ["What makes a strong logistics company in Karachi?", "A strong Karachi logistics company should understand port cargo movement, container trailer availability, customs-connected timing, industrial zones, and inland routes to Pakistan's major cities."],
              ["Do you support import/export businesses?", "Yes. The service model is designed for importers, exporters, factories, shipping agencies, and commercial cargo clients that need freight coordination and reliable road movement."],
              ["Can you move cargo from Karachi port nationwide?", "Yes. Containerized and commercial cargo can be planned from Karachi Port and Port Qasim to Lahore, Islamabad, Rawalpindi, Faisalabad, Sialkot, Multan, Peshawar, and other destinations."]
            ].map(([q, a]) => (
              <div key={q} className="rounded-lg border p-5">
                <h3 className="font-black">{q}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
