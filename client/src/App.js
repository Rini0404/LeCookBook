import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './index.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import RandomRecipe from './pages/RandomRecipe';
import Form from './components/FoodFrom/index';
import Results from './pages/results';
import CookBook from './pages/CookBook';
import Footer from './components/Footer/Footer'

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
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/success" 
                element={<Success />} 
              />
              
              <Route 
                path="/products/:id" 
                element={<Detail />} 
              />
                            <Route 
                path="/Form" 
                element={<Form />} 
              />
              <Route 
                path="/Results" 
                element={<Results />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
              <Route 
                path="/random" 
                element={<RandomRecipe />} 
              />
              <Route 
                path="/CookBook" 
                element={<CookBook />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
          </StoreProvider>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;