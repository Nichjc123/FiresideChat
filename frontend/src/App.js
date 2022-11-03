import "./styles.css";
import { useState } from "react";
//Component imports
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import Chatting from "./components/Chatting";


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

  const signUserIn = async (e) => {
    e.preventDefault();
    const url = "/users/" + e.target.email.value;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.password === e.target.password.value) {
          setUserStatus("chatting");
        } else {
          alert("WRONG PASSWORD");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const signUserUp = async (e) => {
    e.preventDefault();
    // Create a user
    const data = {
      email: e.target.email.value,
      name: e.target.name.value,
      age: e.target.age.value,
      sexe: e.target.sexe.value,
      password: e.target.password.value,
      counselor: e.target.counselor.checked,
    };
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

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
