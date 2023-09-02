import { Request, Response } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import { getProfile, getTask } from "../service";
import {
  createComment,
  deleteComment,
  getComment,
  getCommentWithPopulate,
  updateComment,
} from "../service/comment";
import { response } from "../utils";

export const createCommentController = asyncHandler(
  async (req: Request, res: Response) => {
    const requestedUserId = "64f2952feb9dd375608c2c74";
    const profile = await getProfile(requestedUserId);

    if (!profile) throw new Error("Profile not found");

    const { taskId } = req.body;

    if (!taskId) {
      throw new Error("Task id is required");
    }

    const task = await getTask(taskId);

    if (!task) throw new Error("Task not exist");
    req.body.userId = requestedUserId;

    const comment = await createComment(req.body);
    return response(true, res, comment);
  },
);

export const getCommentController = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const comment = await getCommentWithPopulate(id);
    return response(true, res, comment);
  },
);

export const updateCommentController = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const requestedUserId = "64f2952feb9dd375608c2c74";

    const comment = await getComment(id);
    if (!comment) throw new Error("comment not found");

    if (String(comment.userId) !== requestedUserId)
      throw new Error("This is not your comment");

    return response(true, res, await updateComment(id, req.body));
  },
);

export const deleteCommentController = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const comment = await getComment(id);
    if (!comment) throw new Error("comment not found");

    return response(true, res, await deleteComment(id));
  },
);
