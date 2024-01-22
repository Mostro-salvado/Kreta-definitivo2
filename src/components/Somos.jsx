import "../assets/css/Somos.css"
import SomosCard from "../components/SomosCard"
import staff from '../dataStaff'


export default function Somos() {
    const staffList= staff.map(persona => {
        return <SomosCard nombre={persona.nombre} descripcion={persona.descripcion} imagen={persona.imagen}/>
    })


    return (
        <>
            <div className="container-somos" id="Somos-Kreta">
                <h1 class="titulo">Somos Kreta</h1>
                <div class="container-bio">
                    <div class="bio">
                        {staffList}
                    </div>
                </div>
            </div>
        </>
    )
}

