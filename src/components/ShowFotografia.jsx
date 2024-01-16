import { Link } from "react-router-dom";
import "../assets/css/ShowFotografia.css"


export default function ShowFotografia() {
    return (
        <>
            <div className="oculto">
                <p className="texto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat temporibus inventore molestiae esse itaque. Maxime tempore, temporibus dolorum voluptatum, voluptatibus magnam sit necessitatibus beatae, eius ea qui fugit ducimus reiciendis.
                </p>
                <Link className="vermas" to="/fotografia">Ver +</Link>
            </div>
        </>
    )
}
