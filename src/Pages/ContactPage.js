import React, { useState } from 'react';
import './ContactPage.css';
import useWaitForAssets from '../Hooks/useWaitForAssets';

function ContactPage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  const [imageUrls] = useState([`${PUBLIC_URL}/img/contact_page_photo.jpg`]);
  const imagesLoaded = useWaitForAssets(imageUrls);

  return (
    <>
      {imagesLoaded ?
        <div className="contactpage-container pt-100">
          <div className="content-container">
            <img src={imageUrls[0]} alt="Pete Fitton" className="contact-page-photo" />
            <h1>Contact</h1>
            <p>petefittonmusic@gmail.com</p>
          </div>
        </div>
      :
      <></>}
    </>
  );
}

export default ContactPage;
