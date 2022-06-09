import React, { useState } from "react";
import './App.css'; 
import Intro from "./intro";

import Login from "./pages/LogIn";
import CharacterChar from "./pages/CreateChar";
import MyCharacters from "./pages/MyCharacters";
import SignUpPage from "./pages/SignUp";

import Navbar from "./components/Navbar";

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  const [currentPage, setCurrentPage] = useState('intro')
  return (
  <ApolloProvider client={client}>
    <Router>
      {currentPage === 'intro' ? (
      <><Intro 
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
      ></Intro></>) : 
      (<>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<SignUpPage />}
            />
            <Route
              path="/profile/"
              element={<MyCharacters />}
            />
            <Route
              path="/createCharacter/"
              element={<CharacterChar />}
            />
            {/* <Route
              path="*"
              element={<NoMatch />}
            /> */}
          </Routes>
        </div>
      </div>
      </>
      )}
    </Router>
  </ApolloProvider>
  ); 
};

export default App;
