import { betterAuth } from "better-auth";
import { adminClient } from "better-auth/client/plugins";

export const auth = betterAuth({
  basePath: "/api/auth",
  plugins: [adminClient()],
});
