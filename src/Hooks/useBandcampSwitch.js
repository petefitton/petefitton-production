function useBandcampSwitch(albumName) {
    switch(albumName) {
        case "EPK":
            return (
                <iframe title="Sunset|Sunrise on Bandcamp" className="h-207" src="https://bandcamp.com/EmbeddedPlayer/album=720947915/size=large/bgcol=333333/linkcol=0687f5/artwork=small/transparent=true/"><a href="https://petefitton.bandcamp.com/album/sunset-sunrise">Sunset|Sunrise by Pete Fitton</a></iframe>
            )
        case "Bandcamp":
            return (
                <iframe title="Sunset|Sunrise on Bandcamp" className="h-207" src="https://bandcamp.com/EmbeddedPlayer/album=720947915/size=large/bgcol=333333/linkcol=0687f5/artwork=small/transparent=true/"><a href="https://petefitton.bandcamp.com/album/sunset-sunrise">Sunset|Sunrise by Pete Fitton</a></iframe>
            );
        case "Sunset|Sunrise":
            return (
                <iframe title="Sunset|Sunrise on Bandcamp" className="h-207" src="https://bandcamp.com/EmbeddedPlayer/album=720947915/size=large/bgcol=333333/linkcol=0687f5/artwork=small/transparent=true/"><a href="https://petefitton.bandcamp.com/album/sunset-sunrise">Sunset|Sunrise by Pete Fitton</a></iframe>
            );
        case "Changing":
            return (
                <iframe title="Changing on Bandcamp" className="h-207" src="https://bandcamp.com/EmbeddedPlayer/album=2790146746/size=large/bgcol=333333/linkcol=0687f5/artwork=small/transparent=true/"><a href="https://petefitton.bandcamp.com/album/changing">Changing by Pete Fitton</a></iframe>
            );
        case "Atone":
            return (
                <iframe title="Atone on Bandcamp" className="h-207" src="https://bandcamp.com/EmbeddedPlayer/album=3659915435/size=large/bgcol=333333/linkcol=0687f5/artwork=small/transparent=true/"><a href="https://petefitton.bandcamp.com/album/atone">Atone by Pete Fitton</a></iframe>
            );
        case "Oceans":
            return (
                <iframe title="Oceans on Bandcamp" className="h-207" src="https://bandcamp.com/EmbeddedPlayer/album=3017964786/size=large/bgcol=333333/linkcol=0687f5/artwork=small/transparent=true/"><a href="https://petefitton.bandcamp.com/album/oceans">Oceans by Pete Fitton</a></iframe>
            );
        case "Refrain":
            return (
                <iframe title="Refrain on Bandcamp" className="h-207" src="https://bandcamp.com/EmbeddedPlayer/album=2172687455/size=large/bgcol=333333/linkcol=0687f5/artwork=small/transparent=true/"><a href="https://petefitton.bandcamp.com/album/refrain">Refrain by Pete Fitton</a></iframe>
            );
        case "The Starting of Something New":
            return (
                <iframe title="The Starting of Something New on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=3333396897/size=large/bgcol=333333/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"><a href="https://petefitton.bandcamp.com/album/the-starting-of-something-new">The Starting of Something New by Pete Fitton</a></iframe>
            );
        default:
            return (
                <h1>Invalid release name</h1>
            );
    }
}

export default useBandcampSwitch;