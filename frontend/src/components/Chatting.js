import React from "react";
import io from "socket.io-client";

function Chatting() {
  var socket = io();

  var form = document.getElementById("form");
  var input = document.getElementById("input");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value) {
      socket.emit("chat message", input.value);
      input.value = "";
    }
  });

  return (
    <>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autocomplete="off" />
        <button>Send</button>
      </form>
    </>
  );
}

export default Chatting;
