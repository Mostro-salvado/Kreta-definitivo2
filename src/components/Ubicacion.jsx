import "../assets/css/Ubicacion.css"
import MapaInteractivo from "../components/MapaInteractivo"

export default function Ubicacion() {
    return (
        <>
            <div className="ubicacion-wraper">
                <p className="texto-descripcion">
                Las oficinas de Kreta funciona en Teras, un espacio cultural y muldisciplinario de Cooperativa Archipiélago que reúne a trabajadores de la cultura de la ciudad.
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
