import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Lightbulb, Code2, Rocket, Check, Lock, Gauge, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const IdejaView = () => (
  <div className="p-5 space-y-3">
    {[["Početna", "Cilj i glavna poruka", 100], ["Usluge", "Šta nudite i kome", 75], ["Kontakt", "Kako vas klijent pronalazi", 50]].map(([t, d, w], i) => (
      <div key={t as string} className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-3 fade-up" style={{ animationDelay: `${i * 90}ms` }}>
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-xs font-semibold">{i + 1}</span>
        <div className="flex-1 min-w-0"><p className="text-sm font-medium">{t}</p><p className="text-xs text-muted-foreground truncate">{d}</p>
          <div className="mt-2 h-1 rounded bg-accent"><div className="bar-grow h-1 rounded bg-gradient-brand" style={{ width: `${w}%`, animationDelay: `${200 + i * 120}ms` }} /></div></div>
      </div>
    ))}
  </div>
);

const KodView = () => (
  <pre className="p-5 text-[13px] leading-6 font-mono overflow-x-auto">
    <code>
      <span className="text-muted-foreground">{"// hero.tsx"}</span>{"\n"}
      <span style={{ color: "var(--brand-violet)" }}>export function</span> <span style={{ color: "var(--brand-blue)" }}>Hero</span>() {"{"}{"\n"}
      {"  "}<span style={{ color: "var(--brand-violet)" }}>return</span> ({"\n"}
      {"    "}&lt;<span style={{ color: "var(--brand-blue)" }}>section</span>&gt;{"\n"}
      {"      "}&lt;h1&gt;Vaš posao, predstavljen kako treba.&lt;/h1&gt;{"\n"}
      {"    "}&lt;/<span style={{ color: "var(--brand-blue)" }}>section</span>&gt;{"\n"}
      {"  "});{"\n"}{"}"} <span className="caret" />
    </code>
  </pre>
);

const LansView = () => (
  <div className="p-5 grid grid-cols-2 gap-3">
    <div className="col-span-2 flex items-center gap-3 rounded-xl border border-border bg-card/60 p-3 fade-up">
      <Globe size={18} className="text-muted-foreground" /><span className="text-sm flex-1 truncate">vas-sajt.rs</span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground"><span className="h-1.5 w-1.5 rounded-full bg-primary-foreground glow-pulse" /> Uživo</span>
    </div>
    {[[Gauge, "Brzina", "Optimizovano"], [Lock, "HTTPS", "Bezbedna veza"], [Check, "Telefon", "Provereno"], [Check, "Računar", "Provereno"]].map(([I, t, d], i) => {
      const Icon = I as typeof Gauge;
      return (
        <div key={t as string} className="rounded-xl border border-border bg-card/60 p-3 fade-up" style={{ animationDelay: `${(i + 1) * 90}ms` }}>
          <Icon size={16} style={{ color: "var(--brand-blue)" }} /><p className="mt-2 text-sm font-medium">{t as string}</p><p className="text-xs text-muted-foreground">{d as string}</p>
        </div>
      );
    })}
  </div>
);

const phases = [
  { id: "ideja", label: "Ideja", icon: Lightbulb, file: "plan.md", title: "Skica i plan", text: "Razgovaramo o cilju, publici i sadržaju. Nastaje jasna struktura stranica.", View: IdejaView },
  { id: "kod", label: "Kod & UI", icon: Code2, file: "hero.tsx", title: "Dizajn postaje kod", text: "Skica se pretvara u čist, brz i prilagodljiv interfejs.", View: KodView },
  { id: "lansiranje", label: "Lansiranje", icon: Rocket, file: "vas-sajt.rs", title: "Sajt je uživo", text: "Provera na svim uređajima i objava. Sajt je spreman za posetioce.", View: LansView },
];
const DURATION = 6000;

export function Blueprint() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive(a => (a + 1) % phases.length), DURATION);
    return () => clearTimeout(t);
  }, [active, paused]);
  const p = phases[active] ?? phases[0]!;
  return (
    <section className="relative glass-card overflow-hidden p-5 sm:p-10" aria-labelledby="bp-title" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl glow-pulse" style={{ background: "color-mix(in oklab, var(--brand-violet) 30%, transparent)" }} />
      <div className="relative grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-start">
        <div>
          <p className="kicker">Kako nastaje sajt</p>
          <h2 id="bp-title" className="text-2xl sm:text-4xl font-semibold tracking-tight">Od ideje do lansiranja <span className="text-gradient">u 3 koraka</span></h2>
          <div className="mt-8 grid gap-3" role="tablist" aria-label="Faze rada">
            {phases.map((ph, i) => (
              <button key={ph.id} role="tab" aria-selected={i === active} onClick={() => { setActive(i); setPaused(true); }} className={`step-card ${i === active ? "is-active" : ""}`}>
                <div className="flex items-center gap-4">
                  <span className="step-icon"><ph.icon size={18} /></span>
                  <div className="flex-1"><p className="step-num">KORAK 0{i + 1}</p><p className="font-semibold">{ph.label}</p>
                    {i === active && <p className="mt-1 text-sm text-muted-foreground fade-up">{ph.text}</p>}</div>
                </div>
                {i === active && !paused && <span key={`${active}-bar`} className="step-progress bar-grow" style={{ animationDuration: `${DURATION}ms`, animationTimingFunction: "linear" }} />}
              </button>
            ))}
          </div>
          <Button asChild variant="glow" size="lg" className="mt-8"><Link to="/projekti">Pogledaj projekte <ArrowRight /></Link></Button>
        </div>
        <div className="stage" role="tabpanel" aria-label={p.title}>
          <div className="stage-bar"><span className="bp-dot" /><span className="bp-dot" /><span className="bp-dot" /><span className="ml-2">{p.file}</span><span className="ml-auto font-medium text-foreground">{p.title}</span></div>
          <div key={p.id} className="fade-up"><p.View /></div>
        </div>
      </div>
    </section>
  );
}
