import React from 'react'
import "../assets/css/DetalleAudiovisual.css"



export default function DetalleAudiovisual({titulo,video,texto,key}) {
    return (
        <>
            <div className={`container-audiovisual-detalle ${titulo}`}>
                <div className="titulo-audiovisual-detalle">
                    {titulo}
                </div>
                <div className="video-audiovisual-detalle">
                <video width="750" height="500" controls className="video-audiovisual-detalle" >
                    <source src={video} type="video/mp4"/>
                </video>
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
