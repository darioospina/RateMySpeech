import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

// Import button, form and InputGroup from bootstrap
import {Form, Button, InputGroup} from 'react-bootstrap';

// Bootrstrap Tab Components
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// Elements
import { NewEventComp } from '../Components/CreateEvent/NewEventComp';
import { NewQuestComp } from '../Components/CreateEvent/NewQuestComp';
import { QRCodeComp } from '../Components/CreateEvent/QRCodeComp';

// Import Axios
import Axios from 'axios'


export const NewEvent = () => {
  const [buttonTab1, setButtonTab1] = useState(null)
  const [buttonTab2, setButtonTab2] = useState(null)
  const [tab1, setTab1] = useState(null)
  const [tab2, setTab2] = useState(null)
  const [tab3, setTab3] = useState(null)

  useEffect(() => {
    const tabContent = document.getElementsByClassName("tab-content")[0]
    const navTabs = document.getElementsByClassName("nav-tabs")[0]
    console.log(tabContent)
    console.log(navTabs)
    if (tabContent && navTabs) {
      setButtonTab1(tabContent.children[0].getElementsByTagName("button")[0])
      setButtonTab2(tabContent.children[1].getElementsByTagName("button")[0])
      setTab1(navTabs.children[0].getElementsByTagName("button")[0])
      setTab2(navTabs.children[1].getElementsByTagName("button")[0])
      setTab3(navTabs.children[2].getElementsByTagName("button")[0])
    }
  }, [])

  useEffect(() => {
    if (buttonTab1) {
      buttonTab1.addEventListener("click", () => {
        tab1.classList.remove("active");
        tab1.classList.add("nav-link");
        tab1.setAttribute("aria-selected", "false");
        tab1.setAttribute("aria-disabled", "true");
        tab2.classList.remove("disabled");
        tab2.classList.add("nav-link");
        tab2.classList.add("active");
        tab2.setAttribute("aria-selected", "true");
        tab2.setAttribute("aria-disabled", "false");
      })
    }
  }, [buttonTab1])

  return (
    <div style={{margin: 'auto', textAlign:'center'}}>
          <Tabs
          defaultActiveKey="step1"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
      <Tab eventKey="step1" title="Step 1 - Event Details">
          <NewEventComp/>
      </Tab>
      <Tab eventKey="step2" title="Step 2 - Create Questionnaire" disabled>
          <NewQuestComp/>
      </Tab>
      <Tab eventKey="step3" title="Step 3 - QR Code" disabled>
          <QRCodeComp/>
      </Tab>
      </Tabs>
    </div>
  );
};