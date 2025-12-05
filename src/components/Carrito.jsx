import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import TrashIcon from "../assets/TrashIcon";

const Carrito = () => {
  const { carrito, eliminarDelCarrito, actualizarCantidad } =
    useContext(CarritoContext);

  const subtotal = carrito.reduce((acc, producto) => {
    const cantidad = producto.cantidad || 1;
    return acc + producto.precio * cantidad;
  }, 0);

  const envio = 0;

  const total = subtotal + envio;

  const manejarCantidad = (indice, operacion) => {
    const producto = carrito[indice];
    const cantidadActual = producto.cantidad;

    const cambios = {
      incrementar: 1,
      decrementar: -1,
    };

    const nuevaCantidad = cantidadActual + cambios[operacion];

    if (nuevaCantidad < 1) {
      eliminarDelCarrito(indice);
    } else {
      actualizarCantidad(indice, nuevaCantidad);
    }
  };

  if (carrito.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <svg
            className="mx-auto h-24 w-24 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Tu carrito está vacío
          </h2>
          <p className="text-gray-600 mb-6">
            ¡Agregá productos para comenzar tu compra!
          </p>
          <a
            href="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-[#333] transition-colors duration-200"
          >
            Ir a comprar
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <h3 className="text-3xl text-center font-bold text-gray-900 mb-8">
          Carrito de Compras
        </h3>
        <div className="">
          <div className="">
            {carrito.map((producto, indice) => {
              const cantidad = producto.cantidad || 1;
              const precioTotal = producto.precio * cantidad;

              return (
                <div key={indice} className="">
                  <div className="border border-1">
                    {/* Imagen del Producto */}
                    <div className="card col-12 col-md-4 col-lg-3 mt-2">
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        // className="w-full sm:w-32 sm:h-32 object-cover rounded-md"
                        className=""
                      />
                    </div>

                    {/* Informacion del Producto */}
                    <div className="card-body">
                      <div>
                        <h3 className="card-title">{producto.nombre}</h3>
                        <h5 className="card-text mt-2">
                          {producto.descripcion}
                        </h5>
                      </div>

                      <div className="mt-2">
                        <div className="">
                          <h5 className="">Cantidad:</h5>
                          <div className="">
                            {/* boton negativo o resta */}
                            <button
                              onClick={() =>
                                manejarCantidad(indice, "decrementar")
                              }
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors duration-150 font-semibold"
                            >
                              −
                            </button>
                            {/* ************************ */}

                            <span className="px-4 py-1 font-medium text-gray-900 min-w-[40px] text-center">
                              {cantidad}
                            </span>

                            {/* boton sumar otro producto */}
                            <button
                              onClick={() =>
                                manejarCantidad(indice, "incrementar")
                              }
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors duration-150 font-semibold"
                            >
                              +
                            </button>
                            {/* ************************ */}
                          </div>
                        </div>

                        {/* Precio */}
                        <div className="text-center mt-2">
                          <div className="text-right">
                            <h5 className="">
                              ${precioTotal.toLocaleString("es-AR")}
                            </h5>
                            {cantidad > 1 && (
                              <h4 className="text-xs text-gray-500">
                                ${producto.precio.toLocaleString("es-AR")} c/u
                              </h4>
                            )}
                          </div>

                          <div>
                            {/* Boton de Eliminar */}
                            <button
                              onClick={() => eliminarDelCarrito(indice)}
                              className="btn btn-danger col-12 col-md-6 col-lg-2 btn-sm mt-2"
                              aria-label="Eliminar producto"
                            >
                              <TrashIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Resumen del Pedido
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    ${subtotal.toLocaleString("es-AR")}
                  </span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Envío</span>
                  <span className="font-medium">
                    {envio === 0 ? (
                      <span className="text-green-600">¡Gratis!</span>
                    ) : (
                      `$${envio.toLocaleString("es-AR")}`
                    )}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${total.toLocaleString("es-AR")}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-success text-white py-3 px-4 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200 mb-4 mt-2">
                Ya casi es tuya!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;

// import { useContext } from "react";
// import styles from "../components/Carrito.module.css";
// import { CarritoContext } from "../context/CarritoContext";
// import CartDash from "../assets/CartDash";
// import BagIcon from "../assets/BagIcon";
// import CartCheckFill from "../assets/CartCheckFill";
// import { Link } from "react-router-dom";

// const Carrito = () => {
//   const { carrito, eliminarDelCarrito, vaciarCarrito, MsnCompletoLaCompra } =
//     useContext(CarritoContext);
//   const contadorEnCarrito = carrito.length;

//   return (
//     <div className="container">
//       <div className="row">
//         <h4 className="text-center">Carrito de Compras</h4>

//         <div className="text-end">
//           <div className="text-end">
//             <button
//               type="button"
//               // className="btn btn-primary position-relative"
//               className={styles.buttonRed}
//               onClick={() => vaciarCarrito()}
//               title="Vaciar Carrito"
//             >
//               <BagIcon />
//                Vaciar el Carrito .
//             </button>
//           </div>

//           <div className="text-end my-2">
//             {contadorEnCarrito > 0 && (
//               <button
//                 type="button"
//                 // className="btn btn-Success position-relative"
//                 className={styles.buttonGreen}
//                 onClick={() => MsnCompletoLaCompra(vaciarCarrito())}
//                 title="Continuar la Compra"
//               >
//                 <Link to={"/"}>
//                   <CartCheckFill />
//                 </Link>
//                 Procesar el pago
//               </button>
//             )}
//           </div>
//         </div>

//         {carrito.map((producto, indice) => (
//           <div key={indice} className="card col-12 col-md4 col-lg-3">
//             <img
//               className="card-img-top img-fluid"
//               src={producto.imagen}
//               alt={producto.nombre}
//             />

//             <div className="card-body">
//               <p className="card-title">
//                 {producto.nombre} : ${producto.precio}
//               </p>
//             </div>

//             <button
//               className={styles.buttonRed}
//               onClick={() => eliminarDelCarrito(indice)}
//               title="Eliminar del carrito."
//             >
//               <CartDash /> Eliminar del Carrito
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carrito;
