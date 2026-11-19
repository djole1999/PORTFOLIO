import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Code2, ExternalLink, Globe, RefreshCw, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/site-shell";
import { services } from "@/lib/site-data";

const icons = [Globe, Store, Code2, RefreshCw];

export const Route = createFileRoute("/usluge")({
  component: Usluge,
  head: () => ({ meta: [
    { title: "Usluge | Đorđe Milenković" },
    { name: "description", content: "Sajtovi i web aplikacije za mala lokalna preduzeća u Srbiji: sajt firme, sajt sa ponudom, aplikacija po meri i redizajn." },
    { property: "og:title", content: "Usluge | Đorđe Milenković" },
    { property: "og:description", content: "Sajtovi i web aplikacije za mala lokalna preduzeća u Srbiji: sajt firme, sajt sa ponudom, aplikacija po meri i redizajn." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Usluge() {
  return (
    <div className="wrap py-12 sm:py-20">
      <PageHeading kicker="Usluge" title={<>Sajt koji vam donosi <span className="text-gradient">pozive i upite.</span></>} />
      <p className="-mt-8 mb-12 max-w-2xl text-lg text-foreground/85">Radim sa malim lokalnim firmama u Srbiji. Izaberite šta vam treba, a ja vam kažem tačno šta dobijate, za koliko i do kada.</p>
      <div className="grid w-full sm:grid-cols-2 gap-6">
        {services.map((s, i) => { const Icon = icons[i] ?? Globe; return (
          <article key={s.name} className="glass-card w-full h-full flex flex-col p-6 fade-up transition-colors">
            <div className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow mb-5"><Icon size={20} /></div>
            <h2 className="text-xl font-semibold">{s.name}</h2>
            <p className="mt-2 text-foreground/85">{s.problem}</p>
            <p className="mt-2 text-foreground">{s.outcome}</p>
            <dl className="mt-5 grid gap-2 text-sm">
              <div><dt className="inline text-foreground/70">Za koga: </dt><dd className="inline">{s.forWho}</dd></div>
              <div><dt className="inline text-foreground/70">Okvirni rok: </dt><dd className="inline">{s.timeline}</dd></div>
              <div><dt className="inline text-foreground/70">Cena od: </dt><dd className="inline">{s.price}</dd></div>
            </dl>
            <p className="mt-5 text-xs uppercase tracking-widest text-foreground/70">Šta dobijate</p>
            <ul className="mt-2 space-y-2 flex-1">{s.gets.map(g => <li key={g} className="flex gap-2 text-sm"><Check size={16} className="text-brand-blue shrink-0 mt-0.5" />{g}</li>)}</ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {s.example
                ? <Button asChild variant="outlineGlow" size="sm"><a href={s.example} target="_blank" rel="noreferrer">Pogledaj primer <ExternalLink /></a></Button>
                : <Button variant="outlineGlow" size="sm" disabled title="[OVDE UNESI primer web aplikacije]">Pogledaj primer</Button>}
              <Button asChild variant="glow" size="sm"><Link to="/kontakt">Zatraži ponudu <ArrowRight /></Link></Button>
            </div>
          </article>
        ); })}
      </div>
      <div className="mt-12 flex justify-center"><Button asChild variant="glow" size="lg"><Link to="/kontakt">Razgovarajmo o vašem projektu <ArrowRight /></Link></Button></div>
    </div>
  );
}
