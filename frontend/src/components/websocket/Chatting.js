import React, { useState, useEffect } from "react";
import { Input, SendButton } from "../styled/chat";

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
    setMessage("");
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
      <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      <SendButton onClick={sendMessage}>Send</SendButton>
    </>
  );
}

export default Chatting;
