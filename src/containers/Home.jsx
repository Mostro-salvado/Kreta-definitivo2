import React from 'react';
import "../assets/css/Home.css";

export default function Home() {
    const videoId = 'dbcc_1t0in4';

    return (
        <div className="video-container">
            <iframe
            title="video"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&loop=1&rel=0`}
            frameBorder="0"
            allowFullScreen
            ></iframe>
        </div>
    );
}
