import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useLyricsSwitch from '../Hooks/useLyricsSwitch';
import useURLParamToNameSwitch from '../Hooks/useURLParamToNameSwitch';
import './LyricsPage.css';

function LyricsPage() {
    const urlParams = useParams().song;
    const [songName] = useState(useURLParamToNameSwitch(urlParams));

    return (
        <>
            <div className="lyricspage-container pt-60">
                <div className="content-container">
                    <h1>{songName}</h1>
                    {useLyricsSwitch(songName)}
                </div>
            </div>
        </>
    );
}

export default LyricsPage;
