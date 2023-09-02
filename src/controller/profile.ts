import { Request, Response } from "express";
import { createProfile, getProfile, getProfileTasks } from "../service/profile";
import { asyncHandler } from "../middleware/asyncHandler";
import { response } from "../utils";

export const registerController = asyncHandler(
  async (req: Request, res: Response) => {
    const profile = await createProfile(req.body);
    return response(true, res, profile);
  },
);

export const getProfileTasksController = asyncHandler(
  async (req: Request, res: Response) => {
    const { id: profileId } = req.params;
    const profile = await getProfile(profileId);

    if (!profile) throw new Error("Profile not found");

    const tasks = await getProfileTasks(profileId);
    return response(true, res, tasks);
  },
);
