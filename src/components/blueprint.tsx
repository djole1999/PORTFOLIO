import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Lightbulb, Code2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const phases = [
  { id: "ideja", label: "Ideja", icon: Lightbulb, title: "Skica i plan", text: "Razgovaramo o cilju, publici i sadržaju. Nastaje jasna struktura stranica.",
    view: <div className="space-y-2"><div className="bp-line w-2/3" /><div className="grid grid-cols-3 gap-2"><div className="bp-box h-14" /><div className="bp-box h-14" /><div className="bp-box h-14" /></div><div className="bp-line w-1/2" /><div className="bp-line w-3/4" /></div> },
  { id: "kod", label: "Kod & UI", icon: Code2, title: "Dizajn postaje kod", text: "Skica se pretvara u čist, brz i prilagodljiv interfejs.",
    view: <pre className="bp-code">{`<Hero>\n  <h1>Vaš posao,</h1>\n  <p>predstavljen kako treba.</p>\n  <Button>Kontakt →</Button>\n</Hero>`}</pre> },
  { id: "lansiranje", label: "Lansiranje", icon: Rocket, title: "Sajt je uživo", text: "Provera na svim uređajima i objava — sajt je spreman za posetioce.",
    view: <div className="bp-browser"><div className="flex gap-1.5 mb-3"><span className="bp-dot" /><span className="bp-dot" /><span className="bp-dot" /></div><div className="h-3 w-1/2 rounded bg-gradient-brand mb-2" /><div className="bp-line w-3/4" /><div className="mt-3 inline-flex rounded-md bg-gradient-brand px-3 py-1 text-[10px] font-semibold text-primary-foreground">Uživo ✓</div></div> },
];

export function Blueprint() {
  const [active, setActive] = useState(0);
  const p = phases[active] ?? phases[0]!;
  return (
    <section className="glass-card p-5 sm:p-8" aria-labelledby="bp-title">
      <p className="kicker">Kako nastaje sajt</p>
      <h2 id="bp-title" className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">Od ideje do lansiranja u 3 koraka</h2>
      <div className="grid grid-cols-3 gap-2 mb-6" role="tablist">
        {phases.map((ph, i) => (
          <button key={ph.id} role="tab" aria-selected={i === active} onClick={() => setActive(i)} className={`phase-tab ${i === active ? "is-active" : ""}`}>
            <ph.icon size={18} /><span>{ph.label}</span>
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6 items-center" role="tabpanel" key={p.id}>
        <div className="fade-up"><h3 className="text-lg font-semibold">{p.title}</h3><p className="mt-2 text-muted-foreground">{p.text}</p></div>
        <div className="bp-canvas fade-up">{p.view}</div>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Button asChild variant="glow" size="lg"><Link to="/projekti">Pogledaj projekte <ArrowRight /></Link></Button>
        <Button asChild variant="outlineGlow" size="lg"><Link to="/kontakt">Kontakt</Link></Button>
      </div>
    </section>
  );
}
