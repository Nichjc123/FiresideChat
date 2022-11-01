import React from "react";

function SignInForm({ signUserIn }) {
  return (
    <form onSubmit={signUserIn} className="flex-cent col">
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignInForm;
