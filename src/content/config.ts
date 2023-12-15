import { defineCollection, z } from 'astro:content';
import { ResumeItemSchema, SkillSchema, WorkSchema } from '../schemas';

const work = defineCollection({
	schema: WorkSchema,
})

const about = defineCollection({
	type: 'data',
	schema: z.array(ResumeItemSchema),
})

const home = defineCollection({
	type: 'data',
	schema: z.array(SkillSchema),
})

export const collections = {
	work, about, home
};
