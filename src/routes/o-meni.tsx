import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/site-shell";
import { useReveal } from "@/hooks/use-reveal";
import { projectTech, toolsUsed } from "@/lib/site-data";

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
  const { ref, cls } = useReveal<HTMLDivElement>();
  const quote = useReveal<HTMLDivElement>();
  return (
    <div className="wrap py-12 sm:py-20 space-y-14">
      <PageHeading kicker="O meni" title={<>Iza svakog detalja, <span className="text-gradient">lični pristup.</span></>} />
      <div className="grid md:grid-cols-2 gap-8 -mt-6">
        <p className="text-xl leading-relaxed">Ja sam Đorđe Milenković, web developer posvećen izradi modernih, funkcionalnih i pažljivo dizajniranih digitalnih rešenja.</p>
        <div ref={quote.ref} className={quote.cls}>
          <figure className="quote-card reveal-card" style={{ ["--i" as string]: 0 }}>
            <span className="quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="quote-text">Verujem da dobar sajt treba da bude <span className="text-gradient">jednostavan za korišćenje</span>, <span className="text-gradient">jasan u komunikaciji</span> i <span className="text-gradient">pouzdan u radu</span>. Kroz lične i demo projekte istražujem različite pristupe dizajnu i razvoju, sa posebnom pažnjom prema detaljima i iskustvu na <span className="text-gradient">svakom uređaju</span>.</blockquote>
          </figure>
        </div>
      </div>
      <section aria-labelledby="rad"><h2 id="rad" className="text-2xl font-semibold mb-6">Način rada</h2>
        <div ref={ref} className={`grid sm:grid-cols-3 gap-4${cls}`}>{steps.map((s, i) => <div key={s.n} className="glass-card reveal-card p-5" style={{ ["--i" as string]: i }}><span className="text-gradient font-bold">{s.n}</span><h3 className="mt-2 font-semibold">{s.t}</h3><p className="mt-1 text-sm text-muted-foreground">{s.d}</p></div>)}</div>
      </section>
      <section aria-labelledby="alati"><h2 id="alati" className="text-2xl font-semibold mb-6">Alati i <span className="text-gradient">tehnologije</span></h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Alati koje koristim</h3>
            <div className="flex flex-wrap gap-2">{toolsUsed.map(t => <span key={t} className="tag text-sm px-4 py-2">{t}</span>)}</div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Tehnologije u mojim projektima</h3>
            <div className="flex flex-wrap gap-2">{projectTech.map(t => <span key={t} className="tag text-sm px-4 py-2">{t}</span>)}</div>
          </div>
        </div>
      </section>
      <Button asChild variant="glow" size="lg"><Link to="/kontakt">Hajde da razgovaramo <ArrowRight /></Link></Button>
    </div>
  );
}
