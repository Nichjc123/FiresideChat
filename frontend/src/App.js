import "./styles.css";
import { useState } from "react";
//Component imports
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import Chatting from "./components/Chatting";

// TODO: USER AUTH WITH MONGO

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

  const signUserIn = () => {
    console.log("signed in");
    setUserStatus("chatting");
  };

  const signUserUp = () => {
    console.log("signed up");
    setUserStatus("chatting");
  };

  const MainContent = () => {
    if (userStatus === "signUp") {
      return (
        <div className="flex-cent col">
          <SignUpForm signUserUp={signUserUp} />
          <BackButton />
        </div>
      );
    } else if (userStatus === "signIn") {
      return (
        <div className="flex-cent col">
          <SignInForm signUserIn={signUserIn} />
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
    } else if (userStatus === "chatting") {
      return (
        <div className="flex-cent col">
          <Chatting />
          <BackButton />
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
