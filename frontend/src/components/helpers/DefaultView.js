import React from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../styled/common";

function DefaultView() {
  const navigate = useNavigate();
  return (
    <>
      <PrimaryButton
        onClick={() => {
          navigate("/signUp");
        }}
      >
        Sign Up
      </PrimaryButton>
      <PrimaryButton
        onClick={() => {
          navigate("/signIn");
        }}
      >
        Sign In
      </PrimaryButton>
    </>
  );
}

export default DefaultView;
