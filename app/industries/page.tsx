import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { QuoteForm } from "@/components/sections/forms";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/site";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Industries We Serve | Container Logistics Pakistan",
  description:
    "PK Transporters provides container transport, freight forwarding, and port logistics for Pakistan's textile exporters, pharmaceutical companies, FMCG distributors, manufacturers, and industrial importers. Karachi Port expertise for every sector.",
  path: "/industries",
  keywords: [
    "logistics for textile exporters Pakistan",
    "pharmaceutical logistics Karachi",
    "FMCG container distribution Pakistan",
    "industrial cargo logistics Pakistan",
    "container transport industries Pakistan",
  ],
});

const industries = [
  {
    id: "textile-exporters",
    name: "Textile Exporters",
    headline: "Container logistics for Pakistan's $17.9 billion textile sector",
    body: "Pakistan's textile industry generated $17.887 billion in export revenue in FY2024–25 — 55.83% of the country's total exports. Every shipment starts with an empty container placed at a mill or stuffing point in Karachi, Lahore, Faisalabad, or Sialkot, and ends with a stuffed container delivered to port before the shipping line's cargo cut-off. Missing a cut-off by hours means waiting for the next vessel — a delay that costs real money in production cycles and buyer relationships.",
    painPoints: [
      "Vessel cut-off deadlines are 24–48 hours before cargo cut-off — documentation must be ready earlier",
      "40ft High Cube is the standard for garment and fabric bales, not always available last-minute",
      "Factory stuffing across Faisalabad and Lahore requires reliable trailer scheduling to production shifts",
      "Export GD and BL coordination must align with buyer L/C payment terms",
    ],
    services: ["Empty container placement at factory", "Export cut-off management", "VGM (Verified Gross Mass) documentation", "Port delivery from Lahore, Faisalabad, Sialkot, Karachi mills"],
    relatedBlog: null,
  },
  {
    id: "importers-distributors",
    name: "Importers & Distributors",
    headline: "Port-to-warehouse container delivery for commercial importers",
    body: "Commercial importers — whether bringing in consumer goods, raw materials, or finished products — share one critical challenge: getting containers out of Karachi Port quickly and cost-effectively. Pakistan Customs' WeBOC system assigns each shipment a Green, Yellow, or Red channel. Importers who file goods declarations before the vessel arrives clear fastest. Those who start documentation after arrival routinely lose 2–4 days in dwell time and face compounding demurrage charges once free days expire.",
    painPoints: [
      "Late documentation filing triggers demurrage once free days (5 days, proposed cut to 3) expire",
      "Red Channel examination adds 1–3 days beyond standard clearance time",
      "Inland delivery coordination often falls apart between the clearing agent and transport provider",
      "Multi-city distribution from a single port container requires reliable multi-drop execution",
    ],
    services: ["Pre-arrival documentation coordination", "Port release tracking through WeBOC", "Container haulage from KICT, PICT, QICT", "Nationwide delivery to Lahore, Islamabad, Faisalabad, Rawalpindi, Multan, Peshawar"],
    relatedBlog: null,
  },
  {
    id: "manufacturing-plants",
    name: "Manufacturing Plants & Factories",
    headline: "Inbound raw materials and outbound goods for Pakistan's industrial sector",
    body: "Factories depend on continuous inbound raw material supply — any gap in delivery shuts down production. Textile mills in Faisalabad, steel processors in Lahore, pharmaceutical manufacturers in Karachi, and food processors across Punjab all run on tight input schedules. PK Transporters coordinates port-to-factory inbound delivery with the same scheduling precision applied to export container movements — aligning trailer dispatch with factory receiving shifts, gate timings, and production cycle demands.",
    painPoints: [
      "Production stops when raw material containers are delayed at port or in transit",
      "Factory gate loading and unloading requires drivers familiar with industrial estate access",
      "Outbound finished goods containers must reach port before vessel cut-offs",
      "Regular standing schedules are more cost-effective than ad-hoc bookings",
    ],
    services: ["Port-to-factory inbound delivery", "Standing dispatch arrangements for regular volumes", "Outbound export container placement", "Factory gate loading/unloading coordination"],
    relatedBlog: null,
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceutical Companies",
    headline: "Compliant logistics for Pakistan's regulated pharmaceutical sector",
    body: "Pakistan's pharmaceutical market is valued at approximately $5.5 billion and growing. Importing raw active pharmaceutical ingredients (APIs), excipients, and finished dosage forms requires DRAP pre-import permissions, specific HS code classification to avoid incorrect duty assessment, and — for temperature-sensitive products — reefer container handling throughout the transport chain. Any documentation error at WeBOC triggers re-assessment or examination, adding days that pharmaceutical buyers cannot afford when production schedules are involved.",
    painPoints: [
      "DRAP import permits must be aligned with the goods declaration before filing",
      "Temperature-sensitive APIs require reefer container or insulated transport from port to facility",
      "HS code classification errors trigger automatic re-assessment and potential Red Channel",
      "Delivery to GMP-compliant pharmaceutical zones requires documented chain-of-custody",
    ],
    services: ["DRAP documentation coordination", "Cold chain container transport", "Pharmaceutical cargo delivery to Lahore, Islamabad, Karachi pharma zones", "Compliant transport documentation"],
    relatedBlog: null,
  },
  {
    id: "fmcg-retail",
    name: "FMCG & Retail Distribution",
    headline: "Consumer goods container import and multi-city distribution",
    body: "FMCG and retail importers move high volumes of consumer goods — food products, beverages, household items, personal care, electronics — through Karachi Port in 20ft and 40ft containers destined for regional distribution centres in Lahore, Islamabad, and Faisalabad. The challenge is speed and predictability: retail chains and FMCG brands run replenishment cycles where a delayed container means empty shelf space. Pre-clearance documentation discipline and a logistics partner who communicates proactively at every stage are non-negotiable.",
    painPoints: [
      "Seasonal demand spikes (Ramadan, Eid) compress delivery windows significantly",
      "Multi-SKU containers require careful unloading sequencing at distribution centres",
      "Perishable FMCG categories (dairy, frozen) require cold chain from port to RDC",
      "Retail chains have strict delivery window bookings — late arrivals are turned away",
    ],
    services: ["Port-to-RDC container delivery", "Multi-drop distribution from single container", "Cold chain coordination for temperature-sensitive FMCG", "Pre-clearance filing for fast port release"],
    relatedBlog: null,
  },
  {
    id: "shipping-agencies",
    name: "Shipping Agencies & Freight Forwarders",
    headline: "Haulage partner for shipping lines, agencies, and freight forwarders",
    body: "Shipping agencies and freight forwarders need a ground transport partner who operates at the terminal level — not a broker who outsources to whoever is available. PK Transporters operates directly at KICT, PICT, and QICT with established gate procedures, driver documentation standards, and direct communication with port gate staff. For agencies coordinating high volumes across multiple shipping lines, reliability and real-time update capability matter as much as rate.",
    painPoints: [
      "Third-party transport brokers introduce unreliable drivers and no accountability",
      "Terminal gate procedures vary between KICT, PICT, and QICT — local knowledge prevents delays",
      "Empty container repositioning requires coordination across multiple depots and timelines",
      "Urgent moves on short notice demand a partner with immediate trailer availability",
    ],
    services: ["Direct terminal gate operations at KICT, PICT, QICT", "Priority container haulage on short notice", "Empty container repositioning", "Regular standing arrangements for high-volume agencies"],
    relatedBlog: null,
  },
  {
    id: "construction-projects",
    name: "Construction & Project Cargo",
    headline: "Container and heavy cargo logistics for CPEC and Pakistan construction sector",
    body: "Pakistan's construction sector — driven by CPEC infrastructure projects (38 of 90 projects completed or ongoing), the housing sector, and industrial development — requires a logistics partner who understands both standard containerized cargo and the demands of oversized project freight. Ceramic tiles, sanitary ware, steel structures, and electrical materials move in standard 20ft and 40ft containers. Transformers, generators, and heavy plant equipment require low-bed trailers, route surveys, and NHMP movement permits.",
    painPoints: [
      "Project timelines are fixed — delayed equipment delivery causes costly construction downtime",
      "Heavy or oversized equipment requires low-bed trailers, route surveys, and NHMP permits",
      "Construction sites are often in remote locations requiring advance route assessment",
      "Multiple equipment types (containerized + oversized) must arrive in sequence for project phasing",
    ],
    services: ["Standard container delivery to construction sites and project locations", "Low-bed trailer service for oversized plant and equipment", "NHMP movement permit coordination", "Route survey for remote site delivery"],
    relatedBlog: null,
  },
  {
    id: "automotive-machinery",
    name: "Automotive & Industrial Machinery",
    headline: "Vehicle parts import and capital equipment logistics from Karachi Port",
    body: "Pakistan's automotive sector assembles 250,000+ vehicles per year across facilities in Karachi and Lahore. The supply chain depends on consistent inbound parts delivery — both CBU (completely built-up) vehicles through Port Qasim's auto terminal and CKD (completely knocked-down) parts kits in containers. Capital equipment importers — buying CNC machines, textile machinery, generators, and industrial plant — need a logistics partner who coordinates crane lifts at factory gates, manages out-of-gauge documentation, and understands delivery access requirements at industrial estates.",
    painPoints: [
      "Port Qasim's QICT/auto terminal requires specific gate procedures different from Karachi Port",
      "CKD parts kits require careful unloading sequencing to match assembly line requirements",
      "Heavy machinery needs crane coordination at origin and destination — not all logistics companies can arrange this",
      "Engineering goods often require SRO documentation from the Ministry of Industries",
    ],
    services: ["Port Qasim container haulage for automotive cargo", "Crane coordination at factory gates and industrial estates", "CKD and CBU parts delivery to assembler facilities", "Heavy machinery transport from port to factory"],
    relatedBlog: null,
  },
];

