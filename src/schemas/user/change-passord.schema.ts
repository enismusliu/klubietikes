import z from "zod";

export const changeUserPasswordSchema = (t: any) =>
  z
    .object({
      newPassword: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .refine(
          (val) => /[A-Z]/.test(val),
          "Password must include at least one uppercase letter"
        )
        .refine(
          (val) => /[a-z]/.test(val),
          "Password must include at least one lowercase letter"
        )
        .refine(
          (val) => /\d/.test(val),
          "Password must include at least one number"
        )
        .refine(
          (val) => /[@$!%*?&]/.test(val),
          "Password must include at least one special character (@$!%*?&)"
        ),
      confirmNewPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      message: "Passwords must match",
      path: ["confirmNewPassword"],
    });
