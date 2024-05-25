import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'O Email é obrigatório.')
    .email('Formato de e-mail inválido.'),
  password: z.string().min(8, 'A senha tem no mínimo 8 caracteres').max(16),
});

export type LoginSchema = z.infer<typeof loginSchema>;
