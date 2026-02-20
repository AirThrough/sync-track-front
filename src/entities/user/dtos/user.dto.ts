import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  email: z.email(),
  name: z.string(),
  role: z.string(),
});

export type UserDto = z.infer<typeof userSchema>;
