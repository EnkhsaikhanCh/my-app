"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { type z } from "zod";

import { authClient } from "@/lib/auth-client";
import { type signupSchema } from "@/validation/auth";

export function useSignup() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  async function signup(values: z.infer<typeof signupSchema>) {
    try {
      setIsLoading(true);
      await authClient.signUp.email(
        {
          email: values.email,
          password: values.password,
          name: values.username,
          callbackURL: "/dashboard",
        },
        {
          onRequest: () => {
            toast("Creating account...");
          },
          onSuccess: () => {
            toast.success("Account created successfully.");
            router.push("/dashboard");
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

  return { signup, isLoading };
}
