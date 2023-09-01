import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/index";

dotenv.config({ path: "./.env" });

const app = express();
const port = 3000;

connectDB();

app.get("/", (_req, res) => {
  res.send("Hello");
});
app.listen(port, () => {
  return console.log("Express is listening", port);
});
