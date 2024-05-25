import { z } from 'zod';
import { api } from '../../utils/http';

export const registerUserScheme = z
  .object({
    username: z.string().min(1, 'username is required'),
    email: z
      .string()
      .min(1, 'O Email é obrigatório.')
      .email('Formato de e-mail inválido.'),
    photo: z.string().trim().url('Formato de imagem inválido.'),
    password: z.string().min(8, 'A senha tem no mínimo 8 caracteres').max(16),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas devem ser iguais',
    path: ['confirmPassword'],
  })
  .refine(
    async (data) => {
      const emailAlreadyExist = await api.get(`/users/email/${data.email}`);
      return !emailAlreadyExist.data;
    },
    {
      message: 'email already exists',
      path: ['email'],
    },
  )
  .refine(
    async (data) => {
      const usernameAlreadyExist = await api.get(
        `/users/username/${data.username}`,
      );
      return !usernameAlreadyExist.data;
    },
    {
      message: 'username already exists',
      path: ['username'],
    },
  );

export type RegisterScheme = z.infer<typeof registerUserScheme>;
