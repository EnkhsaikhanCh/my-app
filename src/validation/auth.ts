import { z } from "zod";

export const emailSchema = z
  .string()
  .email({ message: "Please enter a valid email address" })
  .trim();

export const nameSchema = z
  .string()
  .trim()
  .min(1, { message: "Please enter your name" })
  .max(128, { message: "Name must be at most 128 characters long" });

export const passwordSchema = z
  .string()
  .trim()
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(128, { message: "Password must be at most 128 characters long" });

export const signupSchema = z.object({
  username: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, { message: "Please enter your password" }),
});

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export const updateNameSchema = z.object({
  name: nameSchema,
});

export const changeEmailSchema = z.object({
  email: emailSchema,
});

export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string().trim(),
  })
  .superRefine((values, ctx) => {
    if (values.password !== values.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match",
      });
    }
  });

export const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, { message: "Please enter your current password" })
      .max(128, { message: "Password must be at most 128 characters long" }),
    newPassword: passwordSchema,
    confirmPassword: z.string().trim(),
    revokeOtherSessions: z.boolean().optional().default(true),
  })
  .superRefine((values, ctx) => {
    if (values.newPassword === values.currentPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["newPassword"],
        message: "New password must be different from the old password",
      });
    }
    if (values.newPassword !== values.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match",
      });
    }
  });

// Optional shared types
export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type ChangeEmailInput = z.infer<typeof changeEmailSchema>;
export type UpdateNameInput = z.infer<typeof updateNameSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
