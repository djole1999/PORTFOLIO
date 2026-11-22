export { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "./site-data-contact";


export type Project = { title: string; description: string; tags: string[]; badge?: string; image?: string; url?: string };

export const projects: Project[] = [
  { title: "Atelier", description: "Luksuzni arhitektonski template", tags: ["React", "Tailwind CSS", "Vercel"], badge: "Demo projekat", image: "/atelier-preview.png", url: "https://template-mocha-one.vercel.app/" },
  { title: "Gold Vet", description: "Demo sajt veterinarske ambulante", tags: ["React", "Responsive dizajn", "Vercel"], badge: "Demo projekat", image: "/gold-vet-preview.png", url: "https://responsive-magic-nu.vercel.app/" },
  { title: "Tattoo Studio Lupus", description: "Sajt za lokalni tattoo studio", tags: ["React", "Tailwind CSS", "Vercel"], badge: "U izradi", image: "/lupus-preview.png", url: "https://lupus-seven.vercel.app/" },
];

export const services = [
  { name: "Izrada sajta", description: "Sajt koji jasno pokazuje čime se bavite i olakšava ljudima da vas kontaktiraju.", gets: ["Prilagođen telefonu i računaru", "Kontakt forma i mapa", "Objava na vašoj adresi"] },
  { name: "Web aplikacije", description: "Alat napravljen tačno po vašem poslu, kojem se pristupa iz browsera.", gets: ["Prijava korisnika", "Pregled i izmena podataka", "Radi na svakom uređaju"] },
  { name: "Izmene i podrška", description: "Vaš sajt ostaje ažuran i posle objave.", gets: ["Izmena teksta i slika", "Dodavanje novih sadržaja", "Ispravka grešaka"] },
];

export const toolsUsed = ["Lovable", "Bubble", "Supabase", "Vercel", "GitHub"];
export const projectTech = ["React", "TypeScript", "Tailwind CSS"];
