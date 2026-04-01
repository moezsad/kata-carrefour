import { getResponse } from "../services/chatService.js";

export const handleChat = (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const reply = getResponse(message);

    res.json({ reply });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};