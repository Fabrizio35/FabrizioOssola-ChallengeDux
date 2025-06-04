import { z } from 'zod'

// Validación del esquema de usuario
export const userSchema = z.object({
  usuario: z
    .string()
    .min(3, { message: 'Debe tener al menos 3 caracteres' })
    .max(128, { message: 'Debe tener como máximo 128 caracteres' })
    .regex(/^[a-zA-Z0-9\s]+$/, {
      message: 'Solo se permiten letras, números y espacios',
    }),
  sector: z.union(
    [
      z.literal(1111),
      z.literal(2222),
      z.literal(3333),
      z.literal(4444),
      z.literal(5555),
    ],
    {
      message: 'El sector debe ser 1111, 2222, 3333, 4444 o 5555',
    }
  ),
  estado: z.enum(['ACTIVO', 'INACTIVO'], {
    message: 'El estado es obligatorio o es inválido',
  }),
})

export type UserFormType = z.infer<typeof userSchema>
