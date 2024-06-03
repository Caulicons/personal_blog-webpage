import { z } from 'zod';
import { postSchema } from './post.schema';

export const updatePostSchema = postSchema
  .omit({
    data: true,
    user: true,
    theme: true,
  })
  .extend({
    theme: z.string().min(1, 'Theme is required'),
  });

export type UpdatePostSchema = z.infer<typeof updatePostSchema>;
