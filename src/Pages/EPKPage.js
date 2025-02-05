import React, { useState } from 'react';
import './EPKPage.css';
import useWaitForAssets from '../Hooks/useWaitForAssets';

function EPKPage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  const [imageUrls] = useState([
    `${PUBLIC_URL}/images/epk_page_photo.jpg`,
    `${PUBLIC_URL}/images/epk_page_photo2.jpeg`,
    `${PUBLIC_URL}/images/epk_page_photo3.jpeg`,
    `${PUBLIC_URL}/images/epk_page_photo4.jpeg`,
  ]);
  const imagesLoaded = useWaitForAssets(imageUrls);

  return (
    <>
      {imagesLoaded ?
        <div className="epkpage-container pt-60">
          <div className="content-container">
            <div className="epkpage-contact-container">
              <h2 className="epkpage-contact-header">Contact</h2>
              <p>petefittonmusic@gmail.com</p>
              <a href="mailto:petefittonmusic@gmail.com" className="email-anchor">Send Email</a>
            </div>
            <h1>Pete Fitton</h1>
            <section className="epk-display-flex">
                <img src={imageUrls[0]} alt="Pete Fitton" className="epk-page-photo epk-page-prime-photo" />
                <div className="epkpage-bio-container">
                    {/* <h1>Bio</h1> */}
                <p className="bio-start">Pete Fitton is a 34 year-old multi-instrumentalist indie singer-songwriter.  He has been involved in music from a young age in all kinds of musical contexts, such as musical theater, school band, orchestra, jazz, choir, barbershop quartet, medieval madrigals, and more.  He has also taken to meditation in recent years, which has made its way into his worldview and correspondingly into his lyrics.  His recent music takes influence from artists such as Elliott Smith, Sufjan Stevens, and Bon Iver, among others.</p>
                <p>His upcoming double-EP "Sunset|Sunrise" is driven by vocals with acoustic guitar and contains other myriad key, string, synth, and percussion elements that complement that singer-songwriter core which ultimately results in a sound that is best described as indie acoustic.  In this work, his music takes one on a journey through despair and negativity towards love, optimism, and acceptance.</p>
                <p>“The Starting of Something New” is the first single from this release. He will be releasing one song on the first Wednesday of every month until July 2nd, 2025 when he will release the full double-EP.</p>
                </div>
                <div className="epkpage-contact-mobile-container">
                    <h1>Contact</h1>
                    <p>petefittonmusic@gmail.com</p>
                    <a href="mailto:petefittonmusic@gmail.com" className="email-anchor">Send Email</a>
                </div>
            {/* </section> */}
            {/* <section className="epk-display-flex epk-reverse-section-order-mobile mt-40"> */}
                <div className="break-row"></div>
                <div className="epkpage-link-container">
                    <h1 className="epkpage-social-h1">Social and Music Links</h1>
                    <ul className="epkpage-links-list">
                        <li><a href="https://petefitton.bandcamp.com/" aria-label="Bandcamp" target="_blank" rel="noreferrer">Bandcamp</a></li>
                        <li><a href="https://open.spotify.com/artist/2kOaq98e4BfVwBnEp3PRbz" aria-label="Spotify" target="_blank" rel="noreferrer">Spotify</a></li>
                        <li><a href="https://soundcloud.com/Pete-Fitton" aria-label="SoundCloud" target="_blank" rel="noreferrer">SoundCloud</a></li>
                        <li><a href="https://instagram.com/PeteFittonMusic" aria-label="Instagram" target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href="https://tiktok.com/@PeteFittonMusic" aria-label="TikTok" target="_blank" rel="noreferrer">TikTok</a></li>
                        <li><a href="https://youtube.com/@PeteFittonMusic" aria-label="YouTube" target="_blank" rel="noreferrer">YouTube</a></li>
                    </ul>
                </div>
                <div className="mobile-break-row"></div>
                <div className="bandcamp-container">
                    <iframe title="The Starting of Something New on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=3333396897/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"><a href="https://petefitton.bandcamp.com/album/the-starting-of-something-new">The Starting of Something New by Pete Fitton</a></iframe>
                </div>
                {/* VIDEOS */}
            </section>
            <div className="epkpage-image-container">
              {/* <h1>Photos</h1> */}
              <img src={imageUrls[1]} alt="Pete Fitton" className="epk-page-photo" />
              <img src={imageUrls[2]} alt="Pete Fitton" className="epk-page-photo" />
              <img src={imageUrls[3]} alt="Pete Fitton" className="epk-page-photo" />
            </div>
          </div>
        </div>
      :
      <></>}
    </>
  );
}

export default EPKPage;
