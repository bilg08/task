import { Profile } from "../model";

type createProfileDto = {
  name: string;
  email: string;
};

export const createProfile = async (body: createProfileDto) => {
  return await Profile.create(body);
};
