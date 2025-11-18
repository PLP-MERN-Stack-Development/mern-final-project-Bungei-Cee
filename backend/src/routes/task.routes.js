const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// CREATE TASK
router.post("/", auth, async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status || "pending",
      projectId: req.body.projectId,
      assignedTo: req.body.assignedTo,
      createdBy: req.user.id,
    });

    const savedTask = await task.save();

    // Emit socket event to project room
    const io = req.app.get("io");
    io.to(req.body.projectId).emit("task-created", savedTask);

    res.status(201).json(savedTask);
  } catch (err) {
    console.error("Task creation error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET TASKS BY PROJECT
router.get("/:projectId", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.json(tasks);
  } catch (err) {
    console.error("Get tasks error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// UPDATE TASK
router.put("/:taskId", auth, async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.taskId,
      { $set: req.body },
      { new: true }
    );

    const io = req.app.get("io");
    io.to(updatedTask.projectId).emit("task-updated", updatedTask);

    res.json(updatedTask);
  } catch (err) {
    console.error("Task update error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE TASK
router.delete("/:taskId", auth, async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.taskId);

    const io = req.app.get("io");
    io.to(deletedTask.projectId).emit("task-deleted", deletedTask);

    res.json({ message: "Task deleted" });
  } catch (err) {
    console.error("Task delete error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
