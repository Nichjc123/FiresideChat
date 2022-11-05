import { handleError } from "./handleError";

export const createRoom = async (navigate, socket) => {
  //Generate random 5 digit number to be room number
  const roomNumber = Math.floor(Math.random() * 90000) + 10000;

  const body = {
    roomNumber: roomNumber,
    isAvailable: true,
  };

  //Call db to create a room with isAvailable flag
  fetch("/room", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => handleError(res))
    .then((data) => {
      console.log("Success:", data);
      //Emit join_room event and navigate to chatting
      socket.emit("join_room", roomNumber);
      navigate("/chatting");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
