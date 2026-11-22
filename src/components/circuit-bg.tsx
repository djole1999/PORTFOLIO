import { useEffect, useRef, useState } from "react";

/**
 * Pozadinska linija početne stranice: jedna svetleća "zmija" koja se
 * spušta kroz prazan prostor (levo/desno od containera i kroz razmake
 * između sekcija). Putanja se računa iz stvarnog rasporeda stranice.
 * Isključivanje: uklonite <CircuitBg /> iz src/routes/index.tsx.
 */
const R = 14;

function buildPath(host: HTMLElement, startRight = false): string {
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
  let x = startRight ? right : left;
  let d = `M ${x} 0`;
  for (const y of gaps) {
    const nx = x === left ? right : left;
    const dir = nx > x ? 1 : -1;
    d += ` V ${y - R} Q ${x} ${y} ${x + dir * R} ${y} H ${nx - dir * R} Q ${nx} ${y} ${nx} ${y + R}`;
    x = nx;
  }
  return d + ` V ${endY}`;
}

const SPEED = 225; // px u sekundi
const SEGS = [
  { len: 190, op: 0.22 },
  { len: 120, op: 0.5 },
  { len: 55, op: 1 },
];

function Snake({ d, delayHalf }: { d: string; delayHalf: boolean }) {
  const ref = useRef<SVGPathElement>(null);
  const [total, setTotal] = useState(0);
  useEffect(() => { setTotal(ref.current?.getTotalLength() ?? 0); }, [d]);
  const dur = total / SPEED;
  return (
    <>
      <path ref={ref} d={d} fill="none" stroke="none" />
      {total > 0 && SEGS.map((s) => (
        <path
          key={s.len}
          d={d}
          className="cb-pulse"
          fill="none"
          stroke="url(#cb-grad)"
          style={{
            strokeDasharray: `${s.len} ${total + 400}`,
            opacity: s.op,
            ["--from" as string]: `${s.len}`,
            ["--to" as string]: `${-total}`,
            animationDuration: `${dur}s`,
            animationDelay: delayHalf ? `${-dur / 2}s` : "0s",
          }}
        />
      ))}
    </>
  );
}

export function CircuitBg() {
  const ref = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<string[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const update = () => {
      const r = host.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
      setPaths(r.width < 768 ? [buildPath(host)] : [buildPath(host), buildPath(host, true)]);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(host);
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
      {paths[0] && (
        <svg width={size.w} height={size.h} viewBox={`0 0 ${size.w} ${size.h}`} focusable="false">
          <defs>
            <linearGradient id="cb-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={size.w} y2={size.h}>
              <stop offset="0%" stopColor="var(--brand-violet)" />
              <stop offset="100%" stopColor="var(--brand-blue)" />
            </linearGradient>
          </defs>
          {paths.map((d, i) => <Snake key={i} d={d} delayHalf={i === 1} />)}
        </svg>
      )}
    </div>
  );
}
