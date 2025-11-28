import styles from "../components/Carrito.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { useProductosContext } from "../context/ProductosContext";
import InfoSquareFill from "../assets/InfoSquareFill";
import CartPlus from "../assets/CartPlus";

const Productos = () => {
  const { productos, cargando, error } = useProductosContext();
  const { agregarAlCarrito } = useContext(CarritoContext);

  if (cargando) return "Cargando productos...";

  if (error) return error;

  return (
    <div className="container ">
      <div className="row ">
        {/* justify-content-md-center */}
        <h4 className="text-center">Lista de Productos</h4>
        {productos.map((producto) => (
          //row estaba dentro de classname
          <div className="card  col-12 col-md-4 col-lg-3">
            {/* card-titel */}
            <img
              // className={styles.imagen}
              className="card-img-top img-fluid"
              src={producto.imagen}
              alt="Producto"
            />

            {/* "Card" */}
            {/* <div className="card col-md-auto"> */}
            <div className="card-body  " key={producto.id}>
              <h5 className="card-title ">{producto.nombre}</h5>
              <h6 className="card-text ">
                Descripción: {producto.descripcion}
              </h6>
              <h5>Precio: ${producto.precio}</h5>
              <h6>Existencia: {producto.cantidad}</h6>
            </div>
            {/* boton sumar al carrito */}

            <button
              className={styles.buttonGreen}
              onClick={() => agregarAlCarrito(producto)}
              title="Agregar al Carrito"
            >
              <CartPlus /> Agregar Al Carrito
            </button>
            {/* boton detalles del producto */}
            <button className={styles.buttonDetalle}>
              <Link
                className="nav-link fw-bold link-dark"
                to={`/products/${producto.id}`}
                title="Detalles del Producto"
              >
                <InfoSquareFill /> Detalles
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
