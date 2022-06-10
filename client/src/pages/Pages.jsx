import React from 'react'
import Home from './Home'
import Cuisine from "./Cuisine"
import Searched from './Searched'
import { Route, Routes, useLocation } from 'react-router-dom'
import Recipe from "./Recipe"
import {AnimatePresence} from 'framer-motion'
import Login from './Login';
import Signup from './Signup';
import Form from '../components/FoodFrom/Form';
import Results from './results';
import Random from './Random';
import AboutUs from './AboutUs';

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
        <Route path = '/Form' element={<Form />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Random" element={<Random />} />
        <Route path = "/AboutUs" element={<AboutUs />} />
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