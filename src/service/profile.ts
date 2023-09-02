import { Profile } from "../model";
import { convertStringToMongoObjectId } from "../utils";

type createProfileDto = {
  name: string;
  email: string;
};

export const createProfile = async (body: createProfileDto) => {
  return await Profile.create(body);
};
export const getProfile = async (userId: string) => {
  const profile = await Profile.findById(convertStringToMongoObjectId(userId));
  return profile;
};
