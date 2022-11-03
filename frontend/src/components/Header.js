import React from "react";
import io from "socket.io-client";

function Header() {
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
    <div className="flex-cent col">
      {/* Have a background pic of a fire burning gif type thing */}
      <h2>Fireside Chat</h2>
      <p>Come take seat.</p>
    </div>
  );
}

export default Header;
