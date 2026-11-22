import { Logo } from "@/components/logo";
import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Menu, QrCode, X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Početna" },
  { to: "/usluge", label: "Usluge" },
  { to: "/projekti", label: "Projekti" },
  { to: "/o-meni", label: "O meni" },
] as const;

function QrPanel({ onClose }: { onClose: () => void }) {
  const [url, setUrl] = useState("");
  useEffect(() => setUrl(window.location.origin), []);
  return (
    <div className="qr-panel" role="dialog" aria-label="QR kod sajta">
      <div className="flex items-center justify-between mb-3"><span className="text-sm font-semibold">Skenirajte sajt</span><button aria-label="Zatvori QR kod" onClick={onClose}><X size={16} /></button></div>
      <div className="rounded-lg bg-foreground p-3">{url && <QRCodeSVG value={url} size={160} bgColor="transparent" fgColor="currentColor" className="text-background" />}</div>
      <p className="mt-3 text-xs text-muted-foreground break-all">{url.replace(/^https?:\/\//, "")}</p>
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [qr, setQr] = useState(false);
  return (
    <div className="site-bg min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="wrap flex h-16 items-center justify-between gap-4">
          <Link to="/" className="monogram" aria-label="Đorđe Milenković, početna"><Logo /></Link>
          <nav className="hidden md:flex items-center gap-1" aria-label="Glavna navigacija">
            {nav.map(n => <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="nav-link" activeProps={{ className: "nav-link is-active" }}>{n.label}</Link>)}
          </nav>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Button variant="ghost" size="icon" aria-label="Prikaži QR kod" aria-expanded={qr} onClick={() => setQr(!qr)}><QrCode /></Button>
              {qr && <QrPanel onClose={() => setQr(false)} />}
            </div>
            <Button asChild variant="glow" size="sm" className="hidden sm:inline-flex"><Link to="/kontakt">Zatraži ponudu <ArrowRight /></Link></Button>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Zatvori meni" : "Otvori meni"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {open && (
          <nav className="mobile-menu md:hidden" aria-label="Mobilna navigacija">
            <div className="wrap flex flex-col py-4">
              {[...nav, { to: "/kontakt", label: "Kontakt" } as const].map(n => <Link key={n.to} to={n.to} activeOptions={{ exact: true }} onClick={() => setOpen(false)} className="mobile-link" activeProps={{ className: "mobile-link is-active" }}>{n.label}</Link>)}
              <Button asChild variant="glow" size="lg" className="mt-6 w-full"><Link to="/kontakt" onClick={() => setOpen(false)}>Zatraži ponudu <ArrowRight /></Link></Button>
            </div>
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}

export function PageHeading({ kicker, title, intro }: { kicker: string; title: ReactNode; intro?: string }) {
  return (
    <div className="mb-12 max-w-2xl fade-up">
      <p className="kicker">{kicker}</p>
      <h1 className="page-title">{title}</h1>
      {intro && <p className="mt-5 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}
