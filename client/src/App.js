import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/App.css';
import './Styles/PatStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Components
import { MainHeader } from './Components/Headers/MainHeader'
import { NavBarHeader } from './Components/Headers/NavBarHeader';
import { Footer } from './Components/Footer'
import { Profile } from './Pages/Profile'
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
import { AboutUs } from './Pages/AboutUs';
import { ThankYou } from './Pages/ThankYou';

function App() {
  return (
    <Router>
      <NavBarHeader />
      <MainHeader />
      <Routes>      

        <Route path='/' element={<LandingPage />} /> {/*Website Startup Location */}

        {/* Audience Related Pages*/}
        <Route path='/qrcode' element={<QRCodeComp />} />
        <Route path="/newevent" element={<NewEvent />} />
        <Route path="/Questionnaire/:questionnaireId" element={<Questionnaire />} />

        {/* Profile Related Pages*/}
        <Route path="/profiledetails" element={<Profile />} />
        <Route path="/profileedit" element={<ProfileEdit />} />

        {/* Event Related Pages */}
        <Route path="/allevents" element={<ListOfEvents />} />

        {/* General Pages*/}
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Login' index element={<Login />} />   
        <Route path='/Report/:questionnaireId' element={<Report />} />
        <Route path='/AboutUs' element={<AboutUs />} />

        
        <Route path='/ThankYou' element={<ThankYou />} />
        <Route path='*' element={<div>Error 404 Page Not Found!</div>} />



      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
