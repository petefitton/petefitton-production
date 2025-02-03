import React, { useState } from 'react';
import './BandcampPage.css';
import useWaitForAssets from '../Hooks/useWaitForAssets';
import useBandcampSwitch from '../Hooks/useBandcampSwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';

function BandcampPage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  const [imageUrls] = useState([
    `${PUBLIC_URL}/images/Pete-Fitton-wisetag.png`,
  ]);
  const imagesLoaded = useWaitForAssets(imageUrls);

  return (
    <>
      <div className="bandcamppage-container pt-60">
        <div className="content-container">
            <a href="https://petefitton.bandcamp.com/" aria-label="Bandcamp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-xlarge" icon={faBandcamp} /></a>
            {imagesLoaded ?
                <>
                    <h1>Why Bandcamp Matters</h1>
                    {/* <img src={imageUrls[0]} alt="Pete Fitton's Wisetag" className="qr-code"></img> */}
                    <p className="bandcamp-text">Bandcamp has been an incredible platform for musicians to self-release their music since 2007. It has proven itself reliable and fair over time. For example, if you purchase a digital album of mine for $10, I should make around ~$7.5, ~$6.9 of that comes directly and the rest would come in the form of royalties (Bandcamp takes 15%, there's a 4-6% payment processing fee, and a 11% fee for royalties which should partially make it back to me). This is one of the best options for musicians other than selling music to fans directly. Contrast it as well with streaming from Spotify which would pay out $7.5 for approximately 187,500 streams and you can see how different the payouts are.</p>
                    <h1>How to Make Bandcamp Work For You</h1>
                    <p className="bandcamp-text">I started using Bandcamp before there was a mobile app, so it has taken me a little while to move towards using the app. I am glad to be using it now though! You can download your Bandcamp purchases for offline play through the app on both iOS and Android. Also, if you are connected to WiFi or if mobile data is not an issue, you can easily stream your purchases or other music from Bandcamp through either the app or from a web browser.</p>
                </>
                :
                <></>}
            <div className="bandcamp-player">
                {useBandcampSwitch("The Starting of Something New")}
            </div>
        </div>
      </div>
    </>
  );
}

export default BandcampPage;
