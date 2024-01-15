// En tu componente AudiovisualHome.js
import React, { useEffect, useState } from 'react';
import '../assets/css/AudiovisualHome.css';
import { Link } from "react-router-dom";

export default function AudiovisualHome() {
  const [isVisible, setIsVisible] = useState(false);
  //const [visible , setVisible] = useState(false) aca manejaria el codigo de oculto

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 210; // Puedes ajustar este umbral según tus necesidades
      console.log("Scroll Y:", scrollY);

      // Cambiar la visibilidad del contenedor basado en la posición del scroll
      setIsVisible(scrollY > threshold);
    };

    // Agregar el evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Eliminar el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <div className={`containerav ${isVisible ? 'visible blur-in-expand' : ''}`}>
      <div className="audiovisual">
        <h2>Audiovisual</h2>
        <div className="oculto">
          <p className="texto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat temporibus inventore molestiae esse itaque. Maxime tempore, temporibus dolorum voluptatum, voluptatibus magnam sit necessitatibus beatae, eius ea qui fugit ducimus reiciendis.
          </p>
          <Link className="vermas" to="/audiovisual">Ver +</Link>
        </div>
      </div>
    </div>
  );
}
