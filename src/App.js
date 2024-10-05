import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home';

import './App.css';
import Signupform from './components/Signupform';
import About from './components/About';
import Featured from './components/Featured';
import Pricing from './components/Pricing';


function App() {
  return (
    <div className="App">
      <div>
       <header/>

    

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Featured" element={<Featured/>}/>
      <Route path="/Pricing" element={<Pricing/>}/>
      <Route path="/Login" element={<Signupform/>}/>
      <Route path="/Sign-up" element={<Signupform/>}/>
    </Routes>
    
    </div>
    </div>
  );
}

export default App;
