import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, ArrowRight, ArrowDown, Menu, X, Mail, Phone, Code2, Globe, MonitorSmartphone, Shapes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactSchema, createContactMailto } from "@/lib/contact";
import atelier from "@/assets/atelier.asset.json";
import goldVet from "@/assets/gold-vet.asset.json";
import lupus from "@/assets/lupus.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title: "Đorđe Milenković — Sajtovi i web aplikacije" },
    { name: "description", content: "Digitalna rešenja koja ostavljaju utisak. Portfolio Đorđa Milenkovića: demonstracioni i lični projekti, web sajtovi i aplikacije." },
    { property: "og:title", content: "Đorđe Milenković — Sajtovi i web aplikacije" },
    { property: "og:description", content: "Pogledajte projekte Atelier, Gold Vet i Tattoo Studio Lupus i javite se za izradu modernog sajta ili web aplikacije." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

const projects = [
  { name: "Atelier", description: "Univerzalni poslovni template", status: "Demonstracioni projekat", image: atelier.url, url: "https://template-mocha-one.vercel.app/" },
  { name: "Gold Vet", description: "Demo sajt veterinarske ambulante", status: "Demonstracioni projekat", image: goldVet.url, url: "https://responsive-magic-nu.vercel.app/" },
  { name: "Tattoo Studio Lupus", description: "Sajt sa karakterom za tattoo studio", status: "U izradi", image: lupus.url, url: "https://lupus-seven.vercel.app/" },
];
const services = [
  { name: "Izrada poslovnih sajtova", description: "Jasno predstavite svoj posao kroz moderan sajt koji povezuje dobar dizajn i funkcionalnost.", icon: Globe },
  { name: "Izrada web aplikacija", description: "Od ideje do funkcionalnog rešenja, prilagođenog vašim potrebama i načinu rada.", icon: Code2 },
  { name: "Responsive web dizajn", description: "Pažljivo oblikovano iskustvo na svakom ekranu — od telefona do računara.", icon: MonitorSmartphone },
  { name: "Prilagođena digitalna rešenja", description: "Jedinstven pristup vašoj ideji, bez nepotrebne složenosti i gotovih ograničenja.", icon: Shapes },
];
const nav = [{ id: "projekti", label: "Projekti" }, { id: "usluge", label: "Usluge" }, { id: "o-meni", label: "O meni" }];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [formError, setFormError] = useState(false);
  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = contactSchema.safeParse({ name: form.get("name"), email: form.get("email"), message: form.get("message") });
    if (!result.success) {
      setFormError(true);
      setFeedback(result.error.issues[0]?.message ?? "Proverite unete podatke.");
      return;
    }
    setFormError(false);
    setFeedback("Poruka je pripremljena. Pošaljite je iz svog programa za email. Ako se nije otvorio, pišite mi direktno na djole.0600@gmail.com.");
    window.location.href = createContactMailto(result.data);
  }
  return (
    <div id="vrh">
      <header className="page-wrap">
        <div className="site-header">
          <a className="wordmark" href="#vrh" aria-label="Đorđe Milenković — početak"><span className="monogram" aria-hidden="true">đm.</span>Đorđe Milenković<span className="text-muted-foreground">.</span></a>
          <nav className="desktop-nav" aria-label="Glavna navigacija">
            {nav.map(item => <a key={item.id} className="nav-link" href={`#${item.id}`}>{item.label}</a>)}
            <Button asChild variant="portfolioOutline" size="sm"><a href="#kontakt">Hajde da razgovaramo <ArrowUpRight /></a></Button>
          </nav>
          <Button className="mobile-menu-toggle" variant="ghost" size="icon" aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"} aria-expanded={menuOpen} aria-controls="mobilna-navigacija" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav id="mobilna-navigacija" className="mobile-nav" aria-label="Mobilna navigacija">{[...nav, { id: "kontakt", label: "Kontakt" }].map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav>}
      </header>
      <main>
        <section className="hero page-wrap fade-in" aria-labelledby="hero-heading">
          <p className="eyebrow"><span className="status-dot" />Đorđe Milenković · Web developer</p>
          <h1 id="hero-heading">Digitalna rešenja<br />koja ostavljaju <span>utisak.</span></h1>
          <p className="hero-description">Izrađujem moderne sajtove i web aplikacije.<br className="hidden sm:block" /> Sa pažnjom prema detaljima i fokusom na ono što je važno — vaše digitalno prisustvo.</p>
          <div className="hero-actions">
            <Button asChild variant="portfolio" size="portfolio"><a href="#projekti">Pogledaj projekte <ArrowUpRight /></a></Button>
            <Button asChild variant="portfolioOutline" size="portfolio"><a href="#kontakt">Kontaktiraj me <ArrowRight /></a></Button>
          </div>
          <div className="hero-bottom"><span>Promišljen dizajn. Čist kod. Lični pristup.</span><a className="scroll-note flex items-center gap-3" href="#projekti">Istraži moj rad <ArrowDown size={14} /></a></div>
        </section>
        <section id="projekti" className="section page-wrap" aria-labelledby="projects-heading">
          <div className="section-heading"><div><p className="section-kicker">01 / ODABRANI RADOVI</p><h2 id="projects-heading">Ideje pretvorene u iskustva.</h2></div><p className="section-intro">Lični i demonstracioni projekti.<br />Različite ideje, ista pažnja prema detaljima.</p></div>
          <div className="project-grid">{projects.map((project, index) => <article key={project.name}>
            <a className="project-preview block" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Pogledaj ${project.name} uživo`}><img src={project.image} alt={`Prikaz početne stranice projekta ${project.name}`} loading="lazy" width={1440} height={1000} /><span className="preview-arrow"><ArrowUpRight size={17} /></span></a>
            <div className="project-meta"><h3>{project.name}</h3><span className="project-number">0{index + 1}</span></div><p className="project-kind">{project.description}</p>
            <div className="project-footer"><span className="project-status">{project.status}</span><Button asChild variant="link" size="sm" className="px-0 text-xs"><a href={project.url} target="_blank" rel="noopener noreferrer">Pregled uživo <ArrowUpRight /></a></Button></div>
          </article>)}</div>
        </section>
        <section id="usluge" className="section page-wrap service-layout" aria-labelledby="services-heading">
          <div><p className="section-kicker">02 / USLUGE</p><h2 id="services-heading">Dobra ideja zaslužuje<br />dobro rešenje.</h2><p className="section-intro mt-5">Od prvog koncepta do poslednjeg detalja — digitalna rešenja koja imaju smisla.</p></div>
          <div className="service-list">{services.map((service, index) => <div className="service-row" key={service.name}><span className="service-index">0{index + 1}</span><div><h3>{service.name}</h3><p>{service.description}</p></div><service.icon size={20} strokeWidth={1.4} /></div>)}</div>
        </section>
        <section id="o-meni" className="section about-band" aria-labelledby="about-heading"><div className="page-wrap about-layout">
          <div><p className="section-kicker">03 / O MENI</p><h2 id="about-heading">Iza svakog detalja,<br />lični pristup.</h2></div>
          <div><p className="about-copy">Ja sam Đorđe Milenković, web developer posvećen izradi modernih, funkcionalnih i pažljivo dizajniranih digitalnih rešenja.</p><p className="about-detail">Verujem da dobar sajt treba da bude jednostavan za korišćenje, jasan u komunikaciji i pouzdan u radu. Kroz lične i demonstracione projekte istražujem različite pristupe dizajnu i razvoju, sa posebnom pažnjom prema detaljima i iskustvu na svakom uređaju.</p><div className="skill-tags"><span>Web razvoj</span><span>Promišljen dizajn</span><span>Prilagođena rešenja</span></div></div>
        </div></section>
        <section id="kontakt" className="section page-wrap contact-layout" aria-labelledby="contact-heading">
          <div><p className="section-kicker">04 / KONTAKT</p><h2 id="contact-heading" className="contact-heading">Imate ideju?<br />Hajde da je ostvarimo.</h2><p className="section-intro">Javite mi šta imate na umu. Razgovarajmo o vašem sledećem digitalnom projektu.</p><div className="contact-links"><a href="mailto:djole.0600@gmail.com"><Mail size={17} strokeWidth={1.5} />djole.0600@gmail.com <ArrowUpRight size={15} /></a><a href="tel:+381638976384"><Phone size={17} strokeWidth={1.5} />063/89-76-384 <ArrowUpRight size={15} /></a></div></div>
          <form className="contact-form" onSubmit={submitContact} noValidate>
            <div><label className="form-label" htmlFor="name">Vaše ime</label><input className="form-control" id="name" name="name" placeholder="Kako se zovete?" autoComplete="name" required maxLength={100} aria-describedby={formError ? "contact-feedback" : undefined} /></div>
            <div><label className="form-label" htmlFor="email">Email adresa</label><input className="form-control" id="email" name="email" type="email" placeholder="vas@email.com" autoComplete="email" required maxLength={255} aria-describedby={formError ? "contact-feedback" : undefined} /></div>
            <div><label className="form-label" htmlFor="message">Vaša poruka</label><textarea className="form-control" id="message" name="message" placeholder="Recite mi nešto više o svojoj ideji..." required maxLength={2000} aria-describedby={formError ? "contact-feedback" : undefined} /></div>
            <div><Button type="submit" variant="portfolio" size="portfolio">Pošalji poruku <ArrowUpRight /></Button><p className="form-note mt-3">Otvara se vaš program za email sa pripremljenom porukom.</p></div>
            {feedback && <p id="contact-feedback" role={formError ? "alert" : "status"} className={`form-feedback ${formError ? "form-error" : ""}`}>{feedback}</p>}
          </form>
        </section>
      </main>
      <footer className="site-footer page-wrap"><p>© 2026 Đorđe Milenković. Sva prava zadržana.</p><a href="#vrh" className="flex items-center gap-2">Nazad na vrh <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
