import React, { useState } from 'react';
import './PopUpBook.css';

function PopUpBook() {
  const [isOpen, setIsOpen] = useState(false);

  function togglePopUp() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="pop-up-book">
      <button className="pop-up-button" onClick={togglePopUp}>
        Open Book
      </button>
      {isOpen && (
        <div className="pop-up">
          <div className="pop-up-page">
            <h2>Page 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
              malesuada orci. Vestibulum sit amet elit vel mauris tincidunt
              eleifend ac vel mauris.
            </p>
          </div>
          <div className="pop-up-page">
            <h2>Page 2</h2>
            <p>
              Integer aliquet velit sit amet nisi pharetra facilisis. Morbi
              consectetur tincidunt nulla in tempus. In euismod sapien ac
              lectus tincidunt feugiat.
            </p>
          </div>
          <button className="close-button" onClick={togglePopUp}>
            Close Book
          </button>
        </div>
      )}
    </div>
  );
}

export default PopUpBook;
