import React, { useState } from 'react';
import './SupportPage.css';
import useWaitForAssets from '../Hooks/useWaitForAssets';

function SupportPage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  const [imageUrls] = useState([
    `${PUBLIC_URL}/images/Pete-Fitton-Venmo-QR-Code.jpg`,
    `${PUBLIC_URL}/images/Pete-Fitton-wisetag.png`,
  ]);
  const imagesLoaded = useWaitForAssets(imageUrls);

  return (
    <>
      {imagesLoaded ?
        <div className="supportpage-container pt-60">
          <div className="content-container">
            <h1>Buy me a coffee!</h1>
            <p className="support-text">You can support me by buying my music on <a href="https://petefitton.bandcamp.com/" aria-label="Bandcamp" target="_blank" rel="noreferrer" className="bandcamp-anchor">my Bandcamp page</a>, and you can also tip me directly via the QR codes below. Most independent musicians make most of their money from album sales, merch, and tips, so any support beyond streaming is much appreciated, even sharing my music with others is helpful! :)<br></br>Thank you!</p>
            <div className="qr-code-container mt-40">
                <img src={imageUrls[1]} alt="Pete Fitton's Wisetag" className="qr-code"></img>
                <img src={imageUrls[0]} alt="Pete Fitton's Venmo QR Code" className="qr-code"></img>
            </div>
          </div>
        </div>
      :
      <></>}
    </>
  );
}

export default SupportPage;
