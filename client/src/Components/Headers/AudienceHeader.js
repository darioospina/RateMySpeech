import React from 'react'
import Logo from '../../Images/logo.png'

//Import Navbar
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const AudienceHeader = () => {
    const [showHeader, setShowHeader] = useState(true);
    const location = useLocation();
  
    useEffect(() => {
        if (location.pathname === '/questionary') {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }, [location.pathname]);
  
    if (!showHeader) return null;

    return (
        <div className='divHeader'>
        <img src={Logo} className="header3-logo" alt="logo"/>
        Hola
        </div>    
    )
}