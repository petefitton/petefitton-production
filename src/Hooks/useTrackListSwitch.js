import { Link } from 'react-router-dom';

function useTrackListSwitch(albumName) {
    switch(albumName) {
      case "The Starting of Something New":
        return (
            <>
                <p>1. The Starting of Something New <Link to="/lyrics/the-starting-of-something-new">Lyrics</Link></p>
            </>
        )
      default:
        return ([]);
    }
};

export default useTrackListSwitch;