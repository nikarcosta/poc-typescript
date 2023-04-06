import { Router } from "express";
import taskControllers from "../controllers/taskControllers.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware";
import { taskSchema } from "../schemas/task";

const taskRoutes = Router();

taskRoutes.get("/", taskControllers.getTasks);
//taskRoutes.post("/", validateSchema(taskSchema), taskControllers.addNewTask);
//taskRoutes.put("/:id", validateSchema(taskSchema), taskControllers.updateTask);
//taskRoutes.delete("/:id", taskControllers.deleteTask);

export default taskRoutes;