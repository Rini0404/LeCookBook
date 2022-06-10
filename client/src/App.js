import React from 'react';
import Pages from './pages/Pages'
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { GiKnifeFork } from "react-icons/gi";
import Navbar from './components/Nav/index';
import { StoreProvider } from './utils/GlobalState';
import Footer from './components/Footer/Footer'


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
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



function App() {
  return (
    <ApolloProvider client={client}>

    <div className="App">
      <BrowserRouter>
      <StoreProvider>

        <Navbar/>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>LeCookBook</Logo>
      </Nav>
        <Pages />
        <Footer />
      </StoreProvider>
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
