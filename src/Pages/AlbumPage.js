import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBandcampSwitch from '../Hooks/useBandcampSwitch';
import useAlbumLinkSwitch from '../Hooks/useAlbumLinkSwitch';
import useVideoSwitch from '../Hooks/useVideoSwitch';
import './AlbumPage.css';

function AlbumPage() {
  const [albumName, setAlbumName] = useState();
  const urlParams = useParams().album;

  useEffect(() => {
    if (urlParams === "the-starting-of-something-new") {
      setAlbumName("The Starting of Something New")
    }
  }, [urlParams]);

  return (
    <div className="albumpage-container pt-60">
      <h1 className="albumpage-title position-relative">{albumName}</h1>
      <div className="bandcamp-container">
        {useBandcampSwitch(albumName)}
      </div>
      <div className="album-link-container">
        {useAlbumLinkSwitch(albumName)}
      </div>
      <div className="video-container">
        {useVideoSwitch(albumName)}
      </div>
    </div>
  );
}

export default AlbumPage;
