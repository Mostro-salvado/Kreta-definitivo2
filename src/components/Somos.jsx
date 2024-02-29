import "../assets/css/Somos.css";
import SomosCard from "../components/SomosCard";
import staff from '../dataStaff';

export default function Somos() {
    const staffList = staff.map(persona => (
        <SomosCard key={persona.id} nombre={persona.nombre} descripcion={persona.descripcion} imagen={persona.imagen} />
    ));

    // Dividir la lista de bios en dos partes
    const halfLength = Math.ceil(staffList.length / 2);
    const firstColumn = staffList.slice(0, halfLength);
    const secondColumn = staffList.slice(halfLength);

    return (
        <>
            <div className="container-somos" >
                <h1 className="titulo" id="Somos-Kreta" lang="en">Somos KRETA</h1>
                <div className="container-bio">
                    <div className="bio">
                        {/* Renderizar la primera columna */}
                        <div className="column1">
                            {firstColumn.map((element, index) => (
                                <div key={index}>{element}</div>
                            ))}
                        </div>
                        {/* Renderizar la segunda columna */}
                        <div className="column1">
                            {secondColumn.map((element, index) => (
                                <div key={index}>{element}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
