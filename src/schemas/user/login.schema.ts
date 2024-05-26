import { z } from 'zod';
import { userSchema } from './user.schema';

export const loginSchema = userSchema.omit({
  id: true,
  type: true,
  posts: true,
  username: true,
  photo: true,
  confirmPassword: true,
});

export type LoginSchema = z.infer<typeof loginSchema>;
