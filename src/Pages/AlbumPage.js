import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useBandcampSwitch from '../Hooks/useBandcampSwitch';
import useAlbumLinkSwitch from '../Hooks/useAlbumLinkSwitch';
import useVideoSwitch from '../Hooks/useVideoSwitch';
import useTrackListSwitch from '../Hooks/useTrackListSwitch';
import useURLParamToNameSwitch from '../Hooks/useURLParamToNameSwitch';
import './AlbumPage.css';

function AlbumPage() {
  const urlParams = useParams().album;
  const [albumName] = useState(useURLParamToNameSwitch(urlParams));

  return (
    <div className="albumpage-container pt-60">
      <h1 className="albumpage-title position-relative">{albumName}</h1>
      <div className="bandcamp-container">
        {useBandcampSwitch(albumName)}
      </div>
      <div className="track-list-container">
        <h2>Track List</h2>
        {useTrackListSwitch(albumName)}
      </div>
      <div className="album-link-container">
        <h2>Album Links</h2>
        {useAlbumLinkSwitch(albumName)}
      </div>
      <div className="video-container">
        <h2>Videos</h2>
        {useVideoSwitch(albumName)}
      </div>
    </div>
  );
}

export default AlbumPage;
