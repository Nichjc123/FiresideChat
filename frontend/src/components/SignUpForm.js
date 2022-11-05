import React from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../utils/createUser";
import { handleError } from "../utils/handleError";

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
    <form onSubmit={signUserUp} className="flex-cent col">
      <input type="text" placeholder="email" name="email" />
      <input type="text" placeholder="name" name="name" />
      <input type="number" placeholder="age" name="age" />
      <input type="text" placeholder="sexe" name="sexe" />
      <input type="password" placeholder="password" name="password" />
      <label>Would you like to be a councillor?</label>
      <input type="checkbox" name="counselor" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUpForm;
