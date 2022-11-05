import React from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../utils/createUser";
import { handleError } from "../../utils/handleError";
import BackButton from "../helpers/BackButton";
import { Input, Form } from "../styled/form";
import { PrimaryButton } from "../styled/common";

function SignUpForm({ setUser }) {
  const navigate = useNavigate();

  const signUserUp = async (e) => {
    e.preventDefault();
    // Create a user
    const data = createUser(e.target);

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => handleError(res))
      .then((data) => {
        console.log("Success:", data);
        setUser(data);
        navigate("/screening");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Form onSubmit={signUserUp} className="flex-cent col">
        <Input type="text" placeholder="Email 📧" name="email" />
        <Input type="text" placeholder="Name" name="name" />
        <Input type="number" placeholder="Age 👴" name="age" />
        <Input type="text" placeholder="Gender" name="sexe" />
        <Input type="password" placeholder="Password 🤫" name="password" />
        <div>
          <label>Would you like to be a counselor?</label>
          <Input type="checkbox" name="counselor" />
        </div>
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </Form>
      <BackButton />
    </>
  );
}

export default SignUpForm;
