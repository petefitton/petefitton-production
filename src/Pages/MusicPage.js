import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MusicPage.css';
import useWaitForAssets from '../Hooks/useWaitForAssets';

function MusicPage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  let releases = [
    {
      title: "Sunset|Sunrise",
      title2: "",
      subUrl: "sunset-sunrise",
      albumCoverImg: "/images/Double_EP.jpg",
      albumCoverImgNoTitle: "/images/Double_EP_No_Title.jpg",
      releaseDate: "July 2, 2025"
    },
    {
      title: "Changing",
      title2: "",
      subUrl: "changing",
      albumCoverImg: "/images/Changing.jpg",
      albumCoverImgNoTitle: "/images/Changing_No_Title.jpg",
      releaseDate: "June 4, 2025"
    },
    {
      title: "Atone",
      title2: "",
      subUrl: "atone",
      albumCoverImg: "/images/Atone.jpg",
      albumCoverImgNoTitle: "/images/Atone_No_Title.jpg",
      releaseDate: "May 7, 2025"
    },
    {
      title: "Oceans",
      title2: "",
      subUrl: "oceans",
      albumCoverImg: "/images/Oceans.jpg",
      albumCoverImgNoTitle: "/images/Oceans_No_Title.jpg",
      releaseDate: "April 2, 2025"
    },
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
    `${PUBLIC_URL}${releases[2].albumCoverImg}`,
    `${PUBLIC_URL}${releases[2].albumCoverImgNoTitle}`,
    `${PUBLIC_URL}${releases[3].albumCoverImg}`,
    `${PUBLIC_URL}${releases[3].albumCoverImgNoTitle}`,
    `${PUBLIC_URL}${releases[4].albumCoverImg}`,
    `${PUBLIC_URL}${releases[4].albumCoverImgNoTitle}`,
    `${PUBLIC_URL}${releases[5].albumCoverImg}`,
    `${PUBLIC_URL}${releases[5].albumCoverImgNoTitle}`,
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
