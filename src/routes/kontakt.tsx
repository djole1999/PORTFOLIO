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
    const r = contactSchema.safeParse({ name: f.get("name"), lastName: f.get("lastName"), email: f.get("email"), phone: f.get("phone"), message: f.get("message") });
    if (!r.success) { setIsError(true); setFeedback(r.error.issues[0]?.message ?? "Proverite unete podatke."); return; }
    setIsError(false);
    setFeedback(`Poruka je pripremljena. Pošaljite je iz svog programa za email. Ako se nije otvorio, pišite mi direktno na ${CONTACT_EMAIL}.`);
    window.location.href = createContactMailto(r.data);
  }
  return (
    <div className="wrap py-12 sm:py-20">
      <PageHeading kicker="Kontakt" title={<>Imate ideju? <span className="text-gradient">Hajde da je ostvarimo.</span></>} intro="Javite mi šta imate na umu. Razgovarajmo o vašem sledećem digitalnom projektu." />
      <div className="mb-3">
        <p className="kicker" style={{ marginBottom: 4 }}>Moj kontakt</p>
        <p className="text-sm text-muted-foreground">Pišite ili pozovite me direktno.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <a href={`mailto:${CONTACT_EMAIL}`} className="glass-card flex items-center gap-3 p-4"><Mail size={18} className="text-brand-blue shrink-0" /><span className="flex flex-col"><span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Email</span><span>{CONTACT_EMAIL}</span></span><ArrowUpRight size={15} className="ml-auto" /></a>
        <a href={CONTACT_PHONE_HREF} className="glass-card flex items-center gap-3 p-4"><Phone size={18} className="text-brand-blue shrink-0" /><span className="flex flex-col"><span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Telefon</span><span>{CONTACT_PHONE}</span></span><ArrowUpRight size={15} className="ml-auto" /></a>
      </div>
      <div className="mt-12 mb-3">
        <p className="kicker" style={{ marginBottom: 4 }}>Pošaljite upit</p>
        <p className="text-sm text-muted-foreground">Ili popunite formu i javiću vam se.</p>
      </div>
      <form className="glass-card space-y-5 p-5 self-start sm:p-8 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0" onSubmit={submit} noValidate>
        <div><label className="block text-sm mb-2" htmlFor="name">Vaše ime</label><input className="form-control" id="name" name="name" placeholder="Kako se zovete?" autoComplete="name" maxLength={100} /></div>
        <div><label className="block text-sm mb-2" htmlFor="lastName">Vaše prezime</label><input className="form-control" id="lastName" name="lastName" placeholder="Kako se prezivate?" autoComplete="family-name" maxLength={100} /></div>
        <div><label className="block text-sm mb-2" htmlFor="email">Email adresa</label><input className="form-control" id="email" name="email" type="email" placeholder="vas@email.com" autoComplete="email" maxLength={255} /></div>
        <div><label className="block text-sm mb-2" htmlFor="phone">Broj telefona <span className="text-xs font-normal text-muted-foreground">(opciono)</span></label><input className="form-control" id="phone" name="phone" type="tel" placeholder="npr. 06x xxx xxxx" autoComplete="tel" maxLength={30} /></div>
        <div className="lg:col-span-2"><label className="block text-sm mb-2" htmlFor="message">Vaša poruka</label><textarea className="form-control lg:h-[150px] lg:min-h-[150px]" id="message" name="message" placeholder="Recite mi nešto više o svojoj ideji..." maxLength={2000} /></div>
        <Button type="submit" variant="glow" size="lg" className="w-full lg:col-span-2">Pošalji poruku <ArrowUpRight /></Button>
        <p className="text-xs text-muted-foreground lg:col-span-2">Otvara se vaš program za email sa pripremljenom porukom.</p>
        {feedback && <p role={isError ? "alert" : "status"} className={`text-sm lg:col-span-2 ${isError ? "text-destructive" : "text-brand-blue"}`}>{feedback}</p>}
      </form>
    </div>
  );
}
