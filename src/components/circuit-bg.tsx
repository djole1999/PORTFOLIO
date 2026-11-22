import { useEffect, useState } from "react";

/**
 * Suptilna animirana pozadina celog sajta: tanke svetleće putanje
 * (hologram / elektronska ploča) sa impulsima koji putuju u svim smerovima.
 * Montira se jednom u SiteShell-u, pa je ista na svim stranicama bez
 * treperenja pri prelasku. Isključivanje: uklonite <CircuitBg /> iz
 * site-shell.tsx; jačina se smanjuje kroz opacity u .circuit-bg stilovima.
 */
const PATHS = [
  // leva ivica
  "M 40 -20 V 920",
  // desna ivica
  "M 1400 -20 V 920",
  // gornja ivica
  "M -20 40 H 1460",
  // donja ivica
  "M -20 860 H 1460",
  // kratka leva
  "M 70 920 V 560",
  // kratka desna
  "M 1370 -20 V 360",
] as const;

const PULSES = [
  { path: 0, dur: "13s", delay: "0s", rev: false },
  { path: 1, dur: "11s", delay: "-4s", rev: true },
  { path: 2, dur: "15s", delay: "-7s", rev: false },
  { path: 3, dur: "12s", delay: "-2s", rev: true },
  { path: 4, dur: "9s", delay: "-5s", rev: false },
  { path: 5, dur: "10s", delay: "-8s", rev: true },
] as const;

export function CircuitBg() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div aria-hidden="true" className={hidden ? "circuit-bg is-paused" : "circuit-bg"}>
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" focusable="false">
        <defs>
          <linearGradient id="cb-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand-violet)" />
            <stop offset="100%" stopColor="var(--brand-blue)" />
          </linearGradient>
        </defs>
        {PATHS.map((d, i) => (
          <path key={`base-${i}`} d={d} className="cb-base" fill="none" stroke="url(#cb-grad)" pathLength={100} />
        ))}
        {PULSES.map((p, i) => (
          <path
            key={`pulse-${i}`}
            d={PATHS[p.path]}
            className={`cb-pulse cb-p${i + 1}`}
            fill="none"
            stroke="url(#cb-grad)"
            pathLength={100}
            style={{
              animationDuration: p.dur,
              animationDelay: p.delay,
              animationDirection: p.rev ? "reverse" : "normal",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
