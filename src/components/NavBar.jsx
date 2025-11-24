import { Link } from "react-router-dom";
// import styles from "./Navbar.module.css";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { usuario } = useAuthContext();
  const esAdmin = usuario === "admin";

  return (
    <nav
      className="navbar 
      text-center fs-4
      navbar-expand-lg
      bg-info
      navbar-light     
      p-1
      md-3
      "
    >
      <div class="d-flex- align-items-center container-fluid">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
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
              {esAdmin && (
                <Link to="/Admin" className="nav-link">
                  Administrador
                  <h6 className="text-center">(Jose Medina)</h6>
                </Link>
              )}
            </li>
          </ul>
          {/* barra de busqueda */}
          <form className="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
