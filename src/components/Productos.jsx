import styles from "../components/Carrito.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { useProductosContext } from "../context/ProductosContext";

const Productos = () => {
  const { productos, cargando, error } = useProductosContext();
  const { agregarAlCarrito } = useContext(CarritoContext);

  if (cargando) return "Cargando productos...";

  if (error) return error;

  return (
    <div className="container text-center">
      <div className="row card-body">
        {/* justify-content-md-center */}
        <h4>Lista de Productos</h4>
        {productos.map((producto) => (
          //row estaba dentro de classname
          <div className="col col-md-4 mb-4 card-title">
            <img
              className={styles.imagen}
              src={producto.imagen}
              alt="Producto"
            />
            <div key={producto.id}>
              {/* "Card" */}
              <div className="card col-md-auto">
                <h5 className="card-title col-md-auto">{producto.nombre}</h5>
                <h6 className="card-text col-md-auto">
                  Descripción: {producto.descripcion}
                </h6>
                <h5>Precio: ${producto.precio}</h5>
                <h6>Existencia: {producto.cantidad}</h6>
              </div>
              {/* boton sumar al carrito */}
              <button
                className={styles.buttonGreen}
                onClick={() => agregarAlCarrito(producto)}
              >
                Agregar al Carrito
              </button>
              {/* boton detalles del producto */}
              <button className={styles.buttonDetalle}>
                <Link
                  className="nav-link fw-bold link-dark"
                  to={`/products/${producto.id}`}
                >
                  Detalles del Producto
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;

// ------------segunda versión
// import { useContext } from "react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styles from "../components/Carrito.module.css";
// import { CarritoContext } from "../context/CarritoContext";

// //const Productos = ({ agregarProducto }) => {
// const Productos = () => {
//   const [productos, setProductos] = useState([]);
//   const [cargando, setCargando] = useState(true);
//   const [error, setError] = useState(null);

//   // usa el contexto del carrito para obtener la función agregarProducto
//   const { agregarAlCarrito } = useContext(CarritoContext);

//   //  const URL = 'https://fakestoreapi.com/products'; reemplazamos por la mockAPI (api improvisada para pruebas)
//   const URL =
//     "https://6904e0af6b8dabde496575fb.mockapi.io/tienda_proyecto_final_react_jgm/productos";

//   useEffect(() => {
//     fetch(URL)
//       .then((respuesta) => respuesta.json())
//       .then((datos) => setProductos(datos))
//       .catch((error) => setError("Error al cargar productos." + error.message))
//       .finally(() => setCargando(false));
//   }, []);

//   if (cargando) return <p>Cargando productos...</p>;

//   if (error) return error;

//   return (
//     <div >
//       {/* <h2>Productos</h2> */}
//       {productos.map((producto) => (
//         //row estaba dentro de classname
//         <div >
//           <img
//             src={producto.imagen}
//             //"card-img-top img-fluid"
//
//             alt="Producto"
//           />

//           <div >
//             {/* "Card" */}
//             <div >
//               <li key={producto.id}>
//                 {/* <div className="card-body"> */}
//                 <div >
//                   {/* <h5 className="card-title">Nombre: {producto.nombre}</h5> */}
//                   <h5 >Nombre: {producto.nombre}</h5>
//                   {/* <h6 className="card-text"> */}
//                   <h6 >Descripción: {producto.descripcion}</h6>
//                   {/* <h5 className="card-text">Precio: ${producto.precio}</h5> */}
//                   <h5 >Precio: ${producto.precio}</h5>
//                   {/* <p className="card-text">Existencia: {producto.cantidad}</p> */}
//                   <p >Existencia: {producto.cantidad}</p>
//                   {/* boton sumar al carrito */}
//                   <button
//                     className={styles.buttonGreen}
//                     onClick={() => agregarAlCarrito(producto)}
//                   >
//                     Sumar al Carrito
//                   </button>
//                   {/* boton detalles del producto */}
//                   <button className={styles.buttonDetalle}>
//                     <Link to={`/products/${producto.id}`}>
//                       Detalles del Producto
//                     </Link>
//                   </button>
//                 </div>
//               </li>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Productos;

// ***************** primer version
/* <div>
      <h2>Productos</h2>
      <ul>
        {productos.map((producto) => (          
          <div>
            <li key={producto.id}>
              <img src={producto.imagen} height={200} width={200} />
              <table>
                <tr>
                  <td>
                    <button
                      className={styles.buttonGreen}
                      onClick={() => agregarAlCarrito(producto)}                      
                    >
                      Sumar al Carrito
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonDetalle}>
                      <Link to={`/products/${producto.id}`}>
                        Detalles del Producto
                      </Link>
                    </button>
                  </td>
                </tr>
              </table>
              <h4>{producto.Nombre}</h4>
              <h4>{producto.descripcion}</h4>
              <h4>{producto.precio}$</h4>
              <h4>{producto.cantidad}$</h4>
            </li>
          </div>
        ))}
      </ul>
    </div> 
  );
};*/

// export default Productos;
