import "./Message.css";

function Message({ text, sender, isTyping }) {
  return (
    <div className={`message ${sender} ${isTyping ? "typing" : ""}`}>
      {text}
    </div>
  );
}

export default Message;