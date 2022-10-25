import React from "react";

function SignInForm({ signUserIn }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // use e.target.email.value
  };

  return (
    <form onSubmit={handleSubmit} className="flex-cent col">
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button onClick={signUserIn}>Submit</button>
    </form>
  );
}

export default SignInForm;
