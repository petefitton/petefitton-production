import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import useWaitForAssets from '../Hooks/useWaitForAssets';

function HomePage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
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

  const [videoUrls] = useState([videoSrc]);
  const videosLoaded = useWaitForAssets(videoUrls);

  return (
    <>
      {videosLoaded ?
        <div className="homepage-container">
          <div className="background-animation">
              <Link to="/music">
                <video src={videoUrls[0]} alt="The Starting of Something New Album Cover" className="hero-image" type="video/mp4" autoPlay muted loop playsinline />
              </Link>
          </div>
        </div>
      : <></>}
    </>
  );
}

export default HomePage;
