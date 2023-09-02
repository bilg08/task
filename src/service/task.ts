import { Task } from "../model";
import { createTaskDto } from "../typings";
import { convertStringToMongoObjectId } from "../utils";

export const createTask = async (body: createTaskDto) => {
  return await Task.create(body);
};

export const updateTask = async (id: string, body: createTaskDto) => {
  return await Task.findByIdAndUpdate(convertStringToMongoObjectId(id), body);
};

export const checkTaskExist = async (id: string) => {
  const task = await Task.findById(convertStringToMongoObjectId(id));
  if (!task) {
    return false;
  }
  return true;
};
