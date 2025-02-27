import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp, faSpotify, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <a href="https://petefitton.bandcamp.com/" aria-label="Bandcamp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faBandcamp} /></a>
        <a href="https://open.spotify.com/artist/2kOaq98e4BfVwBnEp3PRbz" aria-label="Spotify" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faSpotify} /></a>
        <a href="https://instagram.com/PeteFittonMusic" aria-label="Instagram" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faInstagram} /></a>
        <a href="https://tiktok.com/@PeteFittonMusic" aria-label="TikTok" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faTiktok} /></a>
        <a href="https://youtube.com/@PeteFittonMusic" aria-label="YouTube" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faYoutube} /></a>
      </ul>
    </footer>
  );
}

export default Footer;
