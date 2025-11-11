import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { usuario } = useAuthContext();
  const esAdmin = usuario === "admin";

  return (
    <nav>
      <ul className={styles.lista}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            {" "}
            Home
          </Link>
          <Link to="/Fashion" className={styles.link}>
            {" "}
            Fashion{" "}
          </Link>
          <Link to="/Hotsale" className={styles.link}>
            {" "}
            HotSale{" "}
          </Link>
          <Link to="/Contactos" className={styles.link}>
            {" "}
            Contacts{" "}
          </Link>
          {esAdmin && (
            <Link to="/admin" className={styles.link}>
              {" "}
              Admin{" "}
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
