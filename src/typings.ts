export enum TaskTypes {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
export type createTaskDto = {
  title: string;
  description: string;
  assignedTo?: string;
};

export type createProfileDto = {
  name: string;
  email: string;
};

export type createCommentDto = {
  title: string;
  taskId: string;
  userId: string;
};

export type MODELS = "Profile" | "Task" | "Comment";
