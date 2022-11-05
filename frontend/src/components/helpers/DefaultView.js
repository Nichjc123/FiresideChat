import React from "react";
import { useNavigate } from "react-router-dom";

function DefaultView() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/signUp");
        }}
      >
        Sign Up
      </button>
      <button
        onClick={() => {
          navigate("/signIn");
        }}
      >
        Sign In
      </button>
    </>
  );
}

export default DefaultView;
