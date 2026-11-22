export { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "./site-data-contact";


export type Project = { title: string; description: string; tags: string[]; image?: string; url?: string };

export const projects: Project[] = [
  { title: "Tattoo Studio Lupus", description: "Sajt i aplikacija za tattoo studio u Paraćinu. Napravljeno za stvarnog klijenta.", tags: ["Lovable", "Supabase", "Vercel"], image: "/lupus-preview.png", url: "https://lupus-seven.vercel.app/" },
  { title: "Momentum", description: "Aplikacija za praćenje navika sa interfejsom na srpskom jeziku. Lični projekat.", tags: [] },
];

export const services = [
  { name: "Izrada sajta", description: "Sajt koji jasno pokazuje čime se bavite i olakšava ljudima da vas kontaktiraju.", gets: ["Prilagođen telefonu i računaru", "Kontakt forma i mapa", "Objava na vašoj adresi"] },
  { name: "Web aplikacije", description: "Alat napravljen tačno po vašem poslu, kojem se pristupa iz browsera.", gets: ["Prijava korisnika", "Pregled i izmena podataka", "Radi na svakom uređaju"] },
  { name: "Izmene i podrška", description: "Vaš sajt ostaje ažuran i posle objave.", gets: ["Izmena teksta i slika", "Dodavanje novih sadržaja", "Ispravka grešaka"] },
];

export const toolsUsed = ["Lovable", "Bubble", "Supabase", "Vercel", "GitHub"];
export const projectTech = ["React", "TypeScript", "Tailwind CSS"];
