import React, { useState, useEffect } from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/messages")
      .then((res) => res.json())
      .then(setMessages);
  }, []);

  const addMessage = async (text) => {
    const res = await fetch("http://localhost:5000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const newMsg = await res.json();
    setMessages([newMsg, ...messages]);
  };

  return (
    <div>
      <h1>Message Loggers</h1>
      <MessageForm onAdd={addMessage} />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
