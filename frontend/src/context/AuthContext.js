// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const navigate = useNavigate(); // Correct usage within a functional component

    useEffect(() => {
        // Check if there's a token in localStorage when the app loads
        const token = localStorage.getItem('authToken');
        console.log(token);

        if (token) {
            setAuthToken(token);
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('authToken', token);
        setAuthToken(token);
        navigate('/home'); // Redirect to home after login
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setAuthToken(null);
        navigate('/login'); // Redirect to login after logout
    };

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
