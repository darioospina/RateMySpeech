import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='divFooter'>
            <h4 style={{display:"inline-block"}}>RateMySpeech.co</h4>
            <Link className="nav-link active" aria-current="page" to="/AboutUs" style={{color:"blue"}}>
                About Us
            </Link>
            <Link className="nav-link active" aria-current="page" to="https://www.parents2partners.org/" style={{color:"blue"}}>
                Partners2Parents
            </Link>
            <p style={{fontSize: "14px", marginTop: "10px"}}>Copyright © 2023. All rights reserved. </p>
        </div>    
    )
}