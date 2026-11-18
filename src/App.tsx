import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;