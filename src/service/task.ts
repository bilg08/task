import { Comment, Profile, Task } from "../model";
import { createTaskDto } from "../typings";
import { convertStringToMongoObjectId } from "../utils";

export const createTask = async (body: createTaskDto) => {
  return await Task.create(body);
};

export const updateTask = async (id: string, body: createTaskDto) => {
  return await Task.findByIdAndUpdate(convertStringToMongoObjectId(id), body);
};

export const getTask = async (id: string) => {
  const task = await Task.findById(convertStringToMongoObjectId(id));
  return task;
};

export const getTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

export const deleteTask = async (id: string) => {
  await Task.findOneAndDelete(convertStringToMongoObjectId(id));
};

export const getTaskComments = async (id: string) => {
  return await Comment.aggregate([
    {
      $match: {
        taskId: convertStringToMongoObjectId(id),
      },
    },
    {
      $lookup: {
        from: Task.collection.name,
        localField: "taskId",
        foreignField: "_id",
        as: "task",
      },
    },
    {
      $lookup: {
        from: Profile.collection.name,
        localField: "userId",
        foreignField: "_id",
        as: "profile",
      },
    },
  ]);
};
