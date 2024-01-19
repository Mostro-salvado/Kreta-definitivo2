import "../assets/css/Ubicacion.css"
import ubicacion from '../assets/statics/Ubicacion.png'
import { Link } from "react-router-dom"

export default function Ubicacion() {
    return (
        <>
            <div className="ubicacion-wraper">
                <p className="texto-descripcion">
                Las oficinas de Kreta funciona en Teras, un espacio cultural y muldisciplinario de Cooperativa Archipiélago que reúne a trabajadores de la cultura de la ciudad.
                </p>
                <div className="titulo-ubicacion">Nos encontrás acá</div>
                <div className="direccion">Cochabamba 1054 - Rosario, Santa Fe S2000, AR</div>
                <a
                    href="https://www.google.com/maps/place/Cochabamba%2B1054,%2BS2000DWF%2BRosario,%2BSanta%2BFe,%2BArgentina"
                    className="comollegar"
                    target="_blank"
                    rel="noopener noreferrer">Cómo llegar
                </a>
            </div>
            <div className="mapa">
                <img src={ubicacion} alt="" className="mapa" />
            </div>
        </>
    )
}
