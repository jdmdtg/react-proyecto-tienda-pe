import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Carrito from "./components/Carrito";
import RutaProtegida from "./components/RutaProtegida";
import Admin from "./components/Admin";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Contactos from "./pages/Contactos";
import VentaCaliente from "./pages/VentaCaliente";
import Moda from "./pages/Moda";
import ProductoDetalle from "./pages/ProductoDetalle";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Moda" element={<Moda />} />
        <Route path="/VentaCaliente" element={<VentaCaliente />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/products/:id" element={<ProductoDetalle />} />
        <Route
          path="/carrito"
          element={
            <RutaProtegida>
              <Carrito />
            </RutaProtegida>
          }
        />
        <Route
          path="/Admin"
          element={
            <RutaProtegida>
              <Admin />
            </RutaProtegida>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
