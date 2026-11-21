import { describe, expect, it } from "vitest";
import { contactSchema, createContactMailto } from "./contact";

const base = { name: "Mila", lastName: "Petrović", email: "mila@example.com", message: "Želim sajt za svoju radnju." };

function bodyOf(url: string) {
  const body = url.split("body=")[1];
  if (!body) throw new Error("Email draft has no body.");
  return decodeURIComponent(body);
}

describe("Portfolio contact", () => {
  it("addresses the draft to the specified portfolio email", () => {
    const url = createContactMailto(base);
    expect(url.split("?")[0]).toBe("mailto:djole.0600@gmail.com");
    expect(bodyOf(url)).toContain("Želim sajt za svoju radnju.");
  });

  it("puts first and last name together in the draft body", () => {
    expect(bodyOf(createContactMailto(base))).toContain("Ime i prezime: Mila Petrović");
  });

  it("accepts an empty phone and adds no phone line", () => {
    expect(contactSchema.safeParse({ ...base, phone: "" }).success).toBe(true);
    expect(bodyOf(createContactMailto({ ...base, phone: "" }))).not.toContain("Telefon:");
  });

  it("adds the phone line when a phone is given", () => {
    expect(bodyOf(createContactMailto({ ...base, phone: "+381 (063) 897-6384" }))).toContain("Telefon: +381 (063) 897-6384");
  });

  it("rejects a phone with characters outside digits, spaces, +, - and parentheses", () => {
    expect(contactSchema.safeParse({ ...base, phone: "063-8976384x" }).success).toBe(false);
  });

  it("requires the last name like the first name", () => {
    expect(contactSchema.safeParse({ ...base, lastName: "" }).success).toBe(false);
  });

  it("rejects invalid input before creating an email draft", () => {
    expect(contactSchema.safeParse({ name: "", email: "neispravno", message: "" }).success).toBe(false);
    expect(() => createContactMailto({ name: "Ana", email: "invalid", message: "Poruka za novi sajt." })).toThrow();
  });
});
