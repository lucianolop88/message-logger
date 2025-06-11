import React from 'react';

function MessageList({ messages }) {
  return (
    <ul>
      {messages.map(msg => (
        <li key={msg._id}>{msg.text} - {new Date(msg.createdAt).toLocaleString()}</li>
      ))}
    </ul>
  );
}

export default MessageList;