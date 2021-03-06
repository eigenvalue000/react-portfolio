import React from "react";
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Page0 from './pages/Page0';
import Page1 from './pages/Page1';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';

// Construct our main GraphQL API endpoint
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
      //link: httpLink,
      //uri: 'http://localhost:3001/graphql',
      cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client = { client } >
    <Router >
      <div >
        <Header />
        <Navbar />
        <div className = "container" >
        <Routes >
          <Route exact path = "/" element = { < Page0 /> }/> 
          <Route exact path = "/page1" element = { < Page1 /> }/>
        </Routes>
        <Page0 />
        </div>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
