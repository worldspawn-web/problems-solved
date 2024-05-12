import z from 'zod';

export const schema = z.object({
  email: z.string().email({ message: 'Некорректный e-mail' }).default(''),
  password: z
    .string()
    .superRefine((value, context) => {
      if (value.length < 8) {
        context.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: 8,
          inclusive: false,
          type: 'string',
          message: 'Минимум 8 символов',
        });
      }
      if (!/\d/g.test(value)) {
        context.addIssue({
          code: z.ZodIssueCode.invalid_string,
          validation: 'regex',
          message: 'Минимум 1 цифра',
        });
      }
      if (!/[A-Z]/g.test(value)) {
        context.addIssue({
          code: z.ZodIssueCode.invalid_string,
          validation: 'regex',
          message: 'Минимум 1 заглавная буква',
        });
      }
    })
    .default(''),
});

export type Schema = z.infer<typeof schema>;
