import React from 'react'
import "../assets/css/SomoCard.css"
import { useState } from 'react'


export default function SomosCard({nombre,descripcion,imagen}) {
    const [show,setShow]=useState(false)
    const handleClick = () => {
        setShow(!show)
        console.log(show)
    };

    return (
        <>
            <div className="wraper-card">
                <div className="somosCard-container" onClick={handleClick}>
                    <img src={imagen} alt="" className="imagen" />
                    <div className="nombre">
                        {nombre}
                    </div>
                </div>
                <div>
                    {show ? <div className="descripcion">{descripcion}</div> : ""}
                </div>
            </div>
        </>
    )
}
