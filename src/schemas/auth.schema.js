import { z } from "zod";

// zod es una bibloteca de validacion de esquemas para javascript y typescrit. Permite definir y validar
// esquemas facil de usar tambien podes definir esquemas para objetos, arreglo, cadenas, numeros y fechas
//y otros tipos de datos
export const resgisteSchema = z.object({
  username: z.string({
    required_error: "Username is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at lest 6 characters",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  password: z
    .string({
      required_error: "Password required",
    })
    .min(6, {
      message: "Password must be at loeast 6 characters",
    }),
});
