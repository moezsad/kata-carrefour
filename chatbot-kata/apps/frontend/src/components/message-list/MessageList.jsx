import "./MessageList.css";
import Message from "../message";

function MessageList({ messages, loading }) {
  return (
    <div className="messages">
      {messages.map((m, i) => (
        <Message key={i} {...m} />
      ))}

      {loading && (
        <Message text="Bot is typing..." sender="bot" isTyping />
      )}
    </div>
  );
}

export default MessageList;