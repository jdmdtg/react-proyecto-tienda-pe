import { useContext } from "react";
import styles from "../components/Carrito.module.css";
import { CarritoContext } from "../context/CarritoContext";
import CartDash from "../assets/CartDash";
import BagIcon from "../assets/BagIcon";
import CartCheckFill from "../assets/CartCheckFill";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito, MsnCompletoLaCompra } =
    useContext(CarritoContext);
  const contadorEnCarrito = carrito.length;

  return (
    <div className="container">
      <div className="row">
        <h4 className="text-center">Carrito de Compras</h4>

        <div className="text-end">
          <div className="text-end">
            <button
              type="button"
              // className="btn btn-primary position-relative"
              className={styles.buttonRed}
              onClick={() => vaciarCarrito()}
              title="Vaciar Carrito"
            >
              <BagIcon />
               Vaciar el Carrito .  
            </button>
          </div>

          <div className="text-end my-2">
            {contadorEnCarrito > 0 && (
              <button
                type="button"
                // className="btn btn-Success position-relative"
                className={styles.buttonGreen}
                onClick={() => MsnCompletoLaCompra(vaciarCarrito())}
                title="Continuar la Compra"
              >
                <Link to={"/"}>
                  <CartCheckFill />
                </Link>
                Procesar el pago
              </button>
            )}
          </div>
        </div>

        {carrito.map((producto, indice) => (
          <div key={indice} className="card col-12 col-md4 col-lg-3">
            <img
              className="card-img-top img-fluid"
              src={producto.imagen}
              alt={producto.nombre}
            />

            <div className="card-body">
              <p className="card-title">
                {producto.nombre} : ${producto.precio}
              </p>
            </div>

            <button
              className={styles.buttonRed}
              onClick={() => eliminarDelCarrito(indice)}
              title="Eliminar del carrito."
            >
              <CartDash /> Eliminar del Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrito;
