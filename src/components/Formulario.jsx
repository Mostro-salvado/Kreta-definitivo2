import "../assets/css/Formulario.css"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Formulario() {
    const form = useRef();
    const [enviadoConExito, setEnviadoConExito] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9iuax6f', 'template_ishf48i', form.current, 'XRuyq49Q064sTIL4V')
            .then((result) => {
                console.log(result.text);
                setEnviadoConExito(true);
                form.current.reset(); // Otra opción si reset() no funciona
                // form.current.user_name.value = '';
                // form.current.user_email.value = '';
                // form.current.message.value = '';
            }, (error) => {
                console.log(error.text);
                setEnviadoConExito(false);
            });
    };

    return (
        <> 
            <div className="wraper-contacto">
                <div className="titulo-contacto">Estás listo para contactarnos?</div>
                {enviadoConExito && <div className="mensaje-exito">¡Mensaje enviado con éxito!</div>}
                <form ref={form} onSubmit={sendEmail} className="formulario">
                    <label>Nombre</label>
                    <input type="text" name="user_name" />
                    <label>Correo</label>
                    <input type="email" name="user_email" />
                    <label>Mensaje</label>
                    <textarea name="message" />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </>
    )
}
