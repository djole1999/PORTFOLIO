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
  { name: "Izrada poslovnih sajtova", description: "Nemate sajt ili vam je star? Dobijate stranicu na kojoj klijenti odmah vide šta radite, gde ste i kako da vas kontaktiraju. Za frizerske salone, tattoo studije, restorane, zanatlije, teretane i male firme.", gets: ["Kontakt forma i dugme za poziv ili Viber", "Mapa sa lokacijom vašeg lokala", "Galerija radova i cenovnik"] },
  { name: "Izrada web aplikacija", description: "Imate ideju za alat koji ne postoji gotov? Dobijate aplikaciju koja radi tačno ono što vama treba, bez funkcija koje nećete koristiti.", gets: ["Pristup sa telefona i računara", "Admin panel za izmenu sadržaja", "Mogućnost kasnije nadogradnje"] },
  { name: "Sajt koji radi na telefonu", description: "Većina vaših klijenata vas traži sa telefona? Dobijate sajt na kom se sve vidi i radi jednim dodirom.", gets: ["Dugme za poziv jednim dodirom", "Čitljiv tekst bez zumiranja", "Meni lak za korišćenje na telefonu"] },
  { name: "Prilagođena digitalna rešenja", description: "Treba vam nešto što ne staje u standardni sajt? Dobijate rešenje po meri za vaš način rada.", gets: ["Rezervacije termina ili porudžbine", "Prijava korisnika i evidencija", "Dogovor oko svake funkcije pre početka rada"] },
];

export const toolsUsed = ["Lovable", "Bubble", "Supabase", "Vercel", "GitHub"];
export const projectTech = ["React", "TypeScript", "Tailwind CSS"];
