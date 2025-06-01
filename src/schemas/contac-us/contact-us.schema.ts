import z from "zod";

export const contactUsFormSchema = () =>
  z.object({
    firstName: z
      .string()
      .trim()
      .min(1, { message: "Emri është i detyrueshëm" }),
    lastName: z
      .string()
      .trim()
      .min(1, { message: "Mbiemri është i detyrueshëm" }),
    phoneNumber: z.string().optional(),
    email: z.string().email("Ju lutemi jepni një email të vlefshëm"),
    subject: z
      .string()
      .trim()
      .min(1, { message: "Subjekti nuk mund të jetë bosh" }),
    message: z
      .string()
      .trim()
      .min(10, { message: "Mesazhi duhet të ketë të paktën 10 karaktere" })
      .max(1000, {
        message: "Mesazhi nuk mund të jetë më i gjatë se 1000 karaktere",
      }),
  });
