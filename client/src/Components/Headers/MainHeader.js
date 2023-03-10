import React, {useState, useEffect} from 'react'
import Logo from '../../Images/logo.png'
import {useLocation} from 'react-router-dom'

export const MainHeader = () => {
    const [showHeader, setShowHeader] = useState(true);
    const location = useLocation();
  
    useEffect(() => {
        if (location.pathname === '/') {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }, [location.pathname]);
  
    if (!showHeader) return null

    return (
        <div className='divHeader'>
        <img src={Logo} href="/home" className="header1-logo" alt="logo"/>
        </div>    
    )
}