import React, { useState, useEffect } from "react";

function Chatting(props) {
  //State for array of messages and single message
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socket = props.socket;

  useEffect(() => {
    //Listening for server response that messages has been sent
    socket.on("server_message", (data) => {
      //Append new message to state
      setMessages([...messages, [data.message, data.author]]);
    });
  }, [messages, socket]);

  //Emit a client message
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