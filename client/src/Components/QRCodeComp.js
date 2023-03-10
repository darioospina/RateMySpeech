import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

// CSS Style Sheet
import '../Styles/DOStyles.css'

// Images
import qrcodeimg from '../Images/qrcode_example.png'
// Import QR Component from qrcode library
import { QRCodeCanvas } from "qrcode.react";

// Bootstrap components
import Card from 'react-bootstrap/Card';
import {TiArrowRightThick} from 'react-icons/ti'
import {AiFillPrinter, AiFillFilePdf, AiOutlineWhatsApp} from 'react-icons/ai'

export const QRCodeComp = () => {

  const [url, setUrl] = useState("");

  const downloadQRCode = (e) => {
    e.preventDefault();
    setUrl("");
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

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
      <div className="qrcode-section">  
      <div className="recommend-page">Recommend this Page to a Friend <TiArrowRightThick style={{ color: "#ffc000", fontSize: "25px" }}/> <a href="#">Click here</a></div>
      <Card className="card-qr">
      <Card.Body className="cardContainer">
        <Card.Title className="cardTitle">
            <p style={{margin: "0", color: "#696969"}}>Share This QR Code with your Audience</p>
            <br/>
            <div className="icons">
              <AiFillFilePdf className="svg-icons"/>
              <AiFillPrinter className="svg-icons"/>
              <AiOutlineWhatsApp className="svg-icons"/>
            </div>
        </Card.Title>
        <div>
            <div style={{margin: 'auto', textAlign: 'center'}}>{qrcode}</div>
            <p className="card-event-id event-id-text">Event ID </p>
            <p className="card-event-id">XAHFKAD</p> 
                  <form onSubmit={downloadQRCode}>
                    <label className="card-label">Enter URL</label>
                    <input
                      type="text"
                      value={url}
                      onChange={qrCodeEncoder}
                      placeholder="https://hackernoon.com"
                    />
                  </form>


        </div>
      </Card.Body>
    </Card>
    </div>
    );
}

