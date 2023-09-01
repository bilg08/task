import express from "express";
export const profileRouter = express.Router();

profileRouter.get("/", (_req, res) => {
  return res.send("hello, users");
});
