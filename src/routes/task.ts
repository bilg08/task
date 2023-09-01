import express from "express";
export const taskRouter = express.Router();

taskRouter.get("/", (_req, res) => {
  return res.send("hello, users");
});
