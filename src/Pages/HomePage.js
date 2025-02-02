import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import useWaitForAssets from '../Hooks/useWaitForAssets';

// TODO: update image and video to have transparent backgrounds

function HomePage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);

  const isMobileFunction = () => !window.matchMedia("(min-width: 768px)").matches;
  const [isMobile, setIsMobile] = useState(isMobileFunction());

  const whichAssetSrc = useCallback(() => isMobile ? `${PUBLIC_URL}/images/The_Starting_of_Something_New.jpg` : `${PUBLIC_URL}/videos/TSOSN-desktop.mp4`, [PUBLIC_URL, isMobile]);
  const [assetSrc, setAssetSrc] = useState(whichAssetSrc());

  const handleAssetUrls = useCallback(() => [assetSrc], [assetSrc]);
  const [assetUrls, setAssetUrls] = useState(handleAssetUrls());

  const assetsLoaded = useWaitForAssets(assetUrls);

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
    <>
      {assetsLoaded ?
        <div className="homepage-container">
          <div className="background-animation">
              <Link to="/music">
                {isMobile ?
                  <img src={assetUrls[0]} alt="The Starting of Something New Album Cover" className="hero-image" />
                :
                  <video src={assetUrls[0]} alt="The Starting of Something New Album Cover" className="hero-video" type="video/mp4" autoPlay muted loop playsInline />
                }
              </Link>
          </div>
        </div>
      : <></>}
    </>
  );
}

export default HomePage;
