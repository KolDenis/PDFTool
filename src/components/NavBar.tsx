import React from 'react'
import '../styles/NavBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className="NavBar">
            <div className="navBarTitle" onClick={event=>navigate('/')}>
                PDF.easy
            </div>
        </div>
    )
}

export default NavBar;