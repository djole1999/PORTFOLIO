import { useState, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { projects, type Project } from "@/lib/site-data";

function Media({ p }: { p: Project }) {
  const [broken, setBroken] = useState(false);
  return (
    <div className="project-media relative">
      {p.image && !broken ? (
        <img src={p.image} alt={`Početna stranica projekta ${p.title}`} loading="lazy" width={1440} height={1000} onError={() => setBroken(true)} className="h-full w-full object-cover object-top" />
      ) : (
        <div className="project-fallback h-full w-full grid place-items-center" aria-hidden="true">
          <span className="text-7xl font-bold text-foreground/90">{p.title.charAt(0)}</span>
        </div>
      )}
      {p.badge && <span className="project-badge">{p.badge}</span>}
    </div>
  );
}

export function ProjectGrid() {
  const { ref, cls } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={"grid gap-5 lg:grid-cols-3" + cls}>
      {projects.map((p, i) => (
        <article key={p.title} className="glass-card reveal-card p-4 flex flex-col gap-3" style={{ "--i": i } as CSSProperties}>
          <Media p={p} />
          <div className="flex flex-col gap-2.5 flex-1 px-1">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-[15px] text-muted-foreground">{p.description}</p>
            {p.tags.length > 0 && <div className="flex flex-wrap gap-2">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>}
            {p.url && (
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-auto pt-2 inline-flex items-center gap-1 text-[15px] font-semibold text-foreground hover:text-brand-blue transition-colors">
                Pregled uživo <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
