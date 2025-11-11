import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../components/Carrito.module.css";
import { CarritoContext } from "../context/CarritoContext";

//const Productos = ({ agregarProducto }) => {
const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // usa el contexto del carrito para obtener la función agregarProducto
  const { agregarAlCarrito } = useContext(CarritoContext);
  // const { agregarProducto } = useContext(CarritoContext);

  //  const URL = 'https://fakestoreapi.com/products'; reemplazamos por la mockAPI
  const URL =
    "https://6904e0af6b8dabde496575fb.mockapi.io/tienda_proyecto_final_react_jgm/productos";

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => setProductos(datos))
      //.then((datos) => {setProductos(datos);setCargando(false);})
      .catch((error) => setError("Error al cargar productos"))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando productos...</p>;

  if (error) return error;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {productos.map((producto) => (
          <div>
            <li key={producto.id}>
              <img src={producto.image} height={150} width={150} />
              <table>
                <tr>
                  <td>
                    <button
                      className={styles.buttonGreen}
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      Add Cart
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonDetalle}>
                      <Link to={`/products/${producto.id}`}>
                        Products Details
                      </Link>
                    </button>
                  </td>
                </tr>
              </table>
              <h4>{producto.category}</h4>
              <h4>{producto.title}</h4>
              <h4>{producto.price}$</h4>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
