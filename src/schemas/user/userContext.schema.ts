import { z } from 'zod';
import { userSchema } from './user.schema';

export const userContextSchema = userSchema.omit({
  confirmPassword: true,
  password: true,
});

export type UserInfoSchema = z.infer<typeof userContextSchema>;
