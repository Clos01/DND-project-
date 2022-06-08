import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./intro";
import Login from "./components/Login"; 

import './App.css'; 

// import Nav from "./components/Nav";
// import Header from "./components/Header";


const App = () => {
  const [pages] = useState([


   
  ])
  return (

  <Router>
    
  {/* <Intro/> */}
  <Login/>

  </Router>
   
  ); 
};

export default App;
