import { z } from "astro/zod";
import { iconPathKeys } from "../components/IconPaths";

const WorkSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  tags: z.array(z.string()),
  img: z.string(),
  img_alt: z.string().optional()
});

const ResumeItemSchema = z.object({
  date: z.string(),
  title: z.string(),
  description: z.string()
});

const [firstKey, ...otherKeys] = iconPathKeys

const SkillSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.enum([firstKey, ...otherKeys])
});


export { WorkSchema, ResumeItemSchema, SkillSchema }
