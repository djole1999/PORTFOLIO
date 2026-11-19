import { z } from "zod";
import { CONTACT_EMAIL } from "./site-data-contact";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Unesite ime od najmanje 2 znaka.").max(100, "Ime može imati najviše 100 znakova."),
  email: z.string().trim().email("Unesite ispravnu email adresu.").max(255),
  message: z.string().trim().min(10, "Poruka treba da ima najmanje 10 znakova.").max(2000, "Poruka može imati najviše 2000 znakova."),
});

export function createContactMailto(input: unknown) {
  const data = contactSchema.parse(input);
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Upit za saradnju: ${data.name}`)}&body=${encodeURIComponent(`Ime: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`;
}
