const express = require("express");
const Message = require("../models/Message");
const router = express.Router();

router.post("/", async (req, res) => {
  const message = new Message({ text: req.body.text });
  await message.save();
  res.status(201).json(message);
});

router.get("/", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

module.exports = router;
