import { Router } from "express";
import { listarTarea } from "../controllers/tareas.controller.js"; 
import { listarTareas } from "../controllers/tareas.controller.js";
import { crearTarea } from "../controllers/tareas.controller.js";
import { actualizarTarea } from "../controllers/tareas.controller.js";
import { eliminarTarea } from "../controllers/tareas.controller.js";
import { isAuth } from "../middlewares/authmiddleware.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { createTareasSchema } from "../schemas/tareas.shema.js";

//import Router from "express-promise-router";

const routes = Router();

routes.get("/tareas", isAuth, listarTareas);
routes.get("/tareas/:id", isAuth, listarTarea);
routes.post("/tareas", validateSchema(createTareasSchema), crearTarea);
routes.put("/tareas/:id", isAuth, actualizarTarea);
routes.delete("/tareas/:id", isAuth, eliminarTarea);

export default routes;