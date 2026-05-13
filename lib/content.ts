export type FAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  keywords: string[];
  industries: string[];
  process: string[];
  benefits: string[];
  faqs: FAQ[];
};

export type CityPage = {
  slug: string;
  title: string;
  city: string;
  focus: string;
  summary: string;
  industrialZones: string[];
  routes: string[];
  faqs: FAQ[];
};

const baseFaqs: FAQ[] = [
  {
    question: "How fast can container transport be arranged from Karachi port?",
    answer: "Most Karachi port and Port Qasim container moves can be scheduled after cargo release, trailer availability, destination confirmation, and documentation checks are complete."
  },
  {
    question: "Do you handle both 20ft and 40ft containers?",
    answer: "Yes. The operation supports 20ft and 40ft container transport, container haulage, trailer coordination, inland movement, and nationwide delivery planning."
  },
  {
    question: "Can businesses request a freight estimate online?",
    answer: "Yes. Importers, exporters, factories, suppliers, and shipping agencies can request a quote with container size, pickup point, destination, cargo type, and required delivery date."
  }
];

export const services: Service[] = [
  ["container-services", "Container Services", "Containerized cargo", "End-to-end container logistics for importers, exporters, factories, and commercial cargo clients moving through Karachi ports and across Pakistan."],
  ["20ft-container-transport", "20ft Container Transport", "Port-to-door moves", "Reliable 20ft container transport for FCL cargo, industrial supplies, export shipments, and inland deliveries from Karachi to major business cities."],
  ["40ft-container-transport", "40ft Container Transport", "High-volume cargo", "40ft container trailer planning for larger shipments, textile cargo, machinery, commercial goods, and nationwide containerized cargo movement."],
  ["container-haulage", "Container Haulage", "Haulage operations", "Container haulage services connecting Karachi Port, Port Qasim, dry ports, warehouses, factories, and industrial zones."],
  ["container-trailer-services", "Container Trailer Services", "Trailer fleet access", "Dedicated container trailer services for loaded and empty container movement with route planning and delivery coordination."],
  ["low-bed-trailer-services", "Low Bed Trailer Services", "Oversized cargo", "Low bed trailer support for heavy machinery, plant equipment, project cargo, and industrial cargo movement across Pakistan."],
  ["heavy-cargo-transport", "Heavy Cargo Transport", "Industrial freight", "Heavy cargo transport for factories, EPC contractors, industrial suppliers, and infrastructure cargo requiring careful route and equipment planning."],
  ["freight-services", "Freight Services", "Multimodal freight", "Freight services covering road cargo, inland freight, sea freight coordination, air freight support, and customs-connected logistics."],
  ["freight-forwarding", "Freight Forwarding", "Import/export logistics", "Freight forwarding support for import/export businesses needing documentation coordination, carrier alignment, customs clearance, and inland delivery."],
  ["sea-freight", "Sea Freight", "Ocean cargo", "Sea freight coordination for containerized imports and exports moving through Karachi Port and Port Qasim."],
  ["air-freight", "Air Freight", "Urgent shipments", "Air freight coordination for time-sensitive commercial cargo, spare parts, documents, and high-priority supply chain needs."],
  ["inland-transportation", "Inland Transportation", "Nationwide delivery", "Inland transportation from ports and warehouses to Lahore, Islamabad, Rawalpindi, Faisalabad, Sialkot, Multan, Peshawar, and Pakistan-wide destinations."],
  ["road-cargo", "Road Cargo", "Commercial cargo", "Road cargo services for industrial goods, palletized shipments, containerized cargo, and factory-to-market distribution."],
  ["customs-clearance", "Customs Clearance", "Port documentation", "Customs clearance coordination for import/export shipments with document readiness, cargo release support, and final-mile delivery planning."],
  ["warehousing-distribution", "Warehousing & Distribution", "Storage and dispatch", "Warehousing and distribution support for commercial inventory, import cargo staging, export consolidation, and route-based dispatch."],
  ["karachi-port-logistics", "Karachi Port Logistics", "Karachi priority", "Karachi port logistics for container pickup, cargo release coordination, port-to-warehouse moves, and nationwide dispatch."],
  ["port-qasim-logistics", "Port Qasim Logistics", "Port Qasim cargo", "Port Qasim logistics for industrial importers, automotive suppliers, bulk-adjacent container cargo, and inland delivery routes."],
  ["afghanistan-transit-cargo", "Afghanistan Transit Cargo", "Transit cargo", "Afghanistan transit cargo coordination through Pakistan with documentation alignment, road movement planning, and border-route visibility."],
  ["industrial-cargo-movement", "Industrial Cargo Movement", "Factory logistics", "Industrial cargo movement for textile mills, manufacturers, suppliers, project sites, and production-critical deliveries."],
  ["textile-industry-logistics", "Textile Industry Logistics", "Exporter support", "Textile logistics for exporters, mills, garment suppliers, and shipment teams moving raw material, finished goods, and export containers."],
  ["import-export-logistics", "Import Export Logistics", "Trade logistics", "Import export logistics for companies that need forwarding, customs, inland transport, warehousing, and container movement under one plan."]
].map(([slug, title, eyebrow, summary]) => ({
  slug,
  title,
  eyebrow,
  summary,
  keywords: [title.toLowerCase(), "logistics Pakistan", "container transport Karachi", "freight forwarding Karachi"],
  industries: ["Import/export businesses", "Textile exporters", "Industrial suppliers", "Factories", "Shipping agencies"],
  process: ["Share cargo details and route", "Confirm container size, equipment, and timing", "Coordinate documents, pickup, and dispatch", "Track delivery through completion"],
  benefits: ["Karachi port operating knowledge", "20ft and 40ft container specialization", "Nationwide road network", "Commercial cargo handling", "Quote-first conversion workflow"],
  faqs: baseFaqs
}));

