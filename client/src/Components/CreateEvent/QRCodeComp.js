import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// CSS Style Sheet
import '../../Styles/DOStyles.css'

// Import QR Component from qrcode library
import { QRCodeCanvas } from "qrcode.react";

// Bootstrap components
import Card from 'react-bootstrap/Card';
import {TiArrowRightThick} from 'react-icons/ti'
import {AiFillPrinter, AiOutlineMail} from 'react-icons/ai'

export const QRCodeComp = ({eventId, questionnaireId}) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log(questionnaireId)
    setUrl(`/questionnaire/${questionnaireId}`)
  }, [questionnaireId]);

  const handlePrintPage = () => {
    window.print()
  }

  const handleSendEmail = () => {
    const emailBody = `Check out this QR code: ${url}`;
    const href = `mailto:?subject=QR Code&body=${emailBody}`;

    window.location.href = href;
  }

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={200}
      bgColor={"#FFFFFF"}
      level={"H"}
    />
  );

    return (
      <>  
      <Card style={{ width: '80%', margin: 'auto' }}>
      <Card.Body className="cardContainer">
        <Card.Title className="cardTitle">
            <p style={{margin: "0", color: "#696969"}}>Share This QR Code with your Audience</p>
            <br/>
            <a href="#" onClick={handlePrintPage}><AiFillPrinter style={{ color: "#003FFF", fontSize: "60px", margin: "0 5px", cursor: "pointer" }}/></a>
            <a href="#" onClick={handleSendEmail}><AiOutlineMail style={{ color: "#696969", fontSize: "60px", margin: "0 5px", cursor: "pointer"}}/></a>
        </Card.Title>
        <div>
            <div style={{margin: 'auto', textAlign: 'center'}}>{qrcode}</div>
            <p className="card-event-id event-id-text">Questionnaire ID: </p>
            <p className="card-event-id">{questionnaireId}</p>
            <p>Scan the QR code or <Link to={`/questionnaire/${questionnaireId}`}>Click here</Link></p>
        </div>
      </Card.Body>
    </Card>
    </>
    );
}

