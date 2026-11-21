import atelier from "@/assets/atelier.asset.json";
import goldVet from "@/assets/gold-vet.asset.json";
import lupus from "@/assets/lupus.asset.json";
export { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "./site-data-contact";


export const projects = [
  { name: "Atelier", description: "Luksuzni arhitektonski template", status: "Demo projekat", tech: ["React", "Tailwind CSS", "Vercel"], image: atelier.url, url: "https://template-mocha-one.vercel.app/" },
  { name: "Gold Vet", description: "Demo sajt veterinarske ambulante", status: "Demo projekat", tech: ["React", "Responsive dizajn", "Vercel"], image: goldVet.url, url: "https://responsive-magic-nu.vercel.app/" },
  { name: "Tattoo Studio Lupus", description: "Sajt za lokalni tattoo studio", status: "U izradi", tech: ["React", "Tailwind CSS", "Vercel"], image: lupus.url, url: "https://lupus-seven.vercel.app/" },
];

export const services = [
  { name: "Izrada sajta", description: "Sajt koji jasno pokazuje čime se bavite i olakšava ljudima da vas kontaktiraju.", gets: ["Prilagođen telefonu i računaru", "Kontakt forma i mapa", "Objava na vašoj adresi"] },
  { name: "Web aplikacije", description: "Alat napravljen tačno po vašem poslu, kojem se pristupa iz browsera.", gets: ["Prijava korisnika", "Pregled i izmena podataka", "Radi na svakom uređaju"] },
  { name: "Izmene i podrška", description: "Vaš sajt ostaje ažuran i posle objave.", gets: ["Izmena teksta i slika", "Dodavanje novih sadržaja", "Ispravka grešaka"] },
];

export const toolsUsed = ["Lovable", "Bubble", "Supabase", "Vercel", "GitHub"];
export const projectTech = ["React", "TypeScript", "Tailwind CSS"];
