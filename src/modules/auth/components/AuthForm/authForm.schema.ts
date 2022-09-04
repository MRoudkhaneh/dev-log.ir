import * as z from 'zod';

export const AuthFormSchema = z.object({
  username: z.string().min(1, {message: 'این فیلد اجباری است'}),
  password: z.string().min(1, {message: 'این فیلد اجباری است'}),
});
