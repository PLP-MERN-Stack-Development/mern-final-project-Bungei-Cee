import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Task routes working");
});

export default router;
