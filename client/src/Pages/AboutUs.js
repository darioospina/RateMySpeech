import React from "react";

//Import Images
import DarioPic from "../Images/AboutUs Images/Picture_Dario.jpg"
// import JeffPic from "../Images/AboutUs Images/Picture_Jeff.jpg"
import PatPic from "../Images/AboutUs Images/Picture_Patryk.jpg"
import SimranjitPic from "../Images/AboutUs Images/Picture_Simranjit.jpg"
import MohitaPic from "../Images/AboutUs Images/Picture_Mohita.jpg"

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
                    <p className="cardDesc">I am a software developer with a strong foundation in HTML,
                        CSS, JavaScript, ReactJS, C# / .NET, SQL, MongoDB, WordPress, and Shopify.
                        My prior experience as a finance professional has given me valuable insights,
                        but my passion for software development is what drives me.</p>
                </div>

                {/* Jeff A */}
                <div className="memberCard" style={{ float: "right" }}>
                    <img src={DarioPic} alt="jeff pic" style={{ height: "450px", width: "450px" }} />
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
                    <img src={PatPic} alt="patryk pic" style={{ height: "450px", width: "450px" }} />
                    <p className="cardName">Patryk B</p>
                    <p className="cardDesc">At the creation of this site, I'm about halfway done my
                        post-secondary studies in becoming a Computer Science graduate! I've had issues
                        in the past and I have been in school for way longer then needed but that just
                        motivates me more to finish on top. In my personal life I love playing video games,
                        both violent and cozy :)</p>
                </div>

                {/* Simranjit S. */}
                <div className="memberCard" style={{ float: "right" }}>
                    <img src={SimranjitPic} alt="simranjit pic" style={{ height: "450px", width: "500px" }} />
                    <p className="cardName">Simranjit S</p>
                    <p className="cardDesc">My name is Simranjit Singh, I am from Punjab.
                        My love Listening music and reading books specifically novels. I am currently
                        working as a DM at Walmart. I completed my high school from Punjab and then came
                        to Canada for my graduation. It was a great turn in my life as I left the place
                        where I lived for 18 years but It was an unimaginable experience for me.
                        Now its been two years since I've moved and I love being here.</p>
                </div>
            </div>


            {/* Mohita S*/}
            <div className="memberCard" style={{ float: "none" }}>
                <img src={MohitaPic} alt="mohita pic" style={{ height: "450px", width: "550px" }} />
                <p className="cardName">Mohita S</p>
                <p className="cardDesc">My name is Mohita Sharma, a UX Designer.
                    My ability to connect and empathize with others is what sets me
                    apart from other people.</p>
            </div>
        </div>
    )
}