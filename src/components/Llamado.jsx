import "../assets/css/Llamado.css"
import {Link} from 'react-router-dom'

export default function llamado() {
    return (
        <>
            <div className="container-llamado">
                <p className="texto-llamado">
                Somos una empresa dedicada a la producción, gestión y coordinación de contenidos digitales. Nos especializamos en la comunicación audiovisual con más de una década de experiencia en el mercado, trabajando juntos.
                </p>
                <Link to='/formulario' className="Link-Contactanos">Contactanos</Link>
            </div>
        </>
    )
}
