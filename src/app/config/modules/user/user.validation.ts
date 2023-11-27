import { z } from 'zod';
const userValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'password must be a valid string' })
    .min(8, { message: 'password at least be 8 characters' })
    .max(20, { message: 'max password can be 20 characters' })
    .optional(),
});

export const userValidation = {
  userValidationSchema,
};
