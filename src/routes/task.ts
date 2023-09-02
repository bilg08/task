import express from "express";
import { createTaskController, updateTaskController } from "../controller/task";
export const taskRouter = express.Router();

taskRouter.route("/").post(createTaskController).put(updateTaskController);
