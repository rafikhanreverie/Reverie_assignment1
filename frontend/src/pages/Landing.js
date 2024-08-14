import React from 'react';
import '../styles/landing.css';
import rocketImg from '../images/rocket.png'; // Add the rocket image
import cloudImg from '../images/cloud.png';  // Add the cloud image

const Landing = () => {
  return (
    <div className="landing-page">
      <header>
        <div className="button-container">
          <a href="/login" className="button">Login</a>
          <a href="/register" className="button">Signup</a>
        </div>
      </header>
      <div className='landing-main'>
        <div className="test-section">
          <h1 className="text">Reverie Language Technologies</h1>
         
        </div>
        <div className='animation-section'>
        
        <img src={rocketImg} alt="Rocket" className="rocket" />
        <div className='cloud-section'>

        <img src={cloudImg} alt="Cloud" className="cloud cloud-1" />
        <img src={cloudImg} alt="Cloud" className="cloud cloud-2" />
        </div>
       
        </div>
      </div>
    </div>
  );
};

export default Landing;