import { z } from "zod";

// Esquema de validación con Zod
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(50, { message: "El nombre no puede exceder los 50 caracteres" })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El nombre solo puede contener letras y espacios",
    }),

  email: z
    .string()
    .email({ message: "Por favor ingresa un email válido" })
    .min(5, { message: "El email debe tener al menos 5 caracteres" })
    .max(100, { message: "El email no puede exceder los 100 caracteres" }),

  phone: z
    .string()
    .min(10, { message: "El teléfono debe tener al menos 10 caracteres" })
    .max(20, { message: "El teléfono no puede exceder los 20 caracteres" })
    .regex(/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.0-9]{8,}$/, {
      message: "Por favor ingresa un número de teléfono válido",
    }),

  service: z
    .string()
    .min(1, { message: "Por favor selecciona un servicio" })
    .refine((value) => value !== "", {
      message: "Por favor selecciona un servicio",
    }),

  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
    .max(500, { message: "El mensaje no puede exceder los 500 caracteres" })
    .regex(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,!?¿¡()\-]+$/, {
      message: "El mensaje contiene caracteres no permitidos",
    }),

  privacy: z.boolean().refine((value) => value === true, {
    message: "Debes aceptar la política de privacidad",
  }),
});

// Tipo inferido desde el esquema Zod
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Esquema parcial para validación en tiempo real
export const partialContactFormSchema = contactFormSchema.partial();
