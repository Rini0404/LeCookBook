import React from 'react';
import Pages from './pages/Pages'
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { GiKnifeFork } from "react-icons/gi";
import Navbar from './components/Nav/index';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


// const { context, setContext } = setState();

// import Login from './pages/Login';
// import Signup from './pages/Signup';

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


function App() {
  return (
    <ApolloProvider client={client}>

    <div className="App">
      <BrowserRouter>
        <Navbar/>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>LeCookBook</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    
    </div>
    </ApolloProvider>
  );
}

const Logo = styled(Link)`
  text-docration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`

export default App;
