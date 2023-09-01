import express from "express";
import dotenv from "dotenv";
import { profileRouter, taskRouter, commentRouter } from "./routes";
import { connectDB } from "./utils/index";
dotenv.config({ path: "./.env" });

const app = express();
const port = 3000;

connectDB();
app.get("/", (_req, res) => {
  res.send("Hello");
});

app.use("/profiles", profileRouter);
app.use("/tasks", taskRouter);
app.use("/comments", commentRouter);

app.listen(port, () => {
  return console.log("Express is listening", port);
});
