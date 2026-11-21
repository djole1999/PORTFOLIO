import { createFileRoute } from "@tanstack/react-router";
import { LayoutGrid, MapPin, User } from "lucide-react";
import { PageHeading } from "@/components/site-shell";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { projectTech, toolsUsed } from "@/lib/site-data";

const facts = [
  { icon: MapPin, label: "Lokacija", value: "Paraćin, Srbija" },
  { icon: LayoutGrid, label: "Fokus", value: "Sajtovi i web aplikacije" },
  { icon: User, label: "Saradnja", value: "Direktno sa mnom" },
];

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
  const cols = useReveal<HTMLDivElement>();
  const intro = useReveal<HTMLDivElement>();
  return (
    <div className="wrap py-12 sm:py-20 space-y-14">
      <PageHeading kicker="O meni" title={<>Iza svakog detalja, <span className="text-gradient">lični pristup.</span></>} />
      <div className="grid md:grid-cols-2 gap-8 -mt-6">
        <div ref={intro.ref} className={cn("max-w-[560px]", intro.cls)}>
          <p className="reveal-item text-[20px] leading-relaxed text-foreground/90" style={{ ["--i" as string]: 0 }}>Ja sam <span className="text-gradient font-semibold">Đorđe Milenković</span>, web developer iz Paraćina. Pravim sajtove i web aplikacije za ljude koji žele da njihov posao bude jasno predstavljen na internetu.</p>
          <p className="reveal-item mt-4 text-[17px] leading-relaxed text-muted-foreground" style={{ ["--i" as string]: 1 }}>Sa svakim klijentom razgovaram lično, od prve ideje do objave, i trudim se da sve bude jednostavno i razumljivo, bez komplikovanog tehničkog jezika.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {facts.map((f, i) => (
              <div key={f.label} className="glass-card reveal-card p-4" style={{ ["--i" as string]: i + 2 }}>
                <div className="card-icon h-8 w-8 grid place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-glow mb-3"><f.icon size={15} /></div>
                <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{f.label}</p>
                <p className="mt-1 text-sm font-semibold">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
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
      <section aria-label="Alati i tehnologije">
        <div ref={cols.ref} className={cn("grid items-start gap-y-5 md:grid-cols-[9fr_2fr_9fr]", cols.cls)}>
          <div>
            <h2 className="text-gradient text-[26px] leading-tight font-bold md:text-[32px]">Alati</h2>
            <p className="mt-2 text-base text-muted-foreground">Alati koje koristim</p>
            <div className="mt-5 flex flex-wrap gap-3">{toolsUsed.map(t => <span key={t} className="chip">{t}</span>)}</div>
          </div>
          <span aria-hidden="true" className="col-rule"><span className="col-rule-line" /><span className="col-rule-dot" /></span>
          <div>
            <h2 className="text-gradient text-[26px] leading-tight font-bold md:text-[32px]">Tehnologije</h2>
            <p className="mt-2 text-base text-muted-foreground">Tehnologije u mojim projektima</p>
            <div className="mt-5 flex flex-wrap gap-3">{projectTech.map(t => <span key={t} className="chip">{t}</span>)}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
