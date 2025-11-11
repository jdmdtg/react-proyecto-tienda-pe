import { useContext } from "react";
import NavBar from "./Navbar";
import styles from "../components/Header.module.css";
import BagIcon from "../assets/bag-icon.svg";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { CarritoContext } from "../context/CarritoContext";

const Header = () => {
  const { carrito } = useContext(CarritoContext);
  const { usuario, logout } = useAuthContext();
  const estaLogueado = !!usuario;
  const contadorEnCarrito = carrito.length;

  return (
    <header className={styles.Header}>
      <div className={styles.logo}>PE Store</div>
      <div className={styles.navbarContainer}>
        <h2>Vistual Store</h2>
      </div>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
      <div className={styles.iconsContainer}>
        {estaLogueado ? (
          <button onClick={logout} className={styles.login}>
            Cerrar Sesión
          </button>
        ) : (
          <Link to="/login">
            <button className={styles.login}>Iniciar Sesión</button>
          </Link>
        )}
        <div className={styles.iconoDeCarrito}>
          <link to="/carrito">
            <BagIcon className={styles.Icono} />
            {contadorEnCarrito > 0 && (
              <span className={styles.contadorCarrito}>
                {contadorEnCarrito}
              </span>
            )}
          </link>
        </div>
      </div>
    </header>
  );
};

export default Header;
