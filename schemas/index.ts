import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: " Email is required",
  }),
  password: z.string().min(1, "Password is required"),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: " Email Required ",
  }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  name: z.string().min(1, "Name is required"),
});


