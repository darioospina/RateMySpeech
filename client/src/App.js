import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';


// Components
import { MainHeader } from './Components/Headers/MainHeader'
import { Footer } from './Components/Footer'
import { ProfileDetails } from './Components/ProfileDetails'
import { ProfileEdit } from './Components/ProfileEdit'

// Pages
import { Login } from './Pages/Login'
import { AllEvents } from './Pages/Events/AllEvents'
import { NewEvent } from './Pages/Events/NewEvent'
import { SingleEvent } from './Pages/Events/SingleEvent'
import { Dashboard } from './Pages/Dashboard'
import { Report } from './Pages/Report'
import {Details} from './Components/Details'
import {QRCodeComp} from './Components/QRCodeComp'
import {Questionary} from './Components/Questionary'
import { SurveyComments } from './Components/SurveyComments';

function App() {
  return (
    <Router>
      <MainHeader />
      {/* {window.location.pathname === "/" ? null : <Header1/>} */}
      <Routes>

        {/* Audience Related Pages*/}


        {/* Profile Related Pages*/}
        <Route path="/profiledetails" element={<ProfileDetails />} />
        <Route path="/profileedit" element={<ProfileEdit />} />

        {/* Event Related Pages*/}
        <Route path='/AllEvents' index element={<AllEvents />} />
        <Route path='/NewEvent' index element={<NewEvent />} />
        <Route path='/SingleEvent' index element={<SingleEvent />} />

        {/* General Pages*/}
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/' index element={<Login />} />   {/*Website Startup Location */}
        <Route path='/Report' element={<Report />} />


      </Routes>
      <ProfileDetails/>
      <Footer/>
    </Router>
  );
}

export default App;
