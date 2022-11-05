import React from "react";
import { useNavigate } from "react-router-dom";
import { createRoom } from "../../utils/createRoom";
import { getRoom } from "../../utils/getRoom";

function Screening(props) {
  const socket = props.socket;
  const navigate = useNavigate();

  if (props.user.counselor === true) {
    //if the current user is a conuselor create a room for other user to join
    createRoom(navigate, socket);
  } else {
    //if the user is not a counselor get and join available room
    getRoom(navigate, socket);
  }
  return <div>Screening ...</div>;
}

export default Screening;
