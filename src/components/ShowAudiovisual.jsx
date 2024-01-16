import { Link } from "react-router-dom";
import "../assets/css/ShowAudiovisual.css"


export default function ShowAudiovisual() {
    return (
        <>
            <div className="oculto">
                <p className="texto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat temporibus inventore molestiae esse itaque. Maxime tempore, temporibus dolorum voluptatum, voluptatibus magnam sit necessitatibus beatae, eius ea qui fugit ducimus reiciendis.
                </p>
                <Link className="vermas" to="/audiovisual">Ver +</Link>
            </div>
        </>
    )
}
