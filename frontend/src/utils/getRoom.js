import { handleError } from "./handleError";

export const getRoom = async (navigate, socket) => {
  // call get request to find any available rooms
  fetch("/room")
    .then((res) => handleError(res))
    .then((data) => {
      console.log("Success:", data);
      //Emit join_room event and navigate to chatting
      socket.emit("join_room", data.roomNumber);
      navigate("/chatting");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
