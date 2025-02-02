import React, { useState } from 'react';
import './ContactPage.css';
import useWaitForAssets from '../Hooks/useWaitForAssets';

// TODO: Change ContactPage to AboutPage and add bio with multiple photos + contact info

function ContactPage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  const [imageUrls] = useState([`${PUBLIC_URL}/images/contact_page_photo.jpg`]);
  const imagesLoaded = useWaitForAssets(imageUrls);

  return (
    <>
      {imagesLoaded ?
        <div className="contactpage-container pt-100">
          <div className="content-container">
            <h1>Contact Info</h1>
            <p>petefittonmusic@gmail.com</p>
            <img src={imageUrls[0]} alt="Pete Fitton" className="contact-page-photo" />
          </div>
        </div>
      :
      <></>}
    </>
  );
}

export default ContactPage;
