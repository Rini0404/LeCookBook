import React from 'react';
import Pages from './pages/Pages'
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { GiKnifeFork } from "react-icons/gi";
import Navbar from './components/Nav/index';

function App() {
  return (

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
