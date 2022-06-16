// Page for routing

import React from 'react'
import Home from './Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Login from './Login';
import Signup from './Signup';

function Pages() {
  const location = useLocation();
  return (

    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path = '/Login' element={<Login />} />
        <Route path= '/Signup' element={<Signup />} />
    </Routes>
    
   
    </AnimatePresence> 
  );
}

export default Pages;
