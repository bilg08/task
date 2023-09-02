import express from "express";
import { register } from "../controller/index";
export const profileRouter = express.Router();

profileRouter.post("/", register);
