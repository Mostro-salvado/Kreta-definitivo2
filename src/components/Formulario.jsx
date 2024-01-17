import "../assets/css/Formulario.css"
import { useState } from "react";

export default function Formulario() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí puedes realizar alguna acción con los datos del formulario, por ejemplo, enviarlos a un servidor.

        // Luego puedes limpiar los campos del formulario si es necesario
        setNombre('');
        setCorreo('');
        setMensaje('');
    }



    return (
        <> 
            <div className="wraper-contacto">
                <div className="titulo-contacto">Estás listo para contactarnos?</div>
                <form onSubmit={handleSubmit} className="formulario">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />

                    <label htmlFor="correo">Correo:</label>
                    <input
                        type="email"
                        id="correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />

                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        id="mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        required
                    ></textarea>

                    <button type="submit" className="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}
