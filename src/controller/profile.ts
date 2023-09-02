import { Request, Response } from "express";
import { createProfile } from "../service/profile";
import { asyncHandler } from "../middleware/asyncHandler";

export const register = asyncHandler(async (req: Request, res: Response) => {
  const profile = await createProfile(req.body);
  return res.status(200).json({ data: profile });
});
