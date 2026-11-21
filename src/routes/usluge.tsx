import { createFileRoute } from "@tanstack/react-router";
import { Check, Code2, Globe, Wrench } from "lucide-react";
import { PageHeading } from "@/components/site-shell";
import { services } from "@/lib/site-data";
import { useReveal } from "@/hooks/use-reveal";

const icons = [Globe, Code2, Wrench];

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
  return (
    <div className="wrap py-12 sm:py-20">
      <PageHeading kicker="Usluge" title={<>Dobra ideja zaslužuje <span className="text-gradient">dobro rešenje.</span></>} />
      <div ref={ref} className={`grid md:grid-cols-3 gap-6 lg:gap-8 ${cls}`}>
        {services.map((s, i) => { const Icon = icons[i] ?? Globe; return (
          <article key={s.name} className="glass-card reveal-card h-full p-8 sm:p-9" style={{ ["--i" as string]: i }}>
            <div className="card-icon h-12 w-12 grid place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow mb-7"><Icon size={22} /></div>
            <h2 className="text-2xl font-bold tracking-tight">{s.name}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{s.description}</p>
            <ul className="mt-7 space-y-3">{s.gets.map((g, j) => <li key={g} className="flex gap-3 text-[15px] text-foreground/90"><Check size={17} className="svc-check text-brand-blue shrink-0 mt-0.5" style={{ ["--j" as string]: j }} />{g}</li>)}</ul>
          </article>
        ); })}
      </div>
    </div>
  );
}
