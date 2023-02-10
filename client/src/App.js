import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import './Styles/App.css';

// Components
import {Header1} from './Components/Header1'
import {Footer} from './Components/Footer'

// Pages
import {Login} from './Pages/Login'
import {Details} from './Components/Details'
import {QRCodeComp} from './Components/QRCodeComp'
import {Questionary} from './Components/Questionary'

function App() {
  return (
    <Router>
      <Header1/>
      {/* {window.location.pathname === "/" ? null : <Header1/>} */}
      <Routes>
        <Route path="/" index element={<Login />}/>
        <Route path="/details" index element={<Details />}/>
        <Route path="/qrcomp" index element={<QRCodeComp />}/>
        <Route path="/questions" index element={<Questionary />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
