import React from "react";

function SignUpForm({ signUserUp }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex-cent col">
      <input type="text" placeholder="email" name="email" />
      <input type="text" placeholder="name" name="name" />
      <input type="number" placeholder="age" name="age" />
      <input type="text" placeholder="sexe" name="sexe" />
      <input type="password" placeholder="password" name="password" />
      <label>Would you like to be a councillor?</label>
      <input type="checkbox" name="councillor" />
      <button onClick={signUserUp}>Submit</button>
    </form>
  );
}

export default SignUpForm;

//    email/name/age/sexe/password/(checkbox to sign up as councillor)
