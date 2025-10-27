import {z} from "zod";

// Construimos un esquema para validacion
export const createTareasSchema = z.object({
    titulo: z.string({
        requiered_error: "El titulo es requerido",
        invalid_type_error: "El titulo debe ser un string"
    }).min(1, {
        message: "El titulo debe tener al menos 1 caracter"
    }).max(255, {
        message: "El titulo debe tener menos de 255 caracteres"
    }),
    descripcion: z.string({
        requiered_error: "La descripcion es requerida",
        invalid_type_error: "La descripcion debe ser un string"
    }).min(1, {
        message: "La descripcion debe tener al menos 1 caracter"
    }).max(255, {
        message: "La descripcion debe tener menos de 255 caracteres"
    }).optional(),
});


