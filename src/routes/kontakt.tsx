import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/site-shell";
import { contactSchema, createWeb3FormsPayload, WEB3FORMS_URL } from "@/lib/contact";
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const f = new FormData(e.currentTarget);
    const r = contactSchema.safeParse({ name: f.get("name") ?? "", lastName: f.get("lastName") ?? "", email: f.get("email") ?? "", phone: f.get("phone") ?? "", message: f.get("message") ?? "" });
    if (!r.success) {
      const next: Record<string, string> = {};
      for (const i of r.error.issues) { const k = String(i.path[0]); if (!next[k]) next[k] = i.message; }
      setErrors(next); return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch(WEB3FORMS_URL, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(createWeb3FormsPayload(r.data, f.get("botcheck") === "on")) });
      const json = (await res.json().catch(() => null)) as { success?: boolean } | null;
      setStatus(res.ok && json?.success ? "sent" : "error");
    } catch { setStatus("error"); }
  }
  const err = (k: string) => errors[k] ? <p className="mt-1.5 text-sm text-destructive">{errors[k]}</p> : null;
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
      {status === "sent" ? (
        <div className="glass-card form-success flex flex-col items-center gap-3 p-8 text-center sm:p-12" role="status">
          <CheckCircle2 size={44} className="text-brand-blue" />
          <p className="text-lg">Poruka je poslata. Hvala vam!</p>
        </div>
      ) : (
      <form className="glass-card space-y-5 p-5 self-start sm:p-8 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0" onSubmit={submit} noValidate>
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
        <div><label className="block text-sm mb-2" htmlFor="name">Vaše ime</label><input className="form-control" id="name" name="name" placeholder="Kako se zovete?" autoComplete="name" maxLength={100} aria-invalid={!!errors["name"]} />{err("name")}</div>
        <div><label className="block text-sm mb-2" htmlFor="lastName">Vaše prezime</label><input className="form-control" id="lastName" name="lastName" placeholder="Kako se prezivate?" autoComplete="family-name" maxLength={100} aria-invalid={!!errors["lastName"]} />{err("lastName")}</div>
        <div><label className="block text-sm mb-2" htmlFor="email">Email adresa</label><input className="form-control" id="email" name="email" type="email" placeholder="vas@email.com" autoComplete="email" maxLength={255} aria-invalid={!!errors["email"]} />{err("email")}</div>
        <div><label className="block text-sm mb-2" htmlFor="phone">Broj telefona <span className="text-xs font-normal text-muted-foreground">(opciono)</span></label><input className="form-control" id="phone" name="phone" type="tel" placeholder="npr. 06x xxx xxxx" autoComplete="tel" maxLength={30} aria-invalid={!!errors["phone"]} />{err("phone")}</div>
        <div className="lg:col-span-2"><label className="block text-sm mb-2" htmlFor="message">Vaša poruka</label><textarea className="form-control lg:h-[150px] lg:min-h-[150px]" id="message" name="message" placeholder="Recite mi nešto više o svojoj ideji..." maxLength={2000} aria-invalid={!!errors["message"]} />{err("message")}</div>
        <Button type="submit" variant="glow" size="lg" className="w-full lg:col-span-2" disabled={status === "sending"}>{status === "sending" ? "Šaljem..." : <>Pošalji poruku <ArrowUpRight /></>}</Button>
        <p className="text-xs text-muted-foreground lg:col-span-2">Vaši podaci se koriste samo da bih vam odgovorio.</p>
        {status === "error" && <p role="alert" className="text-sm text-destructive lg:col-span-2">Poruka nije poslata, pokušajte ponovo ili me pozovite.</p>}
      </form>
      )}
    </div>
  );
}
