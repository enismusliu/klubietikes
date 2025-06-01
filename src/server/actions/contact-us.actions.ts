"use server";
import request from "@/lib/request";
import { contactUsFormSchema } from "@/schemas/contac-us/contact-us.schema";
import { z } from "zod";

export const contactUsAction = async (
  data: z.infer<ReturnType<typeof contactUsFormSchema>>
) => {
  const response = await request(`contact-us`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return response;
};
