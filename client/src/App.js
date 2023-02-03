import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import {Header1, MainHeader} from './Components/Headers/MainHeader'
import {Footer} from './Components/Footer'
import {ProfileDetails} from './Components/ProfileDetails'
import {ProfileEdit} from './Components/ProfileEdit'

// Pages
import {Login} from './Pages/Login'
import {AllEvents} from './Pages/Events/AllEvents'

function App() {
  return (
    <Router>
      <MainHeader/>
      {/* {window.location.pathname === "/" ? null : <Header1/>} */}
      <Routes>
        <Route path="/Start" index element={<Login />}/>
        <Route path="/AllEvents" index element={<AllEvents />} />

        
        <Route path="/profiledetails" element={<ProfileDetails />}/>
        <Route path="/profileedit" element={<ProfileEdit />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
