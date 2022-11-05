import React from "react";
import { useNavigate } from "react-router-dom";
import { handleError } from "../../utils/handleError";

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
    <form onSubmit={signUserIn} className="flex-cent col">
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignInForm;
