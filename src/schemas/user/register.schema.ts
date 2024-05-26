import { z } from 'zod';
import { api, handleServerError } from '../../utils/http';
import { userSchema } from './user.schema';

export const registerUserScheme = userSchema
  .omit({
    id: true,
    type: true,
    posts: true,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas devem ser iguais',
    path: ['confirmPassword'],
  })
  .refine(
    async (data) => {
      try {
        const emailAlreadyExist = await api.get(`/users/email/${data.email}`);
        return !emailAlreadyExist.data;
      } catch (e) {
        handleServerError(e);
      }
    },
    {
      message: 'email already exists',
      path: ['email'],
    },
  )
  .refine(
    async (data) => {
      try {
        const usernameAlreadyExist = await api.get(
          `/users/username/${data.username}`,
        );
        return !usernameAlreadyExist.data;
      } catch (e) {
        handleServerError(e);
      }
    },
    {
      message: 'username already exists',
      path: ['username'],
    },
  );

export type RegisterScheme = z.infer<typeof registerUserScheme>;
