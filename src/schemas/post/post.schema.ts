import { z } from 'zod';
import { themeSchema } from '../theme/theme.schema';

export const postSchema = z.object({
  id: z.number(),
  title: z.string().min(1, 'The title is required.'),
  content: z.string().min(1, 'The content is required.'),
  data: z.date(),
  theme: themeSchema,
});

export type PostSchema = z.infer<typeof postSchema>;
