import { useContext } from "react";
import styles from "../components/Carrito.module.css";
import { CarritoContext } from "../context/CarritoContext";

//const Carrito = ({ productosEnCarrito, productosEliminados }) => {
const Carrito = () => {
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  return (
    <div className="container text-center">
      <div className="row card-body">
        <h4>Carrito de Compras</h4>
        {carrito.map((producto, indice) => (
          <div key={indice}>
            <div className="col col-md-4 mb-4 card-title">
              <img
                className={styles.imagen}
                src={producto.imagen}
                alt={producto.nombre}
                height={80}
                width={80}
              />
              <p className="card-text col-md-auto">
                {producto.nombre} : ${producto.precio}
              </p>
              <button onClick={() => eliminarDelCarrito(indice)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrito;
//   const { productosEnCarrito, productosEliminados } = useContext(CarritoContext);

//   return (
//     <ul>
//       <div>
//         <li>
//           <h2>Carrito</h2>
//           {productosEnCarrito.map((producto, indice) => (
//             <div key={indice}>
//               <img
//                 src={producto.image}
//                 alt={producto.title}
//                 height={80}
//                 width={80}
//               />
//               <p>{producto.title} : {producto.price}</p>
//               <button
//                 className={styles.buttonRed}
//                 onClick={() => productosEliminados(indice)}
//               >
//                 Eliminar
//               </button>
//             </div>
//           ))}
//         </li>
//       </div>
//     </ul>
//   );
// };

// export default Carrito;
