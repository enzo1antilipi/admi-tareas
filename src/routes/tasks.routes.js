import { Router } from "express";
import { authRequired } from "../middllewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taks.controllers.js";
import { validateSchema } from "../middllewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";
const router = Router();

router.get("/api/tasks", authRequired, getTasks); //obteneer
router.get("/api/tasks/:id", authRequired, getTask); //obtener uno solo
router.post(
  "/api/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTask
); // crear tarea
router.delete("/api/tasks/:id", authRequired, deleteTask); //eliminar tarea
router.put("/api/tasks/:id", authRequired, updateTask); //actualizar una sola tarea

export default router;
