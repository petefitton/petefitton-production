import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './useAlbumLinkSwitch.css';

function useAlbumLinkSwitch(albumName) {
    switch(albumName) {
      case "Changing":
        return (
          <ul className="album-link-list">
            <a href="https://petefitton.bandcamp.com/album/changing" aria-label="Bandcamp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faBandcamp} /></a>
            <a href="https://open.spotify.com/album/4qOKdF9cWch0lfgANINPhR" aria-label="Spotify" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faSpotify} /></a>
            <a href="https://www.youtube.com/watch?v=IVq5CWDdtjI&list=PLTOeybonAABPE8l9Gbgf9QBSdIGjsHIRN&index=1" aria-label="YouTube" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faYoutube} /></a>
          </ul>
        );
      case "Atone":
        return (
          <ul className="album-link-list">
            <a href="https://petefitton.bandcamp.com/album/atone" aria-label="Bandcamp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faBandcamp} /></a>
            <a href="https://open.spotify.com/album/5NAiIq4CAnGncWzDBz8nvQ" aria-label="Spotify" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faSpotify} /></a>
            <a href="https://www.youtube.com/watch?v=_gielWa0NUY&list=PLTOeybonAABPE8l9Gbgf9QBSdIGjsHIRN&index=2" aria-label="YouTube" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faYoutube} /></a>
          </ul>
        );
      case "Oceans":
        return (
          <ul className="album-link-list">
            <a href="https://petefitton.bandcamp.com/album/oceans" aria-label="Bandcamp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faBandcamp} /></a>
            <a href="https://open.spotify.com/album/60fpoxpVC7RiUCH5DRmtn1" aria-label="Spotify" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faSpotify} /></a>
            <a href="https://www.youtube.com/watch?v=f8LZhZfI_Bs&list=PLTOeybonAABPE8l9Gbgf9QBSdIGjsHIRN&index=3" aria-label="YouTube" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faYoutube} /></a>
          </ul>
        );
      case "Refrain":
        return (
          <ul className="album-link-list">
            <a href="https://petefitton.bandcamp.com/album/refrain" aria-label="Bandcamp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faBandcamp} /></a>
            <a href="https://open.spotify.com/album/0rgEMVyfKX6tnam8wPnkH8" aria-label="Spotify" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faSpotify} /></a>
            <a href="https://www.youtube.com/watch?v=_bDx7riZR2k&list=PLTOeybonAABPE8l9Gbgf9QBSdIGjsHIRN&index=4" aria-label="YouTube" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faYoutube} /></a>
          </ul>
        );
      case "The Starting of Something New":
        return (
          <ul className="album-link-list">
            <a href="https://petefitton.bandcamp.com/album/the-starting-of-something-new" aria-label="Bandcamp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faBandcamp} /></a>
            <a href="https://open.spotify.com/album/2ZJGSyp6c9KwZ4fR2dzxep" aria-label="Spotify" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faSpotify} /></a>
            <a href="https://www.youtube.com/watch?v=yBPHxgmT0JI&list=PLTOeybonAABPE8l9Gbgf9QBSdIGjsHIRN&index=5" aria-label="YouTube" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-large" icon={faYoutube} /></a>
          </ul>
        );
      default:
        return (<></>);
    }
}

export default useAlbumLinkSwitch;