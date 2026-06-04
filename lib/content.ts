export type FAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
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
  body: string;
  industrialZones: string[];
  routes: string[];
  faqs: FAQ[];
};


export type IndustryDetail = { name: string; description: string };

export const services: Service[] = [
  {
    slug: "container-services",
    title: "Container Services",
    eyebrow: "Containerized cargo",
    summary: "End-to-end container logistics for importers, exporters, factories, and commercial cargo clients moving through Karachi ports and across Pakistan.",
    description: "Karachi Port and Port Qasim together handled over 2.65 million TEUs in FY2024–25, making them the entry and exit point for the overwhelming majority of Pakistan's containerized trade. PK Transporters coordinates the full container cycle — from port release through WeBOC customs clearance to inland trailer dispatch — serving importers, exporters, textile mills, and shipping agencies on both 20ft and 40ft container movements. With government initiatives targeting average container dwell time reduction to under 48 hours, having a logistics partner who prepares documentation before vessel arrival is now a measurable cost advantage.",
    keywords: ["container services Pakistan", "FCL container logistics", "port container handling", "container transport company Pakistan"],
    industries: ["Importers", "Exporters", "Textile mills", "Industrial factories", "Shipping agencies"],
    process: [
      "Share container requirements including port of origin, container type, and delivery address",
      "Confirm container size (20ft or 40ft), documentation status, and equipment readiness",
      "Coordinate port pickup, trailer dispatch, customs release, and inland routing",
      "Track container from port gate-out through to final delivery confirmation"
    ],
    benefits: [
      "Karachi Port and Port Qasim container expertise",
      "FCL and haulage handling across both major ports",
      "Nationwide container delivery network",
      "Customs-ready documentation coordination",
      "Transparent freight estimate before dispatch"
    ],
    faqs: [
      {
        question: "What types of container services do you offer?",
        answer: "Services include FCL container transport, port haulage, container dray, inland container delivery, empty repositioning, and customs-connected container movement for importers, exporters, and shipping agencies across Pakistan."
      },
      {
        question: "Can you move containers from both Karachi Port and Port Qasim?",
        answer: "Yes. Operations cover both Karachi Port terminals (KICT, PICT) and Port Qasim (QICT, FOTCO), with regular container moves from both locations to nationwide destinations."
      },
      {
        question: "How do I request a container services quote?",
        answer: "Send your container size, pickup point, delivery destination, cargo type, and timing requirements via WhatsApp. The team responds with a freight estimate and route plan before any commitment."
      }
    ]
  },
  {
    slug: "20ft-container-transport",
    title: "20ft Container Transport",
    eyebrow: "Port-to-door moves",
    summary: "Reliable 20ft container transport for FCL cargo, industrial supplies, export shipments, and inland deliveries from Karachi to major business cities.",
    description: "A standard 20ft ISO container has an internal volume of approximately 33 cubic metres and a maximum payload of around 22,000 kg — making it the preferred unit for dense cargo like steel, chemicals, machinery, and bagged raw materials where weight is reached before volume. For Pakistan importers, the 20ft container is the most common FCL unit arriving at Karachi Port and Port Qasim. PK Transporters dispatches dedicated 20ft chassis trailers from both port terminals, covering the Karachi–Lahore corridor (approximately 1,200 km, 2–3 days) and the Karachi–Islamabad route (approximately 1,400 km, 3–5 days) under weight-bridge-compliant documentation.",
    keywords: ["20ft container transport Pakistan", "twenty foot container Karachi", "20ft FCL cargo", "20ft container trailer hire"],
    industries: ["FCL importers", "Textile exporters", "Industrial suppliers", "SME cargo teams", "Pharmaceutical distributors"],
    process: [
      "Confirm 20ft container availability at port and cargo readiness at origin",
      "Check port release status, gate-pass readiness, and trailer availability",
      "Plan route from port gate-out to delivery city with transit time estimate",
      "Dispatch trailer and track container to final delivery point"
    ],
    benefits: [
      "Dedicated 20ft trailer fleet",
      "Karachi Port and Port Qasim gate-out experience",
      "Nationwide 20ft container delivery routes",
      "Cargo weight and stuffing guidance on request",
      "Short-haul and long-haul delivery options"
    ],
    faqs: [
      {
        question: "What is the maximum cargo weight for a 20ft container?",
        answer: "A standard 20ft container typically carries 18,000 to 22,000 kg of cargo net weight, depending on commodity density and road weight compliance requirements in Pakistan. NHMP regulations require goods transport vehicles to comply with the National Highways and Motorways (Dimensions of Goods Transport Vehicles) Rules 2017."
      },
      {
        question: "Can you arrange 20ft container transport from Port Qasim?",
        answer: "Yes. Both Karachi Port and Port Qasim are covered for 20ft container pickups, with trailers assigned based on gate-out availability and delivery destination."
      },
      {
        question: "What is the typical transit time for a 20ft container from Karachi to Lahore?",
        answer: "Karachi to Lahore container transit is typically 2 to 3 days by road depending on port release timing, route conditions, and delivery point access. The route covers approximately 1,200 km via the National Highway and M-2 motorway corridor."
      }
    ]
  },
  {
    slug: "40ft-container-transport",
    title: "40ft Container Transport",
    eyebrow: "High-volume cargo",
    summary: "40ft container trailer planning for larger shipments, textile cargo, machinery, commercial goods, and nationwide containerized cargo movement.",
    description: "Pakistan's textile sector exported $17.887 billion in goods in FY2024–25, with the vast majority shipped in 40ft and 40ft High Cube containers stuffed at mills in Karachi, Faisalabad, Sialkot, and Lahore. A standard 40ft container carries approximately 67 cubic metres of cargo and a net payload of up to 26,500 kg, while the 40ft High Cube adds an extra 30 cm of internal height for bulkier goods like garment bales. PK Transporters maintains 40ft and 40ft HC trailer availability for both import port pickup and export factory placement, with priority scheduling built around vessel cut-off deadlines on major shipping lines.",
    keywords: ["40ft container transport Pakistan", "40ft container trailer Karachi", "high cube container transport", "forty foot container logistics Pakistan"],
    industries: ["Textile exporters", "Machinery importers", "Retail distributors", "Bulk commodity traders", "Project cargo clients"],
    process: [
      "Confirm 40ft or 40ft High Cube container type and cargo weight compliance",
      "Verify port release documentation and trailer size availability",
      "Assess route for oversize or overweight considerations if applicable",
      "Dispatch with weight-bridge compliant documentation and real-time tracking"
    ],
    benefits: [
      "40ft and 40ft High Cube trailer availability",
      "Textile and machinery cargo expertise",
      "National highway and motorway route coverage",
      "Weight-bridge compliance documentation",
      "Priority scheduling for export cut-off deadlines"
    ],
    faqs: [
      {
        question: "What is the cargo capacity of a 40ft container?",
        answer: "A standard 40ft container carries approximately 24,000 to 27,000 kg of cargo net weight, while a 40ft High Cube adds extra internal height for taller or bulkier commodities. In Pakistan, most textile export containers are 40ft HC due to the volume requirements of fabric bales and garments."
      },
      {
        question: "Do you handle 40ft High Cube containers?",
        answer: "Yes. High Cube containers are supported for textile bales, packaged goods, and other cargo that exceeds the internal height of a standard 40ft container."
      },
      {
        question: "Can 40ft containers be transported to Faisalabad and Sialkot?",
        answer: "Yes. The route network includes Faisalabad and Sialkot in addition to Lahore, Islamabad, and Rawalpindi, covering Pakistan's main textile and industrial production cities. Faisalabad alone accounts for a significant share of Pakistan's cotton and knitwear exports."
      }
    ]
  },
  {
    slug: "container-haulage",
    title: "Container Haulage",
    eyebrow: "Haulage operations",
    summary: "Container haulage services connecting Karachi Port, Port Qasim, dry ports, warehouses, factories, and industrial zones.",
    description: "Container haulage — the short-haul move from a port terminal to a nearby warehouse, CFS, or factory — is one of the most time-sensitive links in the import chain. At Karachi Port, a gate pass expires within the terminal's slot window, meaning a trailer that arrives late or without correct documentation loses its place in the queue and accumulates additional dwell costs. Pakistan Customs currently targets reducing average dwell time from the current 3–6 days to under 48 hours, so importers who brief their hauler before the vessel arrives move significantly faster. PK Transporters operates at KICT, PICT, QICT, and FOTCO with established gate procedures at each terminal.",
    keywords: ["container haulage Karachi", "port haulage Pakistan", "container drayage Pakistan", "port to warehouse container movement"],
    industries: ["Port importers", "Warehouse operators", "Factory receiving teams", "Third-party logistics companies", "CFS operators"],
    process: [
      "Receive port release order and container number from shipper or clearing agent",
      "Assign trailer and coordinate port gate-pass and gate-out procedure",
      "Move container from terminal to warehouse, factory, or dry port",
      "Confirm container handover and file delivery documentation"
    ],
    benefits: [
      "KICT, PICT, and Port Qasim terminal gate experience",
      "Short-haul and long-haul haulage coverage",
      "Dry port connection routes across Pakistan",
      "Time-sensitive port dray capability",
      "Documentation support for port gate procedures"
    ],
    faqs: [
      {
        question: "What is container haulage and how does it differ from general freight?",
        answer: "Container haulage specifically refers to moving ISO containers from port terminals to inland destinations using container chassis trailers. It involves port gate procedures, release documentation, and terminal coordination that general road freight does not require."
      },
      {
        question: "Can you arrange same-day container haulage from Karachi Port?",
        answer: "Same-day haulage is possible for containers with confirmed port release and available trailers. Contact the team with your container number and release status to check availability."
      },
      {
        question: "Do you cover both KICT and PICT terminals at Karachi Port?",
        answer: "Yes. Operations cover KICT (Karachi International Container Terminal), PICT (Pakistan International Container Terminal), and KPT general cargo berths, as well as QICT and FOTCO at Port Qasim."
      }
    ]
  },
  {
    slug: "container-trailer-services",
    title: "Container Trailer Services",
    eyebrow: "Trailer fleet access",
    summary: "Dedicated container trailer services for loaded and empty container movement with route planning and delivery coordination.",
    description: "Container trailers — chassis units equipped with twist locks to secure 20ft and 40ft ISO boxes — are the primary vehicle type for port-to-inland container movement in Pakistan. Unlike flatbed trucks, container chassis trailers are designed to carry a single container securely at legal road weight limits. Pakistan's goods transport vehicle regulations, under the National Highways and Motorways (Dimensions of Goods Transport Vehicles) Rules 2017, set axle load limits that determine how much cargo can legally move per trip. PK Transporters maintains weight-bridge documentation for each move and assigns trailers based on container size, cargo weight, and destination to ensure full compliance on national highways and motorways.",
    keywords: ["container trailer services Pakistan", "container chassis hire Karachi", "flatbed trailer Pakistan", "trailer hire logistics Pakistan"],
    industries: ["Container importers", "Export cargo teams", "Shipping lines needing inland moves", "Factory dispatch teams", "Freight forwarding agents"],
    process: [
      "Confirm trailer type and container size compatibility for the shipment",
      "Check trailer availability and route clearance for delivery timeline",
      "Assign driver, coordinate port gate or factory loading, and dispatch",
      "Confirm loaded container delivery and manage empty return if required"
    ],
    benefits: [
      "20ft and 40ft container chassis availability",
      "Empty container repositioning capability",
      "Driver coordination with port gate teams",
      "Flexible dispatch and standing arrangement options",
      "Nationwide trailer coverage from Karachi base"
    ],
    faqs: [
      {
        question: "Do you provide trailers for empty container repositioning?",
        answer: "Yes. Empty container moves between port depots, container yards, and factories are supported alongside loaded container transport."
      },
      {
        question: "Can trailer services be booked in advance for regular shipment volumes?",
        answer: "Yes. Regular clients can arrange standing trailer schedules aligned to port release patterns, factory dispatch dates, or export cut-off requirements."
      },
      {
        question: "What is the difference between a flatbed trailer and a container trailer?",
        answer: "A container trailer (chassis) uses twist locks to secure ISO containers in place. A flatbed trailer is an open platform used for oversized, non-containerized, or break-bulk cargo that does not fit in a standard container."
      }
    ]
  },
  {
    slug: "low-bed-trailer-services",
    title: "Low Bed Trailer Services",
    eyebrow: "Oversized cargo",
    summary: "Low bed trailer support for heavy machinery, plant equipment, project cargo, and industrial cargo movement across Pakistan.",
    description: "Pakistan's infrastructure investment under CPEC and national power sector expansion programmes has generated consistent demand for oversized and heavy cargo transport. Transformers, generators, turbine components, and construction plant regularly arrive at Karachi Port and Port Qasim as break-bulk or project cargo and require low-bed trailer transport to project sites across the country. NHMP regulations require abnormal load permits and, in many cases, police escort for cargo exceeding standard dimensional or weight limits on national highways and motorways. PK Transporters coordinates pre-movement route surveys, NHMP permit applications, and night-movement scheduling — the most common approach for urban route segments where overhead clearances and traffic are most restrictive.",
    keywords: ["low bed trailer Pakistan", "lowboy trailer Karachi", "heavy equipment transport Pakistan", "oversized cargo transport Pakistan"],
    industries: ["EPC contractors", "Power plant projects", "Construction companies", "Mining equipment importers", "Industrial machinery buyers"],
    process: [
      "Assess cargo dimensions, weight, and loading constraints at origin point",
      "Survey route for overhead clearances, bridge weight limits, and road surface",
      "Obtain route movement permission and escort coordination if required by NHMP",
      "Execute low-bed move with specialized drivers and on-route communication"
    ],
    benefits: [
      "Multi-axle low-bed trailer availability",
      "Pre-movement route survey included",
      "Abnormal load documentation and permit coordination",
      "Night-movement capability for urban congestion routes",
      "Port and factory loading with crane coordination"
    ],
    faqs: [
      {
        question: "What types of cargo require a low-bed trailer?",
        answer: "Transformers, generators, industrial turbines, heavy plant machinery, construction equipment, large steel fabrications, and vehicles above standard flatbed height or payload thresholds typically require low-bed transport."
      },
      {
        question: "Do you handle route surveys and special movement permits for oversized cargo?",
        answer: "Yes. Pre-movement route surveys and National Highway and Motorway Police (NHMP) movement permit coordination are part of the low-bed service for oversized and overweight cargo."
      },
      {
        question: "Can low-bed trailers load directly from Karachi Port?",
        answer: "Yes. Port loading is coordinated with terminal crane operators and shipping line agents for heavy lifts arriving as break-bulk or project cargo at Karachi Port or Port Qasim."
      }
    ]
  },
  {
    slug: "heavy-cargo-transport",
    title: "Heavy Cargo Transport",
    eyebrow: "Industrial freight",
    summary: "Heavy cargo transport for factories, EPC contractors, industrial suppliers, and infrastructure cargo requiring careful route and equipment planning.",
    description: "Pakistan's national highway and motorway network — including the M-1 (Islamabad–Peshawar), M-2 (Lahore–Islamabad), M-3 (Lahore–Abdul Hakam), M-4 (Abdul Hakam–Multan), and N-55 (Karachi–Lahore National Highway) — forms the backbone of heavy cargo movement. NHMP enforces a maximum speed of 90 km/h for heavy transport vehicles on motorways and 65 km/h on highways, alongside strict overloading checks. Goods transport vehicles that are overweight at motorway weight bridges are stopped, fined, and required to off-load excess cargo before proceeding. PK Transporters prepares weight-bridge compliant loading plans before dispatch to prevent these delays on high-value industrial moves.",
    keywords: ["heavy cargo transport Pakistan", "heavy haulage Pakistan", "industrial freight Karachi", "project cargo transport Pakistan"],
    industries: ["EPC project companies", "Steel and metal traders", "Construction material suppliers", "Power sector operators", "Government infrastructure projects"],
    process: [
      "Document cargo weight, dimensions, and loading constraints in full",
      "Identify trailer type, axle configuration, and weight distribution plan",
      "Plan route with road authority clearance and weight bridge compliance",
      "Execute movement with documentation, escort if required, and on-route check-ins"
    ],
    benefits: [
      "Heavy haulage equipment and operational experience",
      "Pakistan highway and motorway route knowledge",
      "Weight-bridge compliance documentation",
      "Crane and rigging coordination at loading points",
      "24/7 dispatch availability for critical infrastructure cargo"
    ],
    faqs: [
      {
        question: "What is the maximum payload you can handle for heavy cargo?",
        answer: "Payload capacity depends on trailer configuration, axle spread, and route permissions. The team assesses each heavy cargo move individually based on weight, dimensions, and destination to confirm compliance with NHMP axle load limits."
      },
      {
        question: "Do you coordinate crane lifts for heavy cargo loading?",
        answer: "Yes. Crane coordination is available at major industrial zones, port terminals, and project sites for cargo that requires mechanical lifting at origin or destination."
      },
      {
        question: "Can you transport heavy cargo to remote project sites?",
        answer: "Yes. Delivery to remote construction sites, power plant locations, and industrial project sites across Pakistan is supported with advance route planning."
      }
    ]
  },
  {
    slug: "freight-services",
    title: "Freight Services",
    eyebrow: "Multimodal freight",
    summary: "Freight services covering road cargo, inland freight, sea freight coordination, air freight support, and customs-connected logistics.",
    description: "Pakistan's freight market spans road, sea, and air modes, with road transport carrying the dominant share of domestic cargo movement. The country's total trade passed through approximately 54 million tons of cargo at Karachi Port alone in FY2024–25. Road freight rates on the Karachi–Lahore route reached approximately Rs14,000 per ton in April 2026 following a sharp rise in diesel prices, making route and mode optimisation a genuine cost lever for businesses with regular freight volumes. PK Transporters coordinates road cargo, sea freight documentation, and air freight support under a single contact — reducing the coordination burden for businesses managing multiple shipment types simultaneously.",
    keywords: ["freight services Pakistan", "multimodal freight Pakistan", "cargo services Karachi", "commercial freight company Pakistan"],
    industries: ["Trading companies", "Distributors", "Manufacturers", "Retail chains", "E-commerce fulfilment teams"],
    process: [
      "Define freight mode required: road, sea coordination, or air freight support",
      "Confirm cargo type, weight, dimensions, and pickup location",
      "Arrange collection, documentation, and carrier or vehicle coordination",
      "Deliver to final destination with status updates throughout transit"
    ],
    benefits: [
      "Road, sea, and air freight coordination under one contact",
      "Commercial cargo priority handling",
      "Customs-ready documentation workflow",
      "Nationwide last-mile delivery capability",
      "Transparent freight estimate before cargo moves"
    ],
    faqs: [
      {
        question: "What types of freight do you handle?",
        answer: "Commercial, industrial, containerized, break-bulk, project, and express cargo are covered across road, sea coordination, and air freight modes for import and export clients."
      },
      {
        question: "Can you manage both inbound and outbound freight?",
        answer: "Yes. Inbound import freight from port through to delivery and outbound export freight from factory to vessel are both within the scope of services."
      },
      {
        question: "Do you offer freight consolidation for smaller shipments?",
        answer: "LCL consolidation options are available for smaller cargo volumes that do not fill a full container. Confirm your cargo weight and CBM on inquiry for a consolidation quote."
      }
    ]
  },
  {
    slug: "freight-forwarding",
    title: "Freight Forwarding",
    eyebrow: "Import/export logistics",
    summary: "Freight forwarding support for import/export businesses needing documentation coordination, carrier alignment, customs clearance, and inland delivery.",
    description: "Freight forwarding in Pakistan involves navigating WeBOC — the Federal Board of Revenue's web-based customs system — where clearing agents file goods declarations, pay import duties, and receive channel-based risk assessment (Green, Yellow, or Red) before a container can leave the port. Pakistan's imports reached record levels in recent years, with Karachi Port processing over 1,093 container vessels in FY2024–25. PK Transporters works with licensed clearing agents to coordinate pre-arrival documentation filing, HS code verification, duty payment timing, and port release — compressing the clearance timeline and reducing the risk of demurrage charges that accumulate once a container's free days expire.",
    keywords: ["freight forwarding Pakistan", "import export forwarder Karachi", "customs freight forwarder Pakistan", "sea freight forwarder Karachi"],
    industries: ["Importers", "Exporters", "Manufacturing companies", "Trading houses", "Pharmaceutical companies"],
    process: [
      "Receive shipment details: origin, destination, commodity, Incoterms, and cargo weight",
      "Coordinate carrier booking, bill of lading documentation, and customs filing",
      "Arrange inland collection at origin or port delivery at destination",
      "Manage cargo release, customs clearance, and final inland transport"
    ],
    benefits: [
      "Import and export documentation expertise",
      "Carrier booking and BL coordination",
      "Customs agent network for port clearance",
      "Port release and dray coordination post-clearance",
      "End-to-end shipment visibility from booking to delivery"
    ],
    faqs: [
      {
        question: "What does freight forwarding include?",
        answer: "Freight forwarding covers carrier booking, bill of lading coordination, customs filing through WeBOC, duty payment coordination, port release management, and inland delivery to the final destination."
      },
      {
        question: "Do you handle both FCL and LCL freight forwarding?",
        answer: "Yes. Full container load (FCL) and less-than-container load (LCL) groupage forwarding are both supported for import and export shipments."
      },
      {
        question: "Can you forward regulated or sensitive cargo?",
        answer: "Yes, with advance notice and proper documentation. Regulated commodities require specific permits from PSQCA, DRAP, or other relevant authorities and pre-shipment coordination before filing the goods declaration."
      }
    ]
  },
  {
    slug: "sea-freight",
    title: "Sea Freight",
    eyebrow: "Ocean cargo",
    summary: "Sea freight coordination for containerized imports and exports moving through Karachi Port and Port Qasim.",
    description: "Karachi Port and Port Qasim together handle Pakistan's entire ocean trade, with Karachi Port processing 2.65 million TEUs and over 54 million tons of total cargo in FY2024–25 alone — its highest annual volume on record. The port served 1,943 vessels during the year, including 1,093 container ships. Pakistan's exports to the Middle East typically transit in 5–10 days; shipments to European markets take 18–25 days. Pakistan's textile exports — which reached $17.887 billion in FY2024–25, representing 55.83% of total national exports — move almost entirely by sea through these two ports, making vessel cut-off management and container placement one of the most time-critical logistics tasks in the country.",
    keywords: ["sea freight Pakistan", "ocean freight Karachi", "FCL sea freight Pakistan", "container shipping Karachi Port"],
    industries: ["Exporters shipping to international markets", "Importers receiving sea containers", "Shipping agencies", "Textile export companies", "Industrial equipment buyers"],
    process: [
      "Confirm origin port, destination port, container type, and sailing requirements",
      "Arrange carrier booking and confirm vessel schedule and cut-off dates",
      "Coordinate cargo stuffing, export documentation, and bill of lading issuance",
      "Manage port release and inland delivery coordination on arrival"
    ],
    benefits: [
      "Karachi Port and Port Qasim shipping expertise",
      "FCL and LCL sea freight options",
      "Export documentation and BL coordination",
      "Pre-arrival clearance preparation",
      "Import container release and dray coordination"
    ],
    faqs: [
      {
        question: "Which ports do you use for sea freight in Pakistan?",
        answer: "Sea freight operations primarily use Karachi Port (KICT, PICT) and Port Qasim (QICT, FOTCO). The port selection depends on cargo type, shipping line allocation, and destination. Karachi Port processed a record 2.65 million TEUs in FY2024–25."
      },
      {
        question: "How long does sea freight take from Pakistan to the Middle East?",
        answer: "Transit times to Gulf destinations are typically 5 to 10 days from Karachi Port depending on the carrier, vessel schedule, and destination port."
      },
      {
        question: "Can you handle sea freight for Pakistan's textile exports?",
        answer: "Yes. Textile export sea freight is a core part of operations, covering container placement at factories, stuffing coordination, port delivery before cut-off, and export BL documentation. Pakistan's textile sector exported $17.887 billion in FY2024–25, representing over 55% of total exports."
      }
    ]
  },
  {
    slug: "air-freight",
    title: "Air Freight",
    eyebrow: "Urgent shipments",
    summary: "Air freight coordination for time-sensitive commercial cargo, spare parts, documents, and high-priority supply chain needs.",
    description: "Air freight from Pakistan operates primarily through Jinnah International Airport in Karachi (cargo throughput capacity exceeding 100,000 tonnes annually), Allama Iqbal International in Lahore, and Islamabad International Airport. It is the right mode for time-sensitive shipments where the sea freight transit of 5–25 days to major markets is too slow — typically for pharmaceuticals, fashion samples, spare parts, electronics, and perishables. Air freight rates are approximately 4–6 times higher per kilogram than sea freight on equivalent lanes, so the decision to ship by air is a cost-versus-time calculation. PK Transporters coordinates airside documentation, air waybill issuance, and airport-to-door delivery at destination.",
    keywords: ["air freight Pakistan", "air cargo Karachi", "express cargo Pakistan", "urgent shipment Karachi airport"],
    industries: ["Pharmaceutical companies", "Spare parts suppliers", "Electronics importers", "Fashion and garment exporters", "Time-critical commercial cargo teams"],
    process: [
      "Confirm cargo dimensions, weight, commodity HS code, and airline requirements",
      "Check airline availability and airport handling requirements at origin",
      "Coordinate airside documentation, air waybill (AWB), and customs filing",
      "Arrange origin collection and destination delivery from airport"
    ],
    benefits: [
      "Karachi airport cargo coordination",
      "Express and economy air freight options",
      "Air waybill and customs documentation support",
      "Airport-to-door delivery at destination",
      "Priority handling for time-critical shipments"
    ],
    faqs: [
      {
        question: "When should I use air freight instead of sea freight?",
        answer: "Air freight is appropriate when transit time is critical, cargo is high-value relative to its weight, shelf life is limited, or the shipment window is too tight for sea transit. Sea freight from Karachi to the Gulf takes 5–10 days; air freight typically takes 1–3 days."
      },
      {
        question: "What cargo is restricted from air transport?",
        answer: "Lithium batteries, flammable liquids, compressed gases, and other hazardous materials are subject to IATA Dangerous Goods Regulations and airline restrictions. Confirmation is required before booking for any regulated commodity."
      },
      {
        question: "Can you arrange air freight from Lahore or Islamabad airports?",
        answer: "Yes. Air freight coordination is available via Allama Iqbal International (Lahore) and Islamabad International Airport in addition to Jinnah International in Karachi."
      }
    ]
  },
  {
    slug: "inland-transportation",
    title: "Inland Transportation",
    eyebrow: "Nationwide delivery",
    summary: "Inland transportation from ports and warehouses to Lahore, Islamabad, Rawalpindi, Faisalabad, Sialkot, Multan, Peshawar, and Pakistan-wide destinations.",
    description: "Pakistan's motorway and national highway network connects Karachi Port to every major commercial city in the country. The M-9 motorway links the port area to the M-2 superhighway, which runs from Karachi through Lahore to Islamabad — the primary freight artery for containerized cargo. Road freight rates on the Karachi–Lahore corridor have risen to approximately Rs14,000 per ton as of April 2026 due to fuel price increases, making accurate freight estimates and efficient route planning a key buyer priority. PK Transporters covers the full national freight map: Karachi to Lahore (1,200 km, 2–3 days), Karachi to Islamabad (1,400 km, 3–5 days), and secondary routes to Faisalabad, Sialkot, Multan, Hyderabad, Sukkur, and Peshawar.",
    keywords: ["inland transportation Pakistan", "road transport Pakistan", "Karachi to Lahore cargo", "nationwide freight delivery Pakistan"],
    industries: ["Importers receiving nationwide delivery", "Distribution companies", "FMCG brands", "Industrial equipment buyers", "Factory-to-factory cargo teams"],
    process: [
      "Define pickup point (port, warehouse, or factory) and final delivery destination",
      "Confirm cargo type, weight, and vehicle requirement",
      "Schedule route with transit time estimate based on destination and cargo",
      "Execute delivery with real-time status communication to consignee"
    ],
    benefits: [
      "National highway and motorway route network",
      "Container trailer, flatbed, and covered truck options",
      "Karachi–Lahore–Islamabad corridor specialization",
      "Delivery to secondary cities including Faisalabad, Sialkot, and Multan",
      "Route-time transparency before booking confirmation"
    ],
    faqs: [
      {
        question: "Do you provide Karachi to Lahore container transport?",
        answer: "Yes. Karachi to Lahore is one of the most frequent routes, covering the National Highway and Motorway M-2 corridor (approximately 1,200 km) with 20ft and 40ft container capacity, typically 2–3 days in transit."
      },
      {
        question: "What is the transit time from Karachi to Islamabad?",
        answer: "Karachi to Islamabad road transport typically takes 3 to 5 days covering approximately 1,400 km via the National Highway and M-2/M-1 motorway depending on cargo type, vehicle availability, and route conditions."
      },
      {
        question: "Can you deliver to factory gates and industrial estates?",
        answer: "Yes. Factory gate delivery is standard, including access to major industrial estates in Karachi, Lahore, Faisalabad, Sialkot, and Islamabad."
      }
    ]
  },
  {
    slug: "road-cargo",
    title: "Road Cargo",
    eyebrow: "Commercial cargo",
    summary: "Road cargo services for industrial goods, palletized shipments, containerized cargo, and factory-to-market distribution.",
    description: "Road transport is the dominant mode for domestic cargo movement in Pakistan, handling the bulk of commercial freight between cities. The country's goods transport fleet operates under the National Logistics Policy and NHMP dimensional rules, with heavy transport vehicles subject to a 90 km/h motorway speed limit and strict overloading checks — a crackdown on overcharging and overloading was renewed in March 2026. For commercial cargo clients, the practical implication is that legitimate operators with weight-compliant vehicles complete moves on schedule, while under-documented operators face delays at motorway checkposts. PK Transporters operates with full road documentation, transparent freight pricing, and vehicles calibrated to the legal axle load requirements for each route.",
    keywords: ["road cargo Pakistan", "truck freight Karachi", "commercial road transport Pakistan", "FTL road cargo Pakistan"],
    industries: ["Wholesale distributors", "Building material companies", "Food and commodity traders", "Industrial raw material buyers", "Retail chain distribution teams"],
    process: [
      "Define cargo type: containerized, palletized, break-bulk, or commercial goods",
      "Confirm vehicle type required: container trailer, flatbed, or covered cargo truck",
      "Load, document, and dispatch cargo on the scheduled date",
      "Deliver to destination with proof of delivery and status confirmation"
    ],
    benefits: [
      "Full truckload (FTL) and part-load options",
      "Container trailer and flatbed vehicle availability",
      "Commercial freight priority lanes on major routes",
      "Transparent road freight pricing",
      "B2B road cargo experience across industries"
    ],
    faqs: [
      {
        question: "What is the difference between FTL and part-load road cargo?",
        answer: "Full truckload (FTL) dedicates an entire vehicle to one client's cargo. Part-load or LTL shares the vehicle across multiple clients, reducing cost for smaller volumes."
      },
      {
        question: "Can you deliver road cargo to smaller cities like Faisalabad or Multan?",
        answer: "Yes. The road network covers secondary cities including Faisalabad, Multan, Gujranwala, Hyderabad, and Sukkur in addition to major urban centres."
      },
      {
        question: "Do you provide temperature-controlled road cargo?",
        answer: "Reefer and temperature-controlled transport options are available on inquiry for pharmaceutical, food, and perishable cargo requiring cold chain handling."
      }
    ]
  },
  {
    slug: "customs-clearance",
    title: "Customs Clearance",
    eyebrow: "Port documentation",
    summary: "Customs clearance coordination for import/export shipments with document readiness, cargo release support, and final-mile delivery planning.",
    description: "Pakistan Customs processes import declarations through WeBOC (Web-Based One Customs), assigning each shipment a risk channel: Green (automated release, fastest), Yellow (document review), or Red (physical examination, slowest). Standard clearance takes 2–5 working days; Red Channel examination adds 1–3 days. The government has proposed reducing free container days at ports from 5 to 3 days for Green and Yellow channel cargo to reduce congestion, making pre-arrival filing — submitting the goods declaration before the vessel berths — more important than ever for cost-conscious importers. PK Transporters coordinates with licensed clearing agents on HS code accuracy, pre-arrival GD filing, duty calculation, and examination readiness to keep clearance timelines as short as possible.",
    keywords: ["customs clearance Pakistan", "customs agent Karachi", "import customs clearance Pakistan", "FBR customs documentation Karachi"],
    industries: ["Importers with direct port shipments", "Exporters needing clearance coordination", "Trading companies", "Pharmaceutical importers", "Machinery and equipment buyers"],
    process: [
      "Receive shipping documents: bill of lading, commercial invoice, packing list, and GD draft",
      "File goods declaration (GD) with FBR and Pakistan Customs through WeBOC",
      "Pay applicable import duties and handle examination or scanning if required",
      "Obtain cargo release order and coordinate port container pickup and inland transport"
    ],
    benefits: [
      "Import and export customs documentation experience",
      "HS code classification and duty assessment guidance",
      "Karachi Port and Port Qasim clearance coverage",
      "Pre-arrival documentation preparation",
      "Coordination with licensed customs clearing agents"
    ],
    faqs: [
      {
        question: "What documents are required for customs clearance in Pakistan?",
        answer: "Standard import clearance requires a commercial invoice, packing list, bill of lading (or air waybill), goods declaration filed through WeBOC, and any commodity-specific permits such as SROs, PSQCA approvals, or DRAP certificates where applicable."
      },
      {
        question: "How long does customs clearance take at Karachi Port?",
        answer: "Standard import clearance takes 2 to 5 working days under the WeBOC system. Green Channel clearance (no inspection) is fastest. Yellow Channel adds a document review stage. Red Channel physical examination adds 1 to 3 additional days. Pakistan Customs is targeting a reduction to under 48 hours for Green and Yellow channel cargo."
      },
      {
        question: "Can you handle clearance for regulated or restricted commodities?",
        answer: "Yes, with advance notice and proper documentation. Regulated commodities such as food, pharmaceuticals, chemicals, and machinery require permits from PSQCA, DRAP, or other relevant regulatory authorities before clearance can proceed."
      }
    ]
  },
  {
    slug: "warehousing-distribution",
    title: "Warehousing & Distribution",
    eyebrow: "Storage and dispatch",
    summary: "Warehousing and distribution support for commercial inventory, import cargo staging, export consolidation, and route-based dispatch.",
    description: "Port-adjacent warehousing in Karachi serves two primary functions: staging import cargo between port release and upcountry dispatch, and consolidating export cargo before container stuffing and port delivery. The alternative to warehousing — leaving a container at the port — triggers demurrage charges that compound daily once free days expire. With Karachi Port targeting a reduction of the free period from 5 days to 3 days for Green and Yellow channel cargo, importers who arrange warehouse staging for upcountry shipments reduce their exposure to these costs. PK Transporters offers short-term and medium-term storage near the port, with inbound trailer delivery, inventory management, and multi-drop distribution to buyers across Pakistan.",
    keywords: ["warehousing Pakistan", "cargo storage Karachi", "distribution warehouse Pakistan", "import cargo staging Karachi port"],
    industries: ["Importers with staged delivery needs", "Exporters consolidating shipments", "FMCG distributors", "E-commerce fulfilment teams", "Seasonal inventory businesses"],
    process: [
      "Define storage duration, cargo type, volume, and inbound delivery schedule",
      "Allocate warehouse space and coordinate inbound trailer delivery",
      "Manage inventory receipts, bin locations, and dispatch orders",
      "Pick, pack, and dispatch to end customers or the next logistics leg"
    ],
    benefits: [
      "Karachi port-adjacent warehouse options",
      "Import cargo staging and de-stuffing support",
      "Export consolidation and container stuffing coordination",
      "Flexible short-term and medium-term storage",
      "Route-based dispatch and multi-drop distribution"
    ],
    faqs: [
      {
        question: "Do you offer short-term warehouse storage for import cargo?",
        answer: "Yes. Short-term and medium-term storage is available for import cargo that needs to be staged before final delivery, with port-adjacent options to minimise secondary transport costs and avoid port demurrage."
      },
      {
        question: "Can you manage distribution from a warehouse to multiple delivery points?",
        answer: "Yes. Route-based multi-drop dispatch and distribution to retail points, industrial buyers, and end clients is part of the warehousing service."
      },
      {
        question: "What types of cargo can be warehoused?",
        answer: "General commercial cargo, industrial goods, dry consumer goods, and packaged imports are supported. Cold storage and temperature-sensitive warehousing is available on inquiry."
      }
    ]
  },
  {
    slug: "karachi-port-logistics",
    title: "Karachi Port Logistics",
    eyebrow: "Karachi priority",
    summary: "Karachi port logistics for container pickup, cargo release coordination, port-to-warehouse moves, and nationwide dispatch.",
    description: "Karachi Port is Pakistan's busiest maritime gateway, handling 2.65 million TEUs and 54 million tons of total cargo in FY2024–25 — its highest annual throughput on record. The port received 1,943 vessels during the year, of which 1,093 were container ships. Its main container terminals — KICT (Karachi International Container Terminal) and PICT (Pakistan International Container Terminal) — operate 24 hours a day. The most common bottleneck is not the terminal itself but the documentation gap between vessel arrival and customs clearance: importers who file the goods declaration through WeBOC before the vessel berths consistently achieve faster release than those who begin documentation after arrival. PK Transporters coordinates pre-arrival prep to keep gate-out timelines tight.",
    keywords: ["Karachi port logistics", "KICT container services", "PICT cargo handling Karachi", "port logistics company Karachi"],
    industries: ["Direct port importers", "Shipping lines", "CFS and CY operators", "Freight forwarders", "Export cargo teams"],
    process: [
      "Receive cargo release notification from shipping line or clearing agent",
      "Coordinate gate pass, terminal slot, and trailer assignment",
      "Move container from terminal to warehouse, factory, or delivery point",
      "Confirm delivery and provide gate-out and delivery documentation"
    ],
    benefits: [
      "KICT, PICT, and KPT terminal gate experience",
      "Port gate procedure and time-slot knowledge",
      "Same-day port dray for released containers",
      "Port documentation and gate-pass coordination",
      "City delivery from port gate on the same move"
    ],
    faqs: [
      {
        question: "Which Karachi Port terminals do you cover?",
        answer: "Operations cover KICT (Karachi International Container Terminal), PICT (Pakistan International Container Terminal), KPT general cargo berths, and Kemari/West Wharf facilities."
      },
      {
        question: "How do you coordinate cargo release at Karachi Port?",
        answer: "The team aligns with your clearing agent on gate pass readiness, container release status through WeBOC, and terminal slot timing to ensure trailer availability matches the cargo release window."
      },
      {
        question: "Can you arrange port-to-warehouse moves on short notice?",
        answer: "Yes, subject to trailer availability. Same-day moves are possible for containers with confirmed release orders and advance notice before the terminal gate schedule closes."
      }
    ]
  },
  {
    slug: "port-qasim-logistics",
    title: "Port Qasim Logistics",
    eyebrow: "Port Qasim cargo",
    summary: "Port Qasim logistics for industrial importers, automotive suppliers, bulk-adjacent container cargo, and inland delivery routes.",
    description: "Port Qasim, located approximately 35–45 km east of central Karachi along the Korangi Creek, is Pakistan's second major deep-water port and the preferred gateway for automotive imports, fertilisers, bulk liquids, steel, and industrial raw materials. Its main container terminal, QICT (Qasim International Container Terminal), handles FCL containers alongside bulk and liquid berths at FOTCO and other facilities. The port's industrial corridor — connecting directly to the SITE and Korangi industrial zones — makes it well-suited for heavy industrial cargo that would otherwise transit through central Karachi traffic to reach these zones from the city port. PK Transporters is established at QICT and FOTCO gate procedures with trailers based to serve the Port Qasim catchment.",
    keywords: ["Port Qasim logistics", "QICT container transport", "Port Qasim cargo Pakistan", "industrial port logistics Karachi"],
    industries: ["Automotive parts importers", "Steel and chemical importers", "Power sector cargo teams", "Bulk commodity handlers", "Industrial equipment buyers"],
    process: [
      "Confirm container release from QICT or FOTCO terminal",
      "Coordinate trailer assignment and terminal gate appointment",
      "Move container inland to warehouse, factory, or dry port",
      "Deliver and document container handover at final point"
    ],
    benefits: [
      "QICT and FOTCO terminal familiarity",
      "Industrial corridor route coverage from Port Qasim",
      "Port Qasim to SITE and Korangi zone delivery",
      "Heavy and oversized cargo capability",
      "Nationwide dispatch from Port Qasim gate"
    ],
    faqs: [
      {
        question: "What terminals operate at Port Qasim?",
        answer: "Port Qasim's main container facilities are QICT (Qasim International Container Terminal) and FOTCO. Additional bulk liquid, fertiliser, and general cargo berths serve non-containerized commodities including automotive vehicles, chemicals, and steel."
      },
      {
        question: "Is Port Qasim better for industrial cargo than Karachi Port?",
        answer: "Port Qasim serves automotive, chemical, fertiliser, and bulk-adjacent container cargo. Karachi Port handles a higher volume of general containerized trade. The preferred port is typically determined by shipping line allocation, though cargo type can influence the choice."
      },
      {
        question: "How far is Port Qasim from central Karachi?",
        answer: "Port Qasim is approximately 35 to 45 km from central Karachi. Transit time to SITE, Korangi, and Landhi industrial zones is typically 1 to 2 hours depending on traffic and gate timing."
      }
    ]
  },
  {
    slug: "afghanistan-transit-cargo",
    title: "Afghanistan Transit Cargo",
    eyebrow: "Transit cargo",
    summary: "Afghanistan transit cargo coordination through Pakistan with documentation alignment, road movement planning, and border-route visibility.",
    description: "The Afghanistan Pakistan Transit Trade Agreement (APTTA) governs all commercial cargo transiting Pakistan destined for Afghanistan, requiring bonded carrier vehicles, transit bond guarantees, and specific commodity compliance to prevent cargo diversion. Pakistan is Afghanistan's primary import corridor, with the Chaman–Kandahar route (via Quetta) and the Torkham–Jalalabad route (via Peshawar) as the two main road arteries. Transit cargo enters through Karachi Port or Port Qasim, is placed under customs bond at the port, and moves under NHMP escort where required to the border crossing point. NLC (National Logistics Corporation) operates bonded trucks on these routes, and PK Transporters coordinates with both NLC and private bonded carriers to move Afghanistan-bound containers from Karachi to Chaman or Torkham.",
    keywords: ["Afghanistan transit cargo Pakistan", "APTTA transit Karachi", "Afghanistan border cargo Pakistan", "transit freight Pakistan Afghanistan"],
    industries: ["Afghan importers using Pakistan routes", "Transit trade companies", "Forwarding agents with Afghan clients", "APTTA registered carriers", "Cross-border trading businesses"],
    process: [
      "Confirm APTTA transit documentation, cargo manifest, and commodity compliance",
      "Coordinate bonded carrier assignment and port container pickup",
      "Move cargo via Karachi–Chaman or Karachi–Torkham route under transit bond",
      "Hand over at border crossing with full transit documentation package"
    ],
    benefits: [
      "APTTA and transit bond documentation experience",
      "Karachi–Chaman and Karachi–Torkham route coverage",
      "NLC and private bonded carrier coordination",
      "Border crossing documentation support",
      "Cargo visibility from Karachi port to border handover"
    ],
    faqs: [
      {
        question: "What is APTTA and how does it apply to Afghanistan transit cargo?",
        answer: "The Afghanistan Pakistan Transit Trade Agreement (APTTA) governs transit cargo moved through Pakistan to Afghanistan. It requires specific bonded carrier vehicles, transit declarations, and commodity restrictions to prevent cargo diversion at the border."
      },
      {
        question: "Which border crossings do you use for Afghanistan transit?",
        answer: "The main border crossings used are Chaman (via Quetta, connecting to Kandahar) and Torkham (via Peshawar, connecting to Jalalabad and Kabul)."
      },
      {
        question: "What documents are required for Afghanistan transit cargo?",
        answer: "Required documents include the APTTA transit declaration, bonded carrier certificate, bill of lading, commercial invoice, packing list, goods declaration, and any commodity-specific permits applicable under the agreement."
      }
    ]
  },
  {
    slug: "industrial-cargo-movement",
    title: "Industrial Cargo Movement",
    eyebrow: "Factory logistics",
    summary: "Industrial cargo movement for textile mills, manufacturers, suppliers, project sites, and production-critical deliveries.",
    description: "Pakistan's industrial base — concentrated in Karachi's SITE, Korangi, and Landhi zones, Lahore's Sundar and Kot Lakhpat estates, and Faisalabad's textile industrial parks — generates continuous demand for inbound raw materials and outbound finished goods. Textile mills, steel plants, pharmaceutical manufacturers, and food processing factories all depend on coordinated vehicle dispatch aligned to shift timings and production cycles. A missed delivery of raw material to a textile mill running export orders on a vessel cut-off deadline has direct financial consequences. PK Transporters provides standing dispatch arrangements for factories with regular cargo volumes and coordinates port-to-factory inbound delivery with the same scheduling discipline applied to export container movements.",
    keywords: ["industrial cargo transport Pakistan", "factory logistics Pakistan", "manufacturing cargo movement", "plant equipment transport Pakistan"],
    industries: ["Textile mills", "Steel and metal plants", "Pharmaceutical manufacturers", "Food processing factories", "Chemical and polymer plants"],
    process: [
      "Define factory loading requirements, cargo specifications, and dispatch schedule",
      "Coordinate trailer or flatbed vehicle appropriate for industrial loading",
      "Schedule dispatch aligned to factory shift timings and production cycles",
      "Deliver to receiving factory, industrial estate, or project site"
    ],
    benefits: [
      "Factory gate loading and unloading experience",
      "Industrial estate route familiarity across Pakistan",
      "Machinery and heavy goods handling capability",
      "Production-aligned delivery scheduling",
      "Standing dispatch arrangements for regular cargo volumes"
    ],
    faqs: [
      {
        question: "Do you handle regular daily or weekly factory cargo dispatches?",
        answer: "Yes. Standing dispatch arrangements are available for factories with regular outbound cargo volumes, aligned to production schedules and distribution routes."
      },
      {
        question: "Can you manage inbound raw material deliveries to factories?",
        answer: "Yes. Port-to-factory inbound delivery for raw materials, industrial inputs, and machinery is a core part of the industrial cargo service."
      },
      {
        question: "Do you cover industrial zones in Faisalabad and Sialkot?",
        answer: "Yes. Coverage includes textile and industrial zones in Faisalabad, Sialkot, Gujranwala, and surrounding manufacturing cities in addition to Karachi and Lahore."
      }
    ]
  },
  {
    slug: "textile-industry-logistics",
    title: "Textile Industry Logistics",
    eyebrow: "Exporter support",
    summary: "Textile logistics for exporters, mills, garment suppliers, and shipment teams moving raw material, finished goods, and export containers.",
    description: "Pakistan's textile sector is the country's largest export industry, generating $17.887 billion in FY2024–25 — a 7.39% year-on-year increase — and accounting for 55.83% of total national exports. The sector spans cotton yarn, fabric, knitwear, garments, home textiles, and made-ups, exported predominantly to the EU, US, UK, and Gulf markets. Every export shipment begins with a container placement at a factory or approved stuffing point, loading against a vessel booking, and delivery to the port before the shipping line's cargo cut-off. PK Transporters specialises in this export container cycle for mills in Karachi, Faisalabad, Sialkot, Lahore, and Gujranwala — with priority scheduling built around vessel sailing dates.",
    keywords: ["textile logistics Pakistan", "export container textile Karachi", "garment freight Pakistan", "textile cargo transport Lahore"],
    industries: ["Garment exporters", "Yarn and fabric mills", "Knitwear manufacturers", "Home textile exporters", "Textile trading companies"],
    process: [
      "Confirm export container booking, packing schedule, and shipping line cut-off",
      "Coordinate empty container placement at factory or approved stuffing point",
      "Transport stuffed container to port before the vessel's cargo cut-off deadline",
      "Coordinate shipping instructions, BL issuance, and export document handover"
    ],
    benefits: [
      "Textile export container expertise",
      "Cut-off deadline management and scheduling",
      "Factory stuffing coordination in Karachi and Lahore",
      "Export documentation workflow support",
      "Priority scheduling for high-volume textile exporters"
    ],
    faqs: [
      {
        question: "How do you handle factory stuffing for textile export containers?",
        answer: "Empty containers are placed at the factory or stuffing point, loading is coordinated with the export team, and the stuffed container is transported to port before the shipping line's cargo cut-off time."
      },
      {
        question: "Which textile production cities do you cover?",
        answer: "Textile logistics coverage includes Karachi, Lahore, Faisalabad, Sialkot, Gujranwala, and surrounding textile manufacturing zones — both for port delivery and inbound raw material transport. Pakistan's textile exports of $17.887 billion in FY2024–25 come primarily from these production hubs."
      },
      {
        question: "Can you handle multiple export containers weekly for high-volume textile exporters?",
        answer: "Yes. Regular high-volume exporters receive priority scheduling, dedicated trailer coordination, and standing weekly arrangements aligned to vessel sailing dates."
      }
    ]
  },
  {
    slug: "import-export-logistics",
    title: "Import Export Logistics",
    eyebrow: "Trade logistics",
    summary: "Import export logistics for companies that need forwarding, customs, inland transport, warehousing, and container movement under one plan.",
    description: "Pakistan's trade flows — 2.65 million TEUs inbound and outbound through Karachi Port in FY2024–25, against a backdrop of $17.887 billion in textile exports and significant machinery, chemical, and consumer goods imports — require coordinated management across customs, inland transport, and documentation. A fragmented supply chain where the importer manages the clearing agent, the logistics company, and the warehouse operator separately creates unnecessary hand-off risk. PK Transporters provides a single-contact model for the full import or export cycle: forwarding coordination, WeBOC customs clearance, container dray, and warehouse or factory delivery managed as one process rather than three separate vendor relationships.",
    keywords: ["import export logistics Pakistan", "trade logistics Karachi", "full service freight Pakistan", "import logistics company Pakistan"],
    industries: ["Import trading companies", "Export houses", "Buying agents", "Retail importers", "Industrial equipment traders"],
    process: [
      "Map the full cargo journey from origin port or factory to final delivery point",
      "Coordinate forwarding, customs clearance, inland transport, and warehousing under one plan",
      "Align documentation across customs authority, shipping line, and inland delivery",
      "Deliver to final destination and confirm with delivery receipt"
    ],
    benefits: [
      "Single-contact import and export logistics management",
      "Forwarding, clearance, and inland transport under one team",
      "Import duty and regulatory guidance on request",
      "Pakistan-wide delivery from port to final destination",
      "Recurring importer and exporter account management"
    ],
    faqs: [
      {
        question: "Can you manage the full import process from port arrival to warehouse delivery?",
        answer: "Yes. Services cover port release coordination through WeBOC, customs clearance, container dray, and warehouse or factory delivery as a single managed process."
      },
      {
        question: "Do you work with both small importers and high-volume trade accounts?",
        answer: "Yes. Single-container importers and regular high-volume trade accounts are both served, with account management for clients with recurring import or export volumes."
      },
      {
        question: "Can you coordinate export logistics including container booking and documentation?",
        answer: "Yes. Full export coordination is available from factory stuffing through container booking, port delivery, customs export filing, and BL documentation."
      }
    ]
  }
];

