import { useContext } from "react";
import styles from "../components/Carrito.module.css";
import { CarritoContext } from "../context/CarritoContext";

//const Carrito = ({ productosEnCarrito, productosEliminados }) => {
const Carrito = () => {
  const { productosEnCarrito, productosEliminados } =
    useContext(CarritoContext);

  return (
    <ul>
      <div>
        <li>
          <h2>Carrito</h2>
          {productosEnCarrito.map((producto, indice) => (
            <div key={indice}>
              <img
                src={producto.image}
                alt={producto.title}
                height={80}
                width={80}
              />
              <p>
                {" "}
                {producto.title} : {producto.price}${" "}
              </p>
              <button
                className={styles.buttonRed}
                onClick={() => productosEliminados(indice)}
              >
                Eliminate
              </button>
            </div>
          ))}
        </li>
      </div>
    </ul>
  );
};

export default Carrito;
