import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../containers/Home";
import Fotografia from "../containers/Fotografia";
import Audiovisual from "../containers/Audiovisual";

function App() {
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/fotografia" element={<Fotografia/>}></Route>
          <Route exact path="/audiovisual" element={<Audiovisual/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
