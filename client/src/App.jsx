import React from "react";
import './App.css'; 

import Login from "./pages/LogIn";
import CharacterChar from "./pages/CreateChar";
import MyCharacters from "./pages/MyCharacters";
import SignUpPage from "./pages/SignUp";

import Navbar from "./components/Navbar";
import Character from "./components/Character";

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
          <section className="section"><Navbar /></section>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<MyCharacters />}
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
              path="/profile"
              element={<MyCharacters />}
            />
            <Route
              path="/createCharacter"
              element={<CharacterChar />}
            />
            <Route
              path="/character/:id"
              element={<Character />}
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
