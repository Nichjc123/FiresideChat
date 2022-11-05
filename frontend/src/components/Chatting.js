import React, { useState, useEffect } from "react";

function Chatting(props) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const socket = props.socket;

  useEffect(() => {
    socket.on("server_message", (data) => {
      setMessages([...messages, [data.message, data.author]]);
    });
  }, [messages]);

  const sendMessage = () => {
    socket.emit("client_message", {
      message: message,
      author: props.user.name,
    });
  };

  return (
    <>
      <ul>
        {messages.map((msg, legend) => {
          return (
            <li key={legend}>
              {msg[1]} says: {msg[0]}
            </li>
          );
        })}
      </ul>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </>
  );
}

export default Chatting;
