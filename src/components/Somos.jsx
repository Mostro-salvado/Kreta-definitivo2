import "../assets/css/Somos.css";
import SomosCard from "../components/SomosCard";
import staff from '../dataStaff';

export default function Somos() {
    const staffList = staff.map(persona => (
        <SomosCard nombre={persona.nombre} descripcion={persona.descripcion} imagen={persona.imagen} />
    ));

    // Dividir la lista de bios en dos partes
    const halfLength = Math.ceil(staffList.length / 2);
    const firstColumn = staffList.slice(0, halfLength);
    const secondColumn = staffList.slice(halfLength);

    return (
        <>
            <div className="container-somos" id="Somos-Kreta">
                <h1 className="titulo">Somos Kreta</h1>
                <div className="container-bio">
                    <div className="bio">
                        {/* Renderizar la primera columna */}
                        <div className="column">
                            {firstColumn}
                        </div>
                        {/* Renderizar la segunda columna */}
                        <div className="column">
                            {secondColumn}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
