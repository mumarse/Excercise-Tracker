import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute(props) {

    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem('Login')
        if (!login) {
            navigate('/Login')
        }
    })

    return (
        <div>
            <Component />
        </div>
    )
}

export default ProtectedRoute