export const cityPages: CityPage[] = [
  {
    slug: "logistics-company-karachi",
    title: "Logistics Company Karachi",
    city: "Karachi",
    focus: "logistics company Karachi",
    summary: "PK Transporters operates as a logistics company in Karachi with direct access to Karachi Port, Port Qasim, and the city's major industrial zones including SITE, Korangi, and Landhi. The operation serves importers, exporters, factories, and shipping agencies moving container cargo through the port and across Pakistan.",
    body: "Karachi is Pakistan's commercial capital and the entry point for the majority of the country's containerized trade. Karachi Port processed 2.65 million TEUs and 54 million tons of total cargo in FY2024–25 — its highest annual throughput on record — across 1,943 vessel calls. The city's industrial zones fan outward from the port: SITE to the northwest, Korangi to the east, and Landhi and Bin Qasim further along the coastal corridor. PK Transporters operates within this network daily, coordinating container moves from KICT, PICT, and Port Qasim terminals to factory gates, warehouses, and dry port facilities, and dispatching inland trailers to Lahore, Islamabad, Faisalabad, and other major cities from the Karachi base.",
    industrialZones: ["SITE Industrial Area", "Korangi Industrial Area", "Landhi Industrial Area", "Port Qasim Industrial Zone", "North Karachi Industrial Area"],
    routes: ["Karachi Port to SITE Industrial Area", "Port Qasim to Korangi", "Karachi to Lahore", "Karachi to Islamabad/Rawalpindi"],
    faqs: [
      {
        question: "What logistics services are available in Karachi?",
        answer: "PK Transporters provides container transport, port haulage, freight forwarding, customs clearance coordination through WeBOC, road cargo, warehousing, and nationwide inland delivery from Karachi Port and Port Qasim."
      },
      {
        question: "Which industrial areas in Karachi do you serve?",
        answer: "Coverage includes SITE Industrial Area, Korangi Industrial Area, Landhi Industrial Area, Port Qasim Industrial Zone, North Karachi, and Bin Qasim industrial corridors."
      },
      {
        question: "Do you handle container transport from both Karachi Port and Port Qasim?",
        answer: "Yes. Both major Karachi ports are covered — KICT and PICT at Karachi Port, and QICT and FOTCO at Port Qasim — with trailers assigned based on terminal and cargo release status."
      },
      {
        question: "Can you arrange same-day container pickup from Karachi Port?",
        answer: "Same-day pickup is possible for containers with confirmed port release and trailer availability. Contact the team with your container number and release status to check scheduling."
      }
    ]
  },
  {
    slug: "container-transport-karachi",
    title: "Container Transport Karachi",
    city: "Karachi",
    focus: "container transport Karachi",
    summary: "Container transport in Karachi connects Karachi Port and Port Qasim to factories, warehouses, dry ports, and commercial hubs across the city and nationwide. PK Transporters covers FCL container pickups, port haulage, factory deliveries, and inland dispatch from Karachi to the national highway network.",
    body: "Container transport within Karachi involves coordinating port gate procedures at KICT, PICT, or QICT, aligning with customs clearance timelines under WeBOC, and routing containers to industrial zones spread across a city of over 20 million people. Traffic in Karachi is heaviest during morning peak hours, making dispatch timing a practical variable that experienced operators plan around. The government's current initiative to reduce container dwell time at Karachi Port from 3–6 days to under 48 hours means importers who prepare documentation before vessel arrival and have a confirmed haulier will have a significant edge over those who begin both steps after the ship berths. For upcountry shipments, Karachi serves as the dispatch point for Pakistan's longest freight corridors: Karachi–Lahore (1,200 km) and Karachi–Islamabad (1,400 km).",
    industrialZones: ["SITE Industrial Area", "Korangi Industrial Area", "Landhi Industrial Area", "Port Qasim Industrial Zone", "North Karachi Industrial Area"],
    routes: ["Karachi Port to Lahore", "Port Qasim to Islamabad", "Karachi to Faisalabad", "Karachi to Rawalpindi"],
    faqs: [
      {
        question: "What container sizes do you transport from Karachi?",
        answer: "20ft and 40ft containers are transported from both Karachi Port and Port Qasim, including 40ft High Cube for textile and bulk cargo."
      },
      {
        question: "Can you move containers from Karachi to other cities?",
        answer: "Yes. Nationwide container transport covers Lahore, Islamabad, Rawalpindi, Faisalabad, Sialkot, Multan, Peshawar, and other major cargo destinations."
      },
      {
        question: "How quickly can a container be transported from Karachi Port to a Karachi factory?",
        answer: "City-to-city Karachi moves from port to factory or warehouse typically take a few hours once the container is released, depending on traffic and the destination industrial zone."
      },
      {
        question: "Do you handle empty container repositioning in Karachi?",
        answer: "Yes. Empty container moves between port depots, container yards, and factory stuffing points are supported alongside loaded container transport."
      }
    ]
  },
  {
    slug: "freight-forwarding-karachi",
    title: "Freight Forwarding Karachi",
    city: "Karachi",
    focus: "freight forwarding Karachi",
    summary: "Freight forwarding in Karachi involves carrier booking, bill of lading coordination, customs clearance, and inland delivery management for import and export cargo. PK Transporters supports Karachi-based traders, manufacturers, and shipping agencies with end-to-end forwarding coordination through both Karachi Port and Port Qasim.",
    body: "Karachi handles the bulk of Pakistan's international trade documentation burden. Every import container that arrives at Karachi Port or Port Qasim must be cleared through WeBOC, with the clearing agent filing a goods declaration under the correct HS code, paying assessed import duties through the banking system, and obtaining a release order before the gate pass is issued. For export cargo, shipping instructions must be submitted to the shipping line before the vessel's document cut-off — typically 24–48 hours before the cargo cut-off. Pakistan's textile exports from Karachi alone represent a large share of the $17.887 billion the sector earned in FY2024–25, each shipment requiring accurate BL documentation aligned to buyer purchase orders and letter of credit terms. PK Transporters coordinates each of these steps with licensed clearing agents and shipping line representatives.",
    industrialZones: ["SITE Industrial Area", "Korangi Industrial Area", "Landhi Industrial Area", "Port Qasim Industrial Zone", "Karachi Export Processing Zone"],
    routes: ["Karachi Port to Lahore", "Port Qasim to upcountry", "Karachi to Faisalabad textile corridor", "Karachi export to Middle East and Europe"],
    faqs: [
      {
        question: "What does freight forwarding in Karachi cover?",
        answer: "Freight forwarding from Karachi includes carrier booking, bill of lading coordination, customs export or import filing through WeBOC, port release management, and inland transport to the final destination."
      },
      {
        question: "Which shipping lines operate through Karachi for freight forwarding?",
        answer: "Karachi Port and Port Qasim are served by major global shipping lines covering Middle East, Far East, European, and North American trade lanes. Karachi Port received 1,093 container vessels in FY2024–25. Carrier selection depends on sailing schedule and available space."
      },
      {
        question: "Do you handle export freight forwarding for textile shipments from Karachi?",
        answer: "Yes. Textile export forwarding is a core service — covering container placement at factories, export stuffing, cut-off management, shipping instructions, and BL issuance."
      },
      {
        question: "Can you forward LCL cargo from Karachi?",
        answer: "Yes. LCL groupage forwarding for smaller cargo volumes is available alongside FCL forwarding for full container shipments."
      }
    ]
  },
  {
    slug: "logistics-company-lahore",
    title: "Logistics Company Lahore",
    city: "Lahore",
    focus: "logistics company Lahore",
    summary: "PK Transporters supports Lahore-based businesses with container deliveries from Karachi Port, export container coordination for textile and industrial exporters, and freight management for cargo arriving at Lahore Dry Port. Active delivery zones include the Sundar Industrial Estate, Quaid-e-Azam Industrial Estate, Kot Lakhpat, and the Raiwind Road industrial corridor.",
    body: "Lahore is Pakistan's second-largest commercial city and the hub of the Punjab industrial belt. The city is approximately 1,200 km from Karachi Port via the National Highway and M-2 motorway — a 2–3 day transit by container trailer. Lahore Dry Port (Mughalpura Inland Container Terminal, MICT) allows importers to clear customs in Lahore under a bond transfer from the seaport, avoiding the Karachi clearance bottleneck. The city's textile industry — centred in Sundar, Kot Lakhpat, and the Raiwind Road corridor — is a major contributor to Pakistan's $17.887 billion textile export total in FY2024–25. PK Transporters serves Lahore with both inbound import container delivery and outbound export container placement for factory stuffing, with scheduling aligned to vessel cut-off deadlines at Karachi Port.",
    industrialZones: ["Sundar Industrial Estate", "Quaid-e-Azam Industrial Estate", "Kot Lakhpat", "Raiwind Road Industrial Corridor"],
    routes: ["Karachi to Lahore", "Lahore to Karachi Port", "Lahore to Islamabad/Rawalpindi commercial belt", "Lahore dry port to factory"],
    faqs: [
      {
        question: "Do you provide container transport from Karachi to Lahore?",
        answer: "Yes. Karachi to Lahore is a primary route, with 20ft and 40ft container transport via the National Highway and M-2 motorway corridor, covering approximately 1,200 km in 2–3 days."
      },
      {
        question: "Which industrial areas in Lahore do you deliver to?",
        answer: "Delivery covers Sundar Industrial Estate, Quaid-e-Azam Industrial Estate, Kot Lakhpat, Raiwind Road, and other commercial zones in and around Lahore."
      },
      {
        question: "Can you handle export container logistics for Lahore textile factories?",
        answer: "Yes. Empty container placement, factory stuffing coordination, and port delivery to Karachi before vessel cut-off are all available for Lahore-based textile exporters."
      },
      {
        question: "What is the transit time from Karachi to Lahore by road?",
        answer: "Road transit from Karachi Port to Lahore typically takes 2 to 3 days for container transport depending on dispatch timing and delivery point access."
      }
    ]
  },
  {
    slug: "container-transport-lahore",
    title: "Container Transport Lahore",
    city: "Lahore",
    focus: "container transport Lahore",
    summary: "Container transport to and from Lahore runs primarily on the Karachi–Lahore National Highway and M-2 motorway, one of Pakistan's busiest freight corridors. PK Transporters handles 20ft and 40ft container deliveries to Lahore factories, warehouses, and dry port facilities, as well as empty container placement for export stuffing.",
    body: "The Karachi–Lahore freight corridor is the busiest container route in Pakistan, carrying a large share of the country's total inland container movements. Road freight on this corridor reached approximately Rs14,000 per ton in April 2026 following a 40% increase in rates due to rising diesel costs — a figure that makes per-container economics a live concern for importers and exporters alike. NHMP enforces a 90 km/h speed limit for heavy transport vehicles on the M-2 motorway and conducts regular weight-bridge checks; compliant operators who load within legal axle limits avoid the fines and delays that affect overloaded vehicles at motorway checkposts. PK Transporters covers the full Lahore container cycle: import delivery from Karachi Port to factory or dry port, and export container placement for return to port before vessel cut-off.",
    industrialZones: ["Sundar Industrial Estate", "Quaid-e-Azam Industrial Estate", "Kot Lakhpat", "Raiwind Road Industrial Corridor"],
    routes: ["Karachi Port to Lahore", "Lahore dry port to factory gate", "Lahore to Islamabad cargo corridor", "Lahore to Faisalabad industrial belt"],
    faqs: [
      {
        question: "What container sizes do you transport to Lahore?",
        answer: "20ft and 40ft containers are both transported to Lahore, including 40ft High Cube for textile bales and high-volume commercial cargo."
      },
      {
        question: "Do you deliver containers to Lahore dry port?",
        answer: "Yes. Delivery to Lahore Dry Port (MICT) is supported alongside factory gate and warehouse delivery across the Lahore industrial zones."
      },
      {
        question: "Can you transport containers from Lahore to other cities?",
        answer: "Yes. Onward moves from Lahore to Islamabad, Rawalpindi, Faisalabad, and Gujranwala are available as part of the broader inland transport network."
      },
      {
        question: "Do you place empty containers at Lahore factories for export stuffing?",
        answer: "Yes. Empty container placement from the Lahore dry port or container depot to factory stuffing points is coordinated alongside the outbound export transport."
      }
    ]
  },
  {
    slug: "logistics-company-islamabad",
    title: "Logistics Company Islamabad",
    city: "Islamabad",
    focus: "logistics company Islamabad",
    summary: "Islamabad's logistics demand is shaped by government procurement, CPEC-linked cargo, and commercial imports for the twin-city market of Rawalpindi and Islamabad. PK Transporters delivers container cargo from Karachi Port to Islamabad's I-9 and I-10 industrial areas and manages freight for businesses in the federal capital and surrounding trade zones.",
    body: "Islamabad and Rawalpindi together form Pakistan's twin-city capital region with a combined population exceeding 5 million, generating consistent demand for imported consumer goods, industrial supplies, and government procurement cargo. The city sits at the northern terminus of the M-2 motorway, approximately 1,400 km by road from Karachi Port — a 3–5 day container transit. CPEC infrastructure investment has added a significant layer of project cargo to the region, including construction equipment, electrical materials, and industrial plant for special economic zones and energy projects along the corridor. Pakistan has completed 38 of approximately 90 CPEC projects as of 2026, with ongoing construction maintaining demand for heavy cargo logistics in and around the federal capital.",
    industrialZones: ["I-9 Industrial Area", "I-10 Industrial Area", "Kahuta Road industrial corridor", "Rawat Industrial Area"],
    routes: ["Karachi to Islamabad", "Islamabad to Karachi Port", "Islamabad to Rawalpindi commercial belt", "Islamabad to Lahore cargo corridor"],
    faqs: [
      {
        question: "Do you provide container transport from Karachi to Islamabad?",
        answer: "Yes. Karachi to Islamabad container transport covers the approximately 1,400 km route via National Highway and M-2/M-1 motorway, typically taking 3 to 5 days."
      },
      {
        question: "Which industrial areas in Islamabad do you serve?",
        answer: "Delivery covers I-9 and I-10 industrial areas, Rawat Industrial Area, Kahuta Road, and commercial zones across the Islamabad and Rawalpindi twin-city area."
      },
      {
        question: "Can you handle cargo for CPEC-related projects in or near Islamabad?",
        answer: "Yes. CPEC-linked industrial and infrastructure cargo is within the scope of services, including project cargo and equipment transport to relevant sites. Pakistan has completed 38 of approximately 90 CPEC projects as of 2026."
      },
      {
        question: "Do you manage freight for government or institutional cargo in Islamabad?",
        answer: "Yes. Government procurement cargo and institutional import logistics are handled with the same documentation and compliance standards as commercial cargo."
      }
    ]
  },
  {
    slug: "container-transport-islamabad",
    title: "Container Transport Islamabad",
    city: "Islamabad",
    focus: "container transport Islamabad",
    summary: "Container transport to Islamabad covers a road route of approximately 1,400 km from Karachi Port via the National Highway and motorway network. PK Transporters manages 20ft and 40ft container deliveries to Islamabad and Rawalpindi commercial zones, coordinating port release, trailer dispatch, and factory or warehouse delivery.",
    body: "Container deliveries to Islamabad travel one of Pakistan's most important freight arteries: the National Highway from Karachi north through Sukkur and Multan, joining the M-2 motorway to Lahore and then the M-1 into Islamabad. NHMP maintains active checkposts along this route, enforcing the 90 km/h heavy vehicle speed limit and weight-bridge compliance; overloaded or under-documented vehicles are held until the issue is resolved. For Islamabad-based importers, the 3–5 day transit from Karachi Port makes document readiness at the port end the biggest variable — containers cleared quickly under WeBOC Green Channel dispatch significantly faster than those held for Red Channel examination. NLC's dry port at Islamabad offers an alternative clearance point for importers who prefer upcountry customs processing.",
    industrialZones: ["I-9 Industrial Area", "I-10 Industrial Area", "Rawat Industrial Area", "Kahuta Road industrial corridor"],
    routes: ["Karachi Port to Islamabad", "Islamabad to Rawalpindi twin-city belt", "Islamabad to Lahore cargo corridor", "Islamabad to Peshawar commercial route"],
    faqs: [
      {
        question: "What is the transit time for container transport from Karachi to Islamabad?",
        answer: "Karachi to Islamabad container transport typically takes 3 to 5 days by road covering approximately 1,400 km, depending on dispatch timing, route, and delivery point."
      },
      {
        question: "Can containers be delivered to both Islamabad and Rawalpindi on the same move?",
        answer: "Yes. The twin-city proximity means containers can be routed to either Islamabad or Rawalpindi delivery points on the same transport arrangement."
      },
      {
        question: "Do you handle container transport from Islamabad to Karachi Port for export?",
        answer: "Yes. Outbound empty container placement at Islamabad-based factories and loaded export container transport to Karachi Port is available for exporters in the federal capital region."
      },
      {
        question: "Can you deliver containers to locations beyond Islamabad on the same route?",
        answer: "Yes. Onward delivery to Peshawar and northern Punjab cities can be coordinated as part of the same transport arrangement."
      }
    ]
  },
  {
    slug: "logistics-company-rawalpindi",
    title: "Logistics Company Rawalpindi",
    city: "Rawalpindi",
    focus: "logistics company Rawalpindi",
    summary: "Rawalpindi is an active commercial hub adjacent to Islamabad, with high cargo demand along the Saddar commercial belt, Chakri Road, and GT Road industrial corridor. PK Transporters serves Rawalpindi businesses with container deliveries, road cargo, and freight coordination from Karachi Port.",
    body: "Rawalpindi's commercial activity is closely linked to its neighbour Islamabad, and the two cities effectively share a logistics catchment area. The GT Road (Grand Trunk Road, N-5) running through Rawalpindi has been a primary freight artery for centuries and remains heavily used for commercial cargo moving between Punjab and the northwest. Rawalpindi is also a gateway to Peshawar and Khyber Pakhtunkhwa, making it a distribution node for cargo destined beyond the Potohar Plateau. Container deliveries from Karachi Port to Rawalpindi cover approximately 1,400 km in 3–5 days. Road freight rates on this corridor reached approximately Rs14,000 per ton in April 2026 — making freight budgeting and confirmed pricing before dispatch a standard practice for commercial buyers.",
    industrialZones: ["Rawat Industrial Area", "Saddar commercial belt", "Chakri Road industrial corridor", "GT Road cargo corridor"],
    routes: ["Karachi to Rawalpindi", "Rawalpindi to Islamabad twin-city", "Rawalpindi to Lahore cargo route", "GT Road corridor freight"],
    faqs: [
      {
        question: "Do you provide container transport from Karachi to Rawalpindi?",
        answer: "Yes. Karachi to Rawalpindi container transport via the national highway and motorway network is available for 20ft and 40ft containers, covering approximately 1,400 km in 3–5 days."
      },
      {
        question: "Which areas of Rawalpindi do you serve?",
        answer: "Delivery covers the GT Road industrial corridor, Chakri Road, Rawat Industrial Area, Saddar commercial belt, and surrounding industrial zones."
      },
      {
        question: "Can you deliver cargo to both Rawalpindi and Islamabad on the same shipment?",
        answer: "Yes. Due to the twin-city proximity, a single container arrangement can serve delivery points in both Rawalpindi and Islamabad."
      },
      {
        question: "What is the transit time from Karachi Port to Rawalpindi?",
        answer: "Karachi to Rawalpindi road transit typically takes 3 to 5 days depending on cargo type and route conditions."
      }
    ]
  },
  {
    slug: "container-trailer-rawalpindi",
    title: "Container Trailer Rawalpindi",
    city: "Rawalpindi",
    focus: "container trailer Rawalpindi",
    summary: "Container trailer services to Rawalpindi connect Karachi Port through the GT Road and motorway freight corridor. PK Transporters places 20ft and 40ft trailers for Rawalpindi businesses needing port-to-gate delivery, factory stuffing for export, or warehouse receipt of import cargo.",
    body: "Container trailers serving the Rawalpindi corridor travel the full length of Pakistan's national highway and motorway system — departing Karachi Port via the M-9 motorway, joining the National Highway north through Sindh and southern Punjab, then the M-2 to Lahore and onward to Rawalpindi. NHMP weight-bridge checkposts operate along this corridor, and heavy transport vehicles are subject to a maximum motorway speed of 90 km/h and strict axle load limits under the National Highways and Motorways (Dimensions of Goods Transport Vehicles) Rules 2017. PK Transporters dispatches weight-compliant container trailers with full documentation for each move, ensuring no hold-ups at motorway checkposts that would delay delivery to Rawalpindi factories, warehouses, or commercial premises.",
    industrialZones: ["Rawat Industrial Area", "Saddar commercial belt", "Chakri Road industrial corridor", "GT Road cargo corridor"],
    routes: ["Karachi Port to Rawalpindi", "Rawalpindi to Karachi Port for export", "Rawalpindi to Islamabad twin-city delivery", "GT Road to Lahore corridor"],
    faqs: [
      {
        question: "Do you provide container trailer services directly to Rawalpindi?",
        answer: "Yes. 20ft and 40ft container trailers are dispatched from Karachi Port to Rawalpindi delivery points including factory gates, warehouses, and commercial premises."
      },
      {
        question: "Can you place empty containers at Rawalpindi factories for export stuffing?",
        answer: "Yes. Empty container placement and loaded export transport back to Karachi Port is available for Rawalpindi-based exporters."
      },
      {
        question: "What is the cost of container trailer transport from Karachi to Rawalpindi?",
        answer: "Freight rates depend on container size, cargo weight, and route timing. Road freight on the Karachi–Rawalpindi corridor reached approximately Rs14,000 per ton in April 2026. Request a quote with your container size and delivery address for a specific estimate."
      },
      {
        question: "Can container trailers continue from Rawalpindi to Peshawar?",
        answer: "Yes. Onward delivery from Rawalpindi to Peshawar and northern route destinations is available as a continuation of the same transport arrangement."
      }
    ]
  }
];

