import { z } from "zod";

export const validateSchema = z.object({
  name: z.string()
    .min(4, { message: "Name must be at least 4 characters" })
    .max(20, { message: "Name must be at most 20 characters" }),

  email: z.string()
    .email({ message: "Invalid email address" }),

  phone: z.union([
    z.string()
      .regex(/^\d+$/, { message: "Phone number must contain only digits" })
      .min(10, { message: "Phone number must be at least 10 digits" })
      .max(15, { message: "Phone number must be at most 15 digits" }),
    z.literal(""),
  ]).optional(),

  address: z.union([
    z.string()
      .min(10, { message: "Address must be at least 10 characters" })
      .max(40, { message: "Address must be at most 40 characters" }),
    z.literal(""),
  ]).optional(),

  subject: z.coerce.string()
    .min(10, { message: "Subject must be at least 10 characters" })
    .max(40, { message: "Subject must be at most 40 characters" }),

  content: z.coerce.string()
    .min(15, { message: "Content must be at least 15 characters" })
    .max(100, { message: "Content must be at most 100 characters" }),
});
