import React from 'react';
import './HomePage.css';
import albumCover from './The_Starting_of_Something_New.jpg';

function HomePage() {

  return (
    <div className="homepage-container">
      <div className="background-animation">
        {/* Add your background animation here */}
        <img src={albumCover} alt="Latest Album Cover" className="hero-image" />
      </div>
    </div>
  );
}

export default HomePage;
