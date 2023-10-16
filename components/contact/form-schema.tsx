import * as z from "zod";

export const formSchema = z.object({
  firstName: z
    .string({ required_error: "Please type your first name" })
    .min(2, {
      message: "First name must be at least 2 characters.",
    }),
  lastName: z.string({ required_error: "Please type your last name" }).min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  phone: z.string({ required_error: "Your phone number is required" }).min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z
    .string({ required_error: "Please type your email" })
    .email("Must be a valid email"),
  typeService: z.enum(["commercial", "rental", "real-estate", "janitorial"], {
    required_error: "You need to select a service type.",
  }),
  city: z.enum(["lewiston", "auburn", "portland"], {
    required_error: "Please select a city.",
  }),
  how_often: z.enum(["daily", "weekly", "biweekly"], {
    required_error: "Please select a value.",
  }),
  carpets_floors: z.enum(["floors", "carpets", "waxing"], {
    required_error: "Please select a value.",
  }),
});
