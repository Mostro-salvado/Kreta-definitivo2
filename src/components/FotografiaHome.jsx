import "../assets/css/FotografiaHome.css"
import React, { useEffect, useState } from 'react'; 
import ShowFotografia from "./ShowFotografia";


export default function FotografiaHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [show,setShow]=useState(false)

  const handleClick = () => {
    setShow(!show)
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 250; 
      console.log("Scroll Y:", scrollY);

      // Cambiar la visibilidad del contenedor basado en la posición del scroll
      setIsVisible(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className={`containerav ${isVisible ? 'visible blur-in-expand' : ''}`} onClick={handleClick}>
      <div className="fotografia">
        <h2>Fotografía</h2>
        <div>{show && <ShowFotografia></ShowFotografia>}</div>
      </div>
    </div>
  );
}