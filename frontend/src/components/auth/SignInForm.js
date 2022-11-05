import React from "react";
import { useNavigate } from "react-router-dom";
import { handleError } from "../../utils/handleError";
import BackButton from "../helpers/BackButton";
import { Input, Form } from "../styled/form";
import { PrimaryButton } from "../styled/common";

function SignInForm({ setUser }) {
  const navigate = useNavigate();

  //Sign user in function
  const signUserIn = async (e) => {
    e.preventDefault();
    const url = "/users/" + e.target.email.value;
    //Sign in with email
    fetch(url)
      .then((res) => handleError(res))
      .then((data) => {
        console.log("Success:", data);
        setUser(data);
        if (data.password === e.target.password.value) {
          navigate("/screening");
        } else {
          alert("WRONG PASSWORD");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <Form onSubmit={signUserIn} className="flex-cent col">
        <Input type="text" placeholder="email@gmail.com" name="email" />
        <Input type="password" placeholder="Password 🤫" name="password" />
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </Form>
      <BackButton />
    </>
  );
}

export default SignInForm;
