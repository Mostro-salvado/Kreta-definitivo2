import React from 'react'
import "../assets/css/DetalleFotografia.css"

export default function DetalleFotografia({titulo,fotografia,texto}) {
    return (
        <>
            <div className={`container-fotografia-detalle ${titulo}`}>
                <div className="titulo-fotografia-detalle">
                    {titulo}
                </div>
                <div className="fotografia-detalle">
                    <img src={fotografia} alt="" className="foto" />
                </div>
                <div className="texto-fotografia-detalle">
                    <p>
                        {texto}
                    </p>
                </div>
            </div>
        </>
    )
}
