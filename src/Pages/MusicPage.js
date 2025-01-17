import React from 'react';
// import './MusicPage.css';
import albumCover from './The_Starting_of_Something_New.jpg';

function MusicPage() {
  return (
    <div className="musicpage-container pt-100">
      {/* <div className="content-container"> */}
        {/* <h1 className="band-name">Pete Fitton</h1> */}
        {/* <p className="band-description">A playful and enigmatic indie band.</p> */}
      {/* </div> */}
      <div className="album-cover-container">
        <img src={albumCover} alt="Latest Album Cover" className="album-cover-image" />
        <div className="album-cover-info">
          <h2>Latest Album Name</h2>
          <p>Release Date: January 1, 2023</p>
          <button>Listen Now</button>
        </div>
      </div>
    </div>
  );
}

export default MusicPage;
