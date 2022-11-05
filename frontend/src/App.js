import "./styles.css";
import { useState } from "react";
import io from "socket.io-client";
import { Routes, Route } from "react-router-dom";
//Component imports
import Header from "./components/helpers/Header";
import SignUpForm from "./components/auth/SignUpForm";
import SignInForm from "./components/auth/SignInForm";
import Chatting from "./components/websocket/Chatting";
import Screening from "./components/websocket/Screening";
import DefaultView from "./components/helpers/DefaultView";
import BackButton from "./components/helpers/BackButton";

//initialize web socket
const socket = io.connect("http://localhost:8000");

function App(props) {
  //user state
  const [user, setUser] = useState({});

  return (
    <div className="flx-cent col">
      <Header />
      <div className="flex-cent col">
        <Routes>
          <Route path="/" element={<DefaultView />} />
          <Route path="/signUp" element={<SignUpForm setUser={setUser} />} />
          <Route path="/signIn" element={<SignInForm setUser={setUser} />} />
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

export default App;
