import React from 'react'
import "../assets/css/DetalleFotografia.css"

export default function DetalleFotografia({titulo,fotografia,texto}) {
    return (
        <>
            <div className={`container-fotografia-detalle ${titulo}`}>
                
                <div className="fotografia-detalle">
                    <img src={fotografia} alt="" className={`foto ${titulo}`}/>
                </div>
                <div className="container-texto-fotografia">
                    <div className="titulo-fotografia-detalle">
                        {titulo}
                    </div>
                    <div className="texto-fotografia-detalle" >
                        <p>
                            {texto}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
