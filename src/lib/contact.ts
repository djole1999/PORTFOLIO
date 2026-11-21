import { z } from "zod";
import { CONTACT_EMAIL } from "./site-data-contact";

const PHONE_PATTERN = /^[\d\s()+-]+$/;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Unesite ime od najmanje 2 znaka.").max(100, "Ime može imati najviše 100 znakova."),
  lastName: z.string().trim().min(2, "Unesite prezime od najmanje 2 znaka.").max(100, "Prezime može imati najviše 100 znakova."),
  email: z.string().trim().email("Unesite ispravnu email adresu.").max(255),
  phone: z
    .string()
    .trim()
    .max(30, "Broj telefona može imati najviše 30 znakova.")
    .refine((v) => v === "" || PHONE_PATTERN.test(v), "Broj telefona sme da sadrži samo cifre, razmake, +, - i zagrade.")
    .optional(),
  message: z.string().trim().min(10, "Poruka treba da ima najmanje 10 znakova.").max(2000, "Poruka može imati najviše 2000 znakova."),
});

export function createContactMailto(input: unknown) {
  const data = contactSchema.parse(input);
  const lines = [`Ime i prezime: ${data.name} ${data.lastName}`, `Email: ${data.email}`];
  if (data.phone) lines.push(`Telefon: ${data.phone}`);
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Upit za saradnju: ${data.name}`)}&body=${encodeURIComponent(`${lines.join("\n")}\n\n${data.message}`)}`;
}
