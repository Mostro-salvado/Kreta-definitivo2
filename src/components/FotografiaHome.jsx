import "../assets/css/FotografiaHome.css";
import React, { useEffect, useState } from 'react'; 
import ShowFotografia from "./ShowFotografia";

export default function FotografiaHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 250;
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

    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    if (window.innerWidth <= 992) {
      setShow(!show);
    }
  };

  return (
    <div className={`containerfo ${isVisible ? 'visible blur-in-expand' : ''}`} onClick={handleClick}>
      <div className="fotografia">
      <h2>Fotografía</h2>
        <div>{show && <ShowFotografia></ShowFotografia>}</div>
      </div>
    </div>
  );
}
