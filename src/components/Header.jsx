import { useContext } from "react";
import NavBar from "./NavBar";


// import styles from "../components/Header.module.css";
import BagIcon from "../assets/BagIcon";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { CarritoContext } from "../context/CarritoContext";

const Header = () => {
  const { carrito } = useContext(CarritoContext);
  const { usuario, logout } = useAuthContext();
  const estaLogueado = !!usuario;
  const contadorEnCarrito = carrito.length;

  return (
    <div className="bg-info p-1 d-flex justify-content-center mb-2">
      <header className="d-flex justify-content-around">
        {/* <div >PF Tienda</div> */}
        <div>
          <NavBar />
        </div>
        {/* <div className="d-flex accordion-body-justify-content-end align-items-center p-2 d-md-flex"> */}
        <div>
          <div className="p-2">
            {estaLogueado ? (
              <button onClick={logout} className="btn btn-outline-danger">
                Cerrar Sesión
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline-primary mt-3">
                  Iniciar Sesión
                </button>
              </Link>
            )}
          </div>
          <div className="d-flex-align-items-center justify-content-end">
            <Link to="/carrito">
              <BagIcon />
              {contadorEnCarrito > 0 && <span>{contadorEnCarrito}</span>}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
