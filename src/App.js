import "./styles.css";
import { useState } from "react";
//Component imports
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

function App() {
  const [userStatus, setUserStatus] = useState("def");

  const BackButton = () => {
    return (
      <button
        onClick={() => {
          setUserStatus("def");
        }}
      >
        Back -&gt;
      </button>
    );
  };

  const MainContent = () => {
    if (userStatus === "signUp") {
      return (
        <div className="flex-cent col">
          <SignUpForm />
          <BackButton />
        </div>
      );
    } else if (userStatus === "signIn") {
      return (
        <div className="flex-cent col">
          <SignInForm />
          <BackButton />
        </div>
      );
    } else if (userStatus === "def") {
      return (
        <div className="flex-cent">
          <button
            onClick={() => {
              setUserStatus("signUp");
            }}
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              setUserStatus("signIn");
            }}
          >
            Sign In
          </button>
        </div>
      );
    }
  };

  return (
    <div className="flx-cent col">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;

//this will dynamically render either sign up/sign in/chatroom
