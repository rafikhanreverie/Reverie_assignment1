import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';
import {jwtDecode} from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { Button, useToast } from '@chakra-ui/react';
const Register = () => {
    const toast = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        picture:' '
    });
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const { name, email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, email, password };
        try {
            await axios.post('http://localhost:3001/api/users/register', newUser);
            toast({
                title: "Registration Successfull",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
            setSuccess(true);
            setTimeout(() => navigate('/login'), 6000); // Navigate to login after 8 seconds
        } catch (err) {
            toast({
                title: "Error occured",
                description: "hii",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
            console.error(err.response.data);
        }
    };

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            
    
            const userInfo = {
                name: decoded.name,
                email: decoded.email,
                password: decoded.sub,  // The Google User ID
                picture: decoded.picture,
            };
            
            
            // Now, save the user info to your database
            const res = await axios.post('http://localhost:3001/api/users/register', userInfo);
            toast({
                title: "Registration Successfull",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
            
            console.log(res.data);
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
        <div className="register-page">
            <div className={`register-container ${success ? 'fade-out' : ''}`}>
                <h1>Register</h1>
                {success && <div className="success-message">
                    <div className="tick-mark">✔</div>
                    <div>Successfully Registered!</div>
                </div>}
                {!success && <form onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={onChange} 
                        placeholder="Name"
                        required 
                    />
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
                    <Button type="submit">Register</Button>
                    <div className="redirect-link">
                            <p>Have an account? <a href="/login">Login here</a></p>
                        </div>
                        <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </form>}
            </div>
            <div className="tagline">
                <p className="typewriter">Translate Your Website in All Indian Languages!</p>
            </div>
        </div>
    );
};

export default Register;
