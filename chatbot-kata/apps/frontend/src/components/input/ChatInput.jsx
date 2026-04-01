import { useState } from "react";
import "./ChatInput.css";

function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="input-area">
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === "Enter" && send()}
        placeholder="Type a message..."
      />
      <button onClick={send}>Send</button>
    </div>
  );
}

export default ChatInput;