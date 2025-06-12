import React, { useState, useEffect } from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

function App() {
  const [messages, setMessages] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/messages`)
      .then((res) => res.json())
      .then(setMessages);
  }, []);

  const addMessage = async (text) => {
    const res = await fetch(`${API_URL}/api/messages`, {
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
