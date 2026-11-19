import { describe, expect, it } from "vitest";
import { contactSchema, createContactMailto } from "./contact";

describe("Portfolio contact", () => {
  it("addresses the draft to the specified portfolio email", () => {
    const url = createContactMailto({ name: "Mila Petrović", email: "mila@example.com", message: "Želim sajt za svoju radnju." });
    expect(url.split("?")[0]).toBe("mailto:djole.0600@gmail.com");
    expect(decodeURIComponent(url)).toContain("Želim sajt za svoju radnju.");
  });
  it("rejects invalid input before creating an email draft", () => {
    expect(contactSchema.safeParse({ name: "", email: "neispravno", message: "" }).success).toBe(false);
    expect(() => createContactMailto({ name: "Ana", email: "invalid", message: "Poruka za novi sajt." })).toThrow();
  });
});