function useBandcampSwitch(albumName) {
    switch(albumName) {
        case "EPK":
            return (
                <iframe title="Refrain on Bandcamp" className="h-207" src="https://bandcamp.com/EmbeddedPlayer/album=2172687455/size=large/bgcol=333333/linkcol=0687f5/artwork=small/transparent=true/"><a href="https://petefitton.bandcamp.com/album/refrain">Refrain by Pete Fitton</a></iframe>
            )
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