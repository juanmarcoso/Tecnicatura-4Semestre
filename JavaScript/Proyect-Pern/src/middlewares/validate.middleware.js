import { z } from "zod";

export const validateSchema = (schema) => async (req, res, next) => {
    
    try {
        await schema.parse(req.body);
        next();
    } catch (error) {
        
        // Comprobamos si es un error de Zod
        if (error instanceof z.ZodError) {
            return res.status(400).json(error.issues.map((issue) => issue.message));
        }

        // Si es cualquier otro error
        return res.status(500).json({ 
            message: "Error interno (El middleware falló)",
            error: error.message
        });
    }
};

export default validateSchema;

// export const validateSchema = (schema) => async (req, res, next) => {
//     try {
//         await schema.parse(req.body);
//         next();
//     } catch (error) {
//         console.log(error);
//         if (Array.isArray(error.errors)){
//             return res.status(400).json(error.errors.map((err) => err.message));
//         }
//     };
// }

// export default validateSchema;