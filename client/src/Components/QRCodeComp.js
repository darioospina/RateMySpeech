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
      <>  
      <div className="recommend-page">Recommend this Page to a Friend <TiArrowRightThick style={{ color: "#ffc000", fontSize: "25px" }}/> <a href="#">Click here</a></div>
      <Card style={{ width: '80%', margin: 'auto' }}>
      <Card.Body className="cardContainer">
        <Card.Title className="cardTitle">
            <p style={{margin: "0", color: "#696969"}}>Share This QR Code with your Audience</p>
            <br/>
            <AiFillFilePdf style={{ color: "#696969", fontSize: "60px", margin: "0 5px" }}/>
            <AiFillPrinter style={{ color: "#696969", fontSize: "60px", margin: "0 5px" }}/>
            <AiOutlineWhatsApp style={{ color: "#696969", fontSize: "60px", margin: "0 5px" }}/>
        </Card.Title>
        <div>
        
            <div style={{margin: 'auto', textAlign: 'center'}}>{qrcode}</div>
            <p className="card-event-id event-id-text">Event ID </p>
            <p className="card-event-id">XAHFKAD</p>

                  
                  <form onSubmit={downloadQRCode}>
                    <label>Enter URL</label>
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
    </>
    );
}

