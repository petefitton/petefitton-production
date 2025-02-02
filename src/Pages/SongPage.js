import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import './SongPage.css';
import useWaitForAssets from '../Hooks/useWaitForAssets';

function SongPage() {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  const [song, setSong] = useState({
    name: "",
    albumCoverImg: "",
    releaseDate: ""
  });
  const urlParams = useParams().song;
  const determineImageUrl = useCallback(() => `${PUBLIC_URL}${song.albumCoverImg}`, [PUBLIC_URL, song.albumCoverImg]);

  useEffect(() => {
    if (urlParams === "the-starting-of-something-new") {
      setSong({
        name: "The Starting of Something New",
        albumCoverImg: "/images/The_Starting_of_Something_New.jpg",
        releaseDate: "February 5, 2025"
      });
    }
    setImageUrl(determineImageUrl());
  }, [determineImageUrl, urlParams])

  const [imageUrl, setImageUrl] = useState(determineImageUrl());
  const imagesLoaded = useWaitForAssets([imageUrl]);

  return (
    <>
      {imagesLoaded ?
      <div className="songpage-container pt-100">
        <h2 className="song-title position-relative">{song.name}</h2>
        <div className="song-image-container">
          <img src={imageUrl} alt={`${song.name} Album Cover`} className="album-cover-image" />
        </div>
        <p className="release-text position-relative">Release date:</p>
        <p className="release-text position-relative">{song.releaseDate}</p>
        {/* TODO: add links for Bandcamp, Spotify, Apple Music, iTunes, Amazon, YouTube Music?, Pandora?, Deezer?, Tidal?, iHeartRadio?, SoundCloud? */}
        {/* lyrics and YouTube links */}
      </div>
      :
      <></>}
    </>
  );
}

export default SongPage;
