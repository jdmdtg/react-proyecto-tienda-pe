import Header from "./components/Header";
import Home from "./pages/Home";
import Fashion from "./pages/Fashion";
import Contactos from "./pages/Contactos";
import ProductoDetalle from "./pages/ProductoDetalle";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HotSale from "./pages/Hotsale";

import Carrito from "./components/Carrito";
import RutaProtegida from "./components/RutaProtegida";
import Admin from "./components/Admin";
//import Tecnologia from './pages/Tecnologia';
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/Hotsale" element={<HotSale />} />
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
