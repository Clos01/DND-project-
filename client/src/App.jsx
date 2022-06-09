import React, { useState } from "react";
import ReactDOM from 'react-dom'
import './intro.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./intro";
import Exit from "./Exit";
import './Exit.css'

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
 <Route path='/Exit' element={<Exit/>}/>

</Routes>
  </Router>
   
  ); 
};

export default App;
