import {email, z} from "zod";

export const signupSchema = z.object({
    name: z.string({
        required_error: "El nombre es requerido",
        invalid_type_error: "El nombre debe ser un string"
    }).min(1, {
        message: "El nombre debe tener al menos 1 caracter"
    }).max(255, {
        message: "El nombre debe tener menos de 255 caracteres"
    }),
    email: z.email({
        message: "El email no es valido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida",
        invalid_type_error: "La contraseña debe ser un string"
    }).min(8, {
        message: "La contraseña debe tener al menos 8 caracteres"
    }).max(255)

});

export const signinSchema = z.object({
    email: z.email({
    message: "El email no es valido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida",
        invalid_type_error: "La contraseña debe ser un string"
    }).min(8, {
        message: "La contraseña debe tener al menos 8 caracteres"
    }).max(255)

});