import { Router } from "express";
import { signin, signup, signout, profile } from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/authmiddleware.js";
import validateSchema from "../middlewares/validate.middleware.js";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/signin", validateSchema(signinSchema), signin);
router.post("/signup", validateSchema(signupSchema), signup);
router.post("/signout", signout);
router.get("/profile", isAuth ,profile);

// router.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   // Aquí iría la lógica de autenticación
//   if (username === "admin" && password === "password") {
//     res.json({ message: "Login exitoso", token: "fake-jwt-token" });
//   } else {
//     res.status(401).json({ message: "Credenciales inválidas" });
//   }
// });

export default router;