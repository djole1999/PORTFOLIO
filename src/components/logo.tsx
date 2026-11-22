export function Logo({ alwaysName = false }: { alwaysName?: boolean }) {
  return (
    <>
      <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
        <defs><linearGradient id="lg-brand" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="var(--brand-violet)" /><stop offset="1" stopColor="var(--brand-blue)" /></linearGradient></defs>
        <path d="M20 3 35 11.5v17L20 37 5 28.5v-17Z" fill="none" stroke="url(#lg-brand)" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M20 3v17m0 0 15-8.5M20 20 5 11.5" stroke="url(#lg-brand)" strokeWidth="1.4" opacity=".45" />
        <path d="M13 16v11l7 4 7-4V16" fill="none" stroke="url(#lg-brand)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={(alwaysName ? "inline" : "hidden sm:inline") + " text-[15px]"}>Đorđe<span className="text-gradient">.dev</span></span>
    </>
  );
}
