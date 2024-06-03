import { z } from 'zod';
import { postSchema } from './post.schema';

export const createPostSchema = postSchema
  .omit({
    id: true,
    data: true,
    user: true,
    theme: true,
  })
  .extend({
    theme: z.string().min(1, 'Theme is required'),
  });

export type CreatePostSchema = z.infer<typeof createPostSchema>;
