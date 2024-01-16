import React, { useEffect, useState } from 'react';
import '../assets/css/AudiovisualHome.css';
import ShowAudiovisual from './ShowAudiovisual';


export default function AudiovisualHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [show,setShow]=useState(false)

  const handleClick = () => {
    setShow(!show)
  };




  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 180; 
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
      <div className="audiovisual">
        <h2>Audiovisual</h2>
        <div>{show && <ShowAudiovisual></ShowAudiovisual>}</div>
      </div>
    </div>
  );
} 
