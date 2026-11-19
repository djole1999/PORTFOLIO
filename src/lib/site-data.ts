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
  { name: "Izrada poslovnih sajtova", description: "Jasno predstavite svoj posao kroz moderan sajt koji povezuje dobar dizajn i funkcionalnost.", gets: ["Moderan dizajn prilagođen vašem brendu", "Jasna struktura i sadržaj", "Brzo učitavanje"] },
  { name: "Izrada web aplikacija", description: "Od ideje do funkcionalnog rešenja, prilagođenog vašim potrebama i načinu rada.", gets: ["Rešenje po meri vašeg procesa", "Pregledan i jednostavan interfejs", "Prostor za kasniju nadogradnju"] },
  { name: "Responsive web dizajn", description: "Pažljivo oblikovano iskustvo na svakom ekranu, od telefona do računara.", gets: ["Ispravan prikaz na telefonu, tabletu i računaru", "Dugmad laka za dodir", "Čitljiv tekst na svakom ekranu"] },
  { name: "Prilagođena digitalna rešenja", description: "Jedinstven pristup vašoj ideji, bez nepotrebne složenosti i gotovih ograničenja.", gets: ["Lični dogovor oko svake funkcije", "Bez nepotrebne složenosti", "Podrška kroz ceo proces"] },
];

export const tools = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Git", "Figma", "Vercel"];