export const industryDetails: IndustryDetail[] = [
  {
    name: "Textile Exporters",
    description: "Container placement for factory stuffing, export cut-off management, Karachi and Lahore corridor coverage, and shipping line coordination for garment, fabric, and home textile exports to international markets."
  },
  {
    name: "Manufacturing Plants",
    description: "Inbound raw material delivery from port to factory and outbound finished goods transport to distribution points, with factory gate loading and standing dispatch arrangements for regular production volumes."
  },
  {
    name: "Import/Export Traders",
    description: "Full-cycle logistics support covering port clearance, inland delivery, and export container coordination. Suitable for FCL import containers and export cargo managed under a single freight contact."
  },
  {
    name: "Industrial Suppliers",
    description: "Cargo movement for steel, chemicals, polymers, and industrial inputs using appropriate vehicle types and weight-compliant transport documentation across Pakistan's major industrial corridors."
  },
  {
    name: "Shipping Agencies",
    description: "Port haulage, container repositioning, and inland transport for shipping line clients, including empty container management, priority port moves, and bonded cargo coordination."
  },
  {
    name: "Retail Distribution",
    description: "Commercial goods delivery from port or warehouse to retail distribution centres, covering multi-drop routes and time-sensitive FMCG cargo across urban and secondary city networks."
  },
  {
    name: "Construction & Project Cargo",
    description: "Low-bed trailer services, oversized cargo routing, crane lift coordination, and project timeline-aligned delivery for construction sites, power plants, and infrastructure projects across Pakistan."
  },
  {
    name: "Automotive & Machinery",
    description: "Imported vehicle and machinery transport from Karachi Port and Port Qasim, covering auto terminal pickup, specialised trailer equipment, and factory or showroom delivery across Pakistan."
  }
];

export const industries = industryDetails.map((i) => i.name);

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

