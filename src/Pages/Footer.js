import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li><a href="https://petefitton.bandcamp.com/" aria-label="Bandcamp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faBandcamp} /></a></li>
        <li><a href="https://instagram.com/PeteFittonMusic" aria-label="Instagram" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faInstagram} /></a></li>
        <li><a href="https://tiktok.com/@PeteFittonMusic" aria-label="TikTok" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faTiktok} /></a></li>
        <li><a href="https://youtube.com/@PeteFittonMusic" aria-label="YouTube" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faYoutube} /></a></li>
      </ul>
    </footer>
  );
}

export default Footer;