const faqs = [
  {
    q: "Which industries do you have the most experience with?",
    a: "The bulk of operations covers textile exporters, commercial importers, and manufacturing plants — these three sectors represent the majority of container movements through Karachi Port. Pharmaceutical and FMCG logistics are growing areas with specific documentation and handling requirements that the operations team actively manages.",
  },
  {
    q: "Can you handle both import container delivery and export container placement?",
    a: "Yes. Both directions are covered — inbound containers from KICT, PICT, or QICT to factory or warehouse, and outbound export container placement at factories for stuffing and port delivery before vessel cut-off.",
  },
  {
    q: "Do you work with companies outside Karachi?",
    a: "Yes. Nationwide delivery covers Lahore, Faisalabad, Islamabad, Rawalpindi, Multan, Peshawar, Sialkot, Gujranwala, Quetta, and surrounding areas. The operations base is Karachi, and all long-haul moves dispatch from there.",
  },
  {
    q: "How do you handle industries with strict documentation or regulatory requirements?",
    a: "Pharmaceutical, chemical, and food commodity cargo all carry specific regulatory requirements — DRAP permits, PSQCA certificates, Ministry of Commerce approvals. The team coordinates with your clearing agent to ensure documentation is aligned before the goods declaration is filed, which is the step that determines clearance speed.",
  },
  {
    q: "Can you accommodate standing or recurring shipment schedules?",
    a: "Yes. Regular clients with weekly or monthly import volumes can set up standing arrangements — trailer availability confirmed in advance aligned to port release patterns and factory delivery schedules.",
  },
];

