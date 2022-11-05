import React from "react";
import { Header1, CenteredColumn } from "../styled/common";

function Header() {
  return (
    <CenteredColumn>
      {/* Have a background pic of a fire burning gif type thing */}
      <Header1>Fireside Chat</Header1>
      <p>Come take a seat 🏕</p>
    </CenteredColumn>
  );
}

export default Header;
