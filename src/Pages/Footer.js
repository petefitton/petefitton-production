import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp, faSpotify, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import useGoogleScript from '../Hooks/useGoogleScript';
import './Footer.css';

function Footer() {
  useGoogleScript();
  return (
    <footer className="footer">
      <ul className="footer-list">
        <iframe title="Bandcamp Follow Button" style={{border: "0", width: "100%", height: "33px"}} src="https://bandcamp.com/band_follow_button_classic/1687783889"></iframe>
        {/* <a href="https://petefitton.bandcamp.com/" aria-label="Bandcamp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faBandcamp} /></a> */}
        <a href="https://open.spotify.com/artist/2kOaq98e4BfVwBnEp3PRbz" aria-label="Spotify" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faSpotify} /></a>
        <a href="https://instagram.com/PeteFittonMusic" aria-label="Instagram" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faInstagram} /></a>
        <a href="https://tiktok.com/@PeteFittonMusic" aria-label="TikTok" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa" icon={faTiktok} /></a>
        {/* <a href="https://youtube.com/@PeteFittonMusic" style={{backgroundColor: "rgb(230, 33, 23)", height: "auto", border: "1px solid rgba(0, 0, 0, 0)", boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 0px 0px", padding: "5.5px 8px 5.5px 5.5px", color: "white", textDecoration: "none", fontFamily: "'YouTube Noto', Roboto, arial, sans-serif", fontSize: "12px", textAlign: "center", borderRadius: "2px"}} aria-label="YouTube" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-yt" icon={faYoutube} /><strong>Subscribe</strong> on YouTube</a> */}
        <div className="g-ytsubscribe" data-channelid="UCKEK7YLCp1UcUD-Ammh2n6g" data-layout="default" data-count="hidden"></div>
      </ul>
    </footer>
  );
}

export default Footer;
