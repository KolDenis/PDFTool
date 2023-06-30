import React from 'react'
import { useLocation } from 'react-router-dom';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
    const location = useLocation();
    const {code, message} = location.state;

    return (
        <div className='ErrorPage'>
            <div className='errorCode'>{code}</div>
            <div className='errorMessage'>{message}</div>
        </div>
    )
}

export default ErrorPage;