import { React, useState } from 'react';
import { setContext } from '@apollo/client/link/context'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

import Login from './components/Login';
import Character from './components/Character';
import Create from './components/Create';
import Profile from './components/Profile';


const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  uri: "/graphql"
});

function App() {
  

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <div className="flex-column justify-flex-start min-100-vh">
            <div style={{ maxWidth: "fit-content", margin: "0 auto", minWidth: "170px" }}>
              <Route exact path="/">
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
             
            </div>
          </div>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App;