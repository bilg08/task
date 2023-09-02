import express from "express";
import {
  createTaskController,
  deleteTaskController,
  getTaskController,
  getTasksController,
  updateTaskController,
} from "../controller/task";
export const taskRouter = express.Router();

taskRouter.route("/").get(getTasksController).post(createTaskController);
taskRouter
  .route("/:id")
  .get(getTaskController)
  .put(updateTaskController)
  .delete(deleteTaskController);
