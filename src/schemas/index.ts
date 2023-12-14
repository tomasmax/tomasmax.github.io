import { z } from "astro/zod";

export const WorkSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  tags: z.array(z.string()),
  img: z.string(),
  img_alt: z.string().optional(),
});

export const ResumeItemSchema = z.object({
  date: z.string(),
  title: z.string(),
  description: z.string(),
});
