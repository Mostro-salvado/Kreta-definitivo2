import React from 'react';
import "../assets/css/video.css"

export default function Video({ videoId }) {
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

