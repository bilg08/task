import { Profile, Task } from "../model";
import { createProfileDto } from "../typings";
import { convertStringToMongoObjectId } from "../utils";

export const createProfile = async (body: createProfileDto) => {
  return await Profile.create(body);
};

export const getProfile = async (userId: string) => {
  const profile = await Profile.findById(convertStringToMongoObjectId(userId));
  return profile;
};

export const getProfileTasks = async (userId: string) => {
  const tasks = await Task.aggregate([
    {
      $match: {
        assignedTo: convertStringToMongoObjectId(userId),
      },
    },
  ]);

  return tasks;
};
