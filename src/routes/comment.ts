import express from "express";
import {
  createCommentController,
  deleteCommentController,
  getCommentController,
  updateCommentController,
} from "../controller/comment";
export const commentRouter = express.Router();

commentRouter.route("/").post(createCommentController);
commentRouter
  .route("/:id")
  .get(getCommentController)
  .put(updateCommentController)
  .delete(deleteCommentController);
