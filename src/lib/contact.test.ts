import { describe, expect, it } from "vitest";
import { contactSchema, createWeb3FormsPayload } from "./contact";

const base = { name: "Mila", lastName: "Petrović", email: "mila@example.com", message: "Želim sajt za svoju radnju." };

describe("Portfolio contact", () => {
  it("sets subject and sender name from first and last name", () => {
    const p = createWeb3FormsPayload(base);
    expect(p["subject"]).toBe("Novi upit sa sajta");
    expect(p["from_name"]).toBe("Mila Petrović");
    expect(p["access_key"]).toBe("c390deb1-187d-4491-b4fb-357b307dab2c");
  });
  it("omits phone when empty and includes it when given", () => {
    expect(createWeb3FormsPayload({ ...base, phone: "" })).not.toHaveProperty("telefon");
    expect(createWeb3FormsPayload({ ...base, phone: "+381 (063) 897-6384" })["telefon"]).toBe("+381 (063) 897-6384");
  });
  it("rejects a phone with characters outside digits, spaces, +, - and parentheses", () => {
    expect(contactSchema.safeParse({ ...base, phone: "063-8976384x" }).success).toBe(false);
  });
  it("requires last name and a valid email", () => {
    expect(contactSchema.safeParse({ ...base, lastName: "" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...base, email: "neispravno" }).success).toBe(false);
  });
});
