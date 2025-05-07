import { Link } from 'react-router-dom';

function useTrackListSwitch(albumName) {
  switch(albumName) {
    case "Atone":
      return (
        <>
          <p>1. Atone <Link to="/lyrics/atone?album=atone">Lyrics</Link></p>
          <p>2. Oceans <Link to="/lyrics/oceans?album=atone">Lyrics</Link></p>
          <p>3. Refrain <Link to="/lyrics/refrain?album=atone">Lyrics</Link></p>
          <p>4. The Starting of Something New <Link to="/lyrics/the-starting-of-something-new?album=atone">Lyrics</Link></p>
        </>
      );
    case "Oceans":
      return (
        <>
          <p>1. Oceans <Link to="/lyrics/oceans?album=oceans">Lyrics</Link></p>
          <p>2. Refrain <Link to="/lyrics/refrain?album=oceans">Lyrics</Link></p>
          <p>3. The Starting of Something New <Link to="/lyrics/the-starting-of-something-new?album=oceans">Lyrics</Link></p>
        </>
      );
    case "Refrain":
      return (
        <>
          <p>1. Refrain <Link to="/lyrics/refrain?album=refrain">Lyrics</Link></p>
          <p>2. The Starting of Something New <Link to="/lyrics/the-starting-of-something-new?album=refrain">Lyrics</Link></p>
        </>
      );
    case "The Starting of Something New":
      return (
        <>
          <p>1. The Starting of Something New <Link to="/lyrics/the-starting-of-something-new?album=the-starting-of-something-new">Lyrics</Link></p>
        </>
      );
    default:
      return ([]);
  }
};

export default useTrackListSwitch;