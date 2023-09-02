import { asyncHandler } from "../middleware/asyncHandler";
import { Request, Response } from "express";
import { response } from "../utils";
import { checkTaskExist, createTask, updateTask } from "../service/task";
import { checkProfileExist } from "../service/profile";

export const createTaskController = asyncHandler(
  async (req: Request, res: Response) => {
    const { assignedTo } = req.body;
    if (!assignedTo) {
      throw new Error("assignedTo is required");
    }
    const isAssignedPersonExist = await checkProfileExist(assignedTo);
    if (!isAssignedPersonExist) {
      throw new Error("Invalid assignedTo person");
    }
    const task = await createTask(req.body);
    return response(true, res, task);
  },
);

export const updateTaskController = asyncHandler(
  async (req: Request, res: Response) => {
    const { id: taskId } = req.body;
    const isTaskExist = await checkTaskExist(taskId);

    if (!isTaskExist) {
      throw new Error("Task not exisst");
    }

    const task = await updateTask(taskId, req.body);
    return response(true, res, task);
  },
);
