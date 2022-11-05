import React from "react";
import { useNavigate } from "react-router-dom";

function Screening(props) {
  const socket = props.socket;
  const navigate = useNavigate();

  if (props.user.counselor === true) {
    //Generate random 5 digit number to be room number
    const roomNumber = Math.floor(Math.random() * 90000) + 10000;
    //put her in room and post to DB that she is in a room
    const data = {
      roomNumber: roomNumber,
      isAvailable: true,
    };

    fetch("/room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 400) {
          throw new Error("Could not create room");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Success:", data);
        socket.emit("join_room", roomNumber);
        navigate("/chatting");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    // call get request to find any available rooms if so then connect with code
    fetch("/room")
      .then((res) => {
        if (res.status === 400) {
          throw new Error("No available rooms");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Success:", data);
        socket.emit("join_room", data.roomNumber);
        navigate("/chatting");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return <div>Screening ...</div>;
}

export default Screening;
