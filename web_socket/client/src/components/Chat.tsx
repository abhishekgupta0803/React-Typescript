import { useEffect, useState } from "react";
import { socket } from "../socket";
import type { Message } from "../types";
import "../components/chat.css";

function Chat() {
  const [user, setUser] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on("receive_message", (data: Message) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (!text.trim() || !user.trim()) return;

    const messageData: Message = {
      user,
      text,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit("send_message", messageData);
    setText("");
  };

  return (
    <div className="chat-container">
      
      {/* Header */}
      <div className="chat-header">
        💬 WhatsApp Chat
      </div>

      {/* Username */}
      <div className="user-box">
        <input
          placeholder="Enter username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>

      {/* Messages */}
      <div className="messages">
        {messages.map((msg, index) => {
          const isMe = msg.user === user;

          return (
            <div
              key={index}
              className={`message ${isMe ? "me" : "other"}`}
            >
              <div className="bubble">
                {!isMe && <small className="name">{msg.user}</small>}
                <div>{msg.text}</div>
                <small className="time">{msg.time}</small>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="input-box">
        <input
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
}

export default Chat;