export const cityPages: CityPage[] = [
  ["logistics-company-karachi", "Logistics Company Karachi", "Karachi", "logistics company Karachi"],
  ["container-transport-karachi", "Container Transport Karachi", "Karachi", "container transport Karachi"],
  ["freight-forwarding-karachi", "Freight Forwarding Karachi", "Karachi", "freight forwarding Karachi"],
  ["logistics-company-lahore", "Logistics Company Lahore", "Lahore", "logistics company Lahore"],
  ["container-transport-lahore", "Container Transport Lahore", "Lahore", "container transport Lahore"],
  ["logistics-company-islamabad", "Logistics Company Islamabad", "Islamabad", "logistics company Islamabad"],
  ["container-transport-islamabad", "Container Transport Islamabad", "Islamabad", "container transport Islamabad"],
  ["logistics-company-rawalpindi", "Logistics Company Rawalpindi", "Rawalpindi", "logistics company Rawalpindi"],
  ["container-trailer-rawalpindi", "Container Trailer Rawalpindi", "Rawalpindi", "container trailer Rawalpindi"]
].map(([slug, title, city, focus]) => ({
  slug,
  title,
  city,
  focus,
  summary: `${title} services for businesses that need reliable container movement, freight coordination, warehousing links, and port-connected inland logistics across Pakistan.`,
  industrialZones:
    city === "Karachi"
      ? ["SITE Industrial Area", "Korangi Industrial Area", "Landhi Industrial Area", "Port Qasim Industrial Zone", "North Karachi Industrial Area"]
      : city === "Lahore"
        ? ["Sundar Industrial Estate", "Quaid-e-Azam Industrial Estate", "Kot Lakhpat", "Raiwind Road"]
        : city === "Islamabad"
          ? ["I-9 Industrial Area", "I-10 Industrial Area", "Kahuta Road", "Rawat Industrial Area"]
          : ["Rawat Industrial Area", "Saddar commercial belt", "Chakri Road", "GT Road cargo corridor"],
  routes: [`Karachi to ${city}`, `${city} to Karachi Port`, `${city} to Lahore cargo corridor`, `${city} to Islamabad/Rawalpindi commercial belt`],
  faqs: [
    {
      question: `Do you provide ${focus}?`,
      answer: `Yes. PK Transporters supports ${focus} with containerized cargo, road cargo, freight forwarding coordination, and business-focused route planning.`
    },
    {
      question: `Which industrial areas do you cover in ${city}?`,
      answer: `Coverage includes major commercial zones, dry-port connected areas, warehouses, factories, and industrial estates in and around ${city}.`
    },
    ...baseFaqs.slice(0, 2)
  ]
}));

export const industries = [
  "Textile exporters",
  "Manufacturing plants",
  "Import/export traders",
  "Industrial suppliers",
  "Shipping agencies",
  "Retail distribution",
  "Construction and project cargo",
  "Automotive and machinery"
];

export const testimonials = [
  {
    quote: "Their Karachi port coordination and trailer planning helped us move export containers without losing production time.",
    name: "Operations Manager",
    company: "Textile Exporter, Karachi"
  },
  {
    quote: "We needed reliable 40ft container movement from Karachi to Lahore. The quote, route plan, and dispatch updates were clear.",
    name: "Supply Chain Lead",
    company: "Industrial Supplier, Lahore"
  },
  {
    quote: "PK Transporters understands customs-connected logistics and commercial cargo urgency better than generic transport vendors.",
    name: "Import Manager",
    company: "Trading Company, Islamabad"
  }
];

export const blogPosts = [
  {
    slug: "how-container-transport-works-in-pakistan",
    title: "How Container Transport Works in Pakistan",
    excerpt: "A practical guide to container pickup, port release, trailers, route planning, and delivery for importers and exporters."
  },
  {
    slug: "karachi-port-logistics-guide",
    title: "Karachi Port Logistics Guide",
    excerpt: "What businesses should know about Karachi port cargo movement, container haulage, documentation, and inland delivery."
  },
  {
    slug: "difference-between-20ft-and-40ft-containers",
    title: "Difference Between 20ft and 40ft Containers",
    excerpt: "How to choose the right container size for commercial cargo, textile exports, machinery, and import shipments."
  },
  {
    slug: "freight-forwarding-process-explained",
    title: "Freight Forwarding Process Explained",
    excerpt: "A plain-language breakdown of forwarding, customs coordination, carrier alignment, and final inland transport."
  },
  {
    slug: "how-to-choose-a-logistics-company-in-karachi",
    title: "How to Choose a Logistics Company in Karachi",
    excerpt: "Buyer criteria for port expertise, fleet access, transparency, coverage, documentation, and freight estimate quality."
  }
];
