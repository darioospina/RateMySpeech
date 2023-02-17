import React, { Component } from "react";
import { Link } from "react-router-dom";

// CSS Style Sheet
import '../Styles/DOStyles.css'

// Images
import qrcodeimg from '../Images/qrcode_example.png'

// Bootstrap components
import Card from 'react-bootstrap/Card';
import {TiArrowRightThick} from 'react-icons/ti'
import {AiFillPrinter, AiFillFilePdf, AiOutlineWhatsApp} from 'react-icons/ai'

export class QRCodeComp extends Component {
  render() {
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
        <Card.Img variant="top" src={qrcodeimg} className="qrCodePic"/>
            <p className="card-event-id event-id-text">Event ID </p>
            <p className="card-event-id">XAHFKAD</p>
        </div>
      </Card.Body>
    </Card>
    </>
    );
  }
}
