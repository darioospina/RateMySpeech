import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/App.css';
import './Styles/PatStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Components
import { MainHeader } from './Components/Headers/MainHeader'
import { AudienceHeader } from './Components/Headers/AudienceHeader';
import { NavBarHeader } from './Components/Headers/NavBarHeader';
import { Footer } from './Components/Footer'
import { ProfileDetails } from './Components/ProfileDetails'
import { ProfileEdit } from './Components/ProfileEdit'
import { ListOfEvents } from './Components/Dashboard/ListOfEvents';

// Pages
import { Login } from './Pages/Login'
import { NewEvent } from './Pages/NewEvent'
import { Dashboard } from './Pages/Dashboard'
import { Report } from './Pages/Report'
import { QRCodeComp } from './Components/CreateEvent/QRCodeComp'
import { Questionnaire } from './Components/Questionnaire'
import { LandingPage } from './Pages/LandingPage'

function App() {
  return (
    <Router>
      <AudienceHeader />
      <NavBarHeader />
      <MainHeader />
      <Routes>      

        <Route path='/home' element={<LandingPage />} />

        {/* Audience Related Pages*/}
        <Route path='/qrcode' element={<QRCodeComp />} />
        <Route path="/newevent" element={<NewEvent />} />
        <Route path="/Questionnaire/:questionnaireId" element={<Questionnaire />} />

        {/* Profile Related Pages*/}
        <Route path="/profiledetails" element={<ProfileDetails />} />
        <Route path="/profileedit" element={<ProfileEdit />} />

        {/* Event Related Pages */}
        <Route path="/allevents" element={<ListOfEvents />} />

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
