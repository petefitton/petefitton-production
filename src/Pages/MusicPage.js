import React from 'react';
import './MusicPage.css';
import tSOSNAlbumCover from './The_Starting_of_Something_New.jpg';

function MusicPage() {
  let releases = [{title: "The Starting of Something New", albumCoverImg: tSOSNAlbumCover, releaseDate: "February 5, 2025"}];

  return (
    <div className="musicpage-container pt-100">
      {/* <div className="content-container"> */}
        {/* <h1 className="band-name">Pete Fitton</h1> */}
        {/* <p className="band-description">A playful and enigmatic indie band.</p> */}
      {/* </div> */}
      {releases.map(release => (
        <div className="album-cover-container album-cover-container-dark-blue">
          <img src={release.albumCoverImg} alt="Latest Album Cover" className="album-cover-image" />
          <div className="album-cover-info">
            <h2>{release.title}</h2>
            <p className="release-text-upper">Released on</p>
            <p className="release-text-lower">{release.releaseDate}</p>
            <button>Listen Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MusicPage;
