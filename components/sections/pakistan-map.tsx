"use client";

import { useCallback, useMemo, useState } from "react";

const PAK_CITIES = [
  { id: "khi", name: "Karachi", role: "Port HQ", x: 240, y: 555, primary: true, fleet: 480, sla: "Same-day pickup" },
  { id: "hyd", name: "Hyderabad", role: "Sindh", x: 295, y: 510, primary: false, fleet: 35, sla: "Same-day" },
  { id: "lhe", name: "Lahore", role: "Punjab hub", x: 650, y: 290, primary: true, fleet: 180, sla: "24h transit" },
  { id: "isb", name: "Islamabad", role: "Capital", x: 555, y: 185, primary: true, fleet: 95, sla: "28h transit" },
  { id: "rwp", name: "Rawalpindi", role: "Twin city", x: 540, y: 200, primary: false, fleet: 60, sla: "28h transit" },
  { id: "fsd", name: "Faisalabad", role: "Industrial", x: 555, y: 335, primary: false, fleet: 75, sla: "26h transit" },
  { id: "mlt", name: "Multan", role: "Mid-route", x: 470, y: 405, primary: false, fleet: 40, sla: "16h transit" },
  { id: "pew", name: "Peshawar", role: "KP", x: 425, y: 175, primary: false, fleet: 28, sla: "32h transit" },
  { id: "qta", name: "Quetta", role: "Balochistan", x: 200, y: 380, primary: false, fleet: 18, sla: "On request" },
  { id: "skt", name: "Sialkot", role: "Export hub", x: 690, y: 240, primary: false, fleet: 32, sla: "28h transit" }
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

const PAK_OUTLINE = `
  M 295 575
  L 270 562 L 248 568 L 215 558 L 180 540 L 160 510 L 168 478 L 175 445
  L 140 420 L 115 380 L 95 340 L 90 300 L 110 265 L 145 245 L 180 220
  L 180 195 L 200 165 L 235 145 L 280 140 L 320 145 L 360 135 L 390 145
  L 410 130 L 440 110 L 460 100 L 480 115 L 490 140 L 510 130 L 540 115
  L 575 110 L 595 95 L 615 85 L 640 95 L 660 110 L 680 95 L 695 75
  L 715 65 L 740 75 L 750 100 L 745 130 L 720 145 L 710 165 L 720 185
  L 735 200 L 740 225 L 720 240 L 700 250 L 680 270 L 660 295 L 685 305
  L 705 325 L 705 350 L 690 370 L 695 395 L 685 420 L 665 430 L 640 425
  L 620 410 L 595 415 L 575 430 L 555 445 L 540 460 L 535 480 L 515 495
  L 490 500 L 470 510 L 450 510 L 425 500 L 405 510 L 385 528 L 365 545
  L 340 555 L 320 568 L 295 575 Z
`;

const PAK_COAST = "M 160 570 Q 230 600 320 580 L 380 555 L 410 540";

const PAK_INTERIORS = [
  "M 280 145 L 270 220 L 240 280 L 200 320",
  "M 460 110 L 440 250 L 420 350 L 400 450",
  "M 110 280 L 200 350 L 280 480"
];

type City = (typeof PAK_CITIES)[number];
type Route = (typeof PAK_ROUTES)[number] | { from: string; to: string };

function PakistanMap({ active, setActive }: { active: string; setActive: (id: string) => void }) {
  const byId = useMemo(() => Object.fromEntries(PAK_CITIES.map((city) => [city.id, city])) as Record<string, City>, []);

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
    const cx = mx + nx * bend;
    const cy = my + ny * bend;
    return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
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
      <path d={PAK_OUTLINE} fill="url(#landg)" stroke="rgba(10, 25, 18, .18)" strokeWidth="1.25" strokeLinejoin="round" />
      <path d={PAK_OUTLINE} fill="none" stroke="rgba(10, 25, 18, .06)" strokeWidth="3" strokeLinejoin="round" style={{ mixBlendMode: "multiply" }} />

      {PAK_INTERIORS.map((d) => (
        <path key={d} d={d} fill="none" stroke="rgba(10, 25, 18, .07)" strokeWidth=".8" strokeDasharray="2 4" />
      ))}

      <path d={PAK_COAST} fill="none" stroke="rgba(15, 143, 90, .35)" strokeWidth="1.5" strokeLinecap="round" />
      <text x="220" y="610" fontSize="10" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#8A9596" letterSpacing="2">ARABIAN SEA</text>

      <text x="220" y="430" fontSize="9" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#B5BFBF" letterSpacing="2.5">BALOCHISTAN</text>
      <text x="500" y="380" fontSize="9" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#B5BFBF" letterSpacing="2.5">PUNJAB</text>
      <text x="400" y="140" fontSize="9" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#B5BFBF" letterSpacing="2.5">KHYBER PAKHTUNKHWA</text>
      <text x="280" y="510" fontSize="9" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#B5BFBF" letterSpacing="2.5">SINDH</text>
      <text x="690" y="135" fontSize="9" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#B5BFBF" letterSpacing="2.5">GILGIT</text>

      <g transform="translate(920, 80)" opacity=".5">
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
            <path
              d={d}
              stroke={isPrimary ? "url(#routeg-primary)" : "url(#routeg-secondary)"}
              strokeWidth={isHighlighted ? "3" : "2"}
              fill="none"
              opacity={isHighlighted ? 1 : 0.6}
            />
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
  const activeData = PAK_CITIES.find((city) => city.id === active) ?? PAK_CITIES[0];

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
