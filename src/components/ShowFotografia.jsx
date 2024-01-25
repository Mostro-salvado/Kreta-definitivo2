import { Link } from "react-router-dom";
import "../assets/css/ShowFotografia.css"


export default function ShowFotografia() {
    return (
        <>
            <div className="oculto">
                <p className="texto">
                    Instucionales, áereas, de producto y publicitarias. Nuestros fotógrafos son todoterreno y están listos para hacer clic en el momento justo. ¡Mirá nuestro portfolio! 
                    <br />
                    <br />
                </p>
                <Link className="vermas" to="/fotografia">Ver +</Link>
            </div>
        </>
    )
}
