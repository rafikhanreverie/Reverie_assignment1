
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import '../styles/login.css';
import { GoogleLogin } from '@react-oauth/google';
import { useToast } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const toast = useToast();
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;
    const navigate = useNavigate();

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        const user = { email, password };
        try {
            const res = await axios.post('http://localhost:3001/api/users/login', user);
            login(res.data.token);  // Save the token to the context
            navigate('/home'); // Redirect to home page upon successful login
        } catch (err) {
            console.error(err.response.data);
        }
    };

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            
            const userInfo = {
                email: decoded.email,
                password: decoded.sub,  // The Google User ID
            };
            
            const res = await axios.post('http://localhost:3001/api/users/login', userInfo);
            login(res.data.token);  // Save the token to the context
            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            navigate('/home'); // Redirect to home page upon successful login
        } catch (err) {
            toast({
                title: "Error occurred",
                description: err.response?.data?.msg || err.message || "An unknown error occurred.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            console.error(err.response?.data || err.message);
        }
    };

    return (
        <div className="login-page">
            <div className="Login-tagline">
                <p className="Login-typewriter">Join Us and Break Language Barriers Today.</p>
            </div>
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={onChange} 
                        placeholder="Email"
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={onChange} 
                        placeholder="Password"
                        required 
                    />
                    <p>Don't have an account? <a href="/register">Register</a></p>
                    <button type="submit">Login</button>

                    <div className="google-login-button-container">
                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            className="google-login-button"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

