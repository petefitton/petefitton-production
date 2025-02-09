import { Link } from 'react-router-dom';

function useTrackListSwitch(albumName) {
    switch(albumName) {
      case "The Starting of Something New":
        return (
            <>
                <p><Link to="/lyrics/the-starting-of-something-new">1. The Starting of Something New</Link></p>
            </>
        )
      default:
        return ([]);
    }
};

export default useTrackListSwitch;