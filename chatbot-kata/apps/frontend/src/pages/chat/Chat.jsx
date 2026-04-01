import MessageList from "@/components/message-list/MessageList";
import ChatInput from "@/components/input/ChatInput";
import { useChat } from "@/hooks/useChat";
import { useAutoScroll } from "@/hooks/useAutoScroll";

function Chat() {
  const { messages, loading, handleSend } = useChat();
  const bottomRef = useAutoScroll(messages);

  return (
    <div className="chat-container">
      <h2>💬 Support Chat</h2>

      <MessageList messages={messages} loading={loading} />

      <div ref={bottomRef} />

      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default Chat;