import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/site-shell";
import { contactSchema, createContactMailto } from "@/lib/contact";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site-data-contact";

export const Route = createFileRoute("/kontakt")({
  component: Kontakt,
  head: () => ({ meta: [
    { title: "Kontakt | Đorđe Milenković" },
    { name: "description", content: "Imate ideju? Pišite ili pozovite Đorđa Milenkovića za izradu sajta ili web aplikacije." },
    { property: "og:title", content: "Kontakt | Đorđe Milenković" },
    { property: "og:description", content: "Imate ideju? Pišite ili pozovite Đorđa Milenkovića za izradu sajta ili web aplikacije." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Kontakt() {
  const [feedback, setFeedback] = useState("");
  const [isError, setIsError] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const r = contactSchema.safeParse({ name: f.get("name"), email: f.get("email"), message: f.get("message") });
    if (!r.success) { setIsError(true); setFeedback(r.error.issues[0]?.message ?? "Proverite unete podatke."); return; }
    setIsError(false);
    setFeedback(`Poruka je pripremljena. Pošaljite je iz svog programa za email. Ako se nije otvorio, pišite mi direktno na ${CONTACT_EMAIL}.`);
    window.location.href = createContactMailto(r.data);
  }
  return (
    <div className="wrap py-12 sm:py-20 grid lg:grid-cols-2 gap-10">
      <div>
        <PageHeading kicker="Kontakt" title={<>Imate ideju? <span className="text-gradient">Hajde da je ostvarimo.</span></>} intro="Javite mi šta imate na umu. Razgovarajmo o vašem sledećem digitalnom projektu." />
        <div className="space-y-3">
          <a href={`mailto:${CONTACT_EMAIL}`} className="glass-card flex items-center gap-3 p-4"><Mail size={18} className="text-brand-blue" />{CONTACT_EMAIL}<ArrowUpRight size={15} className="ml-auto" /></a>
          <a href={CONTACT_PHONE_HREF} className="glass-card flex items-center gap-3 p-4"><Phone size={18} className="text-brand-blue" />{CONTACT_PHONE}<ArrowUpRight size={15} className="ml-auto" /></a>
        </div>
      </div>
      <form className="glass-card p-5 sm:p-8 space-y-5 self-start" onSubmit={submit} noValidate>
        <div><label className="block text-sm mb-2" htmlFor="name">Vaše ime</label><input className="form-control" id="name" name="name" placeholder="Kako se zovete?" autoComplete="name" maxLength={100} /></div>
        <div><label className="block text-sm mb-2" htmlFor="email">Email adresa</label><input className="form-control" id="email" name="email" type="email" placeholder="vas@email.com" autoComplete="email" maxLength={255} /></div>
        <div><label className="block text-sm mb-2" htmlFor="message">Vaša poruka</label><textarea className="form-control" id="message" name="message" placeholder="Recite mi nešto više o svojoj ideji..." maxLength={2000} /></div>
        <Button type="submit" variant="glow" size="lg" className="w-full">Pošalji poruku <ArrowUpRight /></Button>
        <p className="text-xs text-muted-foreground">Otvara se vaš program za email sa pripremljenom porukom.</p>
        {feedback && <p role={isError ? "alert" : "status"} className={`text-sm ${isError ? "text-destructive" : "text-brand-blue"}`}>{feedback}</p>}
      </form>
    </div>
  );
}
