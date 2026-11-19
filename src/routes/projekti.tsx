import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeading } from "@/components/site-shell";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projekti")({
  component: Projekti,
  head: () => ({ meta: [
    { title: "Projekti — Đorđe Milenković" },
    { name: "description", content: "Atelier, Gold Vet i Tattoo Studio Lupus — demo i lični projekti sa pregledom uživo." },
    { property: "og:title", content: "Projekti — Đorđe Milenković" },
    { property: "og:description", content: "Atelier, Gold Vet i Tattoo Studio Lupus — demo i lični projekti sa pregledom uživo." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Projekti() {
  return (
    <div className="wrap py-12 sm:py-20">
      <PageHeading kicker="Projekti" title={<>Ideje pretvorene <span className="text-gradient">u iskustva.</span></>} intro="Lični i demo projekti. Različite ideje, ista pažnja prema detaljima." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <article key={p.name} className="glass-card overflow-hidden flex flex-col fade-up">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="block aspect-[16/11] overflow-hidden border-b border-border" aria-label={`Pogledaj ${p.name} uživo`}>
              <img src={p.image} alt={`Početna stranica projekta ${p.name}`} loading="lazy" width={1440} height={1000} className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105" />
            </a>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-start justify-between gap-3"><h2 className="text-xl font-semibold">{p.name}</h2><span className={`tag ${p.status === "U izradi" ? "text-brand-blue" : "text-brand-violet"}`}>{p.status}</span></div>
              <p className="text-muted-foreground">{p.description}</p>
              <div className="flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="tag">{t}</span>)}</div>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-auto pt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-brand-blue">Pregled uživo <ArrowUpRight size={16} /></a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
