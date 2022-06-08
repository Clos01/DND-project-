import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./intro";
import Login from './components/Login/Login';
// import { ChakraProvider } from '@chakra-ui/react';
// import Nav from "./components/Nav";
// import Header from "./components/Header";


const App = () => {
  const [pages] = useState([


   
  ])
  return (

  <Router>
    <Routes> 
 <Route path='/' element={<Intro/>}/>
 <Route path='/login' element={<Login/>}/>
</Routes>
  </Router>
   
  ); 
};

export default App;
