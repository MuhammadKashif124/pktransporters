"use client";

import { useCallback, useMemo, useState } from "react";

// Projection: lon 60.5–77.8 → x 50–950, lat 37.1–23.5 → y 30–660
// x = 50 + (lon - 60.5) * 52.02,  y = 30 + (37.1 - lat) * 46.32
const PAK_CITIES = [
  { id: "khi", name: "Karachi",    role: "Port HQ",     x: 388, y: 593, primary: true,  fleet: 480, sla: "Same-day pickup" },
  { id: "hyd", name: "Hyderabad",  role: "Sindh",       x: 459, y: 569, primary: false, fleet: 35,  sla: "Same-day" },
  { id: "lhe", name: "Lahore",     role: "Punjab hub",  x: 768, y: 285, primary: true,  fleet: 180, sla: "24h transit" },
  { id: "isb", name: "Islamabad",  role: "Capital",     x: 702, y: 185, primary: true,  fleet: 95,  sla: "28h transit" },
  { id: "rwp", name: "Rawalpindi", role: "Twin city",   x: 710, y: 196, primary: false, fleet: 60,  sla: "28h transit" },
  { id: "fsd", name: "Faisalabad", role: "Industrial",  x: 704, y: 291, primary: false, fleet: 75,  sla: "26h transit" },
  { id: "mlt", name: "Multan",     role: "Mid-route",   x: 621, y: 348, primary: false, fleet: 40,  sla: "16h transit" },
  { id: "pew", name: "Peshawar",   role: "KP",          x: 626, y: 172, primary: false, fleet: 28,  sla: "32h transit" },
  { id: "qta", name: "Quetta",     role: "Balochistan", x: 330, y: 348, primary: false, fleet: 18,  sla: "On request" },
  { id: "skt", name: "Sialkot",    role: "Export hub",  x: 762, y: 242, primary: false, fleet: 32,  sla: "28h transit" }
];

const PAK_ROUTES = [
  { from: "khi", to: "lhe", cls: "primary" },
  { from: "khi", to: "isb", cls: "primary" },
  { from: "khi", to: "fsd", cls: "primary" },
  { from: "khi", to: "mlt", cls: "secondary" },
  { from: "khi", to: "qta", cls: "secondary" },
  { from: "lhe", to: "isb", cls: "secondary" },
  { from: "lhe", to: "skt", cls: "tertiary" },
  { from: "isb", to: "pew", cls: "tertiary" },
  { from: "khi", to: "hyd", cls: "tertiary" }
];

// Accurate Pakistan border — equirectangular projection, clockwise from SW coast
const PAK_OUTLINE = `
  M 102 582
  L 128 518 L 128 403 L 102 380
  L 154 311 L 180 288
  L 232 265 L 310 242 L 388 219 L 466 196
  L 544 150 L 596 127 L 622 104 L 674 81
  L 752 58 L 794 35 L 830 30
  L 872 44 L 908 71
  L 950 104
  L 929 140 L 882 173 L 820 209 L 778 242
  L 783 288 L 747 334 L 690 380 L 648 426 L 596 472
  L 586 518 L 580 587
  L 586 633 L 528 651 L 482 656
  Q 462 648 440 633 Q 415 622 388 610 Q 362 600 326 587
  Q 284 583 206 582 Q 155 582 128 582 Q 112 582 102 582
  Z
`;

// Makran coast highlight (Arabian Sea)
const PAK_COAST = "M 482 656 Q 455 648 440 633 Q 415 622 388 610 Q 355 598 326 587 Q 284 582 206 582 L 128 582 L 102 582";

// Approximate provincial boundary sketches
const PAK_INTERIORS = [
  "M 180 400 Q 260 390 330 350 Q 390 310 420 260",   // Balochistan east boundary
  "M 420 260 Q 460 290 490 330 Q 530 380 545 430",   // Sindh-Punjab divider
  "M 596 472 Q 620 440 648 426",                      // lower Punjab-Sindh
  "M 620 300 Q 650 260 680 230 Q 700 210 720 185",   // Punjab-KPK
];

type City = (typeof PAK_CITIES)[number];
type Route = (typeof PAK_ROUTES)[number] | { from: string; to: string };

