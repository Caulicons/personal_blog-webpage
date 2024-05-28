import { z } from 'zod';
import { themeSchema } from '../theme/theme.schema';

export const postSchema = z.object({
  id: z.number(),
  title: z.string().min(1, 'The title is required.'),
  content: z.string().min(1, 'The content is required.'),
  data: z.date(),
  theme: themeSchema,
  photo: z.string(),
  author: z.object({
    id: z.number(),
    username: z.string().min(1, 'username is required'),
    email: z
      .string()
      .min(1, 'The email is required.')
      .email('Invalid email format.'),
    photo: z
      .string()
      .trim()
      .url('Invalid image format. The image must be a URL.'),
  }),
});

export type PostSchema = z.infer<typeof postSchema>;
