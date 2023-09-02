import { asyncHandler } from "../middleware/asyncHandler";
import { Request, Response } from "express";
import { response } from "../utils";
import {
  getTask,
  createTask,
  updateTask,
  getTasks,
  deleteTask,
  getTaskComments,
} from "../service/task";
import { getProfile } from "../service/profile";

export const createTaskController = asyncHandler(
  async (req: Request, res: Response) => {
    const { assignedTo } = req.body;
    const requestedUserId = "64f2952feb9dd375608c2c74";

    if (assignedTo) {
      const profileOfAssignedTo = await getProfile(assignedTo);
      if (!profileOfAssignedTo)
        throw new Error("AssignedTo's profile not found");
    }
    req.body.assignedTo = requestedUserId;
    const task = await createTask(req.body);
    return response(true, res, task);
  },
);

export const getTaskController = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await getTask(id);
    if (!task) throw new Error("Task not found");
    return response(true, res, task);
  },
);

export const getTasksController = asyncHandler(
  async (_req: Request, res: Response) => {
    const tasks = await getTasks();
    return response(true, res, tasks);
  },
);
export const updateTaskController = asyncHandler(
  async (req: Request, res: Response) => {
    const requestedUserId = "64f2952feb9dd375608c2c74";
    const { assignedTo, status } = req.body;
    const { id: taskId } = req.params;
    if (!taskId) {
      throw new Error("No task id");
    }

    const task = await getTask(taskId);

    if (!task) {
      throw new Error("Task not exisst");
    }

    if (assignedTo) {
      const profileOfAssignedTo = await getProfile(assignedTo);
      if (!profileOfAssignedTo) throw new Error("AssignedTo person not found");
    }

    if (status && String(task.assignedTo) !== requestedUserId) {
      throw new Error("You cannot change other person's task status");
    }

    return response(true, res, await updateTask(taskId, req.body));
  },
);

export const deleteTaskController = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await getTask(id);
    if (!task) throw new Error("Task not exist");
    await deleteTask(id);
    return response(true, res);
  },
);

export const getTaskCommentsController = asyncHandler(
  async (req: Request, res: Response) => {
    const { id: taskId } = req.params;
    const task = await getTask(taskId);
    if (!task) throw new Error("Task not found");

    const comments = await getTaskComments(taskId);

    response(true, res, comments);
  },
);
