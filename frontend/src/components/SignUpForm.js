import React from "react";

function SignUpForm({ signUserUp }) {
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
