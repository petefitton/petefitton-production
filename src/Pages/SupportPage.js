import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SupportPage.css';

function SupportPage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  const [imageUrls] = useState([
    `${PUBLIC_URL}/images/Pete-Fitton-wisetag.png`,
    `${PUBLIC_URL}/images/Pete-Fitton-Venmo-QR-Code.jpg`,
  ]);

  return (
    <div className="supportpage-container pt-60">
      <div className="content-container">
        <h1>Buy me a coffee!</h1>
        <p className="support-text">You can support me by buying my music on <a href="https://petefitton.bandcamp.com/" aria-label="Bandcamp" target="_blank" rel="noreferrer" className="supportpage-anchor">my Bandcamp page</a> (you can find out more info about Bandcamp <Link to="/bandcamp" className="supportpage-anchor">HERE</Link>), and you can also tip me directly via Wise or Venmo below. Most independent musicians make most of their money from album sales, merch, and tips, so any support beyond streaming is much appreciated. Even sharing my music with others is helpful! :)<br></br>Thank you!</p>
        <div className="qr-code-container mt-40">
            <a href="https://wise.com/pay/me/petehamiltonf" aria-label="Wise" target="_blank" rel="noreferrer" className="supportpage-anchor">Pete Fitton's Wise</a>
            <img src={imageUrls[0]} alt="Pete Fitton's Wisetag" className="qr-code"></img>
            <a href="https://venmo.com/Pete-Fitton" aria-label="Venmo" target="_blank" rel="noreferrer" className="supportpage-anchor">Pete Fitton's Venmo</a>
            <img src={imageUrls[1]} alt="Pete Fitton's Venmo QR Code" className="qr-code"></img>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
