import React from 'react';
import './BandcampPage.css';
import useBandcampSwitch from '../Hooks/useBandcampSwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';

function BandcampPage() {
  return (
    <div className="bandcamppage-container pt-60">
      <div className="content-container">
        <a href="https://petefitton.bandcamp.com/" aria-label="Bandcamp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-xlarge" icon={faBandcamp} /></a>
        <h1>Why Bandcamp Matters</h1>
        <p className="bandcamp-text">Bandcamp has been an incredible platform for musicians to self-release their music since 2007. It has proven itself reliable and fair over time. For example, if you purchase a digital album of mine for $10, I should make around ~$7.5. This is one of the best options for musicians beyond selling music to fans directly. Contrast it as well with streaming from Spotify which would pay out $7.5 for approximately 187,500 streams. You can see how different the payouts are.</p>
        <h1>How to Make Bandcamp Work For You</h1>
        <p className="bandcamp-text">You can download your Bandcamp purchases for offline play through the app on both iOS and Android. Also, if you are connected to WiFi or if mobile data is not an issue, you can easily stream your purchases or other music from Bandcamp through either the app or from a web browser.</p>
        <div className="bandcamp-player">
          {useBandcampSwitch("The Starting of Something New")}
        </div>
      </div>
    </div>
  );
}

export default BandcampPage;
