import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site-data-contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="wrap pt-10 pb-6 md:pt-14 md:pb-8">
        <div className="grid gap-6 text-center md:grid-cols-3 md:gap-12 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="monogram" aria-label="Đorđe Milenković, početna"><Logo alwaysName /></Link>
            <p className="mt-2 md:mt-3 max-w-[280px] text-[15px] text-muted-foreground">Sajtovi i web aplikacije iz Paraćina.</p>
          </div>
          <div className="flex flex-col gap-2.5 md:hidden">
            <a href={`mailto:${CONTACT_EMAIL}`} className="glass-card flex w-full items-center gap-3 p-4 text-left"><Mail size={18} className="text-brand-blue shrink-0" aria-hidden="true" /><span className="min-w-0 flex flex-col"><span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Email</span><span className="truncate">{CONTACT_EMAIL}</span></span><ArrowUpRight size={15} className="ml-auto shrink-0" aria-hidden="true" /></a>
            <a href={CONTACT_PHONE_HREF} className="glass-card flex w-full items-center gap-3 p-4 text-left"><Phone size={18} className="text-brand-blue shrink-0" aria-hidden="true" /><span className="min-w-0 flex flex-col"><span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Telefon</span><span>{CONTACT_PHONE}</span></span><ArrowUpRight size={15} className="ml-auto shrink-0" aria-hidden="true" /></a>
          </div>
          <div className="hidden md:flex flex-col items-start">
            <p className="kicker">Kontakt</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="footer-link gap-2">
              <Mail size={16} className="footer-icon" aria-hidden="true" />{CONTACT_EMAIL}
            </a>
            <a href={CONTACT_PHONE_HREF} className="footer-link gap-2">
              <Phone size={16} className="footer-icon" aria-hidden="true" />{CONTACT_PHONE}
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="kicker">Pišite mi direktno</p>
            <SocialLinks showLabel={false} className="flex flex-col items-center md:items-start" />
          </div>
        </div>
        <div className="mt-9 md:mt-12 flex flex-col items-center gap-2 border-t border-border/60 pt-5 md:pt-6 text-center text-xs text-muted-foreground md:flex-row md:justify-between md:text-left">
          <p>© 2026 Đorđe Milenković. Sva prava zadržana.</p>
          <p className="hidden md:block">Paraćin, Srbija</p>
        </div>
      </div>
    </footer>
  );
}
