import { Link } from "react-router-dom";
import "../assets/css/ShowAudiovisual.css"


export default function ShowAudiovisual() {
    return (
        <>
            <div className="oculto">
            <p className="texto">
                Spots, campañas, coberturas, publicidades y videos institucionales.<br />En Kreta contamos con un equipo audiovisual completo para suplir las necesidades de tu empresa, tu negocio o tu cliente.<br /> ¡Mirá nuestro portfolio!
            </p>
                <Link className="vermas" to="/audiovisual">Ver +</Link>
            </div>
        </>
    )
}
