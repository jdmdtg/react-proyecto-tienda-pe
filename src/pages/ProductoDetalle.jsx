import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../components/Carrito.module.css";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [products, setProducto] = useState(null);

  useEffect(() => {
    fetch(
      `https://6904e0af6b8dabde496575fb.mockapi.io/tienda_proyecto_final_react_jgm/productos/${id}`
    )
      .then((respuesta) => respuesta.json())
      .then((dato) => setProducto(dato));
  }, [id]);

  if (!products) return <p>Cargando ......</p>;

  return (
    <>
      <h3>Detalles del Producto Nro. {id}</h3>
      <div className="card col col-md-4 mb-4">
        <img
          className={styles.imagen}
          src={products.imagen}
          alt={products.nombre}
          width={100}
          height={100}
        />
        <div className="card col-md-auto">
          <h3>Nombre:{products.nombre}</h3>
          <h4>Descripción: {products.descripcion}</h4>
          <h4>Precio:${products.precio}</h4>
          <h4>Existencia:{products.cantidad}</h4>
        </div>
      </div>
    </>
  );
};

export default ProductoDetalle;
