import React from "react";
import { useNavigate } from "react-router-dom";
import { GoBackButton } from "../styled/common";
import { AiOutlineArrowLeft } from "react-icons/ai";

function BackButton() {
  const navigate = useNavigate();
  return (
    <GoBackButton
      onClick={() => {
        navigate("/");
      }}
    >
      <AiOutlineArrowLeft />
    </GoBackButton>
  );
}

export default BackButton;