export default function IndustriesPage() {
  const faqItems = faqs.map(({ q, a }) => ({ question: q, answer: a }));

  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: absoluteUrl("/") },
        { name: "Industries", url: absoluteUrl("/industries") },
      ])} />
      {/* Hero */}
      <section
        className="relative bg-[var(--pk-ink-0)] py-20 text-white"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(10,25,18,0.96) 0%, rgba(10,25,18,0.80) 60%, rgba(10,25,18,0.65) 100%), url('/images/blog/industries-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--pk-acc-soft)]">Industries served</p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
              Container logistics for every industry that imports or exports through Karachi.
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Textile exporters, pharmaceutical companies, FMCG distributors, manufacturers, shipping agencies —
              each industry moves cargo differently. PK Transporters coordinates container transport from Karachi Port
              to factories, warehouses, and distribution centres across Pakistan, with documentation and scheduling
              tailored to your sector's specific requirements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-white/60">
              {["Textile Exporters", "Importers", "Manufacturers", "Pharma", "FMCG", "Shipping Agencies", "Construction", "Automotive"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/20 px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex items-start lg:pt-6">
            <QuoteForm compact />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-b border-[var(--pk-line)] bg-[var(--pk-bg-tint)]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 md:grid-cols-4">
          {[
            { stat: "2.65M TEUs", label: "Karachi Port throughput FY25" },
            { stat: "$17.9B", label: "Pakistan textile exports FY25" },
            { stat: "1,093", label: "Container vessels per year" },
            { stat: "48 hrs", label: "Government clearance target" },
          ].map(({ stat, label }) => (
            <div key={stat} className="py-5 px-2 text-center">
              <div className="text-2xl font-black text-[var(--pk-ink-0)]">{stat}</div>
              <div className="mt-1 text-xs text-[var(--pk-ink-3)]">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry sections */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black text-[var(--pk-ink-0)] md:text-4xl">
              Industry-specific container logistics from Karachi Port
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--pk-ink-2)]">
              Each industry below comes with specific cargo requirements, documentation rules, and scheduling pressures.
              The sections below explain what matters in each sector and how container logistics is structured around it.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {industries.map((industry, i) => (
              <div
                key={industry.id}
                id={industry.id}
                className="scroll-mt-24 grid gap-8 border-t pt-12 first:border-t-0 first:pt-0 lg:grid-cols-[1fr_320px]"
              >
                <div>
                  <span className="inline-block rounded-full bg-[var(--pk-acc-bg)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--pk-acc-d)]">
                    {industry.name}
                  </span>
                  <h3 className="mt-3 text-2xl font-black text-[var(--pk-ink-0)]">{industry.headline}</h3>
                  <p className="mt-4 leading-8 text-[var(--pk-ink-2)]">{industry.body}</p>

                  <div className="mt-6">
                    <p className="text-sm font-bold uppercase tracking-wide text-[var(--pk-ink-3)]">Common challenges in this sector</p>
                    <ul className="mt-3 space-y-2">
                      {industry.painPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm leading-6 text-[var(--pk-ink-2)]">
                          <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-[var(--pk-acc-bg)] text-[var(--pk-acc)] flex items-center justify-center text-xs">✕</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--pk-line)] bg-[var(--pk-bg-tint)] p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-[var(--pk-ink-3)]">What we coordinate</p>
                  <ul className="mt-4 space-y-3">
                    {industry.services.map((service) => (
                      <li key={service} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--pk-ink-1)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--pk-acc)]" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi, I need container logistics for ${industry.name} cargo from Karachi.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center gap-2 rounded-lg bg-[var(--pk-acc)] px-4 py-3 text-sm font-bold text-white transition hover:bg-[var(--pk-acc-d)]"
                  >
                    Discuss {industry.name} logistics
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes we serve */}
      <section className="section-pad bg-[var(--pk-bg-tint)]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-black text-[var(--pk-ink-0)]">Container routes from Karachi to every major business city</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--pk-ink-2)]">
            All industries above share the same inland delivery network — containers dispatched from Karachi Port or Port Qasim to factories, warehouses, dry ports, and distribution centres across Pakistan.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { city: "Lahore", detail: "1,200 km · 2–3 days · Punjab hub" },
              { city: "Faisalabad", detail: "1,350 km · 3–4 days · Textile capital" },
              { city: "Islamabad", detail: "1,400 km · 3–5 days · Federal capital" },
              { city: "Rawalpindi", detail: "1,400 km · 3–5 days · Twin city" },
              { city: "Multan", detail: "1,100 km · 2–3 days · Southern Punjab" },
              { city: "Peshawar", detail: "1,700 km · 4–5 days · KPK gateway" },
              { city: "Sialkot", detail: "1,250 km · 2–3 days · Export hub" },
              { city: "Quetta", detail: "700 km · 1–2 days · Balochistan" },
              { city: "Gujranwala", detail: "1,280 km · 2–3 days · Industrial" },
              { city: "Gujrat", detail: "1,250 km · 2–3 days · Furniture & goods" },
              { city: "Sargodha", detail: "1,250 km · 2–3 days · Agriculture" },
              { city: "Bahawalpur", detail: "900 km · 2 days · Southern Punjab" },
            ].map(({ city, detail }) => (
              <div key={city} className="rounded-lg border border-[var(--pk-line)] bg-white p-4">
                <div className="font-bold text-[var(--pk-ink-0)]">{city}</div>
                <div className="mt-1 text-xs text-[var(--pk-ink-3)]">{detail}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--pk-ink-3)]">
            Delivery beyond these cities available on request. All routes from Karachi Port (KICT/PICT) and Port Qasim (QICT/FOTCO).
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-black text-[var(--pk-ink-0)]">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-[var(--pk-line)]">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-6">
                <h3 className="font-bold text-[var(--pk-ink-0)]">{q}</h3>
                <p className="mt-3 leading-7 text-[var(--pk-ink-2)]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[var(--pk-ink-0)]">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="text-3xl font-black md:text-4xl">
            Tell us your cargo type and destination.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/70">
            Share your industry, container size, origin port, and delivery destination. The operations team will
            confirm trailer availability, documentation requirements, and a freight estimate before anything moves.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <QuoteForm />
            <Link
              href="/services/container-services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white/80 transition hover:bg-white/10"
            >
              View container services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
