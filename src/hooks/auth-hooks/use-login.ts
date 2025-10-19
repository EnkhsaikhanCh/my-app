"use client";

import { useState } from "react";

import { toast } from "sonner";
import { type z } from "zod";

import { authClient } from "@/lib/auth-client";
import { type loginSchema } from "@/validation/auth";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);

  async function login(values: z.infer<typeof loginSchema>) {
    try {
      setIsLoading(true);
      await authClient.signIn.email(
        {
          email: values.email,
          password: values.password,
          callbackURL: "/dashboard",
          rememberMe: true,
        },
        {
          onRequest: () => {
            toast("Logging in...");
          },
          onSuccess: () => {
            toast.success("Welcome back!");
          },
          onError: (ctx) => {
            toast.error(ctx.error.message);
          },
        },
      );
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return { login, isLoading };
}
