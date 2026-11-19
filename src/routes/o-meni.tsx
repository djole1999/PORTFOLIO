import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/site-shell";
import { tools } from "@/lib/site-data";

const steps = [
  { n: "01", t: "Razgovor", d: "Upoznajem vaš posao, cilj i ono što želite da postignete." },
  { n: "02", t: "Dizajn i razvoj", d: "Oblikujem i gradim rešenje, uz redovne provere sa vama." },
  { n: "03", t: "Provera i objava", d: "Testiram na svim uređajima i objavljujem sajt." },
];

export const Route = createFileRoute("/o-meni")({
  component: OMeni,
  head: () => ({ meta: [
    { title: "O meni | Đorđe Milenković" },
    { name: "description", content: "Iza svakog detalja, lični pristup. Način rada i alati koje Đorđe Milenković koristi." },
    { property: "og:title", content: "O meni | Đorđe Milenković" },
    { property: "og:description", content: "Iza svakog detalja, lični pristup. Način rada i alati koje Đorđe Milenković koristi." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function OMeni() {
  return (
    <div className="wrap py-12 sm:py-20 space-y-14">
      <PageHeading kicker="O meni" title={<>Iza svakog detalja, <span className="text-gradient">lični pristup.</span></>} />
      <div className="grid md:grid-cols-2 gap-8 -mt-6">
        <p className="text-xl leading-relaxed">Ja sam Đorđe Milenković, web developer posvećen izradi modernih, funkcionalnih i pažljivo dizajniranih digitalnih rešenja.</p>
        <p className="text-muted-foreground leading-relaxed">Verujem da dobar sajt treba da bude jednostavan za korišćenje, jasan u komunikaciji i pouzdan u radu. Kroz lične i demo projekte istražujem različite pristupe dizajnu i razvoju, sa posebnom pažnjom prema detaljima i iskustvu na svakom uređaju.</p>
      </div>
      <section aria-labelledby="rad"><h2 id="rad" className="text-2xl font-semibold mb-6">Način rada</h2>
        <div className="grid sm:grid-cols-3 gap-4">{steps.map(s => <div key={s.n} className="glass-card p-5"><span className="text-gradient font-bold">{s.n}</span><h3 className="mt-2 font-semibold">{s.t}</h3><p className="mt-1 text-sm text-muted-foreground">{s.d}</p></div>)}</div>
      </section>
      <section aria-labelledby="alati"><h2 id="alati" className="text-2xl font-semibold mb-6">Alati i tehnologije</h2>
        <div className="flex flex-wrap gap-2">{tools.map(t => <span key={t} className="tag text-sm px-4 py-2">{t}</span>)}</div>
      </section>
      <Button asChild variant="glow" size="lg"><Link to="/kontakt">Hajde da razgovaramo <ArrowRight /></Link></Button>
    </div>
  );
}
