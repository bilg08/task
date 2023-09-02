export enum TaskTypes {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
export type createTaskDto = {
  title: string;
  description: string;
  assignedTo: string;
};
export type MODELS = {
  Profile: "Profile";
  Task: "Task";
  Comment: "Comment";
};
