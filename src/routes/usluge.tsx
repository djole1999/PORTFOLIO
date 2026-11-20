import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Code2, Globe, MonitorSmartphone, Shapes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/site-shell";
import { services } from "@/lib/site-data";

const icons = [Globe, Code2, MonitorSmartphone, Shapes];

export const Route = createFileRoute("/usluge")({
  component: Usluge,
  head: () => ({ meta: [
    { title: "Usluge | Đorđe Milenković" },
    { name: "description", content: "Izrada poslovnih sajtova, web aplikacija, sajtova prilagođenih telefonu i prilagođenih digitalnih rešenja." },
    { property: "og:title", content: "Usluge | Đorđe Milenković" },
    { property: "og:description", content: "Izrada poslovnih sajtova, web aplikacija, sajtova prilagođenih telefonu i prilagođenih digitalnih rešenja." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Usluge() {
  return (
    <div className="wrap py-12 sm:py-20">
      <PageHeading kicker="Usluge" title={<>Dobra ideja zaslužuje <span className="text-gradient">dobro rešenje.</span></>} intro="Od prvog koncepta do poslednjeg detalja | digitalna rešenja koja imaju smisla." />
      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s, i) => { const Icon = icons[i] ?? Globe; return (
          <article key={s.name} className="glass-card p-6 fade-up">
            <div className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow mb-5"><Icon size={20} /></div>
            <h2 className="text-xl font-semibold">{s.name}</h2>
            <p className="mt-2 text-muted-foreground">{s.description}</p>
            <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">Šta dobijate</p>
            <ul className="mt-2 space-y-2">{s.gets.map(g => <li key={g} className="flex gap-2 text-sm"><Check size={16} className="text-brand-blue shrink-0 mt-0.5" />{g}</li>)}</ul>
          </article>
        ); })}
      </div>
      <div className="mt-12 flex justify-center"><Button asChild variant="glow" size="lg"><Link to="/kontakt">Razgovarajmo o vašem projektu <ArrowRight /></Link></Button></div>
    </div>
  );
}
