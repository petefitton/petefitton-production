import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MusicPage.css';
import useWaitForAssets from '../Hooks/useWaitForAssets';

function MusicPage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  let releases = [
    {
      title: "Refrain",
      title2: "",
      subUrl: "refrain",
      albumCoverImg: "/images/Refrain.jpg",
      albumCoverImgNoTitle: "/images/Refrain_No_Title.jpg",
      releaseDate: "March 5, 2025"
    },
    {
      title: "The Starting of ",
      title2: "Something New",
      subUrl: "the-starting-of-something-new",
      albumCoverImg: "/images/The_Starting_of_Something_New.jpg",
      albumCoverImgNoTitle: "/images/The_Starting_of_Something_New_No_Title.jpg",
      releaseDate: "February 5, 2025"
    },
  ];
  const [imageUrls] = useState([
    `${PUBLIC_URL}${releases[0].albumCoverImg}`,
    `${PUBLIC_URL}${releases[0].albumCoverImgNoTitle}`,
    `${PUBLIC_URL}${releases[1].albumCoverImg}`,
    `${PUBLIC_URL}${releases[1].albumCoverImgNoTitle}`,
  ]);
  const imagesLoaded = useWaitForAssets(imageUrls);

  return (
    <>
      {imagesLoaded ?
      <div className="musicpage-container pt-60">
        {releases.map((release, index) => (
          <Link key={index} to={`/music/${release.subUrl}`}>
            <div className="album-cover-container black-background" tabIndex={index}>
              <img src={imageUrls[(index*2)]} alt={`${release.title}${release.title2} Album Cover`} className="album-cover-image" />
              <div className="album-cover-info">
                <div className="album-cover-no-title-container">
                  <img src={imageUrls[((index*2)+1)]} alt={`${release.title}${release.title2} Album Cover Without Title`} className="album-cover-image-no-title" />
                </div>
                <div className="album-cover-text">
                  <h2 className="album-title position-relative">{release.title}<br></br>{release.title2}</h2>
                  <p className="release-text position-relative">Released<br></br>{release.releaseDate}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      :
      <></>}
    </>
  );
}

export default MusicPage;
