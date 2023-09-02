import { Comment } from "../model";
import { createCommentDto } from "../typings";
import { convertStringToMongoObjectId } from "../utils";

export const createComment = async (body: createCommentDto) => {
  return await Comment.create(body);
};

export const getComment = async (id: string) => {
  return await Comment.findById(convertStringToMongoObjectId(id));
};

export const getCommentWithPopulate = async (id: string) => {
  return await Comment.findById(convertStringToMongoObjectId(id)).populate([
    "userId",
    "taskId",
  ]);
};

export const updateComment = async (id: string, body: createCommentDto) => {
  return await Comment.findByIdAndUpdate(
    convertStringToMongoObjectId(id),
    body,
  );
};

export const deleteComment = async (id: string) => {
  return await Comment.findByIdAndDelete(convertStringToMongoObjectId(id));
};
