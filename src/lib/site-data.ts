import atelier from "@/assets/atelier.asset.json";
import goldVet from "@/assets/gold-vet.asset.json";
import lupus from "@/assets/lupus.asset.json";
export { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "./site-data-contact";


export const projects = [
  { name: "Atelier", description: "Luksuzni arhitektonski template", status: "Demo projekat", tech: ["React", "Tailwind CSS", "Vercel"], image: atelier.url, url: "https://template-mocha-one.vercel.app/" },
  { name: "Gold Vet", description: "Demo sajt veterinarske ambulante", status: "Demo projekat", tech: ["React", "Responsive dizajn", "Vercel"], image: goldVet.url, url: "https://responsive-magic-nu.vercel.app/" },
  { name: "Tattoo Studio Lupus", description: "Sajt za lokalni tattoo studio", status: "U izradi", tech: ["React", "Tailwind CSS", "Vercel"], image: lupus.url, url: "https://lupus-seven.vercel.app/" },
];

export type Service = { name: string; problem: string; outcome: string; forWho: string; timeline: string; price: string; example: string | null; gets: string[] };

export const services: Service[] = [
  {
    name: "Sajt za lokalnu firmu",
    problem: "Ljudi vas traže na internetu i ne nalaze ništa, ili nalaze samo staru Facebook stranicu.",
    outcome: "Dobijate sajt na kome kupac za pola minuta vidi šta radite, gde ste i kako da vas pozove.",
    forWho: "Ordinacije, saloni, servisi, zanatlije i lokalne radnje",
    timeline: "[OVDE UNESI rok za sajt firme]",
    price: "[OVDE UNESI početnu cenu sajta firme]",
    example: "https://responsive-magic-nu.vercel.app/",
    gets: [
      "Do [OVDE UNESI broj] stranica: početna, usluge, o nama, kontakt",
      "Dugme koje na telefonu odmah poziva vaš broj",
      "Mapa sa vašom lokacijom i radnim vremenom",
      "Forma za upit koja stiže na vaš email",
      "Prikaz proveren na telefonu, tabletu i računaru pre predaje",
    ],
  },
  {
    name: "Sajt sa ponudom i cenovnikom",
    problem: "Svakog dana odgovarate na iste poruke: koliko košta, šta je u ponudi, imate li slobodan termin.",
    outcome: "Dobijate sajt na kome je cela ponuda sa cenama, pa stižu upiti ljudi koji su već odlučili.",
    forWho: "Firme sa više usluga ili proizvoda, na primer studiji, restorani i turističke agencije",
    timeline: "[OVDE UNESI rok za sajt sa ponudom]",
    price: "[OVDE UNESI početnu cenu sajta sa ponudom]",
    example: "https://lupus-seven.vercel.app/",
    gets: [
      "Stranica sa svim uslugama ili proizvodima i cenama",
      "Galerija radova sa do [OVDE UNESI broj] fotografija",
      "Forma za upit sa izborom usluge",
      "Izmene cena i teksta [OVDE UNESI koliko puta ili koliko dugo] bez doplate",
    ],
  },
  {
    name: "Web aplikacija po meri",
    problem: "Rezervacije, porudžbine ili evidenciju vodite u svesci, Excelu i porukama, pa se stvari gube.",
    outcome: "Dobijate jednostavan program u pregledaču koji radi tačno ono što vašem poslu treba.",
    forWho: "Firme koje svakodnevno ručno vode termine, klijente ili zalihe",
    timeline: "[OVDE UNESI rok za web aplikaciju]",
    price: "[OVDE UNESI početnu cenu web aplikacije]",
    example: null,
    gets: [
      "Pisani spisak funkcija koji zajedno odobrimo pre početka rada",
      "Radi na telefonu i računaru, bez instalacije",
      "Izrada u React i TypeScript tehnologiji",
      "Obuka za vas i zaposlene: [OVDE UNESI trajanje obuke]",
    ],
  },
  {
    name: "Redizajn postojećeg sajta",
    problem: "Imate sajt, ali izgleda zastarelo, ne radi dobro na telefonu i niko vam se preko njega ne javlja.",
    outcome: "Dobijate isti sadržaj u novom, preglednom obliku, na vašem postojećem domenu.",
    forWho: "Firme koje već imaju sajt i domen",
    timeline: "[OVDE UNESI rok za redizajn]",
    price: "[OVDE UNESI početnu cenu redizajna]",
    example: "https://template-mocha-one.vercel.app/",
    gets: [
      "Pisani pregled šta ne radi na sadašnjem sajtu, pre početka",
      "Prenos postojećih tekstova i slika",
      "Novi sajt na vašem postojećem domenu",
      "Stari linkovi preusmereni na nove stranice",
    ],
  },
];

export const tools = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Git", "Figma", "Vercel"];
