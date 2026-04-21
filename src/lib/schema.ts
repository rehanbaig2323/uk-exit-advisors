import { z } from 'zod';

export const keyPersonSchema = z.object({
  name: z.string(),
  title: z.string(),
});

const optionalUrlSchema = z.union([z.string().url(), z.literal('')]).optional();

export const advisorSchema = z.object({
  slug: z.string(),
  name: z.string(),
  location: z.string(),
  logo: optionalUrlSchema,
  logoUrl: optionalUrlSchema,
  services: z.array(z.string()),
  exitRoutes: z.array(z.string()),
  shortDescription: z.string(),
  longDescription: z.string(),
  keyPeople: z.array(keyPersonSchema),
  notableWork: z.array(z.string()),
  website: z.string().url(),
  email: z.string().email(),
  phone: z.string(),
  lastVerified: z.string(),
  advisorTypes: z.array(z.string()),
  featured: z.boolean().optional(),
});

export type Advisor = z.infer<typeof advisorSchema>;
