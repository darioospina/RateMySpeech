import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import './Styles/App.css';

// Components
import {Header1} from './Components/Header1'
import {Footer} from './Components/Footer'
import {ProfileDetails} from './Components/ProfileDetails'
import {ProfileEdit} from './Components/ProfileEdit'

// Pages
import {Login} from './Pages/Login'

function App() {
  return (
    <Router>
      <Header1/>
      {/* {window.location.pathname === "/" ? null : <Header1/>} */}
      <Routes>
        <Route path="/" index element={<Login />}/>

        
        <Route path="/profiledetails" element={<ProfileDetails />}/>
        <Route path="/profileedit" element={<ProfileEdit />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
