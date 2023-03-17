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
  const [activeKey, setActiveKey] = useState("step1")

  const [eventId, setEventId] = useState(null)
  const [questionnaireId, setQuestionnaireId] = useState(null)

  const handleTabChange = (eventKey) => {
    setActiveKey(eventKey);
  };

  useEffect(() => {
    const tabContent = document.getElementsByClassName("tab-content")[0]
    const navTabs = document.getElementsByClassName("nav-tabs")[0]
    if (tabContent && navTabs) {
      setButtonTab1(tabContent.children[0].getElementsByTagName("button")[0])
      setButtonTab2(tabContent.children[1].getElementsByTagName("button")[0])
    }
  }, [])

  useEffect(() => {
    if (buttonTab1) {
      buttonTab1.addEventListener("click", () => {
        setActiveKey("step2")
      })
    }
    if (buttonTab2) {
      buttonTab2.addEventListener("click", () => {
        setActiveKey("step3")
      })
    }
  }, [buttonTab1])

  useEffect(() => {
    setEventId(eventId)
  }, eventId)

  useEffect(() => {
    setQuestionnaireId(questionnaireId)
  }, questionnaireId)

  return (
    <div style={{margin: 'auto', textAlign:'center', margin: '40px 0 0 0'}}>
      <Tabs
          defaultActiveKey="step1"
          activeKey={activeKey}
          onSelect={handleTabChange}
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
      <Tab eventKey="step1" title="Step 1 - Event Details"  disabled={activeKey !== 'step1'}>
          <NewEventComp setEventId={setEventId}/>
      </Tab>
      <Tab eventKey="step2" title="Step 2 - Create Questionnaire" disabled={activeKey !== 'step2'}>
          <NewQuestComp setQuestionnaireId={setQuestionnaireId} eventId={eventId}/>
      </Tab>
      <Tab eventKey="step3" title="Step 3 - QR Code" disabled={activeKey !== 'step3'}>
          <QRCodeComp eventId={eventId} questionnaireId={questionnaireId}/>
      </Tab>
      </Tabs>
    </div>
  );
};