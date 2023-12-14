import { defineCollection, z } from 'astro:content';
import { ResumeItemSchema, WorkSchema } from '../schemas';

const work = defineCollection({
	schema: WorkSchema,
})

const about = defineCollection({
	type: 'data',
	schema: z.array(ResumeItemSchema),
})

export const collections = {
	work, about
};
