function useBandcampSwitch(albumName) {
    switch(albumName) {
        case "The Starting of Something New":
        return (
            <iframe title="The Starting of Something New on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=3333396897/size=large/bgcol=333333/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"><a href="https://petefitton.bandcamp.com/album/the-starting-of-something-new">The Starting of Something New by Pete Fitton</a></iframe>
            // <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3333396897/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://petefitton.bandcamp.com/album/the-starting-of-something-new">The Starting of Something New by Pete Fitton</a></iframe>
        );
        default:
        return (
            <h1>Invalid release name</h1>
        );
    }
}

export default useBandcampSwitch;