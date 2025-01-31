import React, { useState } from 'react';
import './MusicPage.css';
import useWaitForAssets from '../Hooks/useWaitForAssets';

// TODO: change functionality for mobile to just go to music/:album page rather than having hover functionality (can also remove :active and :focus CSS [just keep :hover])
// TODO: add music/:album page

function MusicPage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  let releases = [
    {
      title: "The Starting of",
      title2: "Something New",
      albumCoverImg: "/images/The_Starting_of_Something_New.jpg",
      albumCoverImgNoTitle: "/images/The_Starting_of_Something_New_No_Title.jpg",
      releaseDate: "February 5, 2025"
    },
  ];
  const [imageUrls] = useState([
    `${PUBLIC_URL}${releases[0].albumCoverImg}`,
    `${PUBLIC_URL}${releases[0].albumCoverImgNoTitle}`,
  ]);
  const imagesLoaded = useWaitForAssets(imageUrls);

  return (
    <>
      {imagesLoaded ?
      <div className="musicpage-container pt-100">
        {releases.map((release, index) => (
          <div className="album-cover-container black-background" key={index} tabIndex={index}>
            <img src={imageUrls[0]} alt="Latest Album Cover" className="album-cover-image" />
            <div className="album-cover-info">
              <div className="album-cover-no-title-container">
                <img src={imageUrls[1]} alt="Latest Album Cover Without Title" className="album-cover-image-no-title" />
              </div>
              <h2 className="album-title position-relative">{release.title}</h2>
              <h2 className="album-title-two position-relative">{release.title2}</h2>
              <p className="release-text position-relative">To be released on</p>
              <p className="release-text position-relative">{release.releaseDate}</p>
              {/* <button>Listen Now</button> */}
            </div>
          </div>
        ))}
      </div>
      :
      <></>}
    </>
  );
}

export default MusicPage;
