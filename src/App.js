import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import DisProfile from "./components/DisProfile";

/* import './App.css'; */
import "./css/style.min.css";
import "font-awesome/css/font-awesome.min.css";

import { useState } from "react";

import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Community from "./components/Community";

/* import useGeoLocation from "./geoLocation/useGeoLocation"; */

import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // state used for storing user name: parent to child props passing
  const [usrName, setUserName] = useState("");

  // passed this function as props
  const pulDt = (uName) => {
    setUserName(uName);
    console.log(uName);
  }

  /*   const location = useGeoLocation(); */
  return (
    <Router>
      <TopBar />
      {/* <h1>asas  {usrName}  </h1> */}
      {/*           <div className="inline-block mr-auto pt-1">
                                {location.loaded
                                    ? JSON.stringify(location)
                                    : "Location data not available yet."}
          </div> */}
      <NavBar />

      <Routes>
        <Route path="/" element={<DisProfile us={usrName} />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<SignIn unam={pulDt} />}></Route>
        <Route path="/community" element={<Community unam={pulDt} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
