import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, Code2, Globe, Layers, SlidersHorizontal, Wrench } from "lucide-react";
import { PageHeading } from "@/components/site-shell";
import { services } from "@/lib/site-data";
import { useReveal } from "@/hooks/use-reveal";

const icons = [Globe, Code2, Wrench];

const priceFactors = [
  { icon: Layers, name: "Obim", text: "Koliko stranica i sadržaja sajt ima." },
  { icon: SlidersHorizontal, name: "Funkcije", text: "Da li vam trebaju forma, prijava korisnika, rezervacije ili slično." },
  { icon: Clock, name: "Rok", text: "Koliko brzo vam je sajt potreban." },
];

export const Route = createFileRoute("/usluge")({
  component: Usluge,
  head: () => ({ meta: [
    { title: "Usluge | Đorđe Milenković" },
    { name: "description", content: "Izrada sajtova, web aplikacije i izmene i podrška posle objave." },
    { property: "og:title", content: "Usluge | Đorđe Milenković" },
    { property: "og:description", content: "Izrada sajtova, web aplikacije i izmene i podrška posle objave." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Usluge() {
  const { ref, cls } = useReveal<HTMLDivElement>();
  const price = useReveal<HTMLDivElement>();
  return (
    <div className="wrap py-12 sm:py-20">
      <PageHeading kicker="Usluge" title={<>Dobra ideja zaslužuje <span className="text-gradient">dobro rešenje.</span></>} />
      <div ref={ref} className={`grid md:grid-cols-3 gap-6 lg:gap-8 ${cls}`}>
        {services.map((s, i) => { const Icon = icons[i] ?? Globe; return (
          <article key={s.name} className="glass-card reveal-card h-full p-8 sm:p-9 flex flex-col" style={{ ["--i" as string]: i }}>
            <div className="card-icon h-12 w-12 grid place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow mb-7"><Icon size={22} /></div>
            <h2 className="text-2xl font-bold tracking-tight">{s.name}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{s.description}</p>
            <ul className="mt-auto pt-7 space-y-3">{s.gets.map((g, j) => <li key={g} className="flex gap-3 text-[15px] text-foreground/90"><Check size={17} className="svc-check text-brand-blue shrink-0 mt-0.5" style={{ ["--j" as string]: j }} />{g}</li>)}</ul>
          </article>
        ); })}
      </div>
      <section aria-labelledby="cena-heading" className="mt-16">
        <p className="kicker">Cena</p>
        <h2 id="cena-heading" className="page-title">Cena <span className="text-gradient">zavisi od vašeg projekta</span></h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">Svaki projekat je drugačiji, zato cenu određujemo zajedno, nakon razgovora o tome šta vam treba.</p>
        <div ref={price.ref} className={`mt-10 grid md:grid-cols-3 gap-6 ${price.cls}`}>
          {priceFactors.map((f, i) => (
            <article key={f.name} className="glass-card reveal-card h-full p-6" style={{ ["--i" as string]: i }}>
              <div className="card-icon h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow mb-5"><f.icon size={19} /></div>
              <h3 className="text-lg font-bold tracking-tight">{f.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">{f.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-muted-foreground">Ponudu dobijate unapred i bez obaveze.</p>
        <p className="mt-3 text-center"><Link to="/kontakt" className="cta-link">Zatraži ponudu →</Link></p>
      </section>
    </div>
  );
}
