import express from "express";
export const commentRouter = express.Router();

commentRouter.get("/", (_req, res) => {
  return res.send("hello, users");
});
