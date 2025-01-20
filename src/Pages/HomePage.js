import React from 'react';
import './HomePage.css';

function HomePage() {
  let PUBLIC_URL = process.env.PUBLIC_URL;

  return (
    <div className="homepage-container">
      <div className="background-animation">
        {/* <video src={`${PUBLIC_URL}/videos/TSOSN-desktop.mp4`} alt="Latest Album Cover" className="hero-image" type="video/mp4" autoPlay muted loop /> */}
        <video src={`${PUBLIC_URL}/videos/TSOSN-mobile.mp4`} alt="Latest Album Cover" className="hero-image" type="video/mp4" autoPlay muted loop />
      </div>
    </div>
  );
}

export default HomePage;
