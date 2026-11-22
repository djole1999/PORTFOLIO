import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfilePhoto } from "@/components/profile-photo";
import { Blueprint } from "@/components/blueprint";
import { HeroVisual } from "@/components/hero-visual";
import { CircuitBg } from "@/components/circuit-bg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title: "Đorđe Milenković | Web Developer & Dizajner" },
    { name: "description", content: "Moderni sajtovi i web aplikacije sa pažnjom prema detaljima. Portfolio Đorđa Milenkovića." },
    { property: "og:title", content: "Đorđe Milenković | Web Developer & Dizajner" },
    { property: "og:description", content: "Moderni sajtovi i web aplikacije sa pažnjom prema detaljima. Portfolio Đorđa Milenkovića." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Index() {
  return (
    <div className="wrap py-8 sm:py-14 space-y-8 sm:space-y-12">
      <CircuitBg />
      <section className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-center fade-up" aria-labelledby="hero-heading">
        <div className="order-2 md:order-1 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left"><div className="shrink-0"><ProfilePhoto /></div><div>
          <p className="kicker">Web Developer & Dizajner</p>
          <h1 id="hero-heading" className="page-title">Đorđe <span className="text-gradient">Milenković</span></h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">Izrađujem moderne sajtove i web aplikacije. Promišljen dizajn, čist kod i lični pristup.</p>
          <div className="mt-8 flex justify-center sm:justify-start"><Button asChild variant="glow" size="lg"><Link to="/projekti">Istraži projekte <ArrowRight /></Link></Button></div>
        </div></div>
        <div className="order-1 md:order-2"><HeroVisual /></div>
      </section>
      <Blueprint />
    </div>
  );
}
