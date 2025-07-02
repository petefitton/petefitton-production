import { Link } from 'react-router-dom';

function useTrackListSwitch(albumName) {
  switch(albumName) {
    case "Sunset|Sunrise":
      return (
        <>
          <p>1. Sunset <Link to="/lyrics/sunset?album=sunset-sunrise">Lyrics</Link></p>
          <p>2. Changing <Link to="/lyrics/changing?album=sunset-sunrise">Lyrics</Link></p>
          <p>3. Atone <Link to="/lyrics/atone?album=sunset-sunrise">Lyrics</Link></p>
          <p>4. Beyond <Link to="/lyrics/beyond?album=sunset-sunrise">Lyrics</Link></p>
          <p>5. Oceans <Link to="/lyrics/oceans?album=sunset-sunrise">Lyrics</Link></p>
          <p>6. Sown <Link to="/lyrics/sown?album=sunset-sunrise">Lyrics</Link></p>
          <p>7. Sunrise <Link to="/lyrics/sunrise?album=sunset-sunrise">Lyrics</Link></p>
          <p>8. The Starting of Something New <Link to="/lyrics/the-starting-of-something-new?album=sunset-sunrise">Lyrics</Link></p>
          <p>9. Eternity <Link to="/lyrics/eternity?album=sunset-sunrise">Lyrics</Link></p>
          <p>10. Respond <Link to="/lyrics/respond?album=sunset-sunrise">Lyrics</Link></p>
          <p>11. Lava <Link to="/lyrics/lava?album=sunset-sunrise">Lyrics</Link></p>
          <p>12. Refrain <Link to="/lyrics/refrain?album=sunset-sunrise">Lyrics</Link></p>
        </>
      );
    case "Changing":
      return (
        <>
          <p>1. Changing <Link to="/lyrics/changing?album=changing">Lyrics</Link></p>
          <p>2. Atone <Link to="/lyrics/atone?album=changing">Lyrics</Link></p>
          <p>3. Oceans <Link to="/lyrics/oceans?album=changing">Lyrics</Link></p>
          <p>4. Refrain <Link to="/lyrics/refrain?album=changing">Lyrics</Link></p>
          <p>5. The Starting of Something New <Link to="/lyrics/the-starting-of-something-new?album=changing">Lyrics</Link></p>
        </>
      );
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