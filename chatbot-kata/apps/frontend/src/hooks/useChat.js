import { useState } from "react";
import { sendMessage } from "../api/messageApi";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (input) => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);

    setLoading(true);

    try {
      const res = await sendMessage(input);

      setMessages(prev => [
        ...prev,
        { text: res.reply, sender: "bot" }
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        { text: "Server error", sender: "bot" }
      ]);
    }

    setLoading(false);
  };

  return { messages, loading, handleSend };
}