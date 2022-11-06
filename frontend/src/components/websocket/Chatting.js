import React, { useState, useEffect } from "react";
import {
  Input,
  SendButton,
  ChatLogContiner,
  Author,
  Message,
} from "../styled/chat";
import { CenteredMargin } from "../styled/common";

function Chatting(props) {
  //State for array of messages and single message
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socket = props.socket;

  //Time for message
  const date = new Date();
  const timeString = `${date.getHours()}:${date.getMinutes()}`;
  useEffect(() => {
    //Listening for server response that messages has been sent
    socket.on("server_message", (data) => {
      //Append new message to state
      setMessages([...messages, [data.message, data.author, data.time]]);
    });
  }, [messages, socket]);

  //Emit a client message
  const sendMessage = () => {
    socket.emit("client_message", {
      message: message,
      author: props.user.name,
      time: timeString,
    });
    setMessage("");
  };

  return (
    <>
      <ChatLogContiner>
        {messages.map((msg, legend) => {
          return (
            <li key={legend}>
              <Author>
                <p>{msg[1]}</p>
                <p>{msg[2]}</p>
              </Author>
              <Message>{msg[0]}</Message>
            </li>
          );
        })}
      </ChatLogContiner>
      <CenteredMargin>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
        <SendButton onClick={sendMessage}>Send</SendButton>
      </CenteredMargin>
    </>
  );
}

export default Chatting;
