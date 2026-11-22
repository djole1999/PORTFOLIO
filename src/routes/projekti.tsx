import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/site-shell";
import { ProjectGrid } from "@/components/project-card";

const desc = "Pravi projekti i primeri na kojima gradim svoj način rada: Tattoo Studio Lupus, Golden Vet i Template.";

export const Route = createFileRoute("/projekti")({
  component: Projekti,
  head: () => ({ meta: [
    { title: "Projekti | Đorđe Milenković" },
    { name: "description", content: desc },
    { property: "og:title", content: "Projekti | Đorđe Milenković" },
    { property: "og:description", content: desc },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Projekti() {
  return (
    <div className="wrap py-12 sm:py-20">
      <PageHeading kicker="Projekti" title={<>Ono što sam <span className="text-gradient">napravio.</span></>} intro="Pravi projekti i primeri na kojima gradim svoj način rada." />
      <ProjectGrid />
    </div>
  );
}
