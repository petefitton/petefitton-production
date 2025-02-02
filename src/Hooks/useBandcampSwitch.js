function useBandcampSwitch(albumName) {
    switch(albumName) {
        case "The Starting of Something New":
        return (
            <iframe title="The Starting of Something New on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=4294119648/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/"><a href="https://wakefieldhamilton.bandcamp.com/album/untitled-album-demos">Untitled Album (Demos) by Wakefield Hamilton</a></iframe>
        );
        default:
        return (
            <h1>Invalid release name</h1>
        );
    }
}

export default useBandcampSwitch;