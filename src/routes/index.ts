import { Router } from "express";
import taskRoutes from "../routes/taskRoutes.js";

const routes = Router();

routes.use("/tasks", taskRoutes);

export default routes;