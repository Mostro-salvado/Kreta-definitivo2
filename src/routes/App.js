import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Fotografia from "../containers/Fotografia";
import Audiovisual from "../containers/Audiovisual";
import Layout from "../components/Layout";
import Formulario from "../components/Formulario";

function bloquearGoogleTranslate() {
  if (window.google && window.google.translate) {
    window.google.translate.Element.hideWidget();
    window.google.translate.TranslateService.disableAutoTranslation();
  }
}

function bloquearMenuContextual(e) {
  //e.preventDefault(); // Evita que el menú contextual se abra
}

function App() {
  // Usamos useEffect para ejecutar la función de bloqueo cuando el componente se monta
  useEffect(() => {
    bloquearGoogleTranslate();
    // Agregamos el controlador de eventos para el menú contextual
    document.addEventListener('contextmenu', bloquearMenuContextual);
    return () => {
      // Removemos el controlador de eventos cuando el componente se desmonta
      document.removeEventListener('contextmenu', bloquearMenuContextual);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/fotografia" element={<Fotografia/>}></Route>
            <Route exact path="/audiovisual" element={<Audiovisual/>}></Route>
            <Route exact path="/formulario" element={<Formulario/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
