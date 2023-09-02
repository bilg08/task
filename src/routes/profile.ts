import express from "express";
import { registerController } from "../controller/index";
import { getProfileTasksController } from "../controller/profile";
export const profileRouter = express.Router();

profileRouter.post("/", registerController);
profileRouter.get("/:id/tasks", getProfileTasksController);
