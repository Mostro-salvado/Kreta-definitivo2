import React from 'react'
import "../assets/css/DetalleAudiovisual.css"
import ReactPlayer from 'react-player'




export default function DetalleAudiovisual({titulo,video,texto}) {
    return (
        <>
            <div className={`container-audiovisual-detalle ${titulo}`}>
                
                <div className={`wraper-audiovisual ${titulo }`}>
                    <div className={`video-audiovisual-detalle ${titulo }`}>
                        <ReactPlayer url={video} width="750" height="500" controls light=""/>
                    </div>
                    <div className={`texto-audiovisual-detalle`}>
                        <div className="titulo-audiovisual-detalle">
                            {titulo}
                        </div>
                        <p>
                            {texto}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
