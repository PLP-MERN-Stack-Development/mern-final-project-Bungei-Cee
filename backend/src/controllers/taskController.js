import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};
