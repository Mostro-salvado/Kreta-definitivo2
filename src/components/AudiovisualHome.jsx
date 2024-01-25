import React, { useEffect, useState } from 'react';
import '../assets/css/AudiovisualHome.css';
import ShowAudiovisual from './ShowAudiovisual';

export default function AudiovisualHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 180;
      setIsVisible(scrollY > threshold);
    };

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 992) {
        setShow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Llamar a handleResize una vez al inicio para establecer el valor inicial de show

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    if (window.innerWidth <= 992) {
      setShow(!show); // Cambiar el valor de show solo en pantallas pequeñas al hacer clic
    }
  };

  return (
    <>
      <div className={`containerav ${isVisible ? 'visible blur-in-expand' : ''}`} onClick={handleClick}>
        <div className="audiovisual">
          <h2>Audiovisual</h2>
          <div>{show && <ShowAudiovisual></ShowAudiovisual>}</div>
        </div>
      </div>
    </>
  );
}
