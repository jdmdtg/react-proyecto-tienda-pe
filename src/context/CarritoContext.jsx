import { createContext, useState } from "react";

// Crear el contexto
export const CarritoContext = createContext();
// Proveedor del contexto
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  // ****************************************************************
  const agregarAlCarrito = (producto) => {
    const productoEnCarrito = carrito.findIndex(
      (item) => item.id === producto.id
    );

    if (productoEnCarrito !== -1) {
      const nuevoCarrito = [...carrito];
      const cantidadEnCarrito = nuevoCarrito[productoEnCarrito].cantidad || 1;
      nuevoCarrito[productoEnCarrito] = {
        ...nuevoCarrito[productoEnCarrito],
        cantidad: cantidadEnCarrito + 1,
      };
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };
  // ****************************************************************
  const actualizarCantidad = (indice, nuevaCantidad) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito[indice] = { ...nuevoCarrito[indice], cantidad: nuevaCantidad };
    setCarrito(nuevoCarrito);
  };
  // ****************************************************************

  // Usamos filter() para crear un nuevo array que excluye el elemento
  // con el índice dado.
  const eliminarDelCarrito = (indiceAEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
  };
  // ****************************************************************
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  // ****************************************************************
  const MsnCompletoLaCompra = () => {
    alert("Usted Completo la Compra con Éxito");
  };
  // ****************************************************************
  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        actualizarCantidad,
        eliminarDelCarrito,
        vaciarCarrito,
        MsnCompletoLaCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

// import { createContext, useState } from "react";

// // Crear el contexto
// export const CarritoContext = createContext();
// // Proveedor del contexto
// export const CarritoProvider = ({ children }) => {
//   const [carrito, setCarrito] = useState([]);

//   const agregarAlCarrito = (producto) => {
//     setCarrito([...carrito, producto]);
//   };
//   // Usamos filter() para crear un nuevo array que excluye el elemento
//   // con el índice dado.
//   const eliminarDelCarrito = (indiceAEliminar) => {
//     setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
//   };

//   const vaciarCarrito = () => {
//     setCarrito([]);
//   };

//   const MsnCompletoLaCompra = () => {
//     alert("Usted Completo la Compra con Éxito");
//   };

//   return (
//     <CarritoContext.Provider
//       value={{
//         carrito,
//         agregarAlCarrito,
//         eliminarDelCarrito,
//         vaciarCarrito,
//         MsnCompletoLaCompra,
//       }}
//     >
//       {children}
//     </CarritoContext.Provider>
//   );
// };
