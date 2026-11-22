import { useEffect, useRef, useState } from "react";

/**
 * Pozadinska linija početne stranice: jedna svetleća "zmija" koja se
 * spušta kroz prazan prostor (levo/desno od containera i kroz razmake
 * između sekcija). Putanja se računa iz stvarnog rasporeda stranice.
 * Isključivanje: uklonite <CircuitBg /> iz src/routes/index.tsx.
 */
const R = 14;

function buildPath(host: HTMLElement): string {
  const wrap = host.parentElement?.querySelector<HTMLElement>(".wrap");
  if (!wrap) return "";
  const hostRect = host.getBoundingClientRect();
  const w = hostRect.width;
  const h = hostRect.height;
  if (w < 768) return `M 9 0 V ${h}`;
  const wr = wrap.getBoundingClientRect();
  const left = (wr.left - hostRect.left) / 2;
  const right = w - left;
  const kids = Array.from(wrap.children).filter((c) => !c.classList.contains("circuit-bg")) as HTMLElement[];
  const gaps: number[] = [];
  for (let i = 0; i < kids.length - 1; i++) {
    const a = kids[i]!.getBoundingClientRect();
    const b = kids[i + 1]!.getBoundingClientRect();
    gaps.push((a.bottom + b.top) / 2 - hostRect.top);
  }
  const footer = host.parentElement?.querySelector("footer");
  const endY = footer ? footer.getBoundingClientRect().top - hostRect.top : h;
  let x = left;
  let d = `M ${x} 0`;
  for (const y of gaps) {
    const nx = x === left ? right : left;
    const dir = nx > x ? 1 : -1;
    d += ` V ${y - R} Q ${x} ${y} ${x + dir * R} ${y} H ${nx - dir * R} Q ${nx} ${y} ${nx} ${y + R}`;
    x = nx;
  }
  return d + ` V ${endY}`;
}

export function CircuitBg() {
  const ref = useRef<HTMLDivElement>(null);
  const [d, setD] = useState("");
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const update = () => {
      const r = host.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
      setD(buildPath(host));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(host);
    host.parentElement && ro.observe(host.parentElement);
    window.addEventListener("resize", update);
    const onVis = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className={hidden ? "circuit-bg is-paused" : "circuit-bg"}>
      {d && (
        <svg width={size.w} height={size.h} viewBox={`0 0 ${size.w} ${size.h}`} focusable="false">
          <defs>
            <linearGradient id="cb-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--brand-violet)" />
              <stop offset="100%" stopColor="var(--brand-blue)" />
            </linearGradient>
          </defs>
          <path d={d} className="cb-base" fill="none" stroke="url(#cb-grad)" />
          <path d={d} className="cb-pulse cb-tail" fill="none" stroke="url(#cb-grad)" pathLength={100} />
          <path d={d} className="cb-pulse" fill="none" stroke="url(#cb-grad)" pathLength={100} />
        </svg>
      )}
    </div>
  );
}
