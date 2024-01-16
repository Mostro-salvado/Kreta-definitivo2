import "../assets/css/Llamado.css"
import {Link} from 'react-router-dom'

export default function llamado() {
    return (
        <>
            <div className="container-llamado">
                <p className="texto-llamado">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sapiente eveniet enim aliquid illo, non laboriosam harum, vitae at reiciendis et eos? Accusantium, quam. Voluptates sit dignissimos excepturi nostrum sequi?
                </p>
                <Link to='/formulario' className="Link-Contactanos">Contactános</Link>
            </div>
        </>
    )
}
