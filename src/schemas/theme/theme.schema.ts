import { z } from 'zod';

export const themeSchema = z.object({
  id: z.number(),
  name: z.string().min(1, 'The name is required.'),
});

export type ThemeSchema = z.infer<typeof themeSchema>;
