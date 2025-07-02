import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);

  const isMobileFunction = () => !window.matchMedia("(min-width: 768px)").matches;
  const [isMobile, setIsMobile] = useState(isMobileFunction());

  const whichAssetSrc = useCallback(() => isMobile ? `${PUBLIC_URL}/images/Double_EP.jpg` : `${PUBLIC_URL}/videos/Double_EP-desktop.webp`, [PUBLIC_URL, isMobile]);
  const [assetSrc, setAssetSrc] = useState(whichAssetSrc());

  const handleAssetUrls = useCallback(() => [assetSrc], [assetSrc]);
  const [assetUrls, setAssetUrls] = useState(handleAssetUrls());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileFunction());
      setAssetSrc(whichAssetSrc());
      setAssetUrls(handleAssetUrls());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, assetSrc, whichAssetSrc, handleAssetUrls]);

  return (
    <div className="homepage-container">
      <div className="background-animation">
        <Link to="/music/sunset-sunrise">
          <img src={assetUrls[0]} alt="Sunset|Sunrise Album Cover" className="hero-image" />
        </Link>
        <div className="call-to-action-container">
          <a href="https://open.spotify.com/album/4wK6slPFcRKn78KQgclF6H" aria-label="Spotify" target="_blank" rel="noreferrer" className="call-to-action"><p>Listen on Spotify!</p></a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
