import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp, faSpotify, faSoundcloud, faYoutube } from '@fortawesome/free-brands-svg-icons';

function useAlbumLinkSwitch(albumName) {
    switch(albumName) {
      case "The Starting of Something New":
        return (
          <>
            <h2>Album Links</h2>
            <ul className="album-link-list">
              <a href="https://petefitton.bandcamp.com/album/the-starting-of-something-new" aria-label="Bandcamp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faBandcamp} /></a>
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

export default useAlbumLinkSwitch;