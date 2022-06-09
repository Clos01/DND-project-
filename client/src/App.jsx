import React, { useState } from "react";
import './App.css'; 
import Intro from "./intro";

import Login from "./pages/LogIn";
import CharacterChar from "./pages/CreateChar";
import MyCharacters from "./pages/MyCharacters";
import SignUp from "./pages/SignUp";

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
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Intro />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<SignUp />}
            />
            <Route
              path="/profile/"
              element={<MyCharacters />}
            />
            <Route
              path="/profile/"
              element={<CharacterChar />}
            />
            {/* <Route
              path="*"
              element={<NoMatch />}
            /> */}
          </Routes>
        </div>
      </div>
    </Router>
  </ApolloProvider>
  ); 
};

export default App;
