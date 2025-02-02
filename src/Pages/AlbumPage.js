import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp, faSpotify, faSoundcloud, faInstagram, faYoutube, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './AlbumPage.css';

function AlbumPage() {
  const [albumName, setAlbumName] = useState();
  const urlParams = useParams().album;

  useEffect(() => {
    if (urlParams === "the-starting-of-something-new") {
      setAlbumName("The Starting of Something New")
    }
  }, [urlParams]);

  function bandcampSwitch(albumName) {
    switch(albumName) {
      case "The Starting of Something New":
        return (
          <iframe title="The Starting of Something New on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=4294119648/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/"><a href="https://wakefieldhamilton.bandcamp.com/album/untitled-album-demos">Untitled Album (Demos) by Wakefield Hamilton</a></iframe>
        );
      default:
        return (
          <h1>Invalid release name</h1>
        );
    }
  }

  function albumLinkSwitch(albumName) {
    switch(albumName) {
      case "The Starting of Something New":
        return (
          <>
            <h2>Album Links</h2>
            <ul className="album-link-list">
              <a href="https://wakefieldhamilton.bandcamp.com/album/untitled-album-demos" aria-label="Bandcamp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faBandcamp} /></a>
              <a href="https://open.spotify.com/album/2ZJGSyp6c9KwZ4fR2dzxep" aria-label="Spotify" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faSpotify} /></a>
              {/* Apple Music */}
              {/* iTunes */}
              {/* Amazon */}
              {/* below should be YouTube Music */}
              <a href="https://youtube.com/@PeteFittonMusic" aria-label="YouTube" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faYoutube} /></a>
              {/* Pandora */}
              {/* Deezer */}
              {/* Tidal */}
              {/* iHeartRadio */}
              <a href="https://soundcloud.com/Pete-Fitton" aria-label="SoundCloud" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faSoundcloud} /></a>
{/* TODO: add links above */}
            </ul>
          </>
        );
      default:
        return (<></>);
    }
  }

  function videoSwitch(albumName) {
    switch(albumName) {
      case "The Starting of Something New":
        return (
          <>
            <h2>Videos</h2>
            <iframe title="The Starting of Something New on YouTube" src="https://youtube.com/embed/dv6K294N7MI?feature=shared" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </>
        );
      default:
        return (<></>);
    }
  };

  return (
    <div className="albumpage-container pt-60">
      <h1 className="albumpage-title position-relative">{albumName}</h1>
      <div className="bandcamp-container">
        {bandcampSwitch(albumName)}
      </div>
      <div className="album-link-container">
        {albumLinkSwitch(albumName)}
      </div>
      <div className="video-container">
        {videoSwitch(albumName)}
      </div>
    </div>
  );
}

export default AlbumPage;
