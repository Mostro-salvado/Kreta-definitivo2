import "../assets/css/Ubicacion.css"
import MapaInteractivo from "../components/MapaInteractivo"
import { Link } from 'react-router-dom';

export default function Ubicacion() {
    return (
        <>
            <div className="ubicacion-wraper">
                <p className="texto-descripcion">
                Las oficinas de KRETA funciona en <Link to="https://www.instagram.com/teras.ok/?hl=es" className="teras-link" target="_blank">Teras</Link>, un espacio cultural y multidisciplinario de Cooperativa Archipiélago que reúne a trabajadores de la cultura de la ciudad.
                </p>
                <div className="titulo-ubicacion">Nos encontrás acá</div>
                <div className="direccion">Cochabamba 1054 - Rosario, Santa Fe S2000, AR</div>
            </div>
            <div className="mapa">
                <MapaInteractivo></MapaInteractivo>
            </div>
        </>
    )
}
