import React from 'react';
import "./App.css";
import Navbar from "./common/Navbar/Navbar.js";
import Home from "./Home.js";
import Login from './Login.js';
import Signup from "./Signup.js";
import { Route, Navigate, Routes} from "react-router-dom";
function App() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={Signup} />
         </Routes>
        
        </>
  )
}

export default App