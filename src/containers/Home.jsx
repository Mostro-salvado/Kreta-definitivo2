import React from 'react';
import "../assets/css/Home.css";
import Video from '../components/Video';
import AudiovisualHome from '../components/AudiovisualHome'

export default function Home() {
    const videoId = 'dbcc_1t0in4';

    return (
        <>
            <div className="video-container">
                <Video videoId={videoId} />
            </div>
            <div className="audiovisual-home">
                <AudiovisualHome></AudiovisualHome>
            </div>
        </>
    );
}
