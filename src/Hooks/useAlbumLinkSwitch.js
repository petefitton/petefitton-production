import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './useAlbumLinkSwitch.css';

function useAlbumLinkSwitch(albumName) {
    switch(albumName) {
      case "The Starting of Something New":
        return (
          <ul className="album-link-list">
            <a href="https://petefitton.bandcamp.com/album/the-starting-of-something-new" aria-label="Bandcamp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faBandcamp} /></a>
            <a href="https://open.spotify.com/album/2ZJGSyp6c9KwZ4fR2dzxep" aria-label="Spotify" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faSpotify} /></a>
            <a href="https://music.youtube.com/playlist?list=OLAK5uy_l_1TZcntAr0yUHarkIQ51tcnmDga3Od2w&feature=shared" aria-label="YouTube Music" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faYoutube} /></a>
          </ul>
        );
      default:
        return (<></>);
    }
}

export default useAlbumLinkSwitch;