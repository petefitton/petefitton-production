import React, { useState } from 'react';
// import './MiscPage.css';
import instrumentIllustration from './instrumentIllustration.png';

function MiscPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState(null);

  const handleInstrumentClick = (instrument) => {
    setSelectedInstrument(instrument);
    setShowPopup(true);
  };
  
  return (
    <div className="miscpage-container pt-100">
      <div className="content-container">
        <img
          src={instrumentIllustration}
          alt="Instrument Illustration"
          className="instrument-illustration"
          onClick={() => handleInstrumentClick()}
        />
        <div className={`instrument-popup ${showPopup && 'visible'}`}>
          <h2>{selectedInstrument}</h2>
          <p>Description of the {selectedInstrument}</p>
          <audio src="/audio/sample.mp3" controls />
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default MiscPage;
