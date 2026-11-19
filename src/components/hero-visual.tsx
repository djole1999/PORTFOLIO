import { ProfilePhoto } from "@/components/profile-photo";

function Cube({ x, y, s, cls }: { x: number; y: number; s: number; cls: string }) {
  const h = s * 0.58;
  return (
    <g className={cls} style={{ transformBox: "fill-box" }}>
      <path d={`M${x} ${y} l${s} ${h} l${-s} ${h} l${-s} ${-h}Z`} fill="url(#c-top)" stroke="url(#c-edge)" strokeWidth="1.2" />
      <path d={`M${x - s} ${y + h} l${s} ${h} v${s * 1.15} l${-s} ${-h}Z`} fill="url(#c-left)" stroke="url(#c-edge)" strokeWidth="1.2" />
      <path d={`M${x + s} ${y + h} l${-s} ${h} v${s * 1.15} l${s} ${-h}Z`} fill="url(#c-right)" stroke="url(#c-edge)" strokeWidth="1.2" />
    </g>
  );
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      <div className="glow-pulse absolute inset-10 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--brand-violet) 45%, transparent), transparent 70%)" }} />
      <svg viewBox="0 0 400 400" className="relative h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="c-top" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="var(--brand-violet)" stopOpacity=".55" /><stop offset="1" stopColor="var(--brand-blue)" stopOpacity=".35" /></linearGradient>
          <linearGradient id="c-left" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--brand-violet)" stopOpacity=".35" /><stop offset="1" stopColor="var(--brand-violet)" stopOpacity=".05" /></linearGradient>
          <linearGradient id="c-right" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--brand-blue)" stopOpacity=".3" /><stop offset="1" stopColor="var(--brand-blue)" stopOpacity=".04" /></linearGradient>
          <linearGradient id="c-edge" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="var(--brand-violet)" /><stop offset="1" stopColor="var(--brand-blue)" /></linearGradient>
        </defs>
        <Cube x={240} y={50} s={95} cls="float-a" />
        <Cube x={110} y={175} s={58} cls="float-b" />
        <Cube x={320} y={235} s={48} cls="float-c" />
      </svg>
      <div className="absolute bottom-0 left-0"><ProfilePhoto /></div>
    </div>
  );
}
