import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useLyricsSwitch from '../Hooks/useLyricsSwitch';
import useVideoSwitch from '../Hooks/useVideoSwitch';
import useURLParamToNameSwitch from '../Hooks/useURLParamToNameSwitch';
import { useSearchParams } from 'react-router-dom'
import './LyricsPage.css';

function LyricsPage() {
    const songNameUrl = useParams().song;
    const [songName] = useState(useURLParamToNameSwitch(songNameUrl));
    const [searchParams] = useSearchParams();
    const albumNameUrl = searchParams.get("album");
    const returnUrl = albumNameUrl === null ? `/music/${songNameUrl}` : `/music/${albumNameUrl}`;

    return (
        <div className="lyricspage-container pt-60">
            <div className="content-container">
                <Link to={returnUrl}>Back</Link>
                <h1>{songName}</h1>
                {useVideoSwitch(songName)}
                {useLyricsSwitch(songName)}
            </div>
        </div>
    );
}

export default LyricsPage;
