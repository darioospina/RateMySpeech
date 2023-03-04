import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Components
import { MainHeader } from './Components/Headers/MainHeader'
import { AudienceHeader } from './Components/Headers/AudienceHeader';
import { NavBarHeader } from './Components/Headers/NavBarHeader';
import { Footer } from './Components/Footer'
import { ProfileDetails } from './Components/ProfileDetails'
import { ProfileEdit } from './Components/ProfileEdit'
import { EventDetails } from './Components/EventDetails'

import { Details } from './Components/Details'

// Pages
import { Login } from './Pages/Login'
import { AllEvents } from './Pages/Events/AllEvents'
import { NewEvent } from './Pages/Events/NewEvent'
import { SingleEvent } from './Pages/Events/SingleEvent'
import { Dashboard } from './Pages/Dashboard'
import { Report } from './Pages/Report'
import { QRCodeComp } from './Components/QRCodeComp'
import { Questionary } from './Components/Questionary'
import { LandingPage } from './Pages/LandingPage'

function App() {
  return (
    <Router>
      <AudienceHeader />
      <NavBarHeader />
      <MainHeader />
      <Routes>      



      <Route path='/details' element={<Details />} />
      <Route path='/home' element={<LandingPage />} />

        {/* Audience Related Pages*/}
        <Route path='/qrcode' element={<QRCodeComp />} />
        <Route path="/questionary" element={<Questionary />} />

        {/* Profile Related Pages*/}
        <Route path="/profiledetails" element={<ProfileDetails />} />
        <Route path="/profileedit" element={<ProfileEdit />} />

        {/* Event Related Pages*/}
        <Route path='/AllEvents' index element={<AllEvents />} />
        <Route path='/NewEvent' index element={<NewEvent />} />
        <Route path='/SingleEvent' index element={<SingleEvent />} />
        <Route path='/EventDetails' index element={<EventDetails />} />

        {/* General Pages*/}
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/' index element={<Login />} />   {/*Website Startup Location */}
        <Route path='/Report' element={<Report />} />


      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
