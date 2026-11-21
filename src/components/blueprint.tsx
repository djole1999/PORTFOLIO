import { Fragment } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Lightbulb, Code2, Rocket } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";

const steps = [
  {
    n: "01",
    label: "Ideja",
    icon: Lightbulb,
    text: "Razgovaramo o tome šta radite, kome se obraćate i šta posetilac treba da uradi na sajtu. Na osnovu toga nastaje plan stranica.",
  },
  {
    n: "02",
    label: "Izrada",
    icon: Code2,
    text: "Plan pretvaram u sajt koji lepo izgleda i radi podjednako dobro na telefonu i računaru. Pre objave dobijate pregled i možete da tražite izmene.",
  },
  {
    n: "03",
    label: "Objava",
    icon: Rocket,
    text: "Sajt ide na internet na vašoj adresi, sa uključenom zaštitom (HTTPS). Posle objave sam dostupan za izmene.",
  },
];

function Connector() {
  return (
    <div className="hidden md:flex w-14 shrink-0 items-center gap-1 px-1" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-border to-brand-blue/60" />
      <ArrowRight size={18} className="text-brand-blue" />
    </div>
  );
}

export function Blueprint() {
  const { ref, cls } = useReveal<HTMLDivElement>();
  return (
    <section className="py-2 sm:py-4" aria-labelledby="bp-title">
      <div className="mx-auto max-w-2xl text-center fade-up">
        <p className="kicker">Kako nastaje sajt</p>
        <h2 id="bp-title" className="text-2xl sm:text-4xl font-semibold tracking-tight">
          Od ideje do objave <span className="text-gradient">u 3 koraka</span>
        </h2>
      </div>

      <div ref={ref} className={`mt-7 sm:mt-9 flex flex-col md:flex-row items-stretch${cls}`}>
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <Fragment key={s.n}>
              {i > 0 && <Connector />}
              <article className="glass-card reveal-card flex-1 p-7 sm:p-8" style={{ ["--i" as string]: i }}>
                <div className="flex items-start justify-between gap-4">
                  <span className="card-icon grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                    <Icon size={20} />
                  </span>
                  <span className="text-gradient text-4xl sm:text-5xl font-bold leading-none tracking-tight">{s.n}</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold">{s.label}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{s.text}</p>
              </article>
            </Fragment>
          );
        })}
      </div>

      <div className="mt-8 sm:mt-11 flex justify-center">
        <Button asChild variant="glow" size="lg">
          <Link to="/kontakt">Zatraži ponudu <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  );
}
