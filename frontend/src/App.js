import "./styles.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
//Component imports
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import Chatting from "./components/Chatting";
import Screening from "./components/Screening";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000");

function App(props) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const BackButton = () => {
    return (
      <button
        onClick={() => {
          navigate("/");
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
        setUser(data);
        if (data.password === e.target.password.value) {
          navigate("/screening");
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
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    navigate("/screening");
  };

  const DefaultView = () => {
    return (
      <>
        <button
          onClick={() => {
            navigate("/signUp");
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => {
            navigate("/signIn");
          }}
        >
          Sign In
        </button>
      </>
    );
  };

  return (
    <div className="flx-cent col">
      <Header />
      <div className="flex-cent col">
        <Routes>
          <Route path="/" element={<DefaultView />} />
          <Route
            path="/signUp"
            element={<SignUpForm signUserUp={signUserUp} />}
          />
          <Route
            path="/signIn"
            element={<SignInForm signUserIn={signUserIn} />}
          />
          <Route
            path="/chatting"
            element={<Chatting user={user} socket={socket} />}
          />
          <Route
            path="/screening"
            element={<Screening user={user} socket={socket} />}
          />
        </Routes>
        <BackButton />
      </div>
    </div>
  );
}

/**
 * * FLOW of the app:
 * * Once signed in or up they go to screening.
 * * SCREENING
 * *   Coucillor immediately get put into a room with 2 digit code. This sends a post request wich adds a room to a db table
 *
 * *  Camper calls a get request, if there are no rooms then they need to come back later
 */

export default App;
