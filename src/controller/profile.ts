import { Request, Response } from "express";
import { createProfile } from "../service";

export const register = async (req: Request, res: Response) => {
  try {
    await createProfile(req.body);
  } catch (error) {
    return res.status(500).send("User already exist");
  }
};
