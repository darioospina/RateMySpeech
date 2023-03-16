import React from "react";

//Import Container parts
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"

//Import Images
import DarioPic from "../Images/AboutUs Images/Picture_Dario.jpg"

export const AboutUs = () => {
    return (
        <div>
            {/* Title block */}
            <h1 id="titleText">About The Developers!</h1>
            <h3 id="titleSubText">Learn about the hardworking team who designed this
                amazing site!</h3>

            <div className="cardPair">
                {/* Dario L */}
                <div className="memberCard" style={{ float: "left" }}>
                    <img src={DarioPic} alt="dario pic" />
                    <p className="cardName">Dario L.</p>
                    <p className="cardDesc">Software developer with a strong foundation in HTML, CSS, JavaScript, ReactJS,
                        C# / .NET, SQL, MongoDB, WordPress, and Shopify. My prior experience as a finance
                        professional has given me valuable insights, but my passion for software development
                        is what drives me.</p>
                </div>

                {/* Jeff A */}
                <div className="memberCard" style={{ float: "right" }}>
                    <img src={DarioPic} alt="jeff pic" />
                    <p className="cardName">Jeff A</p>
                    <p className="cardDesc">Software developer with a strong foundation in HTML, CSS, JavaScript, ReactJS,
                        C# / .NET, SQL, MongoDB, WordPress, and Shopify. My prior experience as a finance
                        professional has given me valuable insights, but my passion for software development
                        is what drives me.</p>
                </div>
            </div>

            <div className="cardPair">
                {/* Patryk B */}
                <div className="memberCard" style={{ float: "left" }}>
                    <img src={DarioPic} alt="patryk pic" />
                    <p className="cardName">Patryk B</p>
                    <p className="cardDesc">Software developer with a strong foundation in HTML, CSS, JavaScript, ReactJS,
                        C# / .NET, SQL, MongoDB, WordPress, and Shopify. My prior experience as a finance
                        professional has given me valuable insights, but my passion for software development
                        is what drives me.</p>
                </div>

                {/* Simranjit S. */}
                <div className="memberCard" style={{ float: "right" }}>
                    <img src={DarioPic} alt="simranjit pic" />
                    <p className="cardName">Simranjit S</p>
                    <p className="cardDesc">Software developer with a strong foundation in HTML, CSS, JavaScript, ReactJS,
                        C# / .NET, SQL, MongoDB, WordPress, and Shopify. My prior experience as a finance
                        professional has given me valuable insights, but my passion for software development
                        is what drives me.</p>
                </div>
            </div>


            {/* Mohita S*/}
            <div className="memberCard" style={{ float: "none" }}>
                <img src={DarioPic} alt="mohita pic" />
                <p className="cardName">Mohita S</p>
                <p className="cardDesc">Software developer with a strong foundation in HTML, CSS, JavaScript, ReactJS,
                    C# / .NET, SQL, MongoDB, WordPress, and Shopify. My prior experience as a finance
                    professional has given me valuable insights, but my passion for software development
                    is what drives me.</p>
            </div>
        </div>
    )
}