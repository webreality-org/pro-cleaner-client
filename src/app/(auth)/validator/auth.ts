import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email().min(2, {
    message: 'please use valid email.',
  }),
  password: z.string().min(6, { message: 'invalid password..' }).max(100),
});

export const signUpSchema = z.object({
  email: z.string().email().min(2),
  firstName: z
    .string()
    .min(3, { message: 'minimum characters more  than 2' })
    .max(50, { message: 'maximum characters less than 50' }),
  lastName: z
    .string()
    .min(3, { message: 'minimum characters more  than 2' })
    .max(50, { message: 'maximum characters less than 50' }),
  gender: z.string(),
  password: z.string().min(6, { message: 'more than 6 character' }).max(100),
  confirmPassword: z.string().min(6, { message: 'invalid password..' }).max(100),
});
