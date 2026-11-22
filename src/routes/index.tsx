import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfilePhoto } from "@/components/profile-photo";
import { Blueprint } from "@/components/blueprint";
import { HeroVisual } from "@/components/hero-visual";
import { CircuitBg } from "@/components/circuit-bg";
import { SiteFooter } from "@/components/site-footer";

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
    <div className="relative isolate">
    <CircuitBg />
    <div className="wrap py-8 sm:py-14 space-y-8 sm:space-y-12">
      <section className="relative isolate grid md:grid-cols-[1.4fr_1fr] gap-10 items-center fade-up" aria-labelledby="hero-heading">
        <div className="relative z-10 md:order-1 flex flex-col md:flex-row items-center gap-4 md:gap-10 text-center md:text-left"><div className="shrink-0"><ProfilePhoto /></div><div>
          <p className="kicker">Web Developer & Dizajner</p>
          <h1 id="hero-heading" className="page-title">Đorđe <span className="inline-block text-gradient">Milenković</span></h1>
          <p className="mt-3 md:mt-5 text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">Izrađujem sajtove i web aplikacije. Jasan dizajn, pregledno rešenje i lični pristup.</p>
          <div className="mt-5 md:mt-8 flex justify-center md:justify-start"><Button asChild variant="glow" size="lg" className="w-full md:w-auto"><Link to="/projekti">Istraži projekte <ArrowRight /></Link></Button></div>
        </div></div>
        <div className="hero-cubes md:order-2" aria-hidden="true"><HeroVisual /></div>
      </section>
      <Blueprint />
    </div>
    <SiteFooter />
    </div>
  );
}
