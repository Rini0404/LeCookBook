import React from 'react'
import Home from './Home'
import Cuisine from "./Cuisine"
import Searched from './Searched'
import { Route, Routes, useLocation } from 'react-router-dom'
import Recipe from "./Recipe"
import {AnimatePresence} from 'framer-motion'
import Login from './Login';
import Signup from './Signup';



function Pages() {
  const location = useLocation();
  return (

    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path = '/Login' element={<Login />} />
        <Route path= '/Signup' element={<Signup />} />
    </Routes>
    
   
    </AnimatePresence> 
  );
}

export default Pages;

// import Results from './results';
// import CookBook from './CookBook';

// <Route path="/Form" element={<Form />} /> 
// <Route path="/results" element={<Results />} />
// <Route path="/CookBook" element={<CookBook />} />