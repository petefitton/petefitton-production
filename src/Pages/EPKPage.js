import React, { useState } from 'react';
import './EPKPage.css';
import SuspendedLazyImg from '../Utilities/SuspendedLazyImage';
import useBandcampSwitch from '../Hooks/useBandcampSwitch';

function EPKPage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  const [imageUrls] = useState([
    `${PUBLIC_URL}/images/epk_page_photo.jpg`,
    `${PUBLIC_URL}/images/epk_page_photo2.jpeg`,
    `${PUBLIC_URL}/images/epk_page_photo3.jpeg`,
    `${PUBLIC_URL}/images/epk_page_photo4.jpeg`,
  ]);

  return (
    <div className="epkpage-container pt-60">
      <div className="content-container">
        <div className="epkpage-contact-container">
          <h2 className="epkpage-contact-header">Contact</h2>
          <p>petefittonmusic@gmail.com</p>
          <a href="mailto:petefittonmusic@gmail.com" className="email-anchor">Send Email</a>
        </div>
        <h1>Pete Fitton</h1>
        <section className="epk-display-flex">
          <img src={imageUrls[0]} alt="Pete Fitton" className="epk-page-photo epk-page-prime-photo" fetchpriority="high" />
          <div className="epkpage-bio-container">
            <p className="bio-start">Pete Fitton is a 34 year-old multi-instrumentalist indie singer-songwriter.  He has been involved in music from a young age in all kinds of musical contexts, such as musical theater, school band, orchestra, jazz, choir, barbershop quartet, medieval madrigals, and more.  He has also taken to meditation in recent years, which has made its way into his worldview and correspondingly into his lyrics.  His recent music takes influence from artists such as Elliott Smith, Sufjan Stevens, and Bon Iver, among others.</p>
            <p>His first major release - a double-EP "Sunset|Sunrise" - is driven by vocals with acoustic guitar and contains other myriad key, string, synth, and percussion elements that complement that singer-songwriter core which ultimately results in a sound that is best described as indie acoustic.  In this work, his music takes one on a journey through despair and negativity towards love, optimism, and acceptance.</p>
          </div>
          <div className="epkpage-contact-mobile-container">
            <h1>Contact</h1>
            <p>petefittonmusic@gmail.com</p>
            <a href="mailto:petefittonmusic@gmail.com" className="email-anchor">Send Email</a>
          </div>
          <div className="break-row"></div>
          <div className="epkpage-link-container">
            <h1 className="epkpage-social-h1">Social and Music Links</h1>
            <ul className="epkpage-links-list">
              <li><a href="https://petefitton.bandcamp.com/" aria-label="Bandcamp" target="_blank" rel="noreferrer">Bandcamp</a></li>
              <li><a href="https://open.spotify.com/artist/2kOaq98e4BfVwBnEp3PRbz" aria-label="Spotify" target="_blank" rel="noreferrer">Spotify</a></li>
              <li><a href="https://instagram.com/PeteFittonMusic" aria-label="Instagram" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://tiktok.com/@PeteFittonMusic" aria-label="TikTok" target="_blank" rel="noreferrer">TikTok</a></li>
              <li><a href="https://youtube.com/@PeteFittonMusic" aria-label="YouTube" target="_blank" rel="noreferrer">YouTube</a></li>
            </ul>
          </div>
          <div className="mobile-break-row"></div>
          <div className="bandcamp-container">
            {useBandcampSwitch("EPK")}
          </div>
        </section>
        <div className="epkpage-image-container">
          <SuspendedLazyImg fallback={<></>} src={imageUrls[1]} alt="Pete Fitton" className="epk-page-photo" />
          <SuspendedLazyImg fallback={<></>} src={imageUrls[2]} alt="Pete Fitton" className="epk-page-photo" />
          <SuspendedLazyImg fallback={<></>} src={imageUrls[3]} alt="Pete Fitton" className="epk-page-photo" />
        </div>
      </div>
    </div>
  );
}

export default EPKPage;