function PakistanMap({ active, setActive }: { active: string; setActive: (id: string) => void }) {
  const byId = useMemo(() => Object.fromEntries(PAK_CITIES.map((c) => [c.id, c])) as Record<string, City>, []);

  const pathFor = useCallback((route: Route) => {
    const a = byId[route.from];
    const b = byId[route.to];
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    const bend = Math.min(80, len * 0.18);
    return `M ${a.x} ${a.y} Q ${mx + nx * bend} ${my + ny * bend} ${b.x} ${b.y}`;
  }, [byId]);

  return (
    <svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid meet" className="pak-map" aria-label="Animated Pakistan logistics route map">
      <defs>
        <radialGradient id="landg" cx=".4" cy=".4" r=".7">
          <stop offset="0" stopColor="#F4F8F6" stopOpacity="1" />
          <stop offset="1" stopColor="#EFF2EE" stopOpacity="1" />
        </radialGradient>
        <linearGradient id="routeg-primary" x1="0" x2="1">
          <stop offset="0" stopColor="#0F8F5A" stopOpacity="0" />
          <stop offset=".5" stopColor="#0F8F5A" stopOpacity=".85" />
          <stop offset="1" stopColor="#0F8F5A" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="routeg-secondary" x1="0" x2="1">
          <stop offset="0" stopColor="#5A6566" stopOpacity="0" />
          <stop offset=".5" stopColor="#5A6566" stopOpacity=".5" />
          <stop offset="1" stopColor="#5A6566" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="cityHalo" cx=".5" cy=".5">
          <stop offset="0" stopColor="#0F8F5A" stopOpacity=".35" />
          <stop offset=".6" stopColor="#0F8F5A" stopOpacity=".1" />
          <stop offset="1" stopColor="#0F8F5A" stopOpacity="0" />
        </radialGradient>
        <pattern id="dotgrid" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r=".7" fill="rgba(10, 25, 18, .06)" />
        </pattern>
      </defs>

      <rect width="1000" height="700" fill="url(#dotgrid)" />
      <path d={PAK_OUTLINE} fill="url(#landg)" stroke="rgba(10, 25, 18, .18)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d={PAK_OUTLINE} fill="none" stroke="rgba(10, 25, 18, .06)" strokeWidth="3.5" strokeLinejoin="round" style={{ mixBlendMode: "multiply" }} />

      {PAK_INTERIORS.map((d) => (
        <path key={d} d={d} fill="none" stroke="rgba(10, 25, 18, .08)" strokeWidth=".9" strokeDasharray="3 5" />
      ))}

      <path d={PAK_COAST} fill="none" stroke="rgba(15, 143, 90, .4)" strokeWidth="2" strokeLinecap="round" />
      <text x="220" y="685" fontSize="10" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#8A9596" letterSpacing="2">ARABIAN SEA</text>

      <text x="200" y="420" fontSize="9" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#B5BFBF" letterSpacing="2">BALOCHISTAN</text>
      <text x="640" y="390" fontSize="9" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#B5BFBF" letterSpacing="2">PUNJAB</text>
      <text x="520" y="210" fontSize="8" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#B5BFBF" letterSpacing="1.5">KPK</text>
      <text x="440" y="530" fontSize="9" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#B5BFBF" letterSpacing="2">SINDH</text>
      <text x="790" y="75" fontSize="8" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#B5BFBF" letterSpacing="1.5">GILGIT</text>
      <text x="840" y="190" fontSize="8" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#B5BFBF" letterSpacing="1.5">AJK</text>

      <g transform="translate(940, 80)" opacity=".5">
        <circle r="22" fill="none" stroke="rgba(10, 25, 18, .15)" />
        <path d="M 0 -16 L 4 0 L 0 16 L -4 0 Z" fill="#0F8F5A" />
        <text y="-28" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#5A6566">N</text>
      </g>

      {PAK_ROUTES.map((route, index) => {
        const isPrimary = route.cls === "primary";
        const isHighlighted = active === route.from || active === route.to;
        const stroke = isPrimary ? "#0F8F5A" : "#5A6566";
        const opacity = isHighlighted ? 1 : isPrimary ? 0.65 : 0.35;
        const d = pathFor(route);
        return (
          <g key={`${route.from}-${route.to}-${index}`}>
            <path d={d} stroke={isPrimary ? "url(#routeg-primary)" : "url(#routeg-secondary)"} strokeWidth={isHighlighted ? "3" : "2"} fill="none" opacity={isHighlighted ? 1 : 0.6} />
            <path d={d} stroke={stroke} strokeWidth="1.4" fill="none" className="route-dash" opacity={opacity} strokeLinecap="round" />
            {isHighlighted && (
              <circle r="4.5" fill="#0F8F5A" stroke="white" strokeWidth="1.5">
                <animateMotion dur={isPrimary ? "5s" : "7s"} repeatCount="indefinite" path={d} />
              </circle>
            )}
          </g>
        );
      })}

      <circle r="3" fill="#0F8F5A" opacity=".7">
        <animateMotion dur="8s" repeatCount="indefinite" path={pathFor({ from: "khi", to: "lhe" })} />
      </circle>
      <circle r="3" fill="#FF8A2B" opacity=".55">
        <animateMotion dur="9s" repeatCount="indefinite" path={pathFor({ from: "khi", to: "isb" })} />
      </circle>

      {PAK_CITIES.map((city) => {
        const isActive = active === city.id;
        const isPort = city.id === "khi";
        const halo = isActive ? 40 : city.primary ? 28 : 18;
        const radius = isActive ? 8 : city.primary ? 6 : 4.5;
        return (
          <g key={city.id} onMouseEnter={() => setActive(city.id)} onFocus={() => setActive(city.id)} style={{ cursor: "pointer" }} tabIndex={0}>
            <circle cx={city.x} cy={city.y} r={halo} fill="url(#cityHalo)" />
            {isActive && (
              <circle cx={city.x} cy={city.y} r="10" fill="none" stroke="#0F8F5A" strokeWidth="1.2">
                <animate attributeName="r" from="10" to="36" dur="1.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="1" to="0" dur="1.8s" repeatCount="indefinite" />
              </circle>
            )}
            <circle cx={city.x} cy={city.y} r={radius + 2} fill="white" />
            <circle cx={city.x} cy={city.y} r={radius} fill={isPort ? "#0A1912" : "#0F8F5A"} />
            {isPort && <circle cx={city.x} cy={city.y} r={radius - 2} fill="#0F8F5A" />}
            <g transform={`translate(${city.x + radius + 8}, ${city.y - 4})`}>
              <text fontSize={city.primary ? "15" : "13"} fontFamily="Inter, system-ui, sans-serif" fontWeight={city.primary ? 600 : 500} fill="#0A1912">
                {city.name}
              </text>
              {city.primary && (
                <text y="14" fontSize="10" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#8A9596" letterSpacing="1.2">
                  {city.role.toUpperCase()}
                </text>
              )}
            </g>
          </g>
        );
      })}

      <g transform="translate(28, 28)">
        <rect width="180" height="62" rx="12" fill="white" stroke="rgba(10, 25, 18, .1)" />
        <text x="14" y="22" fontSize="10" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#8A9596" letterSpacing="2">COVERAGE</text>
        <text x="14" y="48" fontSize="22" fontFamily="Inter, system-ui, sans-serif" fontWeight="500" fill="#0A1912">
          24 cities · <tspan fontFamily="Georgia, serif" fontStyle="italic" fill="#0F8F5A">6 hubs</tspan>
        </text>
      </g>
    </svg>
  );
}

export function PakistanMapStage() {
  const [active, setActive] = useState("khi");
  const activeData = PAK_CITIES.find((c) => c.id === active) ?? PAK_CITIES[0];

  return (
    <div className="pk-map-stage">
      <div className="pk-map-stage-inner">
        <PakistanMap active={active} setActive={setActive} />

        <div className="pk-map-chip tr live">
          <div>
            <div className="k">Active shipments</div>
            <div className="v tabular-nums">1,247 <em>live</em></div>
          </div>
        </div>

        <div className="pk-map-chip br flex-col items-start min-w-[220px]">
          <div className="k mb-0">{activeData.role.toUpperCase()}</div>
          <div className="v text-[26px]">{activeData.name}</div>
          <div className="mt-2 flex w-full gap-5 border-t border-[var(--pk-line)] pt-3">
            <div>
              <div className="k mb-0 text-[9px]">Fleet</div>
              <div className="text-[15px] font-medium">{activeData.fleet}</div>
            </div>
            <div>
              <div className="k mb-0 text-[9px]">SLA</div>
              <div className="text-sm font-medium">{activeData.sla}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
