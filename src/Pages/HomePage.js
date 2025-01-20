import React, { useState, useEffect } from 'react';
import './HomePage.css';

function HomePage() {
  const PUBLIC_URL = process.env.PUBLIC_URL;
  const [isMobile, setIsMobile] = useState(null);
  const handleResize = () => {
    setIsMobile(window.matchMedia("(min-width: 768px)").matches);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let videoSrc = isMobile ? `${PUBLIC_URL}/videos/TSOSN-mobile.mp4` : `${PUBLIC_URL}/videos/TSOSN-desktop.mp4`;

  return (
    <div className="homepage-container">
      <div className="background-animation">
        <video src={videoSrc} alt="Latest Album Cover" className="hero-image" type="video/mp4" autoPlay muted loop />
      </div>
    </div>
  );
}

export default HomePage;
