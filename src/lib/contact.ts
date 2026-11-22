import { z } from "zod";

const PHONE_PATTERN = /^[\d\s()+-]+$/;

export const WEB3FORMS_URL = "https://api.web3forms.com/submit";
// Web3Forms access keys are public by design (used from the browser).
export const WEB3FORMS_ACCESS_KEY = "c390deb1-187d-4491-b4fb-357b307dab2c";
export const CONTACT_SUBJECT = "Novi upit sa sajta";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Unesite ime od najmanje 2 znaka.").max(100, "Ime može imati najviše 100 znakova."),
  lastName: z.string().trim().min(2, "Unesite prezime od najmanje 2 znaka.").max(100, "Prezime može imati najviše 100 znakova."),
  email: z.string().trim().min(1, "Unesite email adresu.").email("Unesite ispravnu email adresu.").max(255),
  phone: z
    .string()
    .trim()
    .max(30, "Broj telefona može imati najviše 30 znakova.")
    .refine((v) => v === "" || PHONE_PATTERN.test(v), "Broj telefona sme da sadrži samo cifre, razmake, +, - i zagrade.")
    .optional(),
  message: z.string().trim().min(10, "Poruka treba da ima najmanje 10 znakova.").max(2000, "Poruka može imati najviše 2000 znakova."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function createWeb3FormsPayload(input: unknown, botcheck = false) {
  const d = contactSchema.parse(input);
  const fullName = `${d.name} ${d.lastName}`;
  const payload: Record<string, string | boolean> = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: CONTACT_SUBJECT,
    from_name: fullName,
    ime: d.name,
    prezime: d.lastName,
    email: d.email,
    poruka: d.message,
    botcheck,
  };
  if (d.phone) payload["telefon"] = d.phone;
  return payload;
}
