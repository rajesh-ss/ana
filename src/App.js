import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import DisProfile from "./components/DisProfile";


/* import './App.css'; */
import './css/style.min.css';
import 'font-awesome/css/font-awesome.min.css';

import SignIn from './components/SignIn';
import Signup from "./components/Signup";


import React from 'react';

 import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; 


function App() {

  return (
    <Router>
          <TopBar/>
          
         <NavBar/>  
         
            <Routes>           
            <Route path="/" element={<DisProfile/>}/> 
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            </Routes>

    </Router>
  );
}



export default App;
