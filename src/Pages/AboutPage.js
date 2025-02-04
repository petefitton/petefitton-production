import React, { useState } from 'react';
import './AboutPage.css';
import useWaitForAssets from '../Hooks/useWaitForAssets';

function AboutPage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  const [imageUrls] = useState([
    `${PUBLIC_URL}/images/about_page_photo.jpg`,
    `${PUBLIC_URL}/images/about_page_photo2.jpeg`,
    `${PUBLIC_URL}/images/about_page_photo3.jpeg`,
    `${PUBLIC_URL}/images/about_page_photo4.jpeg`,
    `${PUBLIC_URL}/images/about_page_photo5.jpeg`,
  ]);
  const imagesLoaded = useWaitForAssets(imageUrls);

  return (
    <>
      {imagesLoaded ?
        <div className="aboutpage-container pt-60">
          <div className="content-container">
            <h1>About</h1>
            <div className="bio-container">
              <p>Reflective, inquisitive, and a little bit heady.  Pete Fitton is a 34 year-old multi-instrumentalist songwriter who has dived deep into meditation in recent years.  He has been involved in music from a young age in all kinds of musical contexts, such as musical theater, school band, orchestra, jazz, choir, barbershop quartet, medieval madrigals, and more.</p>
              <p>His upcoming double-EP "Sunset|Sunrise" is driven by vocals with acoustic guitar and contains other myriad key, string, synth, and percussion elements that complement that singer-songwriter core which ultimately results in a sound that is best described as indie acoustic.  In this work, his music takes one on a journey through despair and negativity towards love, optimism, and acceptance.<br></br>“The Starting of Something New” is the first single from this release.</p>
            </div>
            <div className="aboutpage-image-container">
              <img src={imageUrls[0]} alt="Pete Fitton" className="about-page-photo" />
              <img src={imageUrls[1]} alt="Pete Fitton" className="about-page-photo" />
              <img src={imageUrls[2]} alt="Pete Fitton" className="about-page-photo" />
              <img src={imageUrls[3]} alt="Pete Fitton" className="about-page-photo" />
              <img src={imageUrls[4]} alt="Pete Fitton" className="about-page-photo" />
            </div>
            <div className="email-container">
              <h1 className="mt-40">Contact</h1>
              <p>petefittonmusic@gmail.com</p>
              <a href="mailto:petefittonmusic@gmail.com" className="email-anchor">Send Email</a>
            </div>
          </div>
        </div>
      :
      <></>}
    </>
  );
}

export default AboutPage;
