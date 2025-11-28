import { Link } from "react-router-dom";
// import styles from "./Navbar.module.css";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { usuario } = useAuthContext();
  // const esAdmin = usuario === "admin";
  const usuarioLogueado = usuario;




  return (
    <nav
      className="
        navbar
        text-center fs-3
        navbar-expand-lg
        bg-info
        navbar-light
        p-1
        md-3

      "
    >
      <div class="d-flex- align-items-center container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <h5 className="nav-link fw-bold link-dark">PF Tienda Virtual</h5>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Moda" className="nav-link">
                Moda
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/VentaCaliente" className="nav-link">
                Venta Caliente
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contactos" className="nav-link">
                Contactos
              </Link>
            </li>
            <li className="nav-item">
              {usuarioLogueado === "admin" && (
                <Link to="/Admin" className="nav-link">
                  Administrador
                  <h6 className="text-center">(Jose Medina)</h6>
                </Link>
              )}
            </li>
            <li className="nav-item">
              {usuarioLogueado === "usuario" && (
                <Link to="/" className="nav-link">
                  "Bienvenido"
                  <h6 className="text-center">(Cliente)</h6>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
