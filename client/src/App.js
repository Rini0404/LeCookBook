import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Nav/index';
import { StoreProvider } from './utils/GlobalState';
import Home from './pages/Home';

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
        <Home />
      </StoreProvider>
      </BrowserRouter>
    
    </div>
    </ApolloProvider>
  );
}

export default App;
