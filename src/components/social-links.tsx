import { useReveal } from "@/hooks/use-reveal";
import { SOCIAL_LINKS } from "@/lib/site-data-contact";

const paths = {
  whatsapp: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z",
  facebook: "M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v1.9H8V11.7h2.6V21.5H14V11.7h2.6l.4-3.2Z",
  linkedin: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8v1.5h.1c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v5.4h-4v-4.8c0-1.2 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.9h-4v-11Z",
} as const;

export function SocialLinks() {
  const { ref, cls } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={"mt-14 flex flex-col items-center gap-4" + cls}>
      <p className="social-label">Pišite mi direktno</p>
      <div className="social-pill">
        {SOCIAL_LINKS.map((s, i) => (
          <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="social-btn" style={{ ["--i" as string]: i }}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d={paths[s.id]} /></svg>
          </a>
        ))}
      </div>
    </div>
  );
}
