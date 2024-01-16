import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../containers/Home";
import Fotografia from "../containers/Fotografia";
import Audiovisual from "../containers/Audiovisual";
import Layout from "../components/Layout";
import Formulario from "../components/Formulario"

function App() {
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
