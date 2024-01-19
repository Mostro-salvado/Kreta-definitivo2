import React from 'react'
import "../assets/css/DetalleAudiovisual.css"



export default function DetalleAudiovisual({titulo,video,texto}) {
    return (
        <>
            <div className="container-audiovisual-detalle">
                <div className="titulo-audiovisual-detalle">
                    {titulo}
                </div>
                <div className="video-audiovisual-detalle">
                    {video}
                </div>
                <div className="texto-audiovisual-detalle">
                    <p>
                        {texto}
                    </p>
                </div>
            </div>
        </>
    )
